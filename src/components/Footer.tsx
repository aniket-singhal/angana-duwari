export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 py-12 mt-auto border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-serif text-emerald-50 mb-4">अंगना दुआरी</h2>
        <p className="text-sm max-w-md mx-auto mb-8 leading-relaxed">
          An initiative to document the heritage, governance, and development of Chhattisgarh.
        </p>
        
        <div className="flex justify-center gap-6 text-sm font-medium uppercase tracking-wider mb-8 text-emerald-400">
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Editorial Policy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <div className="text-xs pt-8 border-t border-emerald-900">
          © {new Date().getFullYear()} Angana Duwari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}