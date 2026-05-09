import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { Song } from '../types';

interface LyricsViewProps {
  song: Song;
  currentTime: number;
  onClose: () => void;
}

export const LyricsView = ({ song, currentTime, onClose }: LyricsViewProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeLyricIndex = song.lyrics?.findIndex((lyric, index) => {
    const nextLyric = song.lyrics?.[index + 1];
    return currentTime >= lyric.time && (!nextLyric || currentTime < nextLyric.time);
  }) ?? -1;

  useEffect(() => {
    const activeElement = document.getElementById(`lyric-${activeLyricIndex}`);
    if (activeElement && scrollRef.current) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeLyricIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl p-12 flex"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-white/50 hover:text-white"
      >
        <Minimize2 size={24} />
      </button>

      {/* Album Art & Info Side */}
      <div className="w-1/3 flex flex-col items-center justify-center gap-8 border-r border-white/5 pr-12">
        <motion.div 
          layoutId="player-artwork"
          className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-display font-bold">{song.title}</h1>
          <p className="text-xl text-white/40">{song.artist}</p>
        </div>
      </div>

      {/* Lyrics Side */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-16 flex flex-col gap-8 custom-scrollbar py-[20vh]"
      >
        {song.lyrics?.length ? (
          song.lyrics.map((lyric, index) => (
            <motion.p
              id={`lyric-${index}`}
              key={index}
              initial={false}
              animate={{ 
                opacity: activeLyricIndex === index ? 1 : 0.2,
                scale: activeLyricIndex === index ? 1.1 : 1,
                x: activeLyricIndex === index ? 20 : 0
              }}
              className={`text-4xl font-bold font-display transition-all duration-500 cursor-default
                ${activeLyricIndex === index ? 'text-white' : 'text-white/40'}`}
            >
              {lyric.text}
            </motion.p>
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-2xl text-white/20 italic">No se encontraron letras para esta canción.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
