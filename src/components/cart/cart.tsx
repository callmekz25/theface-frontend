import { XIcon } from 'lucide-react';
import React from 'react';
import { ProductCart } from './product-cart';

interface Props {
  open: boolean;
  onClose: () => void;
}
export const Cart = ({ open, onClose }: Props) => {
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);
  return (
    <div className="">
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />
      <div
        className={`fixed top-0 right-0 h-full  bg-white z-50 shadow-xl 
        transform transition-transform duration-400 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="lg:w-122.5 md:w-130 w-screen flex flex-col h-full">
          <div className="py-4 px-6 flex items-center justify-between">
            <span className="font-bold text-2xl">Giỏ hàng của tôi</span>
            <button className="hover:cursor-pointer" onClick={onClose}>
              <XIcon className="size-7" />
            </button>
          </div>
          <hr className="text-gray-200" />
          <div className="flex-1 overflow-y-auto p-5">
            <div className="px-5.75">
              <label
                htmlFor="select-all"
                className="flex text-sm items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="select-all"
                  name="select-all"
                  className="round-checkbox"
                />
                <span>Chọn tất cả</span>
              </label>
              <hr className="text-gray-200 my-4" />
              <div className="flex flex-col mt-6 gap-4">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="px-5.75">
              <hr className="text-gray-200 my-4" />
              <div className="flex flex-col gap-3.75">
                <div className="flex font-bold text-sm items-center justify-between">
                  <span>Tổng giá trị đơn hàng</span>
                  <span>3.725.000đ</span>
                </div>
                <p className="text-xs">
                  Bạn có thể xem các chương trình khuyến mãi ở màn hình kế tiếp
                </p>
                <button
                  style={{
                    background: 'var(--primary)',
                  }}
                  className="uppercase font-bold py-2.75 px-6.25 text-[16px] h-12.5 rounded-full text-white"
                >
                  Tiếp tục với hình thức giao hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
