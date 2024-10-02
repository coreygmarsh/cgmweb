import React from 'react';
import { Link } from 'react-router-dom';
import { NavigatingNewSuccess, CorporateStorytelling, CausticLightning, OvercomingOversaturation } from '../../images/ImgAssets'; // Import only the relevant images
import Navbar from '../../components/Navbar/Navbar';

const Card = ({ children }) => (
  <div className="bg-teal-800 shadow-sparkle rounded-lg overflow-hidden relative z-10 h-[20rem] w-[21rem]">
    {children}
  </div>
);

const BlogCard = ({ title, image, category, content }) => {
    const blogId = title.replace(/\s+/g, '-').toLowerCase();
  
    return (
      <Card>
        <img src={image} alt={title} className="w-full opacity-100 rounded-lg h-48 object-cover" />
        <div className="p-2">
          <h3 className="font-bold text-center text-white text-md">{title}</h3>
          <p className="text-xs text-center  text-white mb-1">{category}</p>
          <p className="text-xs text-center text-white">
            {`${content.substring(0, 50)}...`}
            <Link
              to={`/library/blog/${blogId}`}
              className="text-green-300 underline ml-1"
            >
              Read More
            </Link>
          </p>
        </div>
      </Card>
    );
  };
  

const BlogSection = ({ title, description, items }) => (
  <section className="h-[2000px] relative z-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl pl-8 cursor-pointer hover:underline text-green-300 tracking-wide font-bold">{title}</h2>
    </div>
    <p className="text-gray-200 mx-6 md:mx-12 mb-8">{description}</p>
    <div className="grid grid-cols-2 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-12">
      {items.map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  </section>
);

const BlogMain = () => {
  const BlogItems = [
    {
      title: "Navigating the New Success Algorithm",
      image: NavigatingNewSuccess,
      category: "Technology",
      content: `Our world has undergone a dramatic shift. Not long ago, we were focused on pushing ourselves to the limit—working tirelessly, sacrificing sleep, and training our minds to numb out the endless "must-dos." But now, our era has flipped, and we've transitioned into a world where working smart takes precedence over working hard...`
    },
    {
      title: " Art of Corporate Video Storytelling",
      image: CorporateStorytelling,
      category: "Video Editing",
      content: `In the realm of corporate video advertisements and engagements, many companies overlook a crucial element: the art of storytelling. You might ask yourself, "Why should I care about this? Can't I just learn it on my own?" The truth is, while the concept seems straightforward, its application is far more nuanced and challenging...`
    },
    {
      title: "Overcoming Oversaturation",
      image: OvercomingOversaturation,
      category: "Culture",
      content: "In today's digital age, expressing one's opinion to a wide audience has become easier than ever. However, this ease of communication has led to a challenging landscape where understanding the true value of an opinion often relies on metrics such as engagement, likes, subscriptions, and follows...."
    },
    {
      title: "Creating Engaging Content with Video",
      image: CausticLightning,
      category: "Content Creation",
      content: "Engaging content is key to capturing your audience's attention and driving action. In this article, we discuss the best practices for creating compelling video content that not only entertains but also converts..."
    },
    {
        title: "Creating Engaging Content with Video",
        image: CausticLightning,
        category: "Content Creation",
        content: "Engaging content is key to capturing your audience's attention and driving action. In this article, we discuss the best practices for creating compelling video content that not only entertains but also converts..."
      },
      {
        title: "Creating Engaging Content with Video",
        image: CausticLightning,
        category: "Content Creation",
        content: "Engaging content is key to capturing your audience's attention and driving action. In this article, we discuss the best practices for creating compelling video content that not only entertains but also converts..."
      },
  ];

  return (
    <div className='relative bg-gradient-to-b h-[2000px] from-teal-800 font-customnine via-cyan-600 to-cyan-700'>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="relative z-10 h-[2000px] bg-gradient-to-tr via-slate-900 from-teal-600 to-cyan-900 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle p-4">
        <p className='text-6xl tracking-widest font-customnine text-center pt-6 text-green-300'>BLOG</p>
        <div className="relative z-30">
          <BlogSection 
            title="Blog Posts" 
            description="Stay informed with our latest blog posts covering various topics in video editing, content creation, and more. Our expert insights will help you enhance your skills, understand industry trends, and stay ahead of the curve. Dive into our blog to expand your knowledge and boost your creative projects."
            items={BlogItems}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
