import { Typography, LinkButton } from '../atoms';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  showCreateButton?: boolean;
  className?: string;
}

export function Header({ 
  title = '私のブログ', 
  subtitle = 'あなたの想いを世界と共有しよう',
  showCreateButton = true,
  className = '' 
}: HeaderProps) {
  return (
    <header className={`text-center mb-12 ${className}`}>
      <Typography variant="h1" className="mb-4">
        {title}
      </Typography>
      
      <Typography variant="body" className="text-gray-600 dark:text-gray-300 mb-6">
        {subtitle}
      </Typography>
      
      {showCreateButton && (
        <LinkButton 
          href="/create" 
          variant="primary"
          size="lg"
        >
          新しい記事を書く
        </LinkButton>
      )}
    </header>
  );
}