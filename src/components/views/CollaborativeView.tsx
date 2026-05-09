import React from 'react';
import { Users, Plus, Play, Music, MoreVertical, Share2, Heart } from 'lucide-react';
import { Song } from '../../types';

interface CollaborativeViewProps {
  onPlaySong: (song: Song) => void;
  songs: Song[];
}

export const CollaborativeView = ({ onPlaySong, songs }: CollaborativeViewProps) => {
  return (
    <div className="p-8 flex flex-col gap-10 max-w-7xl mx-auto pb-40">
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-xl">
            <Users size={36} />
          </div>
          <div>
            <h1 className="text-4xl font-display font-black text-white italic">COLABORATIVAS</h1>
            <p className="text-sm text-gray-500">Crea música con tus amigos en tiempo real.</p>
          </div>
        </div>
        <button className="px-8 py-3 bg-white text-black rounded-full font-black text-xs hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
          <Plus size={18} /> NUEVA PLAYLIST
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Roadtrip Crew', members: 4, songs: 128, color: 'bg-emerald-500' },
          { name: 'Work Focus', members: 2, songs: 45, color: 'bg-indigo-500' },
          { name: 'Gym Beats', members: 3, songs: 89, color: 'bg-orange-500' },
        ].map((playlist) => (
          <div key={playlist.name} className="bg-[#111] border border-white/5 p-6 rounded-[32px] hover:border-white/10 hover:bg-white/2 hover:scale-[1.02] transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-6">
               <div className={`w-12 h-12 rounded-2xl ${playlist.color} flex items-center justify-center text-white`}>
                  <Music size={24} />
               </div>
               <div className="flex -space-x-2">
                  {[1,2,3].slice(0, playlist.members).map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111] bg-gray-800" />
                  ))}
               </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{playlist.name}</h3>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{playlist.songs} CANCIONES • {playlist.members} MIEMBROS</p>
            
            <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <button onClick={() => onPlaySong(songs[0])} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-transform">
                  <Play fill="black" size={24} />
               </button>
               <div className="flex gap-2">
                  <button className="p-2 text-gray-500 hover:text-white transition-colors"><Share2 size={18} /></button>
                  <button className="p-2 text-gray-500 hover:text-white transition-colors"><MoreVertical size={18} /></button>
               </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white mb-6">Actividad Reciente</h2>
        <div className="flex flex-col gap-3">
          {[
            { user: 'Sofía', action: 'agregó "DÁKITI"', time: 'Hace 5 min' },
            { user: 'Marco', action: 'creó "Gym Beats"', time: 'Hace 1 hora' },
            { user: 'Tú', action: 'invitaste a Elena', time: 'Ayer' },
          ].map((act, i) => (
             <div key={i} className="flex items-center justify-between p-4 bg-white/2 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      {act.user[0]}
                   </div>
                   <p className="text-sm text-gray-300">
                      <span className="font-bold text-white">{act.user}</span> {act.action}
                   </p>
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{act.time}</span>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};
