"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ReactNode } from "react";

type CarouselTickerProps = {
    slides: ReactNode[];
};

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    loop: true,
    watchOverflow: true,
    direction: "horizontal" as const,
};

export default function CarouselTickerrtl({ slides }: CarouselTickerProps) {
    // Only enable loop if we have enough slides
    const minSlidesForLoop = 4; // Based on slidesPerView
    const shouldLoop = slides.length >= minSlidesForLoop;
    
    const options = {
        ...swiperOptions,
        loop: shouldLoop,
    };
    
    return (
        <Swiper {...options} className="carouselTicker carouselTicker-left position-relative z-1">
            <div className="carouselTicker__list">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="carouselTicker__item overflow-visible">
                        {slide}
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
}

