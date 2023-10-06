import React, { ReactNode } from 'react';

interface TitleProps {
  icon: ReactNode;
  text: string;
}

export const Title: React.FC<TitleProps> = ({ icon, text = '' }) => {
  return (
    <div className="p-8 gap-4 pb-0 text-orange-500 flex items-center">
      <h1 className="text-4xl font-bold mb-4">{text}</h1>
      {icon}
    </div>
  );
};
