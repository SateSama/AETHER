import React from 'react';
import { Skull, AlertTriangle, ShieldCheck, Flame, EyeOff } from 'lucide-react';

export default function TeamBoard({ blueTeam, redTeam }) {
  const renderPlayerRow = (p, isEnemy) => {
    return (
      <div 
        key={p.role} 
        className={`flex items-center justify-between p-3.5 border transition-all duration-300 ${
          isEnemy 
            ? "bg-aether-obsidian/70 border-zinc-900 hover:border-aether-crimson/50" 
            : "bg-aether-obsidian/70 border-zinc-900 hover:border-aether-spectral/50"
        }`}
      >
        <div className="flex items-center gap-3 w-1/3">
          <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase w-7">{p.role}</span>
          <div className="relative">
            <img 
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${p.champion}_0.jpg`} 
              alt={p.champion} 
              className="w-10 h-10 object-cover border border-zinc-800"
            />
            {p.isDanger && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-aether-crimson animate-ping" />
            )}
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-200">{p.champion}</p>
            <p className="text-[10px] text-zinc-500 font-mono truncate max-w-[100px]">{p.summonerName}</p>
          </div>
        </div>

        <div className="text-center w-1/4">
          <p className="text-xs font-mono font-medium text-zinc-300">{p.rank}</p>
          <div className="flex items-center justify-center gap-2 mt-0.5">
            <span className={`text-[11px] font-mono font-bold ${
              p.winrate >= 55 ? "text-aether-spectral" : p.winrate <= 45 ? "text-aether-crimson" : "text-zinc-400"
            }`}>
              {p.winrate}%
            </span>
            <span className="text-[10px] text-zinc-600">({p.games} games)</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-1.5 w-1/3 flex-wrap">
          {p.tags.map((tag, i) => (
            <span 
              key={i} 
              className={`text-[9px] font-mono uppercase px-2 py-0.5 border flex items-center gap-1 ${
                tag.type === 'danger' 
                  ? "bg-aether-crimson/10 border-aether-crimson/30 text-aether-crimson"
                  : tag.type === 'spectral'
                  ? "bg-aether-spectral/10 border-aether-spectral/30 text-aether-spectral"
                  : "bg-aether-gold/10 border-aether-gold/30 text-aether-gold"
              }`}
            >
              {tag.icon === 'skull' && <Skull className="w-2.5 h-2.5" />}
              {tag.icon === 'flame' && <Flame className="w-2.5 h-2.5" />}
              {tag.icon === 'alert' && <AlertTriangle className="w-2.5 h-2.5" />}
              {tag.icon === 'eyeoff' && <EyeOff className="w-2.5 h-2.5" />}
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-aether-spectral/20 mb-3">
          <h3 className="font-gothic text-sm tracking-widest text-aether-spectral flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> ALLIANCE (ORDRE)
          </h3>
          <span className="text-[10px] font-mono text-zinc-500">WINRATE MOYEN: 54%</span>
        </div>
        <div className="space-y-2">
          {blueTeam.map(p => renderPlayerRow(p, false))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pb-3 border-b border-aether-crimson/20 mb-3">
          <h3 className="font-gothic text-sm tracking-widest text-aether-crimson flex items-center gap-2">
            <Skull className="w-4 h-4" /> HOSTILES (CHAOS)
          </h3>
          <span className="text-[10px] font-mono text-zinc-500">MENACE GLOBALE: ÉLEVÉE</span>
        </div>
        <div className="space-y-2">
          {redTeam.map(p => renderPlayerRow(p, true))}
        </div>
      </div>
    </div>
  );
}
