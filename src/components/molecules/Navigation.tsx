import Link from 'next/link';
import { ArrowLeftIcon } from '../atoms';

export interface NavigationProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export function BackNavigation({ 
  href, 
  children, 
  showIcon = true, 
  className = '' 
}: NavigationProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ${className}`}
    >
      {showIcon && <ArrowLeftIcon size={16} className="mr-1" />}
      {children}
    </Link>
  );
}