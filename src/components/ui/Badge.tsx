import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'navy' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-[#EFECE4] text-charcoal-700 border-border-default',
    accent: 'bg-accent/15 text-[#9E7420] border-accent/30',
    navy: 'bg-navy-800 text-white border-navy-700',
    outline: 'bg-transparent text-charcoal-600 border-border-default',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider font-semibold border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
