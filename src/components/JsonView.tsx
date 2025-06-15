import React from 'react';
import { Code } from 'lucide-react';
import cvFile from '../assets/cv.pdf';

interface JsonViewProps {
  data: any;
  language: 'tr' | 'en';
  onViewToggle: () => void;
}

export const JsonView: React.FC<JsonViewProps> = ({ data, language, onViewToggle }) => {
  const jsonString = JSON.stringify(data, null, 2);
  
  const formatJsonLine = (line: string, index: number) => {
    const trimmedLine = line.trim();
    const indentLevel = (line.length - line.trimStart().length) / 2;
    
    // Color coding for different JSON elements
    let formattedLine = line;
    
    // Keys (property names)
    formattedLine = formattedLine.replace(/"([^"]+)":/g, '<span class="text-blue-600">"$1"</span>:');
    
    // String values
    formattedLine = formattedLine.replace(/: "([^"]*)"([,}]?)/g, ': <span class="text-green-600">"$1"</span>$2');
    
    // Brackets and braces
    formattedLine = formattedLine.replace(/[{}[\]]/g, '<span class="text-gray-800 font-bold">$&</span>');
    
    return (
      <div key={index} className="flex">
        <span className="text-gray-400 text-sm w-8 text-right mr-4 select-none">
          {index + 1}
        </span>
        <span 
          className="text-gray-700"
          style={{ paddingLeft: `${indentLevel * 16}px` }}
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl max-w-2xl w-full mx-auto backdrop-blur-sm bg-white/95 dark:bg-dark-card/95 border border-gray-200/50 dark:border-dark-border/50 transition-all duration-500 hover:shadow-2xl overflow-hidden relative">
      {/* Terminal Header */}
      <div className="bg-gray-100 dark:bg-dark-header px-4 py-3 border-b border-gray-200 dark:border-dark-border flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-600 dark:text-dark-text-secondary text-sm font-medium ml-4">
          Ali-Akpoyraz.json
        </span>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-50 dark:bg-dark-header px-4 py-2 border-b border-gray-200 dark:border-dark-border flex items-center gap-4 text-sm text-gray-600 dark:text-dark-text-secondary">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
          <span>JSON</span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={onViewToggle}
            className="bg-white/80 dark:bg-dark-header/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border rounded-full p-2 text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-white dark:hover:bg-dark-header hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            title={data.profileToggle}
          >
            <Code size={16} className="text-gray-600 dark:text-dark-text group-hover:text-blue-600 dark:group-hover:text-dark-accent transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="bg-gray-50 dark:bg-dark-header px-4 py-2 border-b border-gray-200 dark:border-dark-border flex justify-end gap-3">
        <a href={data.social?.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-dark-text transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href={data.social?.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-dark-text transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-dark-text transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </a>
        <a href={`mailto:${data.social?.email}`} className="text-gray-500 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-dark-text transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>

      {/* JSON Content */}
      <div className="p-6 bg-white dark:bg-dark-card font-mono text-sm overflow-auto max-h-96">
        <div className="space-y-1">
          {jsonString.split('\n').map((line, index) => formatJsonLine(line, index))}
        </div>
      </div>
    </div>
  );
};