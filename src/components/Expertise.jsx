import React from 'react';

const expertiseItems = [
  {
    index: "01//",
    title: "Strategic account partnership",
    desc: "Building trusted relationships, understanding priorities, and helping customers get durable value from technology."
  },
  {
    index: "02//",
    title: "Technical customer success",
    desc: "Translating product capability into practical outcomes through adoption, enablement, and thoughtful problem solving."
  },
  {
    index: "03//",
    title: "Escalation leadership",
    desc: "Bringing structure to high-priority situations, coordinating stakeholders, and keeping communication clear and accountable."
  },
  {
    index: "04//",
    title: "Cross-functional collaboration",
    desc: "Connecting customer insight with product, support, and engineering teams to improve the overall experience."
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 md:px-8 bg-[#f7f7f7] border-b border-[#dedede]">
      <div className="max-w-[1220px] mx-auto">
        <div className="text-left mb-14">
          <h2 className="font-serif font-semibold text-[clamp(38px,4.5vw,64px)] text-[#151515] leading-[1.03] tracking-[-0.055em]">
            How I create value
          </h2>
        </div>

        <div className="expertise-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[55px] border-t border-[#dedede]">
          {expertiseItems.map((item, idx) => (
            <article
              key={idx}
              className="expertise-card interactive-card min-h-[290px] p-[28px_24px] rounded-none border-r border-[#dedede] last:border-r-0 text-left cursor-pointer transition-all duration-300 relative hover:z-10 hover:bg-white hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]"
            >
              <p className="expertise-index">{item.index}</p>
              <h3 className="font-sans font-semibold text-[20px] text-[#151515] mt-[40px] mb-[12px] leading-[1.2] tracking-[-0.035em]">
                {item.title}
              </h3>
              <p className="font-sans text-[15px] text-[#666] leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
