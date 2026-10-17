export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-extrabold text-navy-800 md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}
