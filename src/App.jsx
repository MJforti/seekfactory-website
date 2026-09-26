import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SpecViewerModal from './components/SpecViewerModal';

import HomePage from './pages/HomePage';
import MachineryPage from './pages/MachineryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './styles/index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);

  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [specProduct, setSpecProduct] = useState(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedProduct]);

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setQuoteModalOpen(true);
  };

  const handleOpenQuickView = (product) => {
    setSpecProduct(product);
    setSpecModalOpen(true);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage 
            setActiveTab={setActiveTab}
            onRequestQuote={handleOpenQuote}
            onQuickView={handleOpenQuickView}
            onViewDetails={handleViewDetails}
          />
        );
      case 'machinery':
        return (
          <MachineryPage 
            onRequestQuote={handleOpenQuote}
            onQuickView={handleOpenQuickView}
            onViewDetails={handleViewDetails}
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage 
            product={selectedProduct}
            onBack={() => setActiveTab('machinery')}
            onRequestQuote={handleOpenQuote}
          />
        ) : (
          <MachineryPage 
            onRequestQuote={handleOpenQuote}
            onQuickView={handleOpenQuickView}
            onViewDetails={handleViewDetails}
          />
        );
      case 'solutions':
        return <SolutionsPage onRequestQuote={handleOpenQuote} />;
      case 'industries':
        return <IndustriesPage setActiveTab={setActiveTab} onRequestQuote={handleOpenQuote} />;
      case 'about':
        return <AboutPage onRequestQuote={handleOpenQuote} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            setActiveTab={setActiveTab}
            onRequestQuote={handleOpenQuote}
            onQuickView={handleOpenQuickView}
            onViewDetails={handleViewDetails}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <Navbar 
        activeTab={activeTab === 'product-detail' ? 'machinery' : activeTab}
        setActiveTab={setActiveTab}
        onRequestQuote={() => handleOpenQuote()}
      />

      <main style={{ flexGrow: 1 }}>
        {renderCurrentPage()}
      </main>

      <Footer 
        setActiveTab={setActiveTab}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={quoteProduct}
      />

      {/* Quick Specs Viewer Modal */}
      <SpecViewerModal 
        isOpen={specModalOpen}
        onClose={() => setSpecModalOpen(false)}
        product={specProduct}
        onRequestQuote={handleOpenQuote}
      />
    </div>
  );
}
