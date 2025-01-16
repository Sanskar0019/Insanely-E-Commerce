//@ts-ignore
const CategoryCard = ({ imageUrl, title }) => {
  return (
    <div
      className="w-64 border rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg border-4 border-primary-600"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full"
      />
      <h3 className="text-lg font-semibold text-primary-600 p-4 text-center sora-CategoryCard border-t-4 border-primary-600">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
