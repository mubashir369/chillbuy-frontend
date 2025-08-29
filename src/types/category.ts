export interface SubCategory {
  name: string;
  image: string;
}

export interface Category {
  _id: string;
  name: string;
  image: string;
  subcategories: SubCategory[];
  status?: string;
  createdAt?: string; 
  updatedAt?: string; 
}


export interface NewCategory {
  name: string;
  image: string;
  subcategories: SubCategory[];
}
