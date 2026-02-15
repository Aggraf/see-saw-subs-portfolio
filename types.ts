
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year?: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}
