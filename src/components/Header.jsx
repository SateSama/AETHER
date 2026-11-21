import React, { useState } from 'react';
import { Zap, Check } from 'lucide-react';

export default function Header() {
  const [injected, setInjected] = useState(false);

  return (
    <header className="flex items-center justify-between pb-6 border-b border-zinc-900">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 border border-aether-gold/50 bg-black flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(197,168,105,0.2)]">
          <span className="font-gothic text-aether-gold font-bold text-xl -rotate-45">Æ</span>
        </div>
        <div>
          <h1 className="font-gothic tracking-[0.3em] text-lg text-zinc-100">AETHER</h1>
          <p className="text-[10px] tracking-widest text-zinc-500 uppercase flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-aether-spectral animate-pulse" />
            Oracle Actif • Draft Live
          </p>
        </div>
      </div>

      <button 
        onClick={() => setInjected(true)}
        className={`px-5 py-2 text-xs font-gothic tracking-widest uppercase transition-all duration-300 border flex items-center gap-2 ${
          injected 
            ? "bg-emerald-950/40 border-aether-spectral text-aether-spectral shadow-[0_0_15px_rgba(0,245,184,0.3)]" 
            : "bg-black border-aether-gold/40 text-aether-gold hover:border-aether-gold hover:bg-aether-gold/10"
        }`}
      >
        {injected ? <Check className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
        {injected ? "Runes Gravées" : "Sceller Runes & Sorts"}
      </button>
    </header>
  );
}
