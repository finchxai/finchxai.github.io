interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p className="uppercase tracking-[0.45em] text-sm text-emerald-400">
        {eyebrow}
      </p>

      <h2 className="mt-6 text-5xl font-bold text-white">{title}</h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">{description}</p>
      )}
    </div>
  );
}
