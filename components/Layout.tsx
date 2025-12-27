
import React from 'react';
import { AppMode } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, mode, setMode }) => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-blue-100">
      {/* Top Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">PORT CONNECT</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Smart Yard Workflow</p>
            </div>
          </div>

          <nav className="hidden md:flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button 
              onClick={() => setMode('VIEWER')}
              className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${mode === 'VIEWER' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              YARD VIEW
            </button>
            <button 
              onClick={() => setMode('GATE')}
              className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${mode === 'GATE' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              GATE TERMINAL
            </button>
            <button 
              onClick={() => setMode('YARD')}
              className={`px-6 py-2 rounded-xl text-sm font-black transition-all ${mode === 'YARD' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              YARD PLANNING
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 md:p-8">
        {children}
      </main>

      {/* Mobile Nav Bar */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl border border-white/20 p-2 rounded-3xl shadow-2xl z-50 flex justify-around">
        <button onClick={() => setMode('VIEWER')} className={`p-3 rounded-2xl ${mode === 'VIEWER' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
        <button onClick={() => setMode('GATE')} className={`p-3 rounded-2xl ${mode === 'GATE' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
        </button>
        <button onClick={() => setMode('YARD')} className={`p-3 rounded-2xl ${mode === 'YARD' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
