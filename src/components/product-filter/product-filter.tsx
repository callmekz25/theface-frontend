import { PRICE_FILTER } from '@/constants/filter-constants';
import { ChevronUpIcon, SearchIcon } from 'lucide-react';
import React from 'react';

export const ProductFilter = () => {
  const [toggle, setToggle] = React.useState({
    price: true,
    brand: true,
    category: true,
  });

  const handleToggle = (key: keyof typeof toggle) => {
    setToggle((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-65.75">
      <div className="flex flex-col">
        <div className="rounded-full search-box  border py-2 px-2.75 flex items-center mb-2.5">
          <SearchIcon />
          <input
            type="text"
            placeholder="Tìm kiếm trong bộ sưu tập"
            style={{}}
            className="border-none  outline-none px-1 text-sm w-full"
          />
        </div>

        {/* PRICE */}
        <div>
          <div className="flex items-center justify-between py-3 pr-10">
            <span className="text-sm font-bold">Giá sản phẩm</span>
            <button
              className="hover:cursor-pointer"
              onClick={() => handleToggle('price')}
            >
              <ChevronUpIcon
                className={`size-7 transition ${!toggle.price && 'rotate-180'}`}
              />
            </button>
          </div>

          <div
            className={`flex flex-col gap-4 text-sm pr-4 overflow-hidden transition-all duration-300 ${
              toggle.price ? 'max-h-60 pb-3 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {PRICE_FILTER.map((pf) => (
              <label
                key={pf.label}
                htmlFor={pf.label}
                className="flex items-center cursor-pointer"
              >
                <input
                  className="round-checkbox"
                  type="checkbox"
                  id={pf.label}
                />
                <span className="px-2">{pf.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* BRAND */}
        <div>
          <div className="flex items-center justify-between py-3 pr-10">
            <span className="text-sm font-bold">Dòng sản phẩm</span>
            <button
              className="hover:cursor-pointer"
              onClick={() => handleToggle('brand')}
            >
              <ChevronUpIcon
                className={`size-7 transition ${!toggle.brand && 'rotate-180'}`}
              />
            </button>
          </div>

          <div
            className={`flex flex-col gap-4 text-sm pr-4 overflow-hidden transition-all duration-300 ${
              toggle.brand ? 'max-h-60 pb-3 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {PRICE_FILTER.map((pf) => (
              <label
                key={pf.label}
                htmlFor={pf.label}
                className="flex items-center cursor-pointer"
              >
                <input className="round-checkbox" type="checkbox" />
                <span className="px-2">{pf.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between py-3 pr-10">
            <span className="text-sm font-bold">Loại sản phẩm</span>
            <button
              className="hover:cursor-pointer"
              onClick={() => handleToggle('category')}
            >
              <ChevronUpIcon
                className={`size-7 transition ${!toggle.category && 'rotate-180'}`}
              />
            </button>
          </div>

          <div
            className={`flex flex-col gap-4 text-sm pr-4 overflow-hidden transition-all duration-300 ${
              toggle.category
                ? 'max-h-60 pb-3 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            {PRICE_FILTER.map((pf) => (
              <label
                key={pf.label}
                htmlFor={pf.label}
                className="flex items-center cursor-pointer"
              >
                <input className="round-checkbox" type="checkbox" />
                <span className="px-2">{pf.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
