
import React from 'react';
import { cn } from '@/lib/utils';
import { Assignment } from '../data/mockData';

interface StatusBadgeProps {
  status: Assignment['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'late':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return '';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending';
      case 'late':
        return 'Late';
      default:
        return status;
    }
  };

  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-medium', getStatusClass())}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;
