
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

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  // Contenu : tableau de blocs. Chaque bloc est un string.
  // Préfixes : "## " = sous-titre, "> " = citation, "---" = séparateur
  // Tout le reste = paragraphe normal
  content: string[];
  coverGradient: string;
  categoryColor: string;
}
