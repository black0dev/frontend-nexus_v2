import React from 'react';
import { motion } from 'motion/react';
import { Play, Heart, Share2, MoreHorizontal, Users, Music2, Verified, Clock } from 'lucide-react';
import { Artist, Song } from '../../types';

interface ArtistViewProps {
  artist: Artist;
  songs: Song[];
  onPlaySong: (song: Song) => void;
}

export const ArtistView = ({ artist, songs, onPlaySong }: ArtistViewProps) => {
  const artistSongs = songs.filter(s => s.artist === artist.name);

  return (
    <div className="flex flex-col min-h-full pb-40">
      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={artist.imageUrl} 
            alt={artist.name} 
            className="w-full h-full object-cover scale-110 blur-[2px] brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="relative z-10 p-6 md:p-12 w-full flex flex-col gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
            <Verified className="text-blue-500" size={14} />
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Artista Verificado</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-none">
            {artist.name}
          </h1>

          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-400">12.4M Oyentes mensuales</span>
            </div>
            <div className="flex items-center gap-2">
              <Music2 size={16} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{artist.genre}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
             <button 
               onClick={() => artistSongs.length > 0 && onPlaySong(artistSongs[0])}
               className="px-10 py-4 bg-indigo-500 text-white rounded-2xl font-black text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/20 uppercase tracking-widest"
             >
               Reproducir
             </button>
             <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs hover:bg-white/10 transition-all uppercase tracking-widest">
               Seguir
             </button>
             <button className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all">
               <MoreHorizontal size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Popular Tracks */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-display font-black text-white italic uppercase tracking-widest mb-6">Populares</h2>
            <div className="flex flex-col gap-1">
              {artistSongs.length > 0 ? artistSongs.map((song, index) => (
                <div 
                  key={song.id}
                  onClick={() => onPlaySong(song)}
                  className="flex items-center gap-4 py-3 px-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <span className="w-6 text-center text-xs font-black text-gray-700 group-hover:text-indigo-500">{index + 1}</span>
                  <img src={song.coverUrl} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white truncate">{song.title}</h3>
                    <div className="flex items-center gap-2">
                       {song.explicit && <span className="text-[8px] bg-white/10 px-1 rounded text-gray-500 font-bold uppercase">E</span>}
                       <span className="text-[10px] text-gray-500">{Math.floor(Math.random() * 5 + 1)}M Reproducciones</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-4">
                    <Heart size={16} className="text-gray-700 hover:text-indigo-500" />
                    <span className="text-[10px] text-gray-700 font-mono">03:45</span>
                  </div>
                </div>
              )) : (
                <div className="p-12 bg-white/2 rounded-3xl border border-dashed border-white/5 text-center">
                  <span className="text-xs text-gray-600 font-bold uppercase tracking-widest">No hay tracks disponibles</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="bg-[#111] rounded-3xl p-8 border border-white/5">
            <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4">Sobre el Artista</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Originario del corazón palpitante de la escena electrónica global, {artist.name} ha redefinido los límites del {artist.genre} con su enfoque único en texturas atmosféricas y ritmos cinéticos. 
              Ganador de múltiples premios y reconocido por NexusCloud como una de las voces críticas de este año.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-[10px] font-bold text-gray-600 uppercase">Seguidores</span>
                <span className="text-xs font-mono font-bold text-white">4.2M</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-[10px] font-bold text-gray-600 uppercase">País</span>
                <span className="text-xs font-bold text-white uppercase">Reino Unido</span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-500/10 rounded-3xl p-8 border border-indigo-500/20">
             <div className="flex items-center gap-3 mb-4">
                <Clock className="text-indigo-500" size={18} />
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Tour Actual</span>
             </div>
             <p className="text-[11px] text-indigo-200/80 mb-6 font-bold leading-relaxed italic">
               "Echoes of the Future Tour" — Entradas disponibles para Madrid, Berlín y Tokyo.
             </p>
             <button className="w-full py-3 bg-indigo-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-500/20">
               Ver Entradas
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
