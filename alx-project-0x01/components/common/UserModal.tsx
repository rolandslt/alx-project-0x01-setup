// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<Partial<UserData>>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(), // temporary ID
      ...(formData as UserData),
    };
    onAddUser(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        <div className="space-y-4">
          <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" />
          <input name="username" onChange={handleChange} placeholder="Username" className="w-full border p-2 rounded" />
          <input name="email" onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" />
          <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" />
          <input name="website" onChange={handleChange} placeholder="Website" className="w-full border p-2 rounded" />
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
