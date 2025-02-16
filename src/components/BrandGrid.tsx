
import { Link } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "GRANHAND.",
    image: "public/lovable-uploads/f26e1f42-30ac-4205-aa37-66c806ebcdd1.png",
    description: "향기 브랜드를 프리미엄 딜리버리 서비스와 함께 만나보세요.",
  },
  {
    id: 2,
    name: "helion",
    image: "public/lovable-uploads/80415bc8-4dc8-434a-8f27-669f9a60da8d.png",
    description: "시간과 공간 속 헬리온과 함께하는 순간들.",
  },
];

const BrandGrid = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-serif text-center mb-8">BRAND SHOP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand/${brand.name.toLowerCase()}`}
            className="group relative overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-medium">{brand.name}</h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandGrid;
