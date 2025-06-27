'use client';

import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
  className = '',
  onClick
}) => {
  const baseClasses = 'card';
  
  const variantClasses = {
    default: '',
    elevated: 'card-elevated',
    gradient: 'card-gradient'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'card-padding',
    lg: 'card-padding-lg'
  };
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    onClick ? 'cursor-pointer' : '',
    'animate-fade-in-up',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Sub-componentes para estruturação do Card
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <h3 className={`heading-4 text-gray-900 ${className}`}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <p className={`body-base text-gray-600 mt-2 ${className}`}>
    {children}
  </p>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={className}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

export default Card; 