export function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Brand Ambassador"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              THE FACE SHOP WITH WORWOO
            </h2>
            <p className="text-lg font-semibold text-green-700 mb-8">
              ĐẠI BỘ THƯƠNG HIỆU TOÀN CẦU
            </p>

            {/* Featured Products */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Product 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    Premium Sunscreen SPF 50
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Chống nắng hiệu quả với công thức nhẹ
                  </p>
                  <p className="text-green-700 font-bold mt-2">229.000₫</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Product 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    Hydrating Essence 150ml
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tinh chất dưỡng ẩm cao cấp
                  </p>
                  <p className="text-green-700 font-bold mt-2">299.000₫</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
