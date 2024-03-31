"use client";

export default function HomePage({ products }) {
  console.log(products);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-blue-400 text-2xl">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-2xl">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover object-center"
            src={product.image}
            alt={product.category}
          />
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.category}
            </h2>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                {renderStars(product.rating.rate)}
              </span>
              <span className="text-gray-600 ml-2">{product.rating.count}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
