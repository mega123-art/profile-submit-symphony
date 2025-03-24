
import React from 'react';
import { Bell, Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Student } from '../data/mockData';

interface NavbarProps {
  student: Student;
}

const Navbar: React.FC<NavbarProps> = ({ student }) => {
  return (
    <nav className="w-full bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
      <div className="dashboard-container">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Studify
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1.5 bg-red-500 rounded-full h-2 w-2"></span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              <Calendar className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-700">
                <AvatarImage src={student.avatarUrl} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden sm:inline-block">{student.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
