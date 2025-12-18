
export interface Course {
  id: string;
  title: string;
  category: 'Modeling' | 'Texturing' | 'Lighting' | 'Animation';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
