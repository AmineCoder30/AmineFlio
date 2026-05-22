import React from "react";
import socialMediaLinks from "../../constants/socialMedia";
import avatar from "../../assets/avatar.png";
// import { ContactInfo } from "../ui";
import { ArrowDown } from "lucide-react";

function SideBar() {
  const [showSocialMedia, setShowSocialMedia] = React.useState(false);

  return (
    <div className="w-full xl:w-[320px] relative z-20">
      <button
        className="absolute top-0 right-0 xl:hidden z-40 bg-accent hover:bg-accent-hover text-background p-3 rounded-bl-2xl transition-transform duration-300"
        onClick={() => setShowSocialMedia(!showSocialMedia)}
        aria-label="Toggle contact info"
      >
        <ArrowDown
          size={24}
          className={`transition-transform text-white duration-500 delay-100 ${showSocialMedia ? "rotate-180" : ""}`}
        />
      </button>

      <div className="w-full sticky top-10 flex flex-col bg-card-bg border border-border rounded-2xl overflow-hidden 5 group transition-colors duration-500 hover:border-accent">
        {/* Editorial Top Section - Avatar */}
        <div className="relative w-full aspect-square bg-card-hover border-b flex justify-center items-end border-border overflow-hidden p-6 mx-auto pt-8">
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10 bg-surface border border-border px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse relative"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text">
              Available for work
            </span>
          </div>

          <img
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105 drop-shadow-2xl"
            src={avatar}
            alt="Amine Mohamed"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-text uppercase tracking-tighter leading-none mb-4 flex flex-col">
                Amine
                <span className="text-accent mt-1">Mohamed</span>
              </h1>

              <div className="inline-block text-text border border-border font-bold text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                Full Stack Developer
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed border-l-2 border-text pl-4 mt-2">
              Great products are built, not wished into existence ✨
            </p>
          </div>

          <div
            className={`grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(0.5,0,0,1)] xl:mt-8 ${
              showSocialMedia
                ? "grid-rows-[1fr] opacity-100 mt-8"
                : "grid-rows-[0fr] opacity-0 mt-0 xl:grid-rows-[1fr] xl:opacity-100"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-6">
              {/* <div className="w-full h-px bg-border"></div> */}

              {/* <ContactInfo /> */}

              <hr className="w-full border-border" />

              <ul className="w-full flex justify-between items-center text-text-secondary">
                {socialMediaLinks.map((item, index) => {
                  return (
                    <li key={index} className="flex-1 text-center group/social">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center p-3 text-text-secondary hover:text-accent hover:bg-card-hover border border-transparent hover:border-border rounded-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
                        aria-label={item.name}
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
