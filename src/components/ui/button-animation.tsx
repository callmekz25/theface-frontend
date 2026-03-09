interface Props {
  title?: string;
}
export default function ButtonAnimation({ title = 'Xem tất cả' }: Props) {
  return (
    <button
      className="relative overflow-hidden hover:cursor-pointer min-w-50 rounded-full bg-white text-sm  px-4 py-2 font-bold group"
      style={{
        border: '2px solid var(--primary)',
      }}
    >
      <span
        style={{
          background: 'var(--primary)',
        }}
        className="absolute inset-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
      ></span>

      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {title}
      </span>
    </button>
  );
}
