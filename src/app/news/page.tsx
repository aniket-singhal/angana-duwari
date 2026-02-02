import React from 'react';
import { newsData } from '@/lib/placeholder-data';
import Link from 'next/link';

export default function NewsPage() {
  const englishNews = newsData.filter(item => item.language === 'en');
  const hindiNews = newsData.filter(item => item.language === 'hi');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
          Daily News & Updates
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Official updates on Governance, Policy, and Development in Chhattisgarh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <article 
            key={news.id} 
            className="bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg overflow-hidden flex flex-col"
          >
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50">
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                {news.category}
              </span>
              <span className="text-xs text-stone-500">
                {news.date}
              </span>
            </div>

            {/* UPDATED LINE: Changed 'flex-grow' to 'grow' */}
            <div className="p-6 grow">
              <h2 className={`text-xl font-bold mb-3 text-stone-900 ${news.language === 'hi' ? 'font-serif' : 'font-sans'}`}>
                {news.title}
              </h2>
              <p className="text-stone-600 text-sm line-clamp-3 leading-relaxed">
                {news.content}
              </p>
            </div>

            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex justify-between items-center">
              <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                news.language === 'hi' 
                  ? 'bg-orange-100 text-orange-800' 
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                {news.language === 'hi' ? 'Hindi' : 'English'}
              </span>
              
              <button className="text-sm font-bold text-emerald-900 hover:text-emerald-700 hover:underline decoration-2 underline-offset-4">
                Read Full Story →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}