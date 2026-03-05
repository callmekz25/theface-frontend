import { HeroSection } from '@/components/hero-section';
import { DealSection } from '@/components/deal-section';
import { PromoCard } from '@/components/promo-card';
import { TestimonialSection } from '@/components/testimonial-section';
import { BlogSection } from '@/components/blog-section';
import {
  dealProducts,
  topPickProducts,
  bodyCareProducts,
  skinCareProducts,
} from '@/lib/products';
import BaseSlider from '@/components/base-slider';
import { ProductSection } from '../components/product-section/product-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="bg-white">
        {/* Hero Section */}
        <HeroSection />
        <div className="max-w-325 mx-auto py-10">
          {/* Deal Section - Buy 2 for 99K */}
          <DealSection
            title="FLASH DEAL - MUA 2 CHỈ TỪ 99K"
            products={dealProducts}
            backgroundColor="yellow"
          />
        </div>

        <div className="max-w-325 mx-auto py-10">
          {/* Top Picks Section */}
          <ProductSection
            title="TOP LỰA CHỌN KHÔNG THỂ THIẾU"
            products={topPickProducts}
          />
        </div>

        <div className="max-w-325 mx-auto py-10">
          {/* Promo Cards */}
          <BaseSlider slidesPerView={3} space={30}>
            <PromoCard url="https://image.hsv-tech.io/1000x0/tfs/common/6fde01da-d545-435d-ab71-50ed3184afe0.webp" />
            <PromoCard url="https://image.hsv-tech.io/1000x0/tfs/common/3c052fa0-8e30-4560-b443-595c0b86c6ba.webp" />
            <PromoCard url="https://image.hsv-tech.io/1000x0/tfs/common/4a74ac88-0c41-4a3d-91f8-a3a115813187.webp" />
          </BaseSlider>
        </div>

        <div className="max-w-325 mx-auto py-10">
          {/* Skincare Products */}
          <ProductSection
            title="SẢN PHẨM NỔI BẬT"
            products={skinCareProducts}
          />
        </div>

        {/* Testimonial Section */}
        <TestimonialSection />

        <div className="max-w-325 mx-auto py-10">
          {/* Body Care Products */}
          <ProductSection title="CHĂM SÓC BODY" products={bodyCareProducts} />
        </div>

        <div className="max-w-325 mx-auto">
          {/* Blog Section */}
          <BlogSection />
        </div>
      </main>
    </div>
  );
}
