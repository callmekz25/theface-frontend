import { ProductCard } from '@/components/product-card/product-card';
import { ProductFilter } from '@/components/product-filter/product-filter';
import ButtonAnimation from '@/components/ui/button-animation';
import { useGetAllProducts } from '@/hooks/use-product/use-products';
import React from 'react';
import { useParams } from 'react-router-dom';

export const CollectionDetail = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGetAllProducts({
    collections: [slug!],
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="max-w-325 mx-auto mb-10">
      <div className="mt-8">
        <h2 className=" uppercase font-bold text-3xl mb-3.75">
          Trang điểm mặt
        </h2>
      </div>
      <div className="flex mt-6">
        <div className="flex-[0_0_25%]">
          <ProductFilter />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2.5">
            <span>37 Kết quả</span>
            <div className="flex items-center gap-2">
              <span>Lọc theo</span>
              <span className=" font-bold">Tất cả</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-y-2.5">
            {data &&
              data.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="lg:flex-[0_0_25%] px-1.25 lg:max-w-[25%] md:flex-[0_0_33.333%] md:max-w-[33.3333%] flex-[0_0_50%] max-w-[50%]"
                  >
                    <ProductCard product={p} />
                  </div>
                );
              })}
          </div>
          <div className="flex items-center justify-center mt-7.5">
            <ButtonAnimation title="Xem thêm sản phẩm" />
          </div>
        </div>
      </div>
    </div>
  );
};
