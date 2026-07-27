function Gutter({ lines }) {
  return (
    <div
      className="hidden sm:flex flex-col items-end pr-4 mr-4 border-r border-slate-700 text-slate-600 font-mono text-xs select-none"
      aria-hidden="true"
    >
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} className="leading-8">
          {i + 1}
        </span>
      ))}
    </div>
  );
}

export default Gutter;
