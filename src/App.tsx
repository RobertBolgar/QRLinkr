import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QRGenerator } from './components/QRGenerator';
import { Footer } from './components/Footer';
import { MessagePage } from './pages/MessagePage';

function HomePage() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/message" element={<MessagePage />} />
    </Routes>
  );
}

export default App;
