declare global {
  interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    role: string;
    time: string;
    minutesToRead: number;
    content?: string;
    tags?: string[];
    tools?: string[];
  }

  interface Testimonial {
    id: number;
    text: string;
    name: string;
    title: string;
    image: string;
  }

  interface Experience {
    company: string;
    role: string;
    description: string;
    dates: string;
  }
}

export {};
