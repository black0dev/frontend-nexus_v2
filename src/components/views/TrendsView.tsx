import React from 'react';
import { Flame, Star, Play, Heart, Plus, MoreHorizontal } from 'lucide-react';
import { Song, Category } from '../../types';

interface TrendsViewProps {
  onPlaySong: (song: Song) => void;
  songs: Song[];
}

export const TrendsView = ({ onPlaySong, songs }: TrendsViewProps) => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="p-6 md:p-12 lg:p-16 pt-20 md:pt-28 bg-gradient-to-b from-orange-600/10 to-[#050505] flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full w-fit">
            <Flame className="text-orange-500" size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-500">Global Chart</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-black text-white tracking-widest uppercase italic leading-none">
            Tendencias de hoy
          </h1>
          <p className="text-gray-500 max-w-xl text-[11px] md:text-xs leading-relaxed">
            Los tracks que están dominando la escena. Curado por nuestro algoritmo de impacto social y rotación diaria.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-2">
           <button 
             onClick={() => onPlaySong(songs[0])} 
             className="px-6 md:px-8 py-3 bg-white text-black rounded-xl font-black text-[10px] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest shadow-xl shadow-white/5"
           >
             Reproducir Todo
           </button>
           <button className="px-6 md:px-8 py-3 bg-white/5 border border-white/5 rounded-xl font-black text-[10px] hover:bg-white/10 transition-all text-white uppercase tracking-widest">
             Seguir
           </button>
        </div>
      </div>

      <div className="px-4 md:px-12 lg:px-16 flex flex-col pb-40">
        <div className="flex items-center gap-4 py-4 border-b border-white/5 text-[10px] font-black text-gray-600 uppercase tracking-widest">
          <div className="w-10 text-center">#</div>
          <div className="flex-1">Título / Artista</div>
          <div className="hidden md:block w-32">Popuralidad</div>
          <div className="w-20 text-right">Acciones</div>
        </div>

        <div className="flex flex-col mt-2">
          {songs.map((song, index) => (
            <div 
              key={song.id}
              onClick={() => onPlaySong(song)}
              className="flex items-center gap-4 md:gap-6 py-3 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border-b border-white/3 last:border-0"
            >
               <div className="w-10 text-center flex-shrink-0">
                  <span className={`text-base font-black italic tracking-tighter ${index < 3 ? 'text-orange-500' : 'text-gray-700'}`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
               </div>
               
               <div className="flex flex-1 items-center gap-4 min-w-0">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-lg relative flex-shrink-0">
                    <img src={song.coverUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Play fill="white" size={16} />
                    </div>
                 </div>
                 <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white truncate">{song.title}</h3>
                    <p className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors uppercase font-bold tracking-widest">{song.artist}</p>
                 </div>
               </div>

               <div className="hidden md:flex w-32 items-center gap-2">
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500 rounded-full" 
                      style={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }} 
                    />
                  </div>
                  <span className="text-[9px] font-black text-gray-500">HOT</span>
               </div>

               <div className="flex items-center justify-end gap-4 w-20 flex-shrink-0">
                  <Heart size={16} className="text-gray-700 hover:text-orange-500 transition-colors hidden sm:block" />
                  <button className="text-gray-700 hover:text-white"><MoreHorizontal size={18} /></button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
