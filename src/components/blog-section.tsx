export function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Cách chọn kem dưỡng da phù hợp với da của bạn",
      excerpt: "Tìm hiểu cách lựa chọn kem dưỡng da...",
      image: "/placeholder.svg?height=200&width=300",
      category: "Skincare Tips",
    },
    {
      id: 2,
      title: "Top 5 sản phẩm chăm sóc da hot nhất 2024",
      excerpt: "Khám phá những sản phẩm được yêu thích nhất...",
      image: "/placeholder.svg?height=200&width=300",
      category: "Product Review",
    },
    {
      id: 3,
      title: "Quy trình chăm sóc da tối ưu mỗi ngày",
      excerpt: "Hướng dẫn chi tiết về cách chăm sóc da...",
      image: "/placeholder.svg?height=200&width=300",
      category: "Routine Guide",
    },
    {
      id: 4,
      title: "Nguyên liệu thiên nhiên tốt cho làn da",
      excerpt: "Tìm hiểu về các thành phần thiên nhiên...",
      image: "/placeholder.svg?height=200&width=300",
      category: "Ingredients",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            TƯ VẤN CHUYÊN SÂU
          </h2>
          <a
            href="#"
            className="text-green-700 font-semibold hover:text-green-800"
          >
            Xem Thêm →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-green-700">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
