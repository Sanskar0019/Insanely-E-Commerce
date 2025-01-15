import React from 'react';

interface ViewMoreButtonProps {
  onClick?: () => void;
  label?: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  onClick,
  label = "View More",
}) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-lg font-medium text-white bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-md hover:shadow-lg hover:from-primary-500 hover:to-primary-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    >
      {label}
    </button>
  );
};

export default ViewMoreButton;
