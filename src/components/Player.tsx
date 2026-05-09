import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Mic2, ListMusic, MoreVertical, Heart, Settings2, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Song } from '../types';

interface PlayerProps {
  currentSong?: Song | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onShowLyrics: () => void;
  onShowEq: () => void;
}

const formatTime = (s: number) => {
  if (isNaN(s)) return "0:00";
  const mins = Math.floor(s / 60);
  const secs = Math.floor(s % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const Player = ({ 
  currentSong, 
  isPlaying, 
  progress, 
  duration, 
  volume,
  onTogglePlay, 
  onNext, 
  onPrev,
  onSeek,
  onVolumeChange,
  onShowLyrics,
  onShowEq
}: PlayerProps) => {
  if (!currentSong) return null;

  return (
    <footer className="h-20 bg-[#0c0c0c] border-t border-white/5 fixed bottom-0 left-0 right-0 z-[100] px-4 md:px-6 flex items-center justify-between backdrop-blur-xl bg-opacity-90">
      {/* Current Song Info */}
      <div className="flex items-center w-1/2 md:w-1/3">
        <motion.div 
          layoutId="player-artwork"
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-2xl relative group cursor-pointer mr-3"
          onClick={onShowLyrics}
        >
          <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <Maximize2 size={14} className="text-white/80" />
          </div>
        </motion.div>
        <div className="flex flex-col min-w-0 text-white">
          <span className="text-[12px] font-bold truncate hover:underline cursor-pointer leading-tight">{currentSong.title}</span>
          <span className="text-[10px] text-gray-500 truncate hover:text-white cursor-pointer transition-colors leading-tight uppercase tracking-widest font-bold">{currentSong.artist}</span>
        </div>
        <button className="ml-3 text-gray-700 hover:text-indigo-400 transition-colors hidden sm:block">
          <Heart size={16} />
        </button>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center w-fit md:w-1/3 px-4">
        <div className="flex items-center space-x-4 md:space-x-8 mb-1">
          <button className="text-gray-700 hover:text-white transition-colors hidden md:block">
            <Shuffle size={14} />
          </button>
          <button onClick={onPrev} className="text-gray-500 hover:text-white transition-colors active:scale-90">
            <SkipBack size={18} fill="currentColor" />
          </button>
          <button 
            onClick={onTogglePlay}
            className="w-9 h-9 md:w-10 md:h-10 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1 h-3.5 bg-black rounded-full" />
                <div className="w-1 h-3.5 bg-black rounded-full" />
              </div>
            ) : (
              <Play className="text-black ml-0.5" fill="currentColor" size={18} />
            )}
          </button>
          <button onClick={onNext} className="text-gray-500 hover:text-white transition-colors active:scale-90">
            <SkipForward size={18} fill="currentColor" />
          </button>
          <button className="text-gray-700 hover:text-white transition-colors hidden md:block">
            <Repeat size={14} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="hidden md:flex items-center w-full space-x-2">
          <span className="text-[8px] tabular-nums text-gray-600 w-6 text-right font-bold uppercase">{formatTime(progress)}</span>
          <div 
            className="flex-1 h-1 bg-white/5 rounded-full cursor-pointer relative overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const p = (e.clientX - rect.left) / rect.width;
              onSeek(p * duration);
            }}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-indigo-500 transition-colors rounded-full"
              style={{ width: `${(progress / (duration || 1)) * 100}%` }}
            />
          </div>
          <span className="text-[8px] tabular-nums text-gray-600 w-6 text-left font-bold uppercase">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Extra Controls */}
      <div className="hidden md:flex items-center justify-end w-1/3 space-x-4">
        <button onClick={onShowEq} className="text-gray-600 hover:text-white transition-colors">
          <Settings2 size={16} />
        </button>
        <div className="flex items-center gap-2 group">
          <Volume2 className="text-gray-600 group-hover:text-white transition-colors" size={16} />
          <input 
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="w-20 h-1 accent-indigo-500 cursor-pointer opacity-30 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
};

