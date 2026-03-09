import { ProductDescription } from '@/components/product-description/product-description';
import { ProductGallery } from '@/components/product-gallery/product-gallery';
import { ProductInfo } from '@/components/product-info/product-info';
import { ProductReviews } from '@/components/product-reviews/product-reviews';
import { useGetProductBySlug } from '@/hooks/use-product/use-products';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useGetProductBySlug(slug!);

  // Mock product images
  const productImages = [
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
    '/placeholder.svg?height=500&width=500',
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-325 mx-auto px-4 py-8">
        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Gallery */}
          <ProductGallery images={productImages} productName="abc" />

          {/* Product Info */}
          <ProductInfo product={data!} />
        </div>

        <hr className="text-gray-200" />
        <ProductDescription description={data?.description} />

        {/* Reviews Section */}
        <hr className="text-gray-200" />
        <ProductReviews />

        <hr className="text-gray-200" />

        {/* Related Products */}
        {/* <section className="mb-16">
          <RelatedProducts products={dealProducts} />
        </section> */}
      </div>
    </div>
  );
};
export default ProductDetail;
