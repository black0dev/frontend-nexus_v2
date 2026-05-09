import React, { useState } from 'react';
import { Radio, Disc, Play, SkipForward, SkipBack, Plus } from 'lucide-react';
import { Song } from '../../types';

interface DJModeViewProps {
  songs: Song[];
  currentSong: Song | null;
  onPlaySong: (song: Song) => void;
}

export const DJModeView = ({ songs, currentSong, onPlaySong }: DJModeViewProps) => {
  const [bpm, setBpm] = useState(128);
  const [crossfade, setCrossfade] = useState(50);
  const [isSync, setIsSync] = useState(false);

  return (
    <div className="min-h-full bg-black flex flex-col pb-32">
      {/* Header Area */}
      <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-b from-indigo-950/10 to-transparent">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Radio className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-display font-black text-white italic tracking-widest uppercase leading-none">Nexus DJ Pro</h1>
            <div className="flex items-center gap-2 mt-1">
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest opacity-60">Engine v3.2</span>
               <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Signal: Stable</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-[#111] p-1.5 rounded-xl border border-white/5">
          <div className="px-4 text-right">
             <span className="block text-[9px] font-black text-gray-600 uppercase tracking-widest">Master Tempo</span>
             <span className="text-sm font-mono font-bold text-white leading-none">{bpm} BPM</span>
          </div>
          <button className="px-6 py-2.5 bg-indigo-500 text-white rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">
            Go Live
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {/* Deck A */}
        <div className="md:col-span-4 flex flex-col gap-6">
           <div className="bg-[#0c0c0c] rounded-[40px] p-8 md:p-10 border border-white/5 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden group min-h-[400px]">
              <div className="w-full flex justify-between items-center mb-6">
                 <span className="text-[9px] font-mono font-black text-indigo-500 uppercase tracking-widest">Deck A</span>
                 <Disc size={14} className="text-white/20" />
              </div>

              <div className="relative mb-6">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-[8px] border-black shadow-2xl relative flex items-center justify-center p-1.5 bg-[#050505]">
                   <div className="w-full h-full rounded-full overflow-hidden relative animate-[spin_10s_linear_infinite]">
                      <img 
                        src={currentSong?.coverUrl || "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400&h=400"} 
                        className="w-full h-full object-cover grayscale brightness-40 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000" 
                      />
                      <div className="absolute inset-0 border-[30px] border-black/30 rounded-full" />
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-black border border-white/5 rounded-full flex items-center justify-center shadow-2xl">
                         <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      </div>
                   </div>
                </div>
              </div>

              <div className="w-full text-center mb-6">
                 <h3 className="text-lg font-display font-black text-white italic tracking-widest uppercase truncate px-4 leading-tight">
                    {currentSong?.title || "Waiting..."}
                 </h3>
                 <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 opacity-50">
                    {currentSong?.artist || "Load Track"}
                 </p>
              </div>

              <div className="w-full grid grid-cols-3 gap-2">
                 {['1/4', 'CUE', 'AUTO'].map(txt => (
                   <button key={txt} className="py-3 bg-white/3 rounded-xl text-[9px] font-black text-gray-400 hover:text-white hover:bg-white/5 transition-all uppercase tracking-widest border border-white/5">
                     {txt}
                   </button>
                 ))}
              </div>
           </div>
        </div>

        {/* Mixer Center */}
        <div className="md:col-span-4 flex flex-col gap-6">
           <div className="bg-[#0c0c0c] rounded-[40px] border border-white/5 p-8 flex flex-col gap-10 shadow-2xl">
              <div className="flex h-32 justify-around items-end gap-3 px-4">
                 {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="flex-1 bg-white/5 rounded-full relative overflow-hidden h-full border border-white/5">
                       <div 
                         className="absolute bottom-0 w-full bg-indigo-500 transition-all duration-300" 
                         style={{ height: `${Math.random() * 80 + 20}%` }} 
                       />
                    </div>
                 ))}
              </div>

              <div className="flex flex-col gap-10">
                 <div className="flex flex-col gap-4 px-2">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Crossfader</span>
                       <span className="text-[9px] font-mono text-indigo-400">{crossfade}%</span>
                    </div>
                    <div className="relative h-1 bg-black rounded-full flex items-center">
                       <input 
                         type="range" 
                         value={crossfade} 
                         onChange={(e) => setCrossfade(parseInt(e.target.value))} 
                         className="w-full h-full accent-indigo-500 opacity-0 absolute inset-0 z-10 cursor-pointer"
                       />
                       <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
                       <div 
                         className="absolute w-8 h-4 bg-white rounded-md shadow-2xl transition-all pointer-events-none"
                         style={{ left: `calc(${crossfade}% - 16px)` }}
                       />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setIsSync(!isSync)}
                      className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                        isSync ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-white/3 text-gray-600 border-white/5'
                      }`}
                    >
                      Sync {bpm}
                    </button>
                    <button className="py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                      Play Next
                    </button>
                 </div>
              </div>
           </div>
           
           <div className="flex gap-4 items-center justify-center p-6 bg-[#0c0c0c] rounded-3xl border border-white/5">
              <button className="p-3 text-gray-600 hover:text-white transition-colors"><SkipBack size={20} /></button>
              <button className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-xl">
                <Play fill="black" size={24} />
              </button>
              <button className="p-3 text-gray-600 hover:text-white transition-colors"><SkipForward size={20} /></button>
           </div>
        </div>

        {/* Deck B (Load placeholder) */}
        <div className="md:col-span-4 flex flex-col gap-6 opacity-40">
           <div className="flex-1 bg-[#0c0c0c] rounded-[40px] p-8 border border-white/5 flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 border-dashed flex items-center justify-center mb-6">
                 <Plus size={24} className="text-gray-700" />
              </div>
              <h2 className="text-sm font-display font-black text-gray-700 uppercase tracking-widest italic leading-none">Load Deck B</h2>
              <p className="text-[9px] font-bold text-gray-800 uppercase tracking-widest mt-2 px-6">Select a track to start mixing</p>
           </div>
        </div>
      </div>
    </div>
  );
};

