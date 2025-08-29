export interface SubCategory {
  name: string;
  image?: string;       // URL from backend
  imageFile?: File | null; // file from frontend
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
  image?: string;        // URL from backend
  imageFile?: File | null; // main image file from frontend
  subcategories: SubCategory[];
  status?: "Active" | "Inactive";
}