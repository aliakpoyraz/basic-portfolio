import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark">
        <div
          className="absolute inset-0 opacity-45 dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-dark-accent/5 dark:to-dark-accent/5" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 dark:bg-dark-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 dark:bg-dark-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-200/20 dark:bg-dark-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};