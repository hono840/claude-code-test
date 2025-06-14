import { Typography } from '../atoms';

export interface PostMetaProps {
  createdAt: Date;
  updatedAt?: Date;
  showUpdated?: boolean;
  className?: string;
}

export function PostMeta({ 
  createdAt, 
  updatedAt, 
  showUpdated = true, 
  className = '' 
}: PostMetaProps) {
  const hasBeenUpdated = updatedAt && updatedAt.getTime() !== createdAt.getTime();
  
  return (
    <div className={`space-y-1 ${className}`}>
      <Typography variant="small">
        作成日: {createdAt.toLocaleDateString('ja-JP')}
      </Typography>
      {showUpdated && hasBeenUpdated && (
        <Typography variant="small">
          更新日: {updatedAt.toLocaleDateString('ja-JP')}
        </Typography>
      )}
    </div>
  );
}