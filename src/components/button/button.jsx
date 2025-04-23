export default function Button({ text, className = "", color = "white" }) {
  return (
    <button
      className={`group relative mt-4 flex items-center gap-1 text-sm font-medium ${className}`}
    >
      {text}
      <span
        className="block w-6 h-px transition-all duration-500 group-hover:w-0 origin-right"
        style={{ backgroundColor: color }}
      ></span>
      <span
        className="absolute bottom-0 left-0 w-0 h-px transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: color }}
      ></span>
    </button>
  );
}
