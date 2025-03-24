
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Student } from '../data/mockData';
import { GraduationCap, Mail, Star } from 'lucide-react';

interface ProfileCardProps {
  student: Student;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ student }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pb-8">
        <CardTitle className="flex justify-center">Student Profile</CardTitle>
      </CardHeader>
      <div className="flex justify-center -mt-8">
        <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-900">
          <AvatarImage src={student.avatarUrl} alt={student.name} />
          <AvatarFallback className="text-2xl">{student.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="pt-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">{student.name}</h2>
          <p className="text-muted-foreground">{student.id}</p>
        </div>
        
        <div className="space-y-3 mt-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{student.major}</p>
              <p className="text-xs text-muted-foreground">{student.year} Year</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm">{student.email}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">GPA: {student.gpa.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground">Credits: {student.credits}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-sm font-medium mb-2">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary p-2 rounded-md text-center">
              <p className="text-xs text-muted-foreground">Courses</p>
              <p className="text-lg font-bold">5</p>
            </div>
            <div className="bg-secondary p-2 rounded-md text-center">
              <p className="text-xs text-muted-foreground">Assignments</p>
              <p className="text-lg font-bold">12</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
