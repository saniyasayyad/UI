import { useState, useEffect } from 'react';
import { AdminUser } from '../types';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export const useAuth = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      const parsedAuth = JSON.parse(savedAuth);
      if (parsedAuth.isAuthenticated) {
        setUser(parsedAuth);
      }
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const adminUser: AdminUser = {
        username,
        isAuthenticated: true
      };
      setUser(adminUser);
      localStorage.setItem('adminAuth', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adminAuth');
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: user?.isAuthenticated || false
  };
};