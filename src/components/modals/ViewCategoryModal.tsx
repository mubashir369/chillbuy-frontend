"use client";

import ModalWrapper from "./ModalWrapper";
import Image from "next/image";

interface SubCategory {
  name: string;
  image: string;
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
}

export default function ViewCategoryModal({ category, onClose }: Props) {
  return (
    <ModalWrapper onClose={onClose}>
      <h3 className="text-xl font-bold mb-4">{category.name}</h3>
      <p className="mb-2">Subcategories:</p>
      <ul className="mb-4">
        {category.subcategories.map((sub, i) => (
          <li key={i} className="flex items-center gap-2 mb-1">
            <Image src={sub.image} alt={sub.name} width={24} height={24} className="rounded" />
            {sub.name}
          </li>
        ))}
      </ul>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        onClick={onClose}
      >
        Close
      </button>
    </ModalWrapper>
  );
}
