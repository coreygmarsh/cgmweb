import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { NavigatingNewSuccess, CorporateStorytelling, OvercomingOversaturation, EngagingContent } from '../../images/ImgAssets'; // Import only the relevant images
import Navbar from '../../components/Navbar/Navbar';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children }) => (
  <div className="bg-transparent shadow-sparkle rounded-lg overflow-hidden relative z-10 h-full w-full transition-all duration-500 hover:shadow-2xl hover:scale-105">
    {children}
  </div>
);

const BlogCard = ({ title, image, category, content }) => {
  const blogId = title.replace(/\s+/g, '-').toLowerCase();
  const cardRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for each card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Card>
        <img src={image} alt={title} className="w-full opacity-100 rounded-lg h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-center font-customtwo text-green-300 text-lg mb-2">{title}</h3>
          <p className="text-sm text-center text-gray-300 font-customtwo text-bold uppercase mb-2">{category}</p>
          <p className="text-sm text-center text-white">
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
    </div>
  );
};

const BlogSection = ({ title, description, items }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the section title and description
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* <h2 className="text-2xl mb-4 md:mb-0 cursor-pointer hover:underline text-green-300 tracking-wide font-bold">
          {title}
        </h2> */}
      </div>
      {/* <p className="text-gray-200 mb-8">{description}</p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const BlogMain = () => {
  const BlogItems = [
    {
      title: "The New Success Algorithm",
      image: NavigatingNewSuccess,
      category: "Technology",
      content: `Our world has undergone a dramatic shift. Not long ago, we were focused on pushing ourselves to the limit—working tirelessly, sacrificing sleep, and training our minds to numb out the endless "must-dos." But now, our era has flipped...`,
    },
    {
      title: "Art of Corporate Storytelling",
      image: CorporateStorytelling,
      category: "Video Editing",
      content: `In the realm of corporate video advertisements and engagements, many companies overlook a crucial element: the art of storytelling. The truth is, while the concept seems straightforward, its application is far more nuanced...`,
    },
    {
      title: "Overcoming Oversaturation",
      image: OvercomingOversaturation,
      category: "Culture",
      content: "In today's digital age, expressing one's opinion to a wide audience has become easier than ever. However, this ease of communication has led to a challenging landscape where understanding the true value of an opinion often relies on metrics such as engagement...",
    },
    {
      title: "Creating Engaging Content with Video",
      image: EngagingContent,
      category: "Content Creation",
      content: "Engaging content is key to capturing your audience's attention and driving action. In this article, we discuss the best practices for creating compelling video content that not only entertains but also converts...",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b min-h-screen from-teal-800 font-customnine via-cyan-600 to-cyan-700">
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="relative z-10 bg-gradient-to-tr via-slate-900 from-teal-600 to-cyan-900 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle p-4">
        <p className="text-6xl tracking-widest font-customtwo text-center pt-6 text-green-300">BLOG</p>
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
