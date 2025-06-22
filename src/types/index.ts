export interface Puja {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  date: string;
  createdAt: number;
}

export interface Chadhava {
  id: string;
  image: string;
  title: string;
  description: string;
  templeName: string;
  date: string;
  createdAt: number;
}

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
}

export type PageType = 'home' | 'poojas' | 'chadhava' | 'admin';