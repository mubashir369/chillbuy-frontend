"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/services/category";

import AddCategoryModal from "@/components/modals/AddCategoryModal";
import EditCategoryModal from "@/components/modals/EditCategoryModal";
import ModalWrapper from "@/components/modals/ModalWrapper";
import { Category, NewCategory, SubCategory } from "@/types/category";

export default function ShopCategoryTable() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Fetch categories
const fetchCategories = async () => {
  setLoading(true);
  try {
    const data = await getCategories();
    // Transform to ensure createdAt and updatedAt exist
    const formatted: Category[] = data.map(cat => ({
      ...cat,
      createdAt: cat.createdAt || new Date().toISOString(),
      updatedAt: cat.updatedAt || new Date().toISOString(),
      status: cat.status || "Active",
    }));
    setCategories(formatted);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCategories();
  }, []);

  // Handlers
  const handleView = (cat: Category) => {
    setSelectedCategory(cat);
    setViewModalOpen(true);
  };

  const handleEdit = (cat: Category) => {
    setSelectedCategory(cat);
    setEditModalOpen(true);
  };

  const handleDelete = (cat: Category) => {
    setSelectedCategory(cat);
    setDeleteModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setAddModalOpen(true);
  };

  // Add category
  const handleAddCategory = async (newCat: NewCategory) => {
    try {
      await createCategory(newCat);
      setAddModalOpen(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit category
  const handleSaveCategory = async (cat: Category) => {
    try {
      await updateCategory(cat._id, cat);
      setEditModalOpen(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete category
  const handleConfirmDelete = async () => {
    if (!selectedCategory) return;
    try {
      await deleteCategory(selectedCategory._id);
      setDeleteModalOpen(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-dark">Shop Categories</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={handleAdd}
        >
          Add Category
        </button>
      </div>

      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <table className="min-w-full bg-gray-50 border border-gray-200">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Created</th>
              <th className="py-2 px-4 text-left">Updated</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={48}
                    height={48}
                    className="rounded"
                  />
                </td>
                <td className="py-2 px-4">{cat.name}</td>
            <td className="py-2 px-4">{cat.createdAt ? new Date(cat.createdAt).toLocaleDateString() : "-"}</td>
<td className="py-2 px-4">{cat.updatedAt ? new Date(cat.updatedAt).toLocaleDateString() : "-"}</td>

                <td className="py-2 px-4">
  <select
    value={cat.status || "Active"}
    onChange={async (e) => {
      const newStatus = e.target.value;
      try {
        await updateCategory(cat._id, { ...cat, status: newStatus });
        fetchCategories(); // refresh the table
      } catch (err) {
        console.error(err);
      }
    }}
  className={`border px-2 py-1 rounded ${cat.status === "Active" ? "text-green-600" : "text-red-600"}`}

  >
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
  </select>
</td>
                <td className="py-2 px-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    onClick={() => handleView(cat)}
                  >
                    View
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    onClick={() => handleEdit(cat)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(cat)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* View Modal */}
      {viewModalOpen && selectedCategory && (
        <ModalWrapper onClose={() => setViewModalOpen(false)}>
          <h3 className="text-xl font-bold mb-4">{selectedCategory.name}</h3>
          <p className="mb-2">Subcategories:</p>
          <ul className="mb-4">
            {selectedCategory.subcategories.map((sub, i) => (
              <li key={i} className="flex items-center gap-2 mb-1">
                <Image src={sub.image} alt={sub.name} width={24} height={24} className="rounded" />
                {sub.name}
              </li>
            ))}
          </ul>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={() => setViewModalOpen(false)}
          >
            Close
          </button>
        </ModalWrapper>
      )}

      {/* Add Category Modal */}
      {addModalOpen && (
        <AddCategoryModal
          onClose={() => setAddModalOpen(false)}
          onAdd={handleAddCategory}
        />
      )}

      {/* Edit Category Modal */}
      {editModalOpen && selectedCategory && (
        <EditCategoryModal
          category={selectedCategory}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveCategory}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && selectedCategory && (
        <ModalWrapper onClose={() => setDeleteModalOpen(false)}>
          <p className="mb-4">
            Are you sure you want to delete <strong>{selectedCategory.name}</strong>?
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}
