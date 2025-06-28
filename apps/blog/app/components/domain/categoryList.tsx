import { getCategories } from "~/mdx/posts";

export function CategoryList() {
  const categories = getCategories();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">カテゴリ</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-base/20 [&::-webkit-scrollbar-thumb]:bg-secondary/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-secondary/70">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/categories/${category.id}`}
            className="inline-flex items-center px-4 py-2 rounded-full text-white bg-secondary text-sm font-medium hover:bg-deep transition-colors duration-200 whitespace-nowrap flex-shrink-0" 
          >
            {category.name}
            <span className="ml-2 px-2 py-0.5 text-xs bg-base text-white rounded-full">
              {category.posts.length}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}