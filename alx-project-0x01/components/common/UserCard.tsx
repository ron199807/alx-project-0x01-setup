import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Username:</span> {username}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Website:</span> 
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {website}
        </a>
      </p>
      
      <div className="mt-4 border-t pt-2">
        <h3 className="font-semibold text-lg">Address</h3>
        <p className="text-gray-700">{address.street}, {address.suite}</p>
        <p className="text-gray-700">{address.city}, {address.zipcode}</p>
      </div>
      
      <div className="mt-4 border-t pt-2">
        <h3 className="font-semibold text-lg">Company</h3>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-gray-600 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;