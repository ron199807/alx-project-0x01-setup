import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  if (!isOpen) return null

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  if (name.includes('.')) {
    const [parent, child, subChild] = name.split('.');

    setUser(prev => {
      // Handle different nesting levels with proper typing
      if (parent === 'address') {
        if (subChild) {
          // Handle address.geo.lat/lng
          return {
            ...prev,
            address: {
              ...prev.address,
              geo: {
                ...prev.address.geo,
                [subChild]: value
              }
            }
          };
        } else {
          // Handle address.street/city/etc
          return {
            ...prev,
            address: {
              ...prev.address,
              [child]: value
            }
          };
        }
      } else if (parent === 'company') {
        // Handle company fields
        return {
          ...prev,
          company: {
            ...prev.company,
            [child]: value
          }
        };
      }
      return prev; // fallback
    });
  } else {
    // Handle top-level fields
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center pt-35 items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Info */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Address Section */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                <input
                  type="text"
                  id="street"
                  name="address.street"
                  value={user.address.street}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Street address"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="address.city"
                  value={user.address.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City"
                />
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="pt-4 border-t">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Company</h3>
            <div>
              <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;