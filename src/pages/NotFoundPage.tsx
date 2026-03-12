import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#050505] grid-bg flex items-center justify-center px-5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ff6b35]/5 rounded-full blur-[100px] animate-glow-breathe pointer-events-none" />
      <div className="relative text-center max-w-lg">
        <div className="text-[160px] font-black leading-none bg-gradient-to-b from-[#ff6b35]/20 to-transparent bg-clip-text text-transparent mb-4 select-none">
          404
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-white/35 text-sm mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2 px-7 py-3.5 bg-[#ff6b35] hover:bg-[#ff8c5a] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] hover:scale-[1.03]"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.1] text-white rounded-full font-semibold hover:bg-white/[0.08] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
