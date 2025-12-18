
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Soda' | 'Juice' | 'Water' | 'Energy';
  imageUrl: string;
}

export interface InquiryForm {
  fullName: string;
  city: string;
  state: string;
  phone: string;
  currentBusiness: string;
  interest: 'Distributorship' | 'Franchise';
  budget: string;
}

export enum Page {
  Home = 'home',
  Products = 'products',
  Franchise = 'franchise',
  About = 'about',
  Contact = 'contact'
}
