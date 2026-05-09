import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Github, Chrome, X, ArrowRight } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

interface AuthModalProps {
  onClose: () => void;
}

export const AuthModal = ({ onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#151619] border border-white/10 rounded-[32px] w-full max-w-md overflow-hidden relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-10 pt-16 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
             <h2 className="text-3xl font-display font-extrabold tracking-tight">
               {isLogin ? 'Bienvenido a NexusCloud' : 'Crea tu cuenta'}
             </h2>
             <p className="text-white/40 text-sm">
               {isLogin ? 'Inicia sesión para sincronizar tus canciones.' : 'Únete a la mejor comunidad de música.'}
             </p>
          </div>

          <div className="flex flex-col gap-4">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                />
              </div>
            )}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-orange-500 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-orange-500 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="Contraseña" 
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
              />
            </div>
            
            {isLogin && (
              <button className="text-right text-xs text-orange-500 hover:underline font-medium">¿Olvidaste tu contraseña?</button>
            )}

            <button className="w-full bg-white text-black py-3 rounded-2xl font-bold mt-4 hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2">
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'} <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-4 text-white/20">
            <div className="flex-1 h-px bg-current" />
            <span className="text-[10px] uppercase tracking-widest font-bold">O continúa con</span>
            <div className="flex-1 h-px bg-current" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all font-medium"
            >
              <Chrome size={18} /> <span className="text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all font-medium">
              <Github size={18} /> <span className="text-sm">GitHub</span>
            </button>
          </div>

          <p className="text-center text-sm text-white/40">
            {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-orange-500 font-bold hover:underline"
            >
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
