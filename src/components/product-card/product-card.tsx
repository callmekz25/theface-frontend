import { Star } from 'lucide-react';
import type { IProduct } from '@/models/product.model';
import { Link } from 'react-router-dom';

interface Props {
  product: IProduct;
}

export function ProductCard({ product }: Props) {
  const variantDefault = product.variants.find((v) => v.default);
  return (
    <Link
      to={`/products/${product.slug}`}
      className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-400 "
    >
      {/* Product Image Container */}
      <div className="relative bg-gray-100 aspect-square overflow-hidden flex items-center justify-center">
        <img
          src="https://image.hsv-tech.io/400x0/tfs/common/cf407354-0ad3-4bc9-bf1c-ea2b07baa020.webp"
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h2 className="text-sm font-semibold uppercase text-center  line-clamp-2 mb-2">
          the face shop
        </h2>
        <h3 className="text-xs text-center leading-6 font-medium line-clamp-2 mb-2">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-sm font-bold">
            {variantDefault ? variantDefault.price.toLocaleString('vi-VN') : 0}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 text-xs">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < Math.round(4) ? 'fill-black text-black' : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-gray-600">(14)</span>
        </div>
      </div>
    </Link>
  );
}
