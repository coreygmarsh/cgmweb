import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Animations, BlackSea, NavigatingNewSuccess, CorporateStorytelling, CausticLightning, Danita, Earth, EventVideos, ExplainerVideos, FounderVideos, Graphics, GuitarOne, LetMeLoose, LyricVideos, Outdoor, Pool, PortraitOne, PortraitThree, ProductDemos, Tension, Testimonials, TwentyFive, UnderwaterRoad } from '../images/ImgAssets';
import Navbar from '../components/Navbar/Navbar';

const Card = ({ children }) => (
  <div className="bg-teal-800 shadow-sparkle rounded-lg overflow-hidden relative z-10">
    {children}
  </div>
);

const ContentCard = ({ title, image, category, videoUrl }) => (
  <Card>
    <img src={image} alt={title} className="w-full opacity-100 rounded-lg h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-white text-sm">{title}</h3>
      <p className='text-xs text-white'>{category}</p>
      {videoUrl && (
        <div className="mt-4 relative z-20">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="relative z-30"
          ></iframe>
        </div>
      )}
    </div>
  </Card>
);
const BlogCard = ({ title, image, category, content }) => {
    const blogId = title.replace(/\s+/g, '-').toLowerCase();
  
    return (
      <div className="bg-teal-800 shadow-sparkle rounded-lg overflow-hidden relative z-10">
        <img src={image} alt={title} className="w-full opacity-100 rounded-lg h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-white text-sm">{title}</h3>
          <p className="text-xs text-white mb-2">{category}</p>
          <p className="text-xs text-white">
            {`${content.substring(0, 100)}...`}
            <Link
              to={{
                pathname: `/library/blog/${blogId}`,
                state: { title, image, content } // Pass the data via Link state
              }}
              className="text-green-300 underline ml-2"
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
    );
  };
  





const LibrarySection = ({ title, description, items, link, isBlog = false }) => (
  <section className="my-8 relative z-10">
    <div className="flex justify-between items-center mb-4">
      <Link to={link} className="relative z-20">
        <h2 className="text-2xl cursor-pointer hover:underline text-green-300 tracking-wide font-bold">{title}</h2>
      </Link>
    </div>
    <p className="text-gray-200 mx-6 md:mx-12 mb-4">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) =>
        isBlog ? <BlogCard key={index} {...item} /> : <ContentCard key={index} {...item} />
      )}
    </div>
  </section>
);

