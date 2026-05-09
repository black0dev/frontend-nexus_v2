import React from 'react';
import { Search, Music, Play, Heart, Users, Clock } from 'lucide-react';
import { Song, Category } from '../../types';

interface SearchViewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  results: Song[];
  categories: Category[];
  onPlaySong: (song: Song) => void;
}

export const SearchView = ({ searchQuery, onSearchChange, results, categories, onPlaySong }: SearchViewProps) => {
  return (
    <div className="p-8 flex flex-col gap-10 max-w-7xl mx-auto pb-40">
      <div className="relative group max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
        <input 
           type="text" 
           value={searchQuery}
           onChange={(e) => onSearchChange(e.target.value)}
           placeholder="¿Qué quieres escuchar hoy?" 
           className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-14 pr-4 text-lg focus:outline-none focus:border-indigo-500 transition-all placeholder:text-gray-600"
        />
      </div>

      {searchQuery ? (
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Resultados de búsqueda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((song) => (
                <div 
                  key={song.id} 
                  onClick={() => onPlaySong(song)}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-[#111] border border-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img src={song.coverUrl} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play fill="white" size={20} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{song.title}</h4>
                    <p className="text-xs text-gray-500">{song.artist}</p>
                  </div>
                  <button className="p-2 text-gray-500 hover:text-indigo-400 transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              ))}
            </div>
            {results.length === 0 && (
              <div className="py-20 text-center opacity-30">
                <p>No se encontraron resultados para "{searchQuery}"</p>
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Explorar todo</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div 
                  key={cat.id} 
                  className="h-40 rounded-2xl p-5 relative overflow-hidden group cursor-pointer"
                  style={{ backgroundColor: `${cat.color}33` }}
                >
                  <div className="relative z-10 font-display font-black text-2xl tracking-tighter text-white italic">{cat.name}</div>
                  <div className="absolute -right-4 -bottom-4 w-28 h-28 opacity-20 group-hover:scale-110 transition-transform rotate-[25deg]">
                    <img src={cat.image} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div 
                    className="absolute right-4 bottom-4 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
                    style={{ backgroundColor: cat.color }}
                  >
                    <Play fill="white" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6">Búsquedas recientes</h2>
            <div className="flex flex-wrap gap-3">
              {['Indie Latino', 'Nicky Jam', 'Focus Beats', 'Summer 2024'].map(tag => (
                <button key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
