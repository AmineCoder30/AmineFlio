import blogsData from "../../constants/blogsData";
import { BlogCard, Title } from "../ui";

function Blogs() {
  return (
    <div className="py-10" id="blogs">
      <Title partOne="Latest" PartTwo="Blogs" />
      <div className="mt-10 opacity-100">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