const LibraryThree = () => {
  const BlogItems = [
    {
      title: "Navigating the New Success Algorithm",
      image: NavigatingNewSuccess,
      category: "Technology",
      content: `Our world has undergone a dramatic shift. Not long ago, we were focused on pushing ourselves to the limit—working tirelessly, sacrificing sleep, and training our minds to numb out the endless "must-dos." But now, our era has flipped, and we've transitioned into a world where working smart takes precedence over working hard. We take days off to build our dreams, and remote work has become the new norm. While this change has been brewing for over two decades, it's only fully manifested in the last three to four years.

      This shift has introduced a new success algorithm, one that surprises those who mastered the old ways. In the early 2000s, many of us who grew up in the '90s watched our parents create stable foundations by working at 100% of their physical ability, but often only 50-60% of their intellectual capacity. This isn’t to say our parents weren’t smart—they simply followed the algorithm of the time, which rewarded those who worked harder. They stayed late, woke up early, juggled multiple jobs, and built assets over decades to eventually own a home and enjoy a secure retirement.

      However, the algorithm for success in the 2020s has arguably flipped. Now, it emphasizes working at 75% of one’s capabilities and 100% of one’s intelligence. This doesn’t mean hard work isn’t important—if you add an extra 20% effort, you’ll likely find more success. But the priority now is working smarter. Of course, if you can give 100% in both areas, success is inevitable. However, working at 100% leaves little room for anything else: family, hobbies, friends, or even basic human essentials like sunlight, exercise, a healthy diet, and spiritual well-being.

      Working smarter requires time and focus, while working hard demands energy and endurance—both need inspiration. If you were a self-sufficient robot who could slave away for hours without ever needing reminders of why you’re doing it, then perhaps you could truly work at 100%. But in reality, this era is pushing us closer to becoming robotic humanoids, as people strain to operate at full capacity and beyond. Some are even considering technological enhancements like brain chips to maximize their already efficient lifestyles.

      So, how can ordinary people compete? How can our minds keep up with AI? If you’re not utilizing AI, how can you maintain a healthy lifestyle without getting lost in this new algorithm? The truth is, the 2020s may be our last chance to live without being entirely consumed by technology. Those friends who still don’t know how to text back will probably need to learn. But in all seriousness, if you think people are glued to their devices now, just wait until those devices are fully integrated into their beings.`
    },


    {
        title: "The Overlooked Art of Corporate Video Storytelling",
        image: CorporateStorytelling,
        category: "Video Editing",
        content: `In the realm of corporate video advertisements and engagements, many companies overlook a crucial element: the art of storytelling. You might ask yourself, "Why should I care about this? Can't I just learn it on my own?" The truth is, while the concept seems straightforward, its application is far more nuanced and challenging.

        Creating a video is one thing, but crafting a narrative with rhythm, flow, and cadence is an entirely different skill set. It's a craft that requires expertise, much like composing a piece of music or choreographing a dance. There exists a group of professionals who understand the intricacies of building and finessing a proper flow in trending videos, an art form that many corporate entities fail to fully appreciate.
        
        
        
        Video creative novices from other industries often fall into a common trap. They produce a video brimming with their ideas, convinced that their masterpiece will resonate with everyone simply because it excels in their sector or cleanly executes their vision. They believe that the power lies solely in capturing the perfect moment on camera. However, this is only half the battle.
        
        Even in the corporate world, the goal shouldn't be to appeal only to like-minded individuals. The true challenge lies in engaging people from diverse backgrounds, industries, and thought processes. Whether they realize it or not, viewers are searching for a story that captivates them.
        
        
        People who choose to watch your video crave motion and rhythm. Much like a catchy new song that inexplicably appeals to your ear, a well-crafted video flows, organizes, and synchronizes its elements in a way that resonates with the viewer. The most impactful product videos don't just showcase features; they weave a compelling narrative that synchronizes with the viewer's emotions and experiences.
        
        
        While many companies initially seek simplicity in their video content, they soon realize that viewers need a spark to truly engage. Your audience should feel your creativity pop—without it overshadowing your message. In the video industry, it's often easier to underdo than to overdo creative energy.
        
        This isn't to say that your ideas alone can't be engaging. However, to reach a broader audience, you need content that compels viewers to sit down and immerse themselves in your creation. Technical proficiency can help, but without inventiveness, it risks coming across as soulless.
        
        
        
        By collaborating with someone who possesses the experience, understanding of storytelling, and technical ability to execute, your video creations can truly transcend. These professionals can help your content engage not just those seeking simplicity, but individuals from all walks of life.
        
        In conclusion, the art of video storytelling is a powerful tool that, when wielded effectively, can elevate your corporate message from mundane to memorable. It's an investment in expertise that can transform your video content from mere information to captivating narratives that resonate with a diverse audience.
        
        
        `
      },
    {
      title: "Video Editing Tips for Beginners",
      image: CausticLightning,
      category: "Tutorials",
      content: "Starting with video editing can be daunting, but with the right tips, you can quickly improve your skills. From choosing the right software to mastering basic techniques, this guide covers everything you need to get started with video editing..."
    },
    {
      title: "Creating Engaging Content with Video",
      image: CausticLightning,
      category: "Content Creation",
      content: "Engaging content is key to capturing your audience's attention and driving action. In this article, we discuss the best practices for creating compelling video content that not only entertains but also converts. From storytelling to call-to-actions, find out how to make your videos more impactful..."
    },
  ];

  const ProductDemoItems = [
    { title: "Tech X Squared", image: ProductDemos, category: "Technology", videoUrl: "vlFqThlpCBs" },
    { title: "Traveler's Voyage", image: ProductDemos, category: "Travel", videoUrl: "RUoFXveMhzM" },
    { title: "P Sonar Plus", image: ProductDemos, category: "Electronics", videoUrl: "yITOKo-HQOY" },
    { title: "S Hair Food", image: ProductDemos, category: "Beauty", videoUrl: "fW0J5vSZrag" },
  ];

  const LyricVideoItems = [
    { title: "Social Media Tips", image: LyricVideos, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: LyricVideos, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: LyricVideos, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: LyricVideos, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  const TestimonialsItems = [
    { title: "Social Media Tips", image: Testimonials, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: Testimonials, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: Testimonials, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: Testimonials, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  const GraphicsItems = [
    { title: "Social Media Tips", image: UnderwaterRoad, category: "Marketing" },
    { title: "Quick Recipes", image: Outdoor, category: "Lifestyle" },
    { title: "Fitness Challenge", image: Earth, category: "Health" },
    { title: "DIY Crafts", image: Pool, category: "Hobbies" },
  ];

  const FounderItems = [
    { title: "Social Media Tips", image: FounderVideos, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: FounderVideos, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: FounderVideos, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: FounderVideos, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  const AnimationsItems = [
    { title: "Social Media Tips", image: Animations, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: Animations, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: Animations, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: Animations, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  const PhotoShootsItems = [
    { title: "Social Media Tips", image: Danita, category: "Marketing" },
    { title: "Quick Recipes", image: PortraitOne, category: "Lifestyle" },
    { title: "Fitness Challenge", image: PortraitThree, category: "Health" },
    { title: "DIY Crafts", image: GuitarOne, category: "Hobbies" },
  ];

  const EventItems = [
    { title: "Social Media Tips", image: EventVideos, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: EventVideos, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: EventVideos, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: EventVideos, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  const ExplainerItems = [
    { title: "Social Media Tips", image: ExplainerVideos, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: ExplainerVideos, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: ExplainerVideos, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: ExplainerVideos, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
  ];

  return (
    <div className='relative bg-gradient-to-b from-teal-800 font-customnine via-cyan-600 to-cyan-700 '>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-100"
        style={{ backgroundImage: `url(${BlackSea})` }}
      ></div>
      <div className="relative z-10 bg-gradient-to-tr via-slate-900 from-teal-600 to-cyan-900 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle p-4 ">
        <p className='text-6xl tracking-widest font-customnine text-center pt-6 text-green-300'>LIBRARY</p>
        <div className="relative z-30">
          <LibrarySection 
            title="Blogs" 
            description="Stay informed with our latest blog posts covering various topics in video editing, content creation, and more. Our expert insights will help you enhance your skills, understand industry trends, and stay ahead of the curve. Dive into our blog to expand your knowledge and boost your creative projects."
            items={BlogItems}
            link="/blog"
            isBlog={true}
          />
          <LibrarySection 
            title="Product Demos" 
            description="Elevate your brand with our professional product videos that highlight your product's unique features and benefits, captivating your audience and driving engagement. Our expert video editing team will bring your product to life, showcasing its practical uses and advantages in a visually compelling way. Partner with us to create powerful product videos that convert viewers into loyal customers."
            items={ProductDemoItems}
            link="/demo"
          />
          <LibrarySection 
            title="Lyric Videos" 
            description="Transform your music with our stunning lyric videos that captivate and engage your audience. Our talented video editing team will bring your lyrics to life with visually appealing animations and synchronized text, enhancing your song's impact. Partner with us to create compelling lyric videos that resonate with listeners and elevate your brand."
            items={LyricVideoItems}
            link="/lyric"
          />
          <LibrarySection 
            title="Testimonials" 
            description="Boost your credibility with our powerful testimonial videos that showcase authentic customer experiences. Our skilled video editing team will craft engaging narratives that highlight positive feedback and build trust with your audience. Partner with us to create compelling testimonial videos that convert prospects into loyal customers."
            items={TestimonialsItems}
            link="/testimonial"
          />
          <LibrarySection 
            title="Graphics" 
            description="Enhance your brand's visual appeal with our expertly designed graphics that capture and engage your audience. Our creative team will craft stunning visuals tailored to your brand, ensuring consistency and professionalism across all platforms. Partner with us to create eye-catching graphics that elevate your brand and leave a lasting impression."
            items={GraphicsItems}
            link="/graphicdesign"
          />
          <LibrarySection 
            title="Founder Videos" 
            description="Showcase the heart of your company with our engaging founder videos that tell your unique story. Our expert video editing team will highlight your vision, values, and journey, creating a personal connection with your audience. Partner with us to create inspiring founder videos that build trust and resonate with viewers."
            items={FounderItems}
            link="/founder"
          />
          <LibrarySection 
            title="Animations" 
            description="Bring your ideas to life with our captivating animations that engage and delight your audience. Our skilled animation team will create dynamic, visually stunning animations tailored to your brand's message and goals. Partner with us to create memorable animations that elevate your content and leave a lasting impact."
            items={AnimationsItems}
            link="/motion"
          />
          <LibrarySection 
            title="Photo Shoots" 
            description="Capture the essence of your brand with our professional photo shoots that highlight your products and services. Our experienced photography team will create stunning visuals that tell your story and connect with your audience. Partner with us for high-quality photo shoots that elevate your brand's image and drive engagement."
            items={PhotoShootsItems}
            link="/photobook"
          />
          <LibrarySection 
            title="Event Videos" 
            description="Relive your special moments with our expertly crafted event videos that capture every highlight. Our skilled video editing team will transform your event footage into a dynamic, engaging narrative that showcases the best moments. Partner with us to create memorable event videos that connect with your audience and preserve the excitement."
            items={EventItems}
            link="/event"
          />
          <LibrarySection 
            title="Explainer Videos" 
            description="Simplify complex concepts with our engaging explainer videos that effectively communicate your message. Our expert video editing team will create clear, concise, and visually appealing videos that break down your ideas and captivate your audience. Partner with us to produce impactful explainer videos that enhance understanding and drive action."
            items={ExplainerItems}
            link="/explainer"
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryThree;
