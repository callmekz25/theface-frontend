import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Props {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  const scroll = (direction: 'up' | 'down') => {
    const container = document.getElementById('thumbnail-scroll');
    if (container) {
      container.scrollBy({
        top: direction === 'down' ? 100 : -100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden aspect-square">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="object-cover"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => scroll('up')}
          className="p-1 hover:bg-gray-100 rounded transition"
          aria-label="Scroll up"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div
          id="thumbnail-scroll"
          className="flex flex-col gap-2 overflow-y-auto max-h-32"
        >
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-16 h-16 rounded border-2 overflow-hidden transition ${
                idx === selectedImage
                  ? 'border-orange-500'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${idx}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll('down')}
          className="p-1 hover:bg-gray-100 rounded transition"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
