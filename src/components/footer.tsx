import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      {/* Newsletter */}
      <div className="bg-green-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Đăng ký nhận tin tức</h3>
              <p className="text-sm opacity-90">
                Nhận thông báo về các ưu đãi và sản phẩm mới
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 rounded text-gray-900 outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded font-semibold transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4">VỀ THE FACE SHOP</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Tuyên bố chính sách
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Liên hệ chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Thanh toán
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">DỊCH VỤ</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100">
                  Tìm cửa hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Tư vấn làm đẹp
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Chương trình khuyến mãi
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Gói thành viên
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">LIÊN HỆ</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>
                <strong>Hotline:</strong>
                <br />
                1800.1234
              </li>
              <li>
                <strong>Email:</strong>
                <br />
                support@thefaceshop.vn
              </li>
              <li className="flex gap-3 mt-4">
                <a href="#" className="hover:opacity-100">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:opacity-100">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:opacity-100">
                  <Youtube size={20} />
                </a>
                <a href="#" className="hover:opacity-100">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>&copy; 2024 The Face Shop Vietnam. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:opacity-100">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:opacity-100">
              Sơ đồ trang web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
