import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TutorListingPage from './pages/TutorListingPage';
import TutorProfilePage from './pages/TutorProfilePage';
import AboutPage from './pages/AboutPage';

type Page = 'home' | 'listing' | 'profile' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedTutorId, setSelectedTutorId] = useState<string>('');
  const [searchLocation, setSearchLocation] = useState<string>('');

  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page as Page);

    if (page === 'profile' && param) {
      setSelectedTutorId(param);
    }

    if (page === 'listing' && param) {
      setSearchLocation(param);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'listing':
        return (
          <TutorListingPage
            onNavigate={handleNavigate}
            location={searchLocation}
          />
        );
      case 'profile':
        return <TutorProfilePage tutorId={selectedTutorId} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
