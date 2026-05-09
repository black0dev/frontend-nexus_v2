import React from 'react';
import { motion } from 'motion/react';
import { Heart, Play, MoreHorizontal, Download, Share2 } from 'lucide-react';
import { Song } from '../../types';

interface FavoritesViewProps {
  likedSongs: Song[];
  onPlaySong: (song: Song) => void;
}

export const FavoritesView = ({ likedSongs, onPlaySong }: FavoritesViewProps) => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="p-6 md:p-10 pt-16 md:pt-20 bg-gradient-to-b from-indigo-900/40 to-transparent flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
        <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center flex-shrink-0">
          <Heart size={64} md-size={80} fill="white" className="text-white" />
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Lista de reproducción</span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase italic">Favoritos</h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-xs font-medium">
             <div className="w-5 h-5 rounded-full bg-white/10" />
             <span>Tu Biblioteca</span>
             <span className="w-1 h-1 rounded-full bg-white/20" />
             <span className="text-white/60">{likedSongs.length} canciones</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10 flex flex-col gap-8 pb-40">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => likedSongs[0] && onPlaySong(likedSongs[0])}
            className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-transform"
          >
            <Play size={28} fill="currentColor" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors"><Download size={24} /></button>
          <button className="text-white/40 hover:text-white transition-colors"><Share2 size={24} /></button>
          <button className="text-white/40 hover:text-white transition-colors"><MoreHorizontal size={24} /></button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4 px-4 py-2 border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <span className="w-8 text-center">#</span>
            <span className="flex-1">Título</span>
            <span className="w-40">Álbum</span>
            <span className="w-20 text-right">Duración</span>
          </div>

          {likedSongs.map((song, index) => (
            <div 
              key={song.id}
              onClick={() => onPlaySong(song)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
            >
              <span className="w-8 text-center text-sm text-gray-500 group-hover:text-indigo-400">{index + 1}</span>
              <div className="flex-1 flex items-center gap-4 min-w-0">
                 <img src={song.coverUrl} className="w-10 h-10 rounded-md object-cover" />
                 <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm text-white truncate">{song.title}</span>
                    <span className="text-xs text-gray-500 truncate group-hover:text-gray-300 transition-colors">{song.artist}</span>
                 </div>
              </div>
              <span className="w-40 text-xs text-gray-500 truncate">{song.album}</span>
              <span className="w-20 text-right text-xs text-gray-500 font-mono tabular-nums">
                {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {likedSongs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-20">
             <Heart size={64} />
             <p className="text-xl font-medium">Aún no has guardado ninguna canción.</p>
          </div>
        )}
      </div>
    </div>
  );
};
