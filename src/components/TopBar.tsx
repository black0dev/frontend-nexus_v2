import React from 'react';
import { Search, User, Bell, Menu } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

export const TopBar = ({ 
  djMode, 
  onToggleDj, 
  onAuthClick,
  searchQuery,
  onSearchChange,
  onMenuClick
}: { 
  djMode: boolean; 
  onToggleDj: () => void;
  onAuthClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuClick: () => void;
}) => {
  const { user, logout } = useAuth();

  const getInitials = () => {
    if (user?.displayName) return user.displayName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    if (user?.email) return user.email[0].toUpperCase();
    return 'JD';
  };

  return (
    <header className="h-20 flex items-center justify-between px-4 sm:px-8 bg-[#0a0a0a] border-b border-white/5 sticky top-0 z-50">
      <div className="flex items-center flex-1 max-w-xl gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-white/40 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="relative w-full group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-indigo-500 transition-colors" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar canciones, artistas, géneros..."
            className="w-full bg-[#1a1a1a] border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-500 text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleDj}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
            djMode 
              ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' 
              : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/10'
          }`}
        >
          Modo DJ
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-white/60 hover:text-white transition-all relative">
          <Bell size={18} />
          <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#0a0a0a]" />
        </button>
        <div className="h-8 w-px bg-white/10 mx-1" />
        <button 
          onClick={() => user ? logout() : onAuthClick()}
          className="flex items-center gap-3 pl-1 pr-1 py-1 rounded-full hover:bg-white/5 transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-900 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden font-bold text-[10px] text-white">
             {user?.photoURL ? (
               <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
             ) : getInitials()}
          </div>
        </button>
      </div>
    </header>
  );
};
