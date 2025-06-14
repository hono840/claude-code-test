import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export function ArrowLeftIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function EditIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      {...props}
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  );
}

export function DeleteIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
}

export function PlusIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  );
}