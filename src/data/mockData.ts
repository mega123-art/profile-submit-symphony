
export interface Student {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  major: string;
  year: string;
  gpa: number;
  credits: number;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'completed' | 'in-progress' | 'pending' | 'late';
  grade?: number;
  description: string;
  progress: number;
}

export const studentData: Student = {
  id: '123456',
  name: 'Alex Johnson',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  email: 'alex.johnson@university.edu',
  major: 'Computer Science',
  year: 'Junior',
  gpa: 3.8,
  credits: 78
};

export const assignmentsData: Assignment[] = [
  {
    id: '1',
    title: 'Research Paper on AI Ethics',
    course: 'PHIL 302: Ethics in Technology',
    dueDate: '2023-11-15',
    status: 'completed',
    grade: 92,
    description: 'A 10-page research paper exploring the ethical implications of AI in healthcare.',
    progress: 100
  },
  {
    id: '2',
    title: 'Database Design Project',
    course: 'CS 440: Database Systems',
    dueDate: '2023-11-20',
    status: 'in-progress',
    description: 'Design and implement a normalized database for a hospital management system.',
    progress: 65
  },
  {
    id: '3',
    title: 'Linear Algebra Problem Set',
    course: 'MATH 240: Linear Algebra',
    dueDate: '2023-11-12',
    status: 'pending',
    description: 'Complete problems 1-20 in Chapter 5 on eigenvalues and eigenvectors.',
    progress: 0
  },
  {
    id: '4',
    title: 'UI/UX Case Study',
    course: 'DES 310: User Experience Design',
    dueDate: '2023-11-01',
    status: 'late',
    description: 'Conduct a case study on the usability of a popular mobile application.',
    progress: 40
  },
  {
    id: '5',
    title: 'Data Structures Implementation',
    course: 'CS 310: Data Structures',
    dueDate: '2023-11-25',
    status: 'in-progress',
    description: 'Implement a red-black tree and analyze its performance.',
    progress: 30
  },
  {
    id: '6',
    title: 'Network Security Analysis',
    course: 'CS 460: Network Security',
    dueDate: '2023-12-05',
    status: 'pending',
    description: 'Analyze the security vulnerabilities in a given network architecture.',
    progress: 0
  }
];
