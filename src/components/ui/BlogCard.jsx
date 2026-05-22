import PropTypes from "prop-types";

function BlogCard({ blog }) {
  return (
    <a
      key={blog.id}
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col w-full h-full bg-card-bg  backdrop-blur-xl border border-border rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-1"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-highlight opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent rounded-full blur-[50px] group-hover:bg-accent group-hover:scale-150 group-hover:opacity-20 transition-all duration-1000 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative p-6 sm:p-8 flex flex-col flex-1 justify-between z-10">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">
                Article
              </span>
              <span className="h-px w-8 bg-border"></span>
            </div>
            <span className="text-text-secondary text-xs font-semibold px-3 py-1 bg-surface rounded-full border border-border/50">
              {blog.date}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-text mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-text-secondary text-base leading-relaxed mb-6 line-clamp-3">
            {blog.description}
          </p>
        </div>

        {/* Action Button & Metadata */}
        <div className="mt-auto flex items-center justify-between">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface text-text text-sm font-semibold border border-border group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm group-hover:shadow-accent/20">
            <span>Read Article</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
