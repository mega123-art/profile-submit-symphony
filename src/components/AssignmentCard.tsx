
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Assignment } from '../data/mockData';
import StatusBadge from './StatusBadge';
import ProgressBar from './ProgressBar';
import { Calendar, BookOpen } from 'lucide-react';

interface AssignmentCardProps {
  assignment: Assignment;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <Card className="hover-card-effect">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-base">{assignment.title}</h3>
          <StatusBadge status={assignment.status} />
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
          <BookOpen className="h-3 w-3" />
          <span>{assignment.course}</span>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
          <Calendar className="h-3 w-3" />
          <span>Due {formatDate(assignment.dueDate)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {assignment.description}
        </p>
        
        {assignment.status === 'completed' && assignment.grade !== undefined ? (
          <div className="mt-3 text-sm">
            <span className="font-medium">Grade: </span>
            <span className={`font-semibold ${assignment.grade >= 90 ? 'text-green-600 dark:text-green-400' : ''}`}>
              {assignment.grade}%
            </span>
          </div>
        ) : (
          <ProgressBar value={assignment.progress} className="mt-3" />
        )}
      </CardContent>
    </Card>
  );
};

export default AssignmentCard;
