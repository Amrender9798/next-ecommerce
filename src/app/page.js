import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Two routes available</h1>
      <div className="space-y-2 text-2xl">
        <Link href="/catalog" className="block text-blue-500 hover:underline">
          /catalog
        </Link>
        <Link href="/settings" className="block text-blue-500 hover:underline">
          /settings
        </Link>
      </div>
    </div>
  );
};

export default Page;
