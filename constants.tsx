
import React from 'react';
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Hard Surface Modeling Masterclass',
    category: 'Modeling',
    level: 'Advanced',
    duration: '24 Hours',
    image: 'https://picsum.photos/seed/tech1/800/600',
    description: 'Learn industry-standard techniques for complex machinery and robotic design.'
  },
  {
    id: '2',
    title: 'Procedural Texturing with Nodes',
    category: 'Texturing',
    level: 'Intermediate',
    duration: '12 Hours',
    image: 'https://picsum.photos/seed/tech2/800/600',
    description: 'Master the art of node-based material creation for hyper-realistic renders.'
  },
  {
    id: '3',
    title: 'Cinematic Lighting Theory',
    category: 'Lighting',
    level: 'Beginner',
    duration: '8 Hours',
    image: 'https://picsum.photos/seed/tech3/800/600',
    description: 'Understand how light behaves in 3D space to tell compelling visual stories.'
  },
  {
    id: '4',
    title: 'Character Rigging & Motion',
    category: 'Animation',
    level: 'Advanced',
    duration: '30 Hours',
    image: 'https://picsum.photos/seed/tech4/800/600',
    description: 'Bring your creations to life with professional skeleton rigging and fluid motion.'
  }
];
