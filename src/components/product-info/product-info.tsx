import React from 'react';
import {
  Star,
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  PackageIcon,
} from 'lucide-react';
import type { IProduct, IVariant } from '@/models/product.model';

interface Props {
  product: IProduct;
}

export function ProductInfo({ product }: Props) {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedVariant, setSelectedVariant] = React.useState<null | IVariant>(
    null,
  );

  React.useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      const defaultVariant = product.variants.find((v) => v.default);
      if (defaultVariant) {
        setSelectedVariant(defaultVariant);
      }
    }
  }, [product]);

  return (
    <div className="">
      {/* Product Title */}
      <div>
        <div className="my-4.5">
          <h1 className="text-lg font-bold">{product.title}</h1>
        </div>
        <div className="flex items-center gap-4 text-xs mb-2.5 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex gap-2 ">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-5 ${
                    i < Math.floor(4)
                      ? 'fill-black text-black'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm ">20 đánh giá</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <span className="font-bold">Xuất xứ:</span>
            <span>{product.origin}</span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <span className="font-bold">SKU:</span>
            <span>{selectedVariant?.sku}</span>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-[22px] font-bold ">
            {selectedVariant?.price}
          </span>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4 mt-7.5 flex-wrap">
        <div className="flex items-center gap-3 rounded-full border-2 border-gray-200 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center font-semibold"
          >
            <MinusIcon />
          </button>
          <span className="w-4 text-center py-2.5 text-lg font-bold">1</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <PlusIcon />
          </button>
        </div>
        <button className="flex flex-1 justify-center items-center font-bold gap-2 py-3.5 px-5.75 rounded-full bg-black text-white">
          <ShoppingCartIcon />
          <span>Thêm vào giỏ hàng</span>
        </button>
        <button
          style={{
            background: 'var(--primary)',
          }}
          className="flex  justify-center items-center font-bold  py-3.5 px-5.75 rounded-full bg-black text-white"
        >
          <span>Mua ngay</span>
        </button>
      </div>
      <div className="flex items-center text-sm gap-4 mt-8 justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <StarIcon />
          <p>
            Nhận <span className=" font-bold">HSV Point</span> cho mỗi lần mua
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheckIcon />
          <p>
            Cam kết <span className=" font-bold">hàng chính hãng</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <TruckIcon />
          <p>
            <span className=" font-bold">Miễn phí giao hàng</span> 24h
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PackageIcon />
          <p>
            Đổi/trả hàng trong <span className=" font-bold">7 ngày</span>
          </p>
        </div>
      </div>
    </div>
  );
}
