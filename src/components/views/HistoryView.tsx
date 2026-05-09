import React from 'react';
import { Clock, Trash2, Calendar, Play, Heart, Music, Search } from 'lucide-react';
import { Song } from '../../types';

interface HistoryViewProps {
  onPlaySong: (song: Song) => void;
  songs: Song[];
}

export const HistoryView = ({ onPlaySong, songs }: HistoryViewProps) => {
  return (
    <div className="p-8 flex flex-col gap-10 max-w-7xl mx-auto pb-40 h-full">
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400">
            <Clock size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-bold text-white">Tu Historial</h1>
            <p className="text-sm text-gray-500">Todo lo que has escuchado recientemente.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition-all uppercase tracking-widest">
           <Trash2 size={16} /> Limpiar Historial
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {[
          { title: 'Hoy', songs: songs.slice(0, 3) },
          { title: 'Ayer', songs: songs.slice(2, 5) },
          { title: 'Lunes, 5 de Mayo', songs: songs.slice(1, 4) },
        ].map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-gray-500">
              <Calendar size={16} />
              <h2 className="text-sm font-bold uppercase tracking-widest">{section.title}</h2>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="flex flex-col gap-2">
              {section.songs.map((song) => (
                <div 
                  key={song.id + section.title}
                  onClick={() => onPlaySong(song)}
                  className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/5"
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
                  <div className="flex items-center gap-6">
                     <span className="text-[10px] font-mono text-gray-600">14:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}</span>
                     <button className="text-gray-600 hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all"><Heart size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
