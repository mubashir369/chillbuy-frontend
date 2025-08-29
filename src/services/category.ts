import apiClient from "./apiClient";
import { Category, NewCategory } from "@/types/category";

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
  const res = await apiClient.get("/categories");
  return res.data;
};

// Create category (with image upload support)
export const createCategory = async (
  category?: NewCategory, // make it optional
  file?: File
): Promise<Category> => {
  if (!category) {
    throw new Error("Category data is missing");
  }

  const formData = new FormData();

  // main category name
  if (!category.name) {
    throw new Error("Category name is required");
  }
  formData.append("name", category.name);

  // main category image
  if (file) {
    formData.append("image", file);
  }

  // subcategories
  if (category.subcategories) {
    formData.append("subcategories", JSON.stringify(category.subcategories));
  }

  const res = await apiClient.post("/categories", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

// Update category (with optional image upload)
export const updateCategory = async (
  id: string,
  category: Partial<Category>,
  file?: File
): Promise<Category> => {
  const formData = new FormData();

  if (category.name) formData.append("name", category.name);
  if (category.status) formData.append("status", category.status);

  if (file) {
    formData.append("image", file);
  }

  if (category.subcategories) {
    category.subcategories.forEach((sub, index) => {
      if (sub.name) {
        formData.append(`subcategories[${index}][name]`, sub.name);
      }
      if ((sub as any).imageFile) {
        formData.append(`subcategories[${index}][image]`, (sub as any).imageFile);
      }
    });
  }

  const res = await apiClient.put(`/categories/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};


// Delete category
export const deleteCategory = async (id: string) => {
  const res = await apiClient.delete(`/categories/${id}`);
  return res.data;
};
