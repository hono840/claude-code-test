import { Tag } from '../atoms';
import type { TagProps } from '../atoms';

export interface TagListProps {
  tags: string[];
  variant?: TagProps['variant'];
  size?: TagProps['size'];
  className?: string;
  maxDisplay?: number;
}

export function TagList({ 
  tags, 
  variant = 'default', 
  size = 'sm', 
  className = '',
  maxDisplay
}: TagListProps) {
  if (tags.length === 0) return null;
  
  const displayTags = maxDisplay ? tags.slice(0, maxDisplay) : tags;
  const remainingCount = maxDisplay && tags.length > maxDisplay ? tags.length - maxDisplay : 0;
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayTags.map((tag, index) => (
        <Tag 
          key={`${tag}-${index}`} 
          variant={variant} 
          size={size}
        >
          {tag}
        </Tag>
      ))}
      {remainingCount > 0 && (
        <Tag variant={variant} size={size}>
          +{remainingCount}
        </Tag>
      )}
    </div>
  );
}