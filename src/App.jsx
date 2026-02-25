import HeroSection from './components/HeroSection';
import TabSection from './components/TabSection';
import FooterNav from './components/FooterNav';
import './App.css';

function App() {
  return (
    <>
      <main className="main-layout">
        <HeroSection />
        <TabSection />
      </main>
      <FooterNav />
    </>
  );
}

export default App;
