
import { Project, Testimonial } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vincent Doit Mourir',
    category: 'Long Métrage',
    description: 'Presented at the Cannes Film Festival - Semaine de la Critique. Subtitling and adaptation.',
    image: 'https://picsum.photos/seed/vincent/800/600',
    year: '2023'
  },
  {
    id: '2',
    title: 'La Peste',
    category: 'Série TV',
    description: '3 episodes for Canal+. Complex historical dialogue adaptation and subtitling.',
    image: 'https://picsum.photos/seed/pest/800/600',
    year: '2024'
  },
  {
    id: '3',
    title: 'Meurtre dans le Cantal',
    category: 'Téléfilm',
    description: 'Audiovisual adaptation for international broadcasting standards.',
    image: 'https://picsum.photos/seed/cantal/800/600',
    year: '2023'
  },
  {
    id: '4',
    title: 'Maitre de l’Air',
    category: 'Édition / Books',
    description: 'Translation of a 600+ page work for Michel Lafon.',
    image: 'https://picsum.photos/seed/maitre/800/600',
    year: '2022'
  },
  {
    id: '5',
    title: 'Scènes de Ménage',
    category: 'Comédie',
    description: 'Short format comedy adaptation for Libra Viveaudi Films.',
    image: 'https://picsum.photos/seed/scenes/800/600',
    year: '2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Laura delivers not just translation, but the soul of the script. Her work on 'Vincent Doit Mourir' was critical for our international premiere at Cannes.",
    author: "Production Lead",
    role: "Director",
    company: "Cannes Selection"
  },
  {
    id: 't2',
    quote: "Unfazed by tight post-production deadlines, See Saw Subs is our most reliable partner for multilingual broadcasting.",
    author: "Executive Producer",
    role: "Head of Localization",
    company: "Canal+"
  },
  {
    id: 't3',
    quote: "Her mastery of EZTitles and stylistic coherence on long-form texts is unparalleled in the French-English market.",
    author: "Michel Lafon",
    role: "Senior Editor",
    company: "Michel Lafon Publishing"
  }
];
