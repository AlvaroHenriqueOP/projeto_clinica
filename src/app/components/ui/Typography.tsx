'use client';

import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  animate?: boolean;
}

export const H1: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  animate = false 
}) => {
  const classes = `heading-1 text-gray-900 ${gradient ? 'gradient-text' : ''} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <h1 className={classes}>{children}</h1>;
};

export const H2: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  animate = false 
}) => {
  const classes = `heading-2 text-gray-900 ${gradient ? 'gradient-text' : ''} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <h2 className={classes}>{children}</h2>;
};

export const H3: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  animate = false 
}) => {
  const classes = `heading-3 text-gray-900 ${gradient ? 'gradient-text' : ''} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <h3 className={classes}>{children}</h3>;
};

export const H4: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  animate = false 
}) => {
  const classes = `heading-4 text-gray-900 ${gradient ? 'gradient-text' : ''} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <h4 className={classes}>{children}</h4>;
};

export const H5: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  gradient = false,
  animate = false 
}) => {
  const classes = `heading-5 text-gray-900 ${gradient ? 'gradient-text' : ''} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <h5 className={classes}>{children}</h5>;
};

interface TextProps extends TypographyProps {
  variant?: 'large' | 'base' | 'small';
  color?: 'primary' | 'secondary' | 'muted';
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  className = '', 
  variant = 'base',
  color = 'primary',
  animate = false 
}) => {
  const variantClasses = {
    large: 'body-large',
    base: 'body-base',
    small: 'body-small'
  };
  
  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-600'
  };
  
  const classes = `${variantClasses[variant]} ${colorClasses[color]} ${animate ? 'animate-fade-in-up' : ''} ${className}`;
  return <p className={classes}>{children}</p>;
};

export const Caption: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  animate = false 
}) => {
  const classes = `caption text-gray-500 ${animate ? 'animate-fade-in' : ''} ${className}`;
  return <span className={classes}>{children}</span>;
}; 