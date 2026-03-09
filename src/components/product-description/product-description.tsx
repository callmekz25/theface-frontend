interface Props {
  description?: string;
}
export function ProductDescription({ description }: Props) {
  return (
    <div className="flex flex-col lg:flex-row my-12.5">
      <div className="lg:flex-[0_0_33%] mb-6.25 px-3.75">
        <h2 className="text-2xl font-bold">Giới thiệu</h2>
      </div>
      <div className="lg:flex-1 px-3.75">{description ?? 'Null'}</div>
    </div>
  );
}
