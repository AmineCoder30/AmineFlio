import blogsData from "../../constants/blogsData";
import { BlogCard, Title } from "../ui";
import { useTranslation } from "react-i18next";

function Blogs() {
  const { t } = useTranslation();
  return (
    <div className="py-20" id="blogs">
      <Title partOne={t("sections.blogs.0")} PartTwo={t("sections.blogs.1")} />
      <div className="mt-10 opacity-100">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={{
                ...blog,
                title: t(`data.blogs.${blog.id}.title`, { defaultValue: blog.title }),
                description: t(`data.blogs.${blog.id}.description`, { defaultValue: blog.description }),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
