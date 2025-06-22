import React, { useState, useEffect } from 'react';
import { PageType, Puja, Chadhava } from './types';
import { useAuth } from './hooks/useAuth';
import { getPujas, savePujas, getChadhavas, saveChadhavas } from './utils/storage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PoojaPage from './components/PoojaPage';
import ChadhavaPage from './components/ChadhavaPage';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showLogin, setShowLogin] = useState(false);
  const [pujas, setPujas] = useState<Puja[]>([]);
  const [chadhavas, setChadhavas] = useState<Chadhava[]>([]);
  
  const { user, loading, login, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    setPujas(getPujas());
    setChadhavas(getChadhavas());
  }, []);

  const handleAddPuja = (pujaData: Omit<Puja, 'id' | 'createdAt'>) => {
    const newPuja: Puja = {
      id: Date.now().toString(),
      ...pujaData,
      createdAt: Date.now()
    };
    const updatedPujas = [newPuja, ...pujas];
    setPujas(updatedPujas);
    savePujas(updatedPujas);
  };

  const handleDeletePuja = (id: string) => {
    if (window.confirm('Are you sure you want to delete this puja?')) {
      const updatedPujas = pujas.filter(puja => puja.id !== id);
      setPujas(updatedPujas);
      savePujas(updatedPujas);
    }
  };

  const handleAddChadhava = (chadhavaData: Omit<Chadhava, 'id' | 'createdAt'>) => {
    const newChadhava: Chadhava = {
      id: Date.now().toString(),
      ...chadhavaData,
      createdAt: Date.now()
    };
    const updatedChadhavas = [newChadhava, ...chadhavas];
    setChadhavas(updatedChadhavas);
    saveChadhavas(updatedChadhavas);
  };

  const handleDeleteChadhava = (id: string) => {
    if (window.confirm('Are you sure you want to delete this chadhava offering?')) {
      const updatedChadhavas = chadhavas.filter(chadhava => chadhava.id !== id);
      setChadhavas(updatedChadhavas);
      saveChadhavas(updatedChadhavas);
    }
  };

  const handleLogin = (username: string, password: string) => {
    const success = login(username, password);
    if (success) {
      setCurrentPage('admin');
    }
    return success;
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('home');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading BhaktDwaar...</p>
        </div>
      </div>
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage pujas={pujas} />;
      case 'poojas':
        return <PoojaPage pujas={pujas} />;
      case 'chadhava':
        return <ChadhavaPage chadhavas={chadhavas} />;
      case 'admin':
        return isAuthenticated ? (
          <AdminPanel
            pujas={pujas}
            chadhavas={chadhavas}
            onAddPuja={handleAddPuja}
            onDeletePuja={handleDeletePuja}
            onAddChadhava={handleAddChadhava}
            onDeleteChadhava={handleDeleteChadhava}
          />
        ) : (
          <HomePage pujas={pujas} />
        );
      default:
        return <HomePage pujas={pujas} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLoginClick={() => setShowLogin(true)}
        isAdmin={isAuthenticated}
        onLogout={handleLogout}
      />

      {renderCurrentPage()}

      {showLogin && (
        <AdminLogin
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;