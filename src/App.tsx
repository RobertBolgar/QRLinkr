import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QRGeneratorPlaceholder } from './components/QRGeneratorPlaceholder';
import { Footer } from './components/Footer';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Hero />
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            padding: '0 var(--spacing-4)',
            width: '100%',
          }}
        >
          <QRGeneratorPlaceholder />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
