"use client";

import { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import apiClient from "@/services/apiClient";

interface SubCategory {
  name: string;
  imageFile?: File | null;
  imagePreview?: string;
}

interface Props {
  onClose: () => void;
  onAdd: () => void; // directly call API inside modal
}

export default function AddCategoryModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
const handleAdd = async () => {
  const formData = new FormData();
  formData.append("name", name);
  if (imageFile) formData.append("image", imageFile);
  formData.append(
    "subcategories",
    JSON.stringify(subcategories.map((s) => ({ name: s.name })))
  );
  subcategories.forEach((s) => {
    if (s.imageFile) formData.append("subImages", s.imageFile);
  });

  try {
    await apiClient.post("/categories", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    onAdd(); // just refresh parent table
    onClose();
  } catch (err) {
    console.error(err);
  }
};


  const handleSubChange = (
    index: number,
    field: "name" | "imageFile",
    value: string | File | null
  ) => {
    const newSubs = [...subcategories];
    if (field === "name") {
      newSubs[index].name = value as string;
    } else {
      newSubs[index].imageFile = value as File | null;
      newSubs[index].imagePreview = value
        ? URL.createObjectURL(value as File)
        : undefined;
    }
    setSubcategories(newSubs);
  };

  const addSubCategory = () => {
    setSubcategories([...subcategories, { name: "", imageFile: null }]);
  };

  const removeSubCategory = (index: number) => {
    const newSubs = [...subcategories];
    newSubs.splice(index, 1);
    setSubcategories(newSubs);
  };

  return (
    <ModalWrapper onClose={onClose} width="max-w-3xl">
      <h3 className="text-2xl font-bold mb-6">Add Category</h3>

      {/* Category Name & Main Image */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Category Name"
          className="border px-3 py-2 rounded flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-col">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImageFile(e.target.files[0]);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 mt-2 object-cover rounded"
            />
          )}
        </div>
      </div>

      {/* Subcategories */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Subcategories</h4>
        {subcategories.map((sub, index) => (
          <div key={index} className="flex gap-3 items-center mb-2">
            <input
              type="text"
              placeholder="Name"
              className="border px-2 py-1 rounded flex-1"
              value={sub.name}
              onChange={(e) => handleSubChange(index, "name", e.target.value)}
            />
            <div className="flex flex-col">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleSubChange(
                    index,
                    "imageFile",
                    e.target.files?.[0] || null
                  )
                }
              />
              {sub.imagePreview && (
                <img
                  src={sub.imagePreview}
                  alt="Preview"
                  className="w-16 h-16 mt-1 object-cover rounded"
                />
              )}
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              onClick={() => removeSubCategory(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          onClick={addSubCategory}
        >
          Add Subcategory
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </ModalWrapper>
  );
}
