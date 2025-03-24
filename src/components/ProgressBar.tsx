
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  value: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  return (
    <div className={className}>
      <Progress value={value} className="h-2" />
      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
        <span>{value}% complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;
