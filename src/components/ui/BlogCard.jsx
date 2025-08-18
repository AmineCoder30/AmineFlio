import PropTypes from "prop-types";

function BlogCard({ blog }) {
  return (
    <a
      key={blog.id}
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative  inline-flex w-full h-full overflow-hidden rounded-2xl p-[2px] focus:outline-none group shadow-lg hover:scale-[1.025] transition-transform duration-300"
    >
      {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-conic-gradient-purple"></span> */}
      <div className="flex flex-row bg-card-bg border border-border rounded-2xl w-full h-full relative z-10 overflow-hidden">
        {/* Gradient shape in top right */}
        <span
          className="absolute top-0 right-0 bg-accent w-24 h-24 bg-gradient-to-br from-accent/60 via-accent-hover/40 to-transparent rounded-full blur-2xl pointer-events-none z-20"
          style={{ transform: "translate(30%,-30%)" }}
        ></span>
        {/* <div className="relative w-2/5 min-w-[140px] hidden md:block max-w-[180px] h-full flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-accent group-hover:translate-y-0 group-hover:opacity-100 opacity-0 -translate-y-24 duration-200  text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {blog.date}
          </span>
        </div> */}
        <div className="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-2xl font-bold text-text mb-2 ">{blog.title}</h3>
            <p className="text-text-secondary text-base overflow-hidden mb-4 flex-1 line-clamp-3">
              {blog.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-accent font-semibold mt-auto group-hover:underline transition-all cursor-pointer">
            Read More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
