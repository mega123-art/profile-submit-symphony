
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
        return 'status-badge-completed';
      case 'in-progress':
        return 'status-badge-in-progress';
      case 'pending':
        return 'status-badge-pending';
      case 'late':
        return 'status-badge-late';
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
    <span className={cn('status-badge', getStatusClass())}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;
