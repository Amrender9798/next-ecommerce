const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Two routes available</h1>
      <div className="space-y-2 text-2xl">
        <a href="/catalog" className="block text-blue-500 hover:underline">
          /catalog
        </a>
        <a href="/settings" className="block text-blue-500 hover:underline">
          /settings
        </a>
      </div>
    </div>
  );
};

export default Page;
