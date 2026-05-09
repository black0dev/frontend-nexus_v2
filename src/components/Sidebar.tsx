import React from 'react';
import { Home, Search, Heart, Download, Users, Music2, Clock, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-4 px-4 py-3 rounded-lg w-full transition-all duration-200 group text-sm font-medium",
      active 
        ? "bg-indigo-600/10 text-indigo-400 shadow-sm" 
        : "text-white/60 hover:text-white hover:bg-white/5"
    )}
  >
    <span className={cn("transition-transform group-hover:scale-110", active && "text-indigo-400")}>
      {icon}
    </span>
    {label}
  </button>
);

export const Sidebar = ({ 
  currentView, 
  onViewChange 
}: { 
  currentView: string; 
  onViewChange: (view: string) => void; 
}) => {
  return (
    <aside className="w-60 h-screen flex flex-col border-r border-white/5 bg-[#0a0a0a] p-4 gap-8 select-none">
      <div 
        className="flex items-center gap-2 px-2 py-4 cursor-pointer"
        onClick={() => onViewChange('home')}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/10">
           <Music2 className="text-white" size={18} />
        </div>
        <h1 className="font-display font-bold text-xl tracking-tight text-white">NexusCloud</h1>
      </div>

      <nav className="flex flex-col gap-8">
        <div>
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Menu</h3>
          <div className="flex flex-col gap-1">
            <SidebarItem 
              icon={<Home size={18} />} 
              label="Inicio" 
              active={currentView === 'home'} 
              onClick={() => onViewChange('home')}
            />
            <SidebarItem 
              icon={<Search size={18} />} 
              label="Buscar" 
              active={currentView === 'search'}
              onClick={() => onViewChange('search')}
            />
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Tu Biblioteca</h3>
          <div className="flex flex-col gap-1">
            <SidebarItem 
              icon={<Heart size={18} />} 
              label="Canciones Favoritas" 
              active={currentView === 'favorites'}
              onClick={() => onViewChange('favorites')}
            />
            <SidebarItem 
              icon={<Users size={18} />} 
              label="Colaborativas" 
              active={currentView === 'collaborative'}
              onClick={() => onViewChange('collaborative')}
            />
            <SidebarItem 
              icon={<Download size={18} />} 
              label="Descargas" 
              active={currentView === 'downloads'}
              onClick={() => onViewChange('downloads')}
            />
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 px-2">Personalizado</h3>
          <div className="flex flex-col gap-1 text-gray-400">
            <SidebarItem 
              icon={<Clock size={18} />} 
              label="Historial" 
              active={currentView === 'history'}
              onClick={() => onViewChange('history')}
            />
            <SidebarItem 
              icon={<Sparkles size={18} />} 
              label="Recomendaciones" 
              active={currentView === 'recommendations'}
              onClick={() => onViewChange('recommendations')}
            />
          </div>
        </div>
      </nav>

      <div className="mt-auto p-4 bg-white/5 rounded-2xl">
        <h4 className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-tight">Actividad Social</h4>
        <div className="flex items-center gap-2 text-[11px]">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium">Alex</span>
          <span className="text-gray-500 truncate">escuchando "DÁKITI"</span>
        </div>
      </div>
    </aside>
  );
};
