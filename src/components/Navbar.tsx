import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-emerald-900 text-stone-50 shadow-md border-b-4 border-amber-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LEFT: Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            {/* We use a small version of your logo here */}
             <Image 
               src="/logo.png" 
               alt="Logo" 
               width={40} 
               height={40} 
               className="object-contain"
             />
          </div>
          <div className="leading-tight">
            <h1 className="font-bold font-serif text-lg tracking-wide text-white group-hover:text-emerald-200 transition-colors">
              अंगना दुआरी
            </h1>
            <p className="text-[10px] text-emerald-300 uppercase tracking-widest font-sans">
              हमर सुघ्घर छत्तीसगढ़
            </p>
          </div>
        </Link>

        {/* RIGHT: Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/history" className="hover:text-amber-400 transition-colors">History</Link>
          <Link href="/polity" className="hover:text-amber-400 transition-colors">Polity</Link>
          <Link href="/news" className="hover:text-amber-400 transition-colors">News</Link>
        </nav>

        {/* Mobile Menu Icon (Placeholder for now) */}
        <div className="md:hidden text-amber-50">
          <span className="text-xl">☰</span>
        </div>
        
      </div>
    </header>
  );
}