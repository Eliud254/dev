import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-green-50 min-h-[85vh] flex items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Eliud Obure
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 font-semibold leading-tight">
                Software Engineer & Founder
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5 pt-2">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                I'm a Software Engineer and Founder with a strong focus on helping early-stage teams turn ideas into real, working products. I enjoy building technology, but I'm equally passionate about strategy, understanding markets, refining ideas, and creating systems that help businesses grow with clarity and speed.
              </p>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                My experience cuts across software development, product design, and startup execution. I've worked on projects from the ground up, translating concepts into products people can actually use. Because of this, I naturally combine engineering with business thinking: how to build the right thing, how to ship fast, and how to scale without losing direction.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/50 relative z-10 mx-auto">
                <img
                  src="./eliud.jpg"
                  alt="Eliud Obure"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative background circle */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-full h-full rounded-full bg-gradient-to-br from-blue-200/30 to-green-200/30 blur-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
