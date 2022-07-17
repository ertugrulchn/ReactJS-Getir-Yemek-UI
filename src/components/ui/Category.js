export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center group text-center p-4 gap-y-2 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-sm border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-brand-color tracking-tighter">
        {title}
      </span>
    </a>
  );
}
