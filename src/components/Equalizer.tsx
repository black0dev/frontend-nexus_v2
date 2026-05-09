import React from 'react';
import { motion } from 'motion/react';
import { Settings2, X, SlidersHorizontal } from 'lucide-react';

interface EqualizerProps {
  onClose: () => void;
}

const FEQS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];

export const Equalizer = ({ onClose }: EqualizerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
    >
      <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Settings2 className="text-indigo-400" />
            <h2 className="text-xl font-display font-bold text-white">Ecualizador Pro</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-between items-end h-64 px-4 gap-6">
          {FEQS.map((freq) => (
            <div key={freq} className="flex-1 flex flex-col items-center gap-4 group">
              <div className="h-full flex-1 w-1 bg-white/5 rounded-full relative overflow-hidden flex flex-col justify-end group-hover:w-2 transition-all">
                 <div 
                   className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-lg shadow-indigo-500/20" 
                   style={{ height: `${Math.random() * 80 + 20}%` }}
                 />
              </div>
              <span className="text-[10px] font-mono text-white/30 group-hover:text-white transition-colors">
                {freq >= 1000 ? `${freq/1000}k` : freq}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex flex-col">
               <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Preset</span>
               <span className="font-medium text-sm">Electrónica Bass</span>
            </div>
            <SlidersHorizontal size={18} className="text-white/20 group-hover:text-white" />
          </div>
          <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="flex flex-col">
               <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Audio Espacial</span>
               <span className="font-medium text-sm text-indigo-400">Activado (7.1)</span>
            </div>
            <div className="w-10 h-5 bg-indigo-500 rounded-full relative flex items-center justify-end px-1 shadow-inner shadow-black/20">
               <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
