import { Title } from "../ui";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import creative2tg from "../../assets/creative2tg.webp";
import defaultUser from "../../assets/user.png";

import { MapPin } from "lucide-react";
import testimonials from "../../constants/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div>
        <div>
          <Title partOne={"Real Results"} PartTwo={"from Clients"} />
        </div>

        {/* Swiper Card */}
        <div className="mx-auto max-w-4xl relative mt-16 px-2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
              renderBullet: function (index, className) {
                return `<button class="${className}" aria-label="Go to slide ${index + 1}"></button>`;
              },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="w-full !pb-4"
          >
            {testimonials.items.map((testimonial, index) => (
              <SwiperSlide key={index} className="pt-6">
                <div className="group relative min-h-[340px] flex flex-col rounded-3xl border border-border bg-card-bg p-10 md:p-14 transition-all duration-500 hover:bg-card-hover">
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute top-0 left-10 right-10 h-1 rounded-b-full bg-gradient-to-r opacity-70 transition-all duration-500`}
                  />

                  {/* Quote icon */}
                  <div
                    className={`absolute -top-6 left-12 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.accent} shadow-lg p-3`}
                  >
                    <Quote
                      size={22}
                      strokeWidth={2}
                      className="text-text fill-text/20"
                    />
                  </div>

                  <div className="mt-4">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={18}
                            strokeWidth={2}
                            className="text-accent fill-accent"
                          />
                        ),
                      )}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-xl md:text-2xl font-medium text-text leading-relaxed mb-10 flex-1">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="relative h-12 w-12 shrink-0 rounded-full ring-2 ring-border overflow-hidden">
                        <img
                          src={
                            testimonial.name === "creative2tg"
                              ? creative2tg
                              : defaultUser
                          }
                          alt={testimonial.name || "User"}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-bold text-text truncate">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center gap-1 text-text-secondary">
                          <MapPin size={14} strokeWidth={2} />
                          <p className="text-sm font-medium truncate">
                            {testimonial.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              className="custom-prev flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card-bg text-text-secondary hover:text-accent hover:border-accent transition-all duration-200 cursor-pointer z-10"
              aria-label={testimonials.prevLabel}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <div className="custom-pagination flex gap-2.5 items-center justify-center z-10 [&>.custom-bullet]:block [&>.custom-bullet]:h-2.5 [&>.custom-bullet]:w-2.5 [&>.custom-bullet]:bg-border [&>.custom-bullet]:rounded-full [&>.custom-bullet]:cursor-pointer [&>.custom-bullet]:transition-all [&>.custom-bullet]:duration-300 hover:[&>.custom-bullet]:bg-text-secondary/30 [&>.custom-bullet-active]:!w-8 [&>.custom-bullet-active]:!bg-accent"></div>
            <button
              className="custom-next flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card-bg text-text-secondary hover:text-accent hover:border-accent transition-all duration-200 cursor-pointer z-10"
              aria-label={testimonials.nextLabel}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
