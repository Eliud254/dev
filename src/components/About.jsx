import React from 'react';

export const About = () => {
  const capabilities = [
    {
      title: "Software Engineering",
      description: "I build full-stack applications using React, Next.js, Python, and Node.js. From APIs to user interfaces, I focus on writing clean, maintainable code that scales."
    },
    {
      title: "Product Thinking",
      description: "Beyond code, I think about what we're building and why. I design solutions that solve real problems and align with business objectives—not just technical requirements."
    },
    {
      title: "Startup Execution",
      description: "I've helped founders shape roadmaps, structure operations, and ship products from concept to launch. I understand the balance between speed and quality."
    },
    {
      title: "Problem Solving",
      description: "I break down complex challenges into manageable pieces. Whether it's a technical bottleneck or a product decision, I find practical paths forward."
    },
    {
      title: "Communication",
      description: "I translate between technical and business perspectives. Clear communication helps teams move faster and make better decisions together."
    },
    {
      title: "Iteration & Growth",
      description: "I believe in shipping, learning, and improving. Every product is a work in progress, and I'm comfortable with that cycle of continuous refinement."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-10 md:mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              What I Bring
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-center px-4">
              I've supported founders in shaping product roadmaps, structuring operations, and building solutions that solve real problems. Good technology isn't just code—it's alignment, strategy, and moving from vision to implementation.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
          {capabilities.map((capability, index) => {
            // Create varied, natural-looking card styles
            const styles = [
              { bg: "bg-white", border: "border-l-4 border-blue-500", shadow: "shadow-sm" },
              { bg: "bg-blue-50/30", border: "border border-blue-200", shadow: "shadow" },
              { bg: "bg-white", border: "border-t-4 border-green-500", shadow: "shadow-sm" },
              { bg: "bg-green-50/20", border: "border-2 border-green-200/50", shadow: "shadow-sm" },
              { bg: "bg-white", border: "border-r-4 border-blue-500", shadow: "shadow-sm" },
              { bg: "bg-gradient-to-br from-blue-50/40 to-green-50/40", border: "border border-gray-300/30", shadow: "shadow" }
            ];
            
            const style = styles[index % styles.length];
            
            return (
              <div
                key={index}
                className={`${style.bg} ${style.border} ${style.shadow} rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5">
                  {capability.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-xl p-6 md:p-8 border border-gray-200/50">
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">My Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Help people and companies build, launch, and scale meaningful products.
              </p>
              <p className="text-gray-600 text-base pt-1">
                If you're building something exciting, I'm always open to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

