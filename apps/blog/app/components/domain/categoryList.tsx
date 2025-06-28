import { getCategories } from "~/mdx/posts";

export function CategoryList() {
  const categories = getCategories();

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold">カテゴリ</h2>
      <div className="[&::-webkit-scrollbar-track]:bg-base/20 flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-secondary/50 hover:[&::-webkit-scrollbar-thumb]:bg-secondary/70 [&::-webkit-scrollbar]:h-2">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/categories/${category.id}`}
            className="hover:bg-deep inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
          >
            {category.name}
            <span className="bg-base ml-2 rounded-full px-2 py-0.5 text-xs text-white">
              {category.posts.length}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
