import { type Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card/product-card';
import BaseSlider from '@/components/base-slider';
import ButtonAnimation from '../ui/button-animation';

interface Props {
  title: string;
  products: Product[];
}

export function ProductSection({ title, products }: Props) {
  return (
    <section className={` py-8 px-4 rounded-4xl`}>
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
