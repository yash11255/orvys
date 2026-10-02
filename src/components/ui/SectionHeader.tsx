import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = 'left',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[1.5px] bg-accent inline-block" />
          <span
            className={`text-xs uppercase font-mono tracking-widest font-semibold ${
              dark ? 'text-accent' : 'text-accent-dark'
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[42px] leading-editorial font-normal tracking-tight ${
          dark ? 'text-[#F7F5F0]' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans ${
            dark ? 'text-charcoal-400' : 'text-charcoal-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
