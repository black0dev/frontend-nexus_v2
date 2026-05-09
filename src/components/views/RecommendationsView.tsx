import React from 'react';
import { Sparkles, RefreshCw, Play, Heart, Plus, Music } from 'lucide-react';
import { Song, Artist } from '../../types';

interface RecommendationsViewProps {
  onPlaySong: (song: Song) => void;
  onArtistClick?: (artist: Artist) => void;
  songs: Song[];
  artists: Artist[];
}

export const RecommendationsView = ({ onPlaySong, onArtistClick, songs, artists }: RecommendationsViewProps) => {
  return (
    <div className="p-8 flex flex-col gap-10 max-w-7xl mx-auto pb-40">
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-12 rounded-[40px] border border-white/10 relative overflow-hidden mt-10">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-indigo-400" size={18} />
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400">NexuxCloud AI</span>
          </div>
          <h1 className="text-5xl font-display font-black text-white italic tracking-tighter">MIX SEMANAL PARA TI</h1>
          <p className="text-gray-400 max-w-lg">Una selección única basada en lo que has estado escuchando últimamente. Actualizado hace un momento.</p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => onPlaySong(songs[0])} className="px-10 py-4 bg-indigo-500 text-white rounded-full font-black text-sm hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20">REPRODUCIR MIX</button>
            <button className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white/10 transition-all"><RefreshCw size={24} /></button>
          </div>
        </div>
        <Sparkles className="absolute right-[-5%] top-[-10%] text-white/5" size={400} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-xl font-bold text-white mb-6">Porque te gusta el Reggaeton</h2>
          <div className="flex flex-col gap-2">
            {songs.slice(0, 4).map((song) => (
              <div 
                key={song.id} 
                onClick={() => onPlaySong(song)}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[#111] border border-white/5 hover:border-indigo-500/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={song.coverUrl} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">{song.title}</h4>
                  <p className="text-xs text-gray-500">{song.artist}</p>
                </div>
                <Plus size={18} className="text-gray-600 hover:text-white" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-6">Artistas que podrían gustarte</h2>
          <div className="grid grid-cols-2 gap-4">
            {artists.slice(0, 4).map((artist) => (
              <div 
                key={artist.id} 
                onClick={() => onArtistClick?.(artist)}
                className="flex flex-col items-center gap-4 p-6 bg-white/2 border border-white/5 rounded-3xl hover:bg-white/5 transition-all group cursor-pointer text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-indigo-500 transition-all p-1">
                  <img src={artist.imageUrl} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                   <h3 className="font-bold text-white text-sm">{artist.name}</h3>
                   <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-1 block">98% Match</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-bold text-white mb-6">Géneros recomendados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Cyberpunk Music', 'Summer House', 'Lo-Fi Chill', 'Hardcore Techno'].map(genre => (
             <div key={genre} className="h-32 bg-[#111] border border-white/5 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <Music className="absolute left-4 opacity-5 group-hover:opacity-10 transition-opacity" size={80} />
                <span className="relative z-10 font-black italic text-lg text-white uppercase tracking-tighter">{genre}</span>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};
