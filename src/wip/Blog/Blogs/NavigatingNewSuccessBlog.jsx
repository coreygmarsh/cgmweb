import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { NavigatingNewSuccess } from '../../../images/ImgAssets';

const NavigatingNewSuccessBlog = () => {
  return (
    <div className='relative bg-gradient-to-b h-[1200px] from-teal-800 via-cyan-600 to-cyan-700'>
      <div className="relative z-50">
        <Navbar />
      </div>
     
      <div className="relative z-10 bg-gradient-to-tr h-[1200px] via-slate-900 from-teal-600 to-cyan-900 mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-24 shadow-sparkle p-4">
        <div className="relative z-30">
          <h1 className='text-4xl tracking-widest font-customnine text-center pt-6 text-green-300'>Navigating the New Success Algorithm</h1>
          <div className="italic mt-2 mr-4 text-xs text-center z-50 text-white font-customnine">
        by Corey G. Marsh {/* Replace "Your Name" with your actual name */}
      </div>
          <img src={NavigatingNewSuccess} alt="Navigating New Success" className="w-96 shadow-sparkle h-96 mt-6 rounded-lg mx-auto" />
          <p className='text-white my-6 mx-24 font-customnine'>
          <p><span className='pl-4'>Our</span> world has undergone a dramatic shift.
           Not long ago, we were focused on pushing ourselves to the limit—working tirelessly, sacrificing sleep, and training our minds to numb 
           out the endless "must-dos." 
          But now, our era has flipped, and we've transitioned into a world where working smart takes precedence over working hard.
           We take days off to build our dreams, and remote work has become the new norm.
            While this change has been brewing for over two decades, it's only fully manifested in the last three to four years.
        This shift has introduced a new success algorithm, one that surprises those who mastered the old ways.
        In the early 2000s, many of us who grew up in the '90s watched our parents create stable foundations by working at 100% of their physical ability,
        but often only 50-60% of their intellectual capacity. 
    
    <p className='pt-4'><span className='pl-4'>This</span> isn’t to say our parents weren’t smart—they simply followed the algorithm of the time, 
                which rewarded those who worked harder. They stayed late, woke up early, juggled multiple jobs, and built assets over decades to eventually 
                own a home and enjoy a secure retirement.
                However, the algorithm for success in the 2020s has arguably flipped. 
                Now, it emphasizes working at 75% of one’s capabilities and 100% of one’s intelligence. 
                This doesn’t mean hard work isn’t important—if you add an extra 20% effort, you’ll likely find more success. 
                But the priority now is working smarter. Of course, if you can give 100% in both areas, success is inevitable.
                 However, working at 100% leaves little room for anything else: family, hobbies, friends, or even basic human
                  essentials like sunlight, exercise, a healthy diet, and spiritual well-being.
                Working smarter requires time and focus, while working hard demands energy and endurance—both need inspiration.
                </p>
                 <p className='pt-4'><span className='pl-4'>If</span> you were a self-sufficient robot who could slave away for hours without ever needing reminders of why you’re doing it,
                  then perhaps you could truly work at 100%. But in reality, this era is pushing us closer to becoming robotic humanoids,
                   as people strain to operate at full capacity and beyond. Some are even considering technological enhancements 
                   like brain chips to maximize their already efficient lifestyles.
                So, how can ordinary people compete? How can our minds keep up with AI?
                 If you’re not utilizing AI, how can you maintain a healthy lifestyle without getting lost in this new algorithm?
                  The truth is, the 2020s may be our last chance to live without being entirely consumed by technology

                   Those friends who still don’t know how to text back will probably need to learn.
                    But in all seriousness, if you think people are glued to their devices now, just wait until those devices are fully integrated into their beings.
    </p></p>
          </p>
          {/* Add the rest of your blog content here */}
        </div>
      </div>
    </div>
  );
};

export default NavigatingNewSuccessBlog;
