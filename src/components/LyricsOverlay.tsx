import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Music2, Share2, Heart, Mic2 } from 'lucide-react';
import { Song } from '../types';

interface LyricsOverlayProps {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
}

const MOCK_LYRICS = [
  "En la penumbra de la ciudad",
  "Donde los sueños se pierden en el eco",
  "Busco el rastro de tu libertad",
  "Bajo este cielo de cristal y acero",
  "Las luces de neón susurran tu nombre",
  "Mientras el viento baila entre los edificios",
  "Ya no hay sombras que nos escondan",
  "Somos el pulso de este nuevo inicio",
  "Elevándonos más allá del horizonte",
  "Perdiéndonos en la frecuencia del alma",
  "Nexus en el aire, Cloud en el corazón",
  "Todo lo que fuimos, todo lo que calma",
];

export const LyricsOverlay = ({ song, isOpen, onClose }: LyricsOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[200] bg-black overflow-hidden flex flex-col md:flex-row"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
             <div 
               className="absolute inset-0 opacity-40 blur-[120px] scale-150"
               style={{
                 background: `radial-gradient(circle at 30% 30%, ${song.color || '#4f46e5'} 0%, transparent 50%),
                             radial-gradient(circle at 70% 70%, #000000 0%, transparent 50%)`
               }}
             />
             <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
          </div>

          {/* Close Button Mobile */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 bg-white/5 border border-white/10 rounded-full text-white md:hidden"
          >
            <X size={20} />
          </button>

          {/* Left Panel: Cover & Info */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center justify-center p-12 gap-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-48 h-48 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.1)] relative group"
            >
              <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay" />
            </motion.div>

            <div className="text-center md:text-left md:w-80 flex flex-col gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-black text-white italic leading-tight uppercase tracking-tighter">
                  {song.title}
                </h1>
                <p className="text-lg md:text-xl text-white/50 font-bold uppercase tracking-widest mt-1">
                  {song.artist}
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                  <Share2 size={16} /> Compartir
                </button>
                <Heart size={24} className="text-white/20 hover:text-indigo-500 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Panel: Lyrics */}
          <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col bg-black/20 backdrop-blur-sm border-l border-white/5">
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Mic2 className="text-indigo-500" size={18} />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Letras Dinámicas</span>
              </div>
              <button 
                onClick={onClose}
                className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
              >
                Cerrar <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar mask-fade-top-bottom">
              <div className="flex flex-col gap-8 md:gap-12 pb-40">
                {MOCK_LYRICS.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0.1, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20%" }}
                    className={`text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight cursor-default transition-all duration-700 ${
                      index === 2 ? 'text-white scale-105 origin-left' : 'text-white/20 hover:text-white/40'
                    }`}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-t from-black to-transparent flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Siguiente Letra</span>
                  <span className="text-xs text-white font-bold">"El mañana espera en silencio..."</span>
                </div>
              </div>
              <Music2 className="text-indigo-500/20" size={32} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
