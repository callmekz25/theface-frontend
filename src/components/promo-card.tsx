type props = {
  title?: string;
  url: string;
  slug?: string;
};
export function PromoCard({ title, url, slug }: props) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img
        loading="lazy"
        src={url}
        alt={title}
        className="ư-full h-full object-cover"
      />
    </div>
  );
}
