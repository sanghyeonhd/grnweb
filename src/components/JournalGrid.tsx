
const posts = [
  {
    id: 1,
    title: "NOLL 눈에 대한 모든 것.",
    date: "2023-07-08",
    views: "조회수 412",
    category: "#Team",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  },
  {
    id: 2,
    title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
    date: "2023-07-07",
    views: "조회수 325",
    category: "#Event",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  },
  {
    id: 3,
    title: "초대합니다! 새로이",
    date: "2023-07-06",
    views: "조회수 287",
    category: "#Store",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  },
  // 중복된 포스트 추가
  {
    id: 4,
    title: "NOLL 눈에 대한 모든 것.",
    date: "2023-07-08",
    views: "조회수 412",
    category: "#Team",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  },
  {
    id: 5,
    title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
    date: "2023-07-07",
    views: "조회수 325",
    category: "#Event",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  },
  {
    id: 6,
    title: "초대합니다! 새로이",
    date: "2023-07-06",
    views: "조회수 287",
    category: "#Store",
    image: "public/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png",
  }
];

const JournalGrid = () => {
  return (
    <section className="py-16">
      <h2 className="text-lg font-medium text-left mb-8 border-b pb-4">JOURNAL</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.views}</span>
              </div>
              <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                {post.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JournalGrid;
