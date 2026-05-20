import React, { useState } from 'react';

const THEMES = [
  {
    id: 'blue',
    name: 'Royal Blue',
    tagline: 'Premium Corporate & High-End Luxury',
    primaryColor: '#0050e2',
    swatches: ['#0050e2', '#2d5bb1', '#f8f9ff']
  },
  {
    id: 'red',
    name: 'Crimson Red',
    tagline: 'Modern Grid, Data & Analytical Trust',
    primaryColor: '#b20017',
    swatches: ['#b20017', '#5b5e69', '#f9f9f9']
  },
  {
    id: 'green',
    name: 'Forest Green',
    tagline: 'Luxury Prestige, Emerald & Organic Elegance',
    primaryColor: '#012d1d',
    swatches: ['#012d1d', '#4c6452', '#f4fafd']
  }
];

export default function ThemeSwitcher({ activeTheme, onChangeTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isWashing, setIsWashing] = useState(false);
  const [washColor, setWashColor] = useState('#0050e2');

  const handleThemeChange = (themeId, primaryColor) => {
    if (themeId === activeTheme) return;
    
    // Start solid color portal wash transition
    setWashColor(primaryColor);
    setIsWashing(true);
    
    setTimeout(() => {
      onChangeTheme(themeId);
      // Wait slightly before washing out to ensure React completes DOM swap
      setTimeout(() => {
        setIsWashing(false);
      }, 100);
    }, 350);
  };

  return (
    <>
      {/* Solid Color Page Wash Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] pointer-events-none transition-all duration-300 ease-in-out ${isWashing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{
          backgroundColor: washColor,
          visibility: isWashing ? 'visible' : 'hidden'
        }}
      />

      {/* Floating Widget Container */}
      <div className="fixed bottom-6 right-6 z-[999]">
        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative ${isOpen ? 'rotate-90' : ''}`}
          style={{ border: '2px solid rgba(255, 255, 255, 0.2)' }}
        >
          <span className="material-symbols-outlined text-2xl">palette</span>
          
          {/* Pulsing indicator dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border border-white"></span>
          </span>
        </button>

        {/* Sidebar Flyout Panel */}
        <div 
          className={`absolute bottom-16 right-0 w-[340px] bg-white/80 backdrop-blur-xl border border-outline-variant rounded-2xl shadow-2xl p-6 transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
        >
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-outline-variant">
            <div>
              <h4 className="font-headline-md text-headline-sm text-primary font-bold">Theme Showcase</h4>
              <p className="text-text-muted text-body-sm">Dynamic palette customizer</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors flex items-center justify-center p-1 rounded-full hover:bg-surface-container"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {THEMES.map(theme => (
              <div 
                key={theme.id}
                onClick={() => handleThemeChange(theme.id, theme.primaryColor)}
                className={`p-3.5 rounded-xl border-2 text-left cursor-pointer transition-all hover:translate-x-1 ${theme.id === activeTheme ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant bg-white/50 hover:bg-white'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-md font-bold text-on-surface">{theme.name}</span>
                  
                  {/* Swatches */}
                  <div className="flex gap-1">
                    {theme.swatches.map((color, idx) => (
                      <span 
                        key={idx} 
                        className="w-3.5 h-3.5 rounded-full border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-text-muted text-body-sm leading-snug">{theme.tagline}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-outline-variant text-center">
            <span className="text-primary font-bold text-label-sm inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">flash_on</span> Vercel Showcase Enabled
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
