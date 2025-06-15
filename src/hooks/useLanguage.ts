import { useState, useEffect } from 'react';
import enData from '../data/en.json';
import trData from '../data/tr.json';

interface LanguageData {
  name: string;
  title: string;
  aboutMe: string;
  location: string;
  profileToggle: string;
  social: {
    github: string;
    linkedin: string;
    cv: string;
    email: string;
  };
}

export const useLanguage = () => {
  const [language, setLanguage] = useState('tr');
  const [data, setData] = useState(trData);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'profile' | 'json'>('profile');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    setLanguage(savedLanguage);
    setData(savedLanguage === 'tr' ? trData : enData);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const jsonData = language === 'tr' ? trData : enData;
        setData(jsonData);
      } catch (error) {
        console.error('Error loading language data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
    setData(newLanguage === 'tr' ? trData : enData);
    localStorage.setItem('language', newLanguage);
  };

  const toggleView = () => {
    setViewMode(prev => prev === 'profile' ? 'json' : 'profile');
  };

  return { language, data, loading, viewMode, toggleLanguage, toggleView };
};