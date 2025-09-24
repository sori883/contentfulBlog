import { getCategories } from "@/features/posts";

export function CategoryList() {
  const categories = getCategories();

  return (
    <div className="mb-8">
      <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/categories/${category.id}`}
            className="bg-theme hover:bg-theme-hover text-theme-secondary inline-flex flex-shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200"
          >
            # {category.name}
            <span className="bg-base ml-2 rounded-full px-2 py-0.5 text-xs">
              {category.posts.length}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
