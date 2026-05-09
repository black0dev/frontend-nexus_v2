import React from 'react';
import { Download, Music, Share2, Search, Play, MoreVertical } from 'lucide-react';
import { Song } from '../../types';

interface DownloadsViewProps {
  downloadedSongs: Song[];
  onPlaySong: (song: Song) => void;
}

export const DownloadsView = ({ downloadedSongs, onPlaySong }: DownloadsViewProps) => {
  return (
    <div className="p-8 flex flex-col gap-10 max-w-7xl mx-auto h-full">
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white">
            <Download size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-white">Descargas</h1>
            <p className="text-sm text-gray-500">Escucha tus canciones sin conexión a internet.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-xs font-bold border border-white/5">
           <span className="text-indigo-400">●</span> {downloadedSongs.length} CANCIONES DISPONIBLES
        </div>
      </div>

      <div className="relative group max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={18} />
        <input 
           type="text" 
           placeholder="Buscar en tus descargas..." 
           className="w-full bg-[#111] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {downloadedSongs.length > 0 ? (
          downloadedSongs.map((song, i) => (
             <div 
               key={song.id}
               onClick={() => onPlaySong(song)}
               className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/5"
             >
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative">
                   <img src={song.coverUrl} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play fill="white" size={16} />
                   </div>
                </div>
                <div className="flex-1 min-w-0">
                   <h4 className="text-sm font-bold text-white truncate">{song.title}</h4>
                   <p className="text-xs text-gray-500">{song.artist}</p>
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-[10px] font-bold text-indigo-400 px-2 py-1 bg-indigo-500/10 rounded uppercase">Offline</span>
                   <button className="p-2 text-gray-500 hover:text-white transition-colors"><MoreVertical size={16} /></button>
                </div>
             </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 opacity-20 py-20 gap-4">
             <Music size={64} />
             <p className="text-lg font-medium">No hay canciones descargadas aún.</p>
             <p className="text-sm">Busca una canción y haz click en el icono de descarga para escucharla offline.</p>
          </div>
        )}
      </div>
    </div>
  );
};
