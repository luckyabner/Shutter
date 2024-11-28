import Link from "next/link";

export default async function Categories({ categories }) {

  return (
    <div className="container mx-auto px-4">
      <div className=" flex mt-12 items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.Prefix}`}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square p-6 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.Prefix}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-lg transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
