import { MinusIcon, PlusIcon } from 'lucide-react';
import React from 'react';

export const ProductCart = () => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <div className="">
          <input type="checkbox" id="1" name="`" className="round-checkbox" />
        </div>
        <div className="flex pl-2">
          <div className="relative size-20 rounded mr-5 shrink-0 overflow-hidden">
            <img
              src="https://image.hsv-tech.io/150x0/tfs/common/d26ecfcf-8672-4631-91a6-904344d5ac7b.webp"
              className="object-cover w-full h-full"
              alt=""
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(200,200,200,0.1), rgba(50,50,50,0.1))',
              }}
            />
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex items-center">
              <div className="leading-5 line-clamp-2 mr-2.5 font-medium">
                Sữa Rửa Mặt Làm Sạch Da THE FACE SHOP Rice Water Bright
                Cleansing Foam 300ml
              </div>
              <button className="size-5.5 hover:cursor-pointer rounded-full bg-gray-200 flex items-center justify-center shrink-0 button-remove-cart transition-all duration-300">
                <MinusIcon className="size-4" />
              </button>
            </div>
            <div className="mt-1 font-medium">SKU: 2939213921</div>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-3 rounded-full border border-gray-200 w-fit">
                <button className="px-2 flex items-center justify-center font-semibold">
                  <MinusIcon className="size-3" />
                </button>
                <span className=" text-center py-1 text-sm font-medium">1</span>
                <button className="px-2 hover:cursor-pointer flex items-center justify-center">
                  <PlusIcon className="size-3" />
                </button>
              </div>
              <div className="font-bold">449.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
