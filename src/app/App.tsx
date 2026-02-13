import React, { useEffect, useState } from 'react';
import { Header } from '@/app/components/Header';
import { Showreel } from '@/app/components/Showreel';
import { Story } from '@/app/components/Story';
import { Animation } from '@/app/components/Animation';
import { Characters } from '@/app/components/Characters';
import { FigureDrawings } from '@/app/components/FigureDrawings';
import { About } from '@/app/components/About';

export default function App() {
  const normalize = (hash: string) => (hash ? hash.replace('#', '') : '/');
  const [route, setRoute] = useState<string>(normalize(window.location.hash));

  useEffect(() => {
    const onHash = () => setRoute(normalize(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '/':
      case '/home':
      case '/showreel':
        return <Showreel />;
      case '/story':
        return <Story />;
      case '/animation':
        return <Animation />;
      case '/characters':
        return <Characters />;
      case '/figure-drawings':
        return <FigureDrawings />;
      case '/about':
        return <About />;
      default:
        return <Showreel />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>{renderRoute()}</main>
    </div>
  );
}
