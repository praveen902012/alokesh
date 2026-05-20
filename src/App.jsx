import React, { useState } from 'react';
import BlueTheme from './components/BlueTheme';
import RedTheme from './components/RedTheme';
import GreenTheme from './components/GreenTheme';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [currentTheme, setCurrentTheme] = useState('blue');

  return (
    <div className={`theme-${currentTheme} min-h-screen transition-colors duration-300`}>
      {currentTheme === 'blue' && <BlueTheme />}
      {currentTheme === 'red' && <RedTheme />}
      {currentTheme === 'green' && <GreenTheme />}
      
      {/* Premium Floating Theme Customizer Sidebar */}
      <ThemeSwitcher activeTheme={currentTheme} onChangeTheme={setCurrentTheme} />
    </div>
  );
}

export default App;
