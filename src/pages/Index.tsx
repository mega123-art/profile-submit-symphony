
import React from 'react';
import Navbar from '@/components/Navbar';
import ProfileCard from '@/components/ProfileCard';
import AssignmentList from '@/components/AssignmentList';
import { studentData, assignmentsData } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar student={studentData} />
      
      <div className="dashboard-container py-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard student={studentData} />
          </div>
          
          <div className="lg:col-span-2">
            <AssignmentList assignments={assignmentsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
