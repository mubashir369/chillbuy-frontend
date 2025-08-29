"use client";

interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
  width?: string; // <-- optional width prop
}

export default function ModalWrapper({ onClose, children, width }: ModalWrapperProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Blurred background */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className={`relative bg-white rounded-lg p-6 overflow-y-auto max-h-[80vh] ${width ? width : "max-w-lg"} w-full`}
      >
        {children}
      </div>
    </div>
  );
}
