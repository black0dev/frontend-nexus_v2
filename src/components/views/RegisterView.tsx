import React from 'react';
import { Mail, Lock, User, Chrome, Github, ArrowRight, Music2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';

interface RegisterViewProps {
  onSwitchToLogin: () => void;
  onBack: () => void;
}

export const RegisterView = ({ onSwitchToLogin, onBack }: RegisterViewProps) => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black relative">
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Volver
      </button>
      <div className="w-full max-w-md flex flex-col gap-8 bg-[#111] p-10 rounded-[32px] border border-white/5 shadow-2xl relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
            <Music2 size={24} />
          </div>
          <h1 className="text-3xl font-display font-black text-white italic tracking-tighter">ÚNETE AHORA.</h1>
          <p className="text-gray-500 text-sm font-medium">Crea tu cuenta gratis en NexusCloud.</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="group relative">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
            <input type="text" placeholder="Nombre completo" className="w-full bg-white/3 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white" />
          </div>
          <div className="group relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
            <input type="email" placeholder="Correo electrónico" className="w-full bg-white/3 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white" />
          </div>
          <div className="group relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
            <input type="password" placeholder="Contraseña segura" className="w-full bg-white/3 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white" />
          </div>
          
          <button className="w-full bg-indigo-500 text-white py-4 rounded-2xl font-black italic mt-6 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm uppercase">
            CREAR CUENTA <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">O continúa con</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={loginWithGoogle} className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-4 rounded-2xl hover:bg-white/10 transition-all text-white text-xs font-black italic">
            <Chrome size={18} /> GOOGLE
          </button>
          <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-4 rounded-2xl hover:bg-white/10 transition-all text-white text-xs font-black italic">
            <Github size={18} /> GITHUB
          </button>
        </div>

        <p className="text-center text-sm font-medium text-gray-500">
          ¿Ya tienes cuenta? 
          <button onClick={onSwitchToLogin} className="ml-2 text-indigo-400 font-black italic hover:text-indigo-300 transition-colors uppercase tracking-widest text-[10px]"> INICIA SESIÓN</button>
        </p>
      </div>
    </div>
  );
};
