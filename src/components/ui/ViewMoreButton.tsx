import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ViewMoreButtonProps {
  category: string;
  sort?: string;
  label?: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  category,
  sort = 'default',
  label = 'View More',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop?category=${category}&sort=${sort}`);
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 text-lg font-medium text-white bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-md hover:shadow-lg hover:from-primary-500 hover:to-primary-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      {label}
    </button>
  );
};

export default ViewMoreButton;
