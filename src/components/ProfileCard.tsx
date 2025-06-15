import React from 'react';
import { MapPin, Github, Linkedin, FileText, Mail, Code } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import cvFile from '../assets/cv.pdf';

interface ProfileData {
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

interface ProfileCardProps {
  data: ProfileData;
  onViewToggle: () => void;
  language: 'tr' | 'en';
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data, onViewToggle, language }) => {
  const socialIcons = [
    { Icon: Github, url: data.social.github, label: 'GitHub' },
    { Icon: Linkedin, url: data.social.linkedin, label: 'LinkedIn' },
    { Icon: FileText, url: cvFile, label: 'CV' },
    { Icon: Mail, url: `mailto:${data.social.email}`, label: 'Email' }
  ];

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto backdrop-blur-sm bg-white/95 dark:bg-dark-card/95 border border-gray-200/50 dark:border-dark-border/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] relative">
      {/* View Toggle Button */}
      <button
        onClick={onViewToggle}
        className="absolute top-4 right-4 bg-white/80 dark:bg-dark-header/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border rounded-full p-2 text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-header hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        title={data.profileToggle}
      >
        <Code size={16} className="text-gray-600 dark:text-dark-text group-hover:text-blue-600 dark:group-hover:text-dark-accent transition-all duration-300" />
      </button>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-dark-border dark:to-dark-header flex items-center justify-center overflow-hidden ring-4 ring-white dark:ring-dark-border shadow-lg">
          <img
            src={profileImage}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-2 transition-all duration-300">
          {data.name}
        </h1>
        <p className="text-gray-600 dark:text-dark-text-secondary font-medium transition-all duration-300">
          {data.title}
        </p>
      </div>

      {/* About Me Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-3">
          {language === 'tr' ? 'Hakkımda' : 'About Me'}
        </h2>
        <p className="text-gray-600 dark:text-dark-text-secondary leading-relaxed transition-all duration-300">
          {data.aboutMe}
        </p>
      </div>

      {/* Location */}
      <div className="flex items-center justify-center gap-2 mb-6 text-gray-600 dark:text-dark-text-secondary">
        <MapPin size={16} />
        <span className="text-sm transition-all duration-300">{data.location}</span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {socialIcons.map(({ Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/80 dark:bg-dark-header/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border text-gray-600 dark:text-dark-text hover:bg-white dark:hover:bg-dark-header hover:text-blue-600 dark:hover:text-dark-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};