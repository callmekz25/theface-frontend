import { type Product } from '@/lib/products';
import { ProductCard } from './product-card/product-card';
import BaseSlider from './base-slider';
import ButtonAnimation from './ui/button-animation';

interface DealSectionProps {
  title: string;
  products: Product[];
  backgroundColor?: 'yellow' | 'white' | 'pink';
}

export function DealSection({
  title,
  products,
  backgroundColor = 'white',
}: DealSectionProps) {
  const bgColor = {
    yellow: 'bg-yellow-200',
    white: 'bg-white',
    pink: 'bg-pink-50',
  }[backgroundColor];

  return (
    <section className={`${bgColor} py-8 px-4 rounded-4xl`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-[26px] font-bold text-gray-900">{title}</h2>
        </div>

        <BaseSlider space={20} slidesPerView={5}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </BaseSlider>

        <div className="flex items-center justify-center mt-7.5">
          <ButtonAnimation />
        </div>
      </div>
    </section>
  );
}
