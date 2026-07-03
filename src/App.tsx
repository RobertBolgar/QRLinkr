import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QRGenerator } from './components/QRGenerator';
import { Footer } from './components/Footer';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background-primary)',
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
            padding: '0 var(--spacing-4) var(--spacing-12)',
            width: '100%',
          }}
        >
          <QRGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
