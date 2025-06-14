import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}