
import { Link } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "GRANHAND.",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
    description: "당신의 일상에 향기로운 순간이 더해질 수 있도록 그랜핸드가 함께 하겠습니다.",
  },
  {
    id: 2,
    name: "helion",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
    description: "빛과 조명 사이에서 당신이 필요한 순간마다 헬리온이 가까이에 있습니다.",
  },
  {
    id: 3,
    name: "KomfortableT COFFEE",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
    description: "카페인 뿐만 아니라 향과 풍미가 가득한 특별한 커피가 편안한 공간, K/T 스페이스와 함께 해요 #편한티커피",
  },
];

const BrandGrid = () => {
  return (
    <section className="py-16">
      <h2 className="text-lg font-medium text-left mb-8 border-b pb-4">BRAND SHOP</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand/${brand.name.toLowerCase()}`}
            className="group"
          >
            <div className="aspect-[4/3] overflow-hidden mb-4">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-medium">{brand.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{brand.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandGrid;
