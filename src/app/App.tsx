import { Header } from '@/app/components/Header';
import { Home } from '@/app/components/Home';
import { Showreel } from '@/app/components/Showreel';
import { Story } from '@/app/components/Story';
import { Animation } from '@/app/components/Animation';
import { Characters } from '@/app/components/Characters';
import { FigureDrawings } from '@/app/components/FigureDrawings';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <Showreel />
        <Story />
        <Animation />
        <Characters />
        <FigureDrawings />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
