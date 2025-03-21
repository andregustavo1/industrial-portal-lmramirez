
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
      center ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary-800 max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
