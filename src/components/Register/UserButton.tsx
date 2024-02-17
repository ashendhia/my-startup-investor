
const UserButton = ({ user, selectedUser, onSelectUser }: {
  user: string,
  selectedUser: string,
  onSelectUser: (user: string) => void
}) => {
  return (
    <button 
      onClick={() => onSelectUser(user)} 
      className={`${
        user === selectedUser ? "bg-black text-white font-bold" : "text-black bg-white"
      } w-1/2 py-2 rounded-md duration-300 ease-in-out`}
    >
      {user}
    </button>
  );
};

export default UserButton;
