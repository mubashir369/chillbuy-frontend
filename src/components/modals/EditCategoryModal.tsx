"use client";

import { useState } from "react";
import ModalWrapper from "./ModalWrapper";

interface SubCategory {
  name: string;
  image?: string;
}

interface Category {
  _id: string;
  name: string;
  image: string;
  subcategories: SubCategory[];
}

interface Props {
  category: Category;
  onClose: () => void;
  onSave: (category: Category) => void;
}

export default function EditCategoryModal({ category, onClose, onSave }: Props) {
  const [name, setName] = useState(category.name);
  const [image, setImage] = useState(category.image);
  const [subcategories, setSubcategories] = useState<SubCategory[]>(category.subcategories);

  const handleSave = () => {
    onSave({ ...category, name, image, subcategories });
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <h3 className="text-xl font-bold mb-4">Edit Category</h3>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Category Name"
          className="border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category Image URL"
          className="border px-3 py-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      {/* Save button */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </ModalWrapper>
  );
}
