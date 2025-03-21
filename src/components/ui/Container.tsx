
import React from 'react';
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div 
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
