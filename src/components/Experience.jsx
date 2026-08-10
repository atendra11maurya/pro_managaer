import React from 'react';

const experiences = [
  {
    company: "project44",
    title: "Technical Support Account Manager",
    description: "Managing technical customer relationships and supporting successful outcomes in a complex technology environment."
  },
  {
    company: "Rubrik",
    title: "Customer Success Engineer",
    description: "Provided technical customer-success expertise, helping customers navigate product use and support needs."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-8 bg-white border-b border-[#dedede]">
      <div className="max-w-[1220px] mx-auto">
        <div className="text-left mb-14">
          <h2 className="font-serif font-semibold text-[clamp(38px,4.5vw,64px)] text-[#151515] leading-[1.03] tracking-[-0.055em]">
            Experience
          </h2>
        </div>

        <div className="timeline mt-[55px] border-t border-[#dedede]">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="interactive-card role py-[32px] px-8 rounded-none border-b border-[#dedede] text-left cursor-pointer transition-all duration-300 relative hover:z-10 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="max-w-[620px]">
                <p className="role-company font-sans font-bold text-[13px] text-[#1f81ff] uppercase tracking-[0.07em] mb-2">
                  {exp.company}
                </p>
                <h3 className="font-sans font-semibold text-[24px] text-[#151515] mb-[10px] leading-tight">
                  {exp.title}
                </h3>
                <p className="font-sans text-[15px] text-[#666] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
