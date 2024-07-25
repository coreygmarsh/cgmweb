import React from 'react';
import { Animations, BlackSea, CausticLightning, EventVideos, ExplainerVideos, FounderVideos, Graphics, LyricVideos, ProductDemos, Testimonials } from '../images/ImgAssets';

const Button = ({ children, ...props }) => (
  <button 
    className="bg-teal-800 hover:bg-teal-600 shadow-2xl text-white font-bold py-2 px-4 rounded"
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-teal-800 shadow-sparkle rounded-lg overflow-hidden">
    {children}
  </div>
);

const ContentCard = ({ title, image, category, videoUrl }) => (
  <Card>
    <img src={image} alt={title} className="w-full opacity-60 rounded-lg h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-white text-sm">{title}</h3>
      <p className='text-xs text-white'>{category}</p>
      {videoUrl && (
        <div className="mt-4">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  </Card>
);

const LibrarySection = ({ title, description, items }) => (
  <section className="my-8">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl underline text-green-300 tracking-wide font-bold">{title}</h2>
      <Button>Book now!</Button>
    </div>
    <p className="text-gray-200 mx-6 md:mx-12 mb-4">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ContentCard key={index} {...item} />
      ))}
    </div>
  </section>
);

const LibraryThree = () => {
  // This data would typically come from an API
  const ProductDemoItems = [
    { title: "Finance video ads editing example", image: ProductDemos, category: "Finance", videoUrl: "vlFqThlpCBs" },
    { title: "Birdie video ads editing example", image: ProductDemos, category: "Travel", videoUrl: "dQw4w9WgXcQ" },
    { title: "Modeling School video ads", image: ProductDemos, category: "Education", videoUrl: "dQw4w9WgXcQ" },
    { title: "Tech Startup video ads", image: ProductDemos, category: "Technology", videoUrl: "dQw4w9WgXcQ" },
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
    { title: "Social Media Tips", image: Graphics, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: Graphics, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: Graphics, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: Graphics, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
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
    { title: "Social Media Tips", image: CausticLightning, category: "Marketing", videoUrl: "dQw4w9WgXcQ" },
    { title: "Quick Recipes", image: CausticLightning, category: "Lifestyle", videoUrl: "dQw4w9WgXcQ" },
    { title: "Fitness Challenge", image: CausticLightning, category: "Health", videoUrl: "dQw4w9WgXcQ" },
    { title: "DIY Crafts", image: CausticLightning, category: "Hobbies", videoUrl: "dQw4w9WgXcQ" },
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
    <div className='relative bg-gradient-to-b from-teal-800 font-customnine via-cyan-600 to-cyan-700 ' >
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-100"
        style={{ backgroundImage: `url(${BlackSea})` }}
      ></div>
      <div className="relative bg-gradient-to-tr via-slate-900 from-teal-600 to-cyan-900 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle p-4 ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover mix-blend-overlay opacity-100"
        style={{ backgroundImage: `url(${BlackSea})` }}
      ></div> <p className='text-6xl tracking-widest font-customnine text-center pt-6 text-green-300'>LIBRARY</p>
        <div className="">
        <LibrarySection 
          title="Product Demos" 
          description="Elevate your brand with our professional product videos that highlight your product's
          unique features and benefits, captivating your audience and driving engagement.
          Our expert video editing team will bring your product to life, showcasing its practical
          uses and advantages in a visually compelling way. Partner with us to create powerful
          product videos that convert viewers into loyal customers."
          items={ProductDemoItems}
        />
        <LibrarySection 
          title="Lyric Videos" 
          description=" Transform your music with our stunning lyric videos that captivate
          and engage your audience. Our talented video editing team will bring
          your lyrics to life with visually appealing animations and synchronized
          text, enhancing your song's impact. Partner with us to create compelling
          lyric videos that resonate with listeners and elevate your brand."
          items={LyricVideoItems}
        />
        <LibrarySection 
          title="Testimonials" 
          description="Boost your credibility with our powerful testimonial videos that showcase
          authentic customer experiences. Our skilled video editing team will craft
          engaging narratives that highlight positive feedback and build trust with
          your audience. Partner with us to create compelling testimonial videos that
          convert prospects into loyal customers."
          items={TestimonialsItems}
        />
        <LibrarySection 
          title="Graphics" 
          description=" Enhance your brand's visual appeal with our expertly designed graphics
          that capture and engage your audience. Our creative team will craft
          stunning visuals tailored to your brand, ensuring consistency and
          professionalism across all platforms. Partner with us to create
          eye-catching graphics that elevate your brand and leave a lasting impression."
          items={GraphicsItems}
        />
        <LibrarySection 
          title="Founder Videos" 
          description="Showcase the heart of your company with our engaging founder videos
          that tell your unique story. Our expert video editing team will highlight
          your vision, values, and journey, creating a personal connection with your
          audience. Partner with us to create inspiring founder videos that build trust
          and resonate with viewers."
          items={FounderItems}
        />
        <LibrarySection 
          title="Animations" 
          description="Bring your ideas to life with our captivating animations that engage
          and delight your audience. Our skilled animation team will create dynamic,
          visually stunning animations tailored to your brand's message and goals.
          Partner with us to create memorable animations that elevate your content
          and leave a lasting impact."
          items={AnimationsItems}
        />
        <LibrarySection 
          title="Photo Shoots" 
          description="Capture the essence of your brand with our professional photo shoots
          that highlight your products and services. Our experienced photography
          team will create stunning visuals that tell your story and connect with
          your audience. Partner with us for high-quality photo shoots that elevate
          your brand's image and drive engagement."
          items={PhotoShootsItems}
        />
        <LibrarySection 
          title="Event Videos" 
          description=" Relive your special moments with our expertly crafted event videos that capture
          every highlight. Our skilled video editing team will transform your event footage
          into a dynamic, engaging narrative that showcases the best moments. Partner with
          us to create memorable event videos that connect with your audience and preserve
          the excitement."
          items={EventItems}
        />
        <LibrarySection 
          title="Explainer Videos" 
          description="Simplify complex concepts with our engaging explainer videos that effectively
          communicate your message. Our expert video editing team will create clear,
          concise, and visually appealing videos that break down your ideas and captivate
          your audience. Partner with us to produce impactful explainer videos that enhance
          understanding and drive action."
          items={ExplainerItems}
        />
        </div>
      </div>
    </div>
  );
};

export default LibraryThree;
