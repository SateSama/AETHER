import React, { useState } from 'react';
import Header from './components/Header';
import TeamBoard from './components/TeamBoard';
import { Sword } from 'lucide-react';

const MOCK_BLUE = [
  { role: 'TOP', champion: 'Aatrox', summonerName: 'DarkinBlade#EUW', rank: 'Diamant IV', winrate: 56, games: 84, tags: [{ text: 'Gros Dégâts', type: 'spectral', icon: 'flame' }] },
  { role: 'JGL', champion: 'Viego', summonerName: 'RuinedKing#666', rank: 'Émeraude I', winrate: 61, games: 110, tags: [{ text: 'Invade Lvl 3', type: 'gold', icon: 'alert' }] },
  { role: 'MID', champion: 'Ahri', summonerName: 'Toi (Vous)', rank: 'Émeraude II', winrate: 58, games: 42, tags: [{ text: 'Avantage Matchup', type: 'spectral', icon: 'flame' }] },
  { role: 'ADC', champion: 'Jinx', summonerName: 'ZapRocket#ADC', rank: 'Émeraude III', winrate: 49, games: 35, tags: [{ text: 'Late Game Carry', type: 'gold' }] },
  { role: 'SUP', champion: 'Thresh', summonerName: 'HookGod#EUW', rank: 'Émeraude II', winrate: 53, games: 76, tags: [{ text: 'Vision Pro', type: 'spectral' }] }
];

const MOCK_RED = [
  { role: 'TOP', champion: 'Camille', summonerName: 'HextechLegs#001', rank: 'Diamant III', winrate: 52, games: 63, tags: [{ text: 'Splitpusher', type: 'gold' }] },
  { role: 'JGL', champion: 'Kayn', summonerName: 'Reaper#EUW', rank: 'Émeraude I', winrate: 59, games: 90, isDanger: true, tags: [{ text: 'Smurf Détecté', type: 'danger', icon: 'skull' }] },
  { role: 'MID', champion: 'Zed', summonerName: 'ShadowMaster#999', rank: 'Émeraude I', winrate: 44, games: 18, tags: [{ text: 'En Tilt (-3)', type: 'danger', icon: 'alert' }, { text: 'Aveugle', type: 'danger', icon: 'eyeoff' }] },
  { role: 'ADC', champion: 'Kaisa', summonerName: 'VoidDaughter#EUW', rank: 'Diamant IV', winrate: 51, games: 50, tags: [] },
  { role: 'SUP', champion: 'Nautilus', summonerName: 'DeepAnchor#BOT', rank: 'Émeraude II', winrate: 47, games: 29, tags: [{ text: 'Meurt Souvent Lvl 2', type: 'danger', icon: 'skull' }] }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('duel');

  return (
    <div className="min-h-screen bg-aether-void text-zinc-200 p-6 relative selection:bg-aether-crimson selection:text-white">
      <div className="fixed top-0 left-1/3 w-[500px] h-[500px] bg-emerald-950/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-aether-crimson/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Header />

        <div className="flex items-center justify-center gap-4 my-8">
          <button 
            onClick={() => setActiveTab('duel')}
            className={`px-6 py-2 text-xs font-gothic tracking-[0.2em] uppercase transition-all duration-300 border ${
              activeTab === 'duel'
                ? "bg-zinc-950 border-aether-gold text-aether-gold shadow-[0_0_15px_rgba(197,168,105,0.2)]"
                : "border-zinc-800 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Confrontation Directe (1v1)
          </button>
          <button 
            onClick={() => setActiveTab('teams')}
            className={`px-6 py-2 text-xs font-gothic tracking-[0.2em] uppercase transition-all duration-300 border ${
              activeTab === 'teams'
                ? "bg-zinc-950 border-aether-gold text-aether-gold shadow-[0_0_15px_rgba(197,168,105,0.2)]"
                : "border-zinc-800 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Le Cercle Complet (5 contre 5)
          </button>
        </div>

        {activeTab === 'duel' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-aether-obsidian border border-zinc-800 relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-aether-spectral" />
                <h3 className="font-gothic text-lg text-zinc-100 mb-1">Toi • Ahri</h3>
                <p className="text-xs text-zinc-400 font-mono mb-4">Émeraude II • 58% Winrate</p>
                <div className="bg-zinc-900/40 p-3 border border-zinc-800/60 text-xs text-aether-spectral font-mono">
                  ✦ Matchup Favorable post-niveau 6
                </div>
              </div>

              <div className="p-6 bg-aether-obsidian border border-zinc-800 relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-aether-crimson" />
                <h3 className="font-gothic text-lg text-zinc-100 mb-1">Adversaire • Zed</h3>
                <p className="text-xs text-zinc-400 font-mono mb-4">Émeraude I • 44% Winrate</p>
                <div className="bg-zinc-900/40 p-3 border border-zinc-800/60 text-xs text-aether-crimson font-mono">
                  ⚠ Vulnérable : Zéro ward avant 3:30 (Gankable)
                </div>
              </div>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-900 flex items-center gap-3">
              <Sword className="w-5 h-5 text-aether-gold shrink-0" />
              <p className="text-xs font-gothic tracking-wide text-zinc-300">
                <strong className="text-aether-gold">L'ORACLE D'AETHER :</strong> Le Kayn ennemi gank mid à 3:15 d'habitude. Place ta balise dans le buisson inférieur à 2:40.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <TeamBoard blueTeam={MOCK_BLUE} redTeam={MOCK_RED} />
        )}
      </div>
    </div>
  );
}
