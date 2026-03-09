'use client';

import { Star, ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpful: number;
}

interface Props {
  reviews: Review;
}

export function ProductReviews({ reviews }: Props) {
  const ratingBreakdown = {
    5: 45,
    4: 28,
    3: 15,
    2: 8,
    1: 4,
  };
  // Mock reviews
  const mockReviews = [
    {
      id: '1',
      author: 'Nâm NGUYỄN',
      rating: 5,
      date: '2024-01-15',
      title: 'Sản phẩm tuyệt vời',
      comment:
        'Tôi rất hài lòng với sản phẩm này. Nó làm sạch sâu và không khó chịu. Da của tôi cảm thấy mềm mại và sạch sâu sau khi sử dụng. Tôi rất khuyên bạn nên thử sản phẩm này.',
      helpful: 12,
      verified: true,
    },
    {
      id: '2',
      author: 'Khách hàng nặn anh',
      rating: 4,
      date: '2024-01-10',
      title: 'Sản phẩm tốt',
      comment:
        'Sản phẩm này rất tốt. Nó làm sạch hiệu quả và có mùi thơm dễ chịu. Tôi sẽ mua lại.',
      helpful: 8,
      verified: true,
    },
    {
      id: '3',
      author: 'Nguyễn Thị Mơ',
      rating: 5,
      date: '2024-01-05',
      title: 'Rất tốt!!!',
      comment:
        'Tôi yêu thích sản phẩm này. Nó rất hiệu quả trong việc làm sạch sâu. Da của tôi cảm thấy mềm mại và không bị khô sau khi sử dụng.',
      helpful: 15,
      verified: true,
    },
  ];
  const totalReviews = 20;
  const rating = 4;
  return (
    <div className="my-12.5 flex lg:flex-row flex-col">
      {/* Rating Summary */}
      <div className="flex flex-col lg:flex-[0_0_33%] px-3.75 lg:mb-0 mb-10">
        <h2 className="text-2xl font-bold mb-2">Đánh giá</h2>
        {/* Left side - Overall Rating */}
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg">
            <span className="font-bold">10</span> Đánh giá
          </p>
          <button className="uppercase font-bold underline">
            Viết đánh giá
          </button>
        </div>
        <div className="flex  gap-3 my-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`size-8 ${
                i < Math.floor(rating)
                  ? 'fill-black text-black'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Right side - Rating Breakdown */}
        <div className="flex flex-col gap-4">
          {[5, 4, 3, 2, 1].map((stars: number) => {
            const count = ratingBreakdown[stars] || 0;
            const percentage =
              totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={stars} className="flex items-center gap-3 text-lg">
                <span className=" font-medium">{stars}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="  w-12">({count})</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* <hr className="text-gray-200" /> */}
      {/* Reviews List */}
      <div className="flex-1 flex flex-col px-3.75">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 pt-4 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-4 mb-1 text-sm">
                  <span className="font-bold">{review.author}</span>
                  <span className="">{review.date}</span>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < review.rating
                            ? 'fill-black text-black'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-bold  mb-2">{review.title}</h4>
            <p className="">{review.comment}</p>
          </div>
        ))}
        <button className="w-fit font-medium underline">
          Tải thêm đánh giá
        </button>
      </div>
    </div>
  );
}
