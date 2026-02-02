import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; 
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { newsData } from '@/lib/placeholder-data';

// 1. Define the type for the Params
type Props = {
  params: Promise<{ slug: string }>;
};

// 2. Make the function ASYNC
export default async function ArticlePage({ params }: Props) {
  
  // 3. AWAIT the params
  const { slug } = await params;

  // 4. Find the article
  const post = newsData.find((p) => p.slug === slug);

  // 5. If not found, show 404
  if (!post) {
    notFound();
  }

  // Format content logic
  const formattedContent = post.content.split('\n').map((str, index) => (
    <p key={index} className="mb-6 leading-relaxed text-lg text-stone-800">
      {str}
    </p>
  ));

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      
      {/* HEADER BANNER */}
      <div className="bg-emerald-900 text-stone-50 py-16 px-4 border-b-8 border-amber-700">
        <div className="max-w-3xl mx-auto">
          
          <Link href="/news" className="inline-flex items-center text-emerald-200 hover:text-white mb-8 transition-colors font-sans font-bold text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
          </Link>

          {/* Category Tag */}
          <div className="mb-4">
             <span className="inline-block bg-amber-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded shadow-sm">
                {post.category}
             </span>
          </div>

          {/* TITLE - FIXED: Added 'text-white' and 'drop-shadow-md' */}
          <h1 
            className={`text-3xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-md ${
              post.language === 'hi' ? 'font-serif' : 'font-serif'
            }`}
            style={post.language === 'hi' ? { fontFamily: 'var(--font-hindi)' } : {}}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-emerald-200 text-sm font-medium font-sans">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author || 'Angana Team'}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT BODY */}
      <article className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-stone-200">
            
          {/* ARTICLE IMAGE */}
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-inner bg-stone-100">
              <Image 
                src={post.imageUrl} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          )}
          
          {/* ARTICLE TEXT */}
          <div 
            className={`prose prose-stone max-w-none ${
              post.language === 'hi' ? 'font-serif text-xl' : 'font-sans text-lg'
            }`}
            style={post.language === 'hi' ? { fontFamily: 'var(--font-hindi)' } : {}}
          >
            {formattedContent}
          </div>

          {/* FOOTER */}
          <div className="mt-12 pt-8 border-t border-stone-100">
            <div className="flex items-center gap-2 text-stone-500 text-sm italic">
              <Tag className="w-4 h-4" />
              <span>Filed under: {post.category}, Chhattisgarh</span>
            </div>
          </div>

        </div>
      </article>

    </div>
  );
}