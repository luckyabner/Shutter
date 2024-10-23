import Link from "next/link";
import Photos from "./photos";

const fetchCategories = async (category) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/categories?category=${category}`); // 使用绝对URL
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();

  return data;
};

export default async function Categories({ category = '' }) {
  const categories = await fetchCategories(category); // 获取分类列表

  if (categories.length === 0) {
    return <Photos category={category} />;
  }

  return (
    <div>
      <div>
        {categories.map((category, index) => (
          <Link key={index} href={`/${category.Prefix}`}>{category.Prefix}</Link>
        ))}
      </div>
    </div>
  );
}
