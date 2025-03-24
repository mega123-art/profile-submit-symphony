
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Assignment } from '../data/mockData';
import AssignmentCard from './AssignmentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AssignmentListProps {
  assignments: Assignment[];
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignments }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filteredAssignments = () => {
    if (activeTab === 'all') return assignments;
    return assignments.filter(a => a.status === activeTab);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAssignments().map(assignment => (
                <AssignmentCard key={assignment.id} assignment={assignment} />
              ))}
              
              {filteredAssignments().length === 0 && (
                <div className="col-span-2 text-center py-10 text-muted-foreground">
                  No assignments found in this category.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AssignmentList;
