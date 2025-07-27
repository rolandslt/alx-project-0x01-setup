import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">{user.address.city}, {user.address.street}</p>
      <p className="text-sm text-gray-500">{user.company.name}</p>
    </div>
  );
};

export default UserCard;
