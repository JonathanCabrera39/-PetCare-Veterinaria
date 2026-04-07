interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}: CardProps) => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div 
      className={`
        bg-white rounded-card shadow-elevation-2
        ${hover ? 'transition-shadow duration-300 hover:shadow-elevation-4' : ''}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;