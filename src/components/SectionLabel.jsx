function SectionLabel({ tag }) {
  return (
    <div className="font-mono text-sm text-cyan-400 mb-6 flex items-center gap-2">
      <span className="text-violet-400">&lt;</span>
      {tag}
      <span className="text-violet-400">/&gt;</span>
    </div>
  );
}

export default SectionLabel;
