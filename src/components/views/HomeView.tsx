import React from 'react';
import { motion } from 'motion/react';
import { Play, Heart, Plus, Music2 } from 'lucide-react';
import { Song, Category, Artist } from '../../types';

interface HomeViewProps {
  songs: Song[];
  categories: Category[];
  artists: Artist[];
  onPlaySong: (song: Song) => void;
  onArtistClick?: (artist: Artist) => void;
  searchQuery: string;
  onSeeAllTrends: () => void;
}

export const HomeView = ({ songs, categories, artists, onPlaySong, onArtistClick, searchQuery, onSeeAllTrends }: HomeViewProps) => {
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 flex flex-col gap-12 max-w-7xl mx-auto pb-32">
      {!searchQuery && (
        <section className="relative h-64 md:h-80 rounded-[32px] overflow-hidden group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200&h=600" 
            alt="Hero" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10 gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Music2 className="text-indigo-400" size={14} />
              <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400">Nuevo Álbum Destacado</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase italic">Midnight Memories</h1>
            <p className="text-gray-400 max-w-lg line-clamp-2 text-xs md:text-sm hidden sm:block">Explora los sonidos más recientes de la escena electrónica global, curados especialmente para ti.</p>
            <div className="flex gap-3 mt-2">
              <button onClick={() => onPlaySong(songs[0])} className="px-6 md:px-8 py-2.5 md:py-3 bg-indigo-500 text-white rounded-full text-xs font-bold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 shadow-lg shadow-indigo-500/20 uppercase italic">
                <Play fill="currentColor" size={16} /> Escuchar Ahora
              </button>
              <button className="p-2.5 md:p-3 bg-white/5 backdrop-blur-md text-white rounded-full hover:bg-white/10 border border-white/5 transition-all">
                <Plus size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-white uppercase italic">
              {searchQuery ? `Resultados para "${searchQuery}"` : 'Tendencias'}
            </h2>
            <p className="text-xs text-gray-500">
              {searchQuery ? `Encontramos ${filteredSongs.length} coincidencias` : 'Lo más escuchado en NexusCloud hoy'}
            </p>
          </div>
          {!searchQuery && (
            <button onClick={onSeeAllTrends} className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Ver Todo</button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSongs.map((song) => (
            <motion.div 
              key={song.id}
              whileHover={{ y: -8 }}
              onClick={() => onPlaySong(song)}
              className="group flex flex-col gap-3 p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-bold text-sm text-white truncate">{song.title}</h3>
                <p className="text-xs text-gray-500 truncate">{song.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {!searchQuery && (
        <>
          <section className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-white">Géneros Populares</h2>
            <div className="flex flex-wrap gap-2">
              {['Reggaeton', 'Indie Pop', 'Trap Latino', 'Electronic', 'Synthwave', 'Rock Classics'].map((genre) => (
                <span 
                  key={genre}
                  className="px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-xs font-semibold text-indigo-400 hover:bg-indigo-600/20 transition-colors cursor-pointer"
                >
                  {genre}
                </span>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-white">Artistas Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {artists.map((artist) => (
                <div 
                  key={artist.id} 
                  onClick={() => onArtistClick?.(artist)}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                    <img src={artist.imageUrl} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-white truncate">{artist.name}</h4>
                    <p className="text-[10px] text-gray-500">{(Math.random() * 50 + 10).toFixed(1)}M Oyentes</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Canciones Populares</h2>
              <button className="text-xs font-semibold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Ver Todo</button>
            </div>
            <div className="flex flex-col gap-2">
              {songs.slice(0, 5).map((song, index) => (
                <div 
                  key={song.id} 
                  onClick={() => onPlaySong(song)}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-[#111] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <span className="w-6 text-center text-sm font-bold text-gray-600 group-hover:text-indigo-400">{index + 1}</span>
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{song.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                  </div>
                  <div className="flex items-center gap-6 pr-4">
                    <button className="text-gray-600 hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all">
                      <Heart size={16} />
                    </button>
                    <span className="text-xs text-gray-600 font-mono tabular-nums">
                      {Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
