import React from 'react';
import Link from 'next/link';
import { Search, BookOpen, Landmark, Map, ScrollText, ArrowRight } from 'lucide-react';
import { newsData } from '@/lib/placeholder-data'; // Use our fake data

export default function HomePage() {
  // Get the latest 3 news items for the homepage preview
  const latestNews = newsData.slice(0, 3);

  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION (The First Impression) */}
      <section className="bg-emerald-900 text-stone-50 py-20 px-4 border-b-8 border-amber-700 relative overflow-hidden">
        {/* Background Pattern (Subtle) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* MAIN TITLE - Hindi & English */}
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="text-5xl md:text-7xl font-bold font-serif text-amber-50 drop-shadow-md">
              अंगना दुआरी
            </span>
            <span className="text-3xl md:text-5xl font-serif text-emerald-100/90 mt-2">
              Angana Duwari
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            The authoritative digital encyclopedia for the history, culture, and governance of Chhattisgarh.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search topics (e.g., Kalchuri Dynasty, Bastar, Minerals)..." 
              className="w-full py-4 pl-14 pr-4 rounded-full text-stone-900 shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-500/50 text-lg"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-stone-400 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* 2. QUICK ACCESS GRID (Navigation) */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          
          {/* Card 1: History */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 hover:transform hover:-translate-y-1 transition-all cursor-pointer group">
            <ScrollText className="w-10 h-10 text-emerald-800 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif font-bold text-xl text-stone-900">History</h3>
            <p className="text-sm text-stone-500 mt-2">Ancient to Modern</p>
          </div>

          {/* Card 2: Polity */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 hover:transform hover:-translate-y-1 transition-all cursor-pointer group">
            <Landmark className="w-10 h-10 text-emerald-800 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif font-bold text-xl text-stone-900">Polity</h3>
            <p className="text-sm text-stone-500 mt-2">Governance & Schemes</p>
          </div>

          {/* Card 3: Geography */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 hover:transform hover:-translate-y-1 transition-all cursor-pointer group">
            <Map className="w-10 h-10 text-emerald-800 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif font-bold text-xl text-stone-900">Geography</h3>
            <p className="text-sm text-stone-500 mt-2">Districts & Resources</p>
          </div>

          {/* Card 4: Culture */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-amber-600 hover:transform hover:-translate-y-1 transition-all cursor-pointer group">
            <BookOpen className="w-10 h-10 text-emerald-800 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif font-bold text-xl text-stone-900">Culture</h3>
            <p className="text-sm text-stone-500 mt-2">Art, Music & Tribes</p>
          </div>

        </div>
      </section>

      {/* 3. LATEST UPDATES (Dynamic Feed) */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-emerald-900">Latest Updates</h2>
              <p className="text-stone-600 mt-2">Official notifications and development news</p>
            </div>
            <Link href="/news" className="hidden md:flex items-center text-amber-700 font-bold hover:text-amber-900">
              View All News <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Loop through our mock data */}
            {latestNews.map((item) => (
              <div key={item.id} className="bg-white p-6 border border-stone-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded mb-3 inline-block">
                  {item.category}
                </span>
                <h3 className={`text-lg font-bold mb-2 text-stone-900 line-clamp-2 ${item.language === 'hi' ? 'font-serif' : 'font-sans'}`}>
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-3">
                  {item.content}
                </p>
                <span className="text-xs text-stone-400">{item.date}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/news" className="inline-flex items-center text-amber-700 font-bold hover:text-amber-900">
              View All News <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}