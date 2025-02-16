
const posts = [
  {
    id: 1,
    title: "NOLL 눈에 대한 모든 것.",
    date: "2023-07-08",
    views: "조회수 412",
    category: "#Team",
    image: "public/lovable-uploads/f26e1f42-30ac-4205-aa37-66c806ebcdd1.png",
  },
  // Add more posts as needed
];

const JournalGrid = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-serif text-center mb-8">JOURNAL</h2>
      <div className="image-grid">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group cursor-pointer animate-fade-in"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{post.category}</span>
                <span>{post.date}</span>
                <span>{post.views}</span>
              </div>
              <h3 className="text-lg font-medium group-hover:text-granhand-text transition-colors">
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
