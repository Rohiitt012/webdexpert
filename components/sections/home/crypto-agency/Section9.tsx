"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Section9() {
    return (
        <>
            {/*crypto-agency home section 9*/}
            <section className="crypto-agency-home-section-9 position-relative rounded-bottom-5 bg-dark-2 wow img-custom-anim-left">
                <div className="py-5 border-top border-bottom border-white border-opacity-25">
                    <div className="container position-relative">
                        <div className="position-absolute end-100 pe-5 d-none d-lg-block">
                            <div className="h-100 d-flex align-items-center gap-4 position-relative z-1">
                                <div className="swiper-button-prev mt-0 position-relative me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1382)">
                                            <path d="M4.18271 3.80852L4.99823e-08 7.99998L4.18271 12.1914L5.06751 11.3084L2.3896 8.62497L16 8.62497L16 7.37498L2.3896 7.37498L5.06751 4.69148L4.18271 3.80852Z" fill="#fff" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="swiper-button-next mt-0 position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_349_1381)">
                                            <path d="M11.8173 12.1915L16 8.00002L11.8173 3.80859L10.9325 4.69155L13.6104 7.37503L-1.55894e-07 7.37503L-2.10532e-07 8.62502L13.6104 8.62502L10.9325 11.3085L11.8173 12.1915Z" fill="#fff" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Swiper {...swiperOptions} className="swiper slider-1">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="d-flex align-items-center gap-md-5 gap-3 flex-wrap">
                                        <div className="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <g clipPath="url(#clip0_798_1661)">
                                                    <path d="M39.4007 24.8383C36.7294 35.5525 25.8777 42.0731 15.1622 39.4013C4.45106 36.73 -2.06952 25.8777 0.602926 15.164C3.27289 4.44848 14.1247 -2.07272 24.8371 0.598483C35.5519 3.26973 42.0719 14.1234 39.4007 24.8383Z" fill="#F7931A" />
                                                    <path
                                                        d="M13.4243 23.3683C13.3155 23.6384 13.0399 24.0433 12.4187 23.8896C12.4406 23.9215 10.8237 23.4915 10.8237 23.4915L9.73438 26.0033L12.5899 26.7152C13.1212 26.8483 13.6418 26.9877 14.1543 27.1189L13.2462 30.7652L15.438 31.312L16.3374 27.7045C16.9362 27.867 17.5174 28.017 18.0861 28.1583L17.1898 31.7489L19.3842 32.2957L20.2923 28.6564C24.0342 29.3645 26.8479 29.0789 28.0323 25.6945C28.9866 22.9696 27.9848 21.3977 26.016 20.3727C27.4498 20.0421 28.5297 19.099 28.8179 17.1509C29.216 14.4897 27.1897 13.059 24.4191 12.1047L25.3179 8.49966L23.1235 7.95279L22.2485 11.4628C21.6717 11.319 21.0791 11.1834 20.4904 11.049L21.3717 7.51586L19.1786 6.96899L18.2792 10.5727C17.8017 10.464 17.333 10.3564 16.8779 10.2433L16.8804 10.2321L13.8542 9.47644L13.2704 11.8202C13.2704 11.8202 14.8986 12.1933 14.8642 12.2164C15.7529 12.4383 15.9135 13.0264 15.8867 13.4927L13.4243 23.3683ZM23.8042 24.1815C23.1261 26.9064 18.538 25.4333 17.0505 25.0639L18.2555 20.2334C19.7429 20.6046 24.5129 21.3396 23.8042 24.1815ZM24.4829 17.1115C23.8642 19.5903 20.0454 18.3309 18.8067 18.0222L19.8992 13.6409C21.1379 13.9497 25.1273 14.5259 24.4829 17.1115Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="fs-7 fw-semibold text-white ms-2">Bitcoin</span>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Value:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$613,347,849,710</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Price:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$28,456.53</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Volume:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$15,534,672,501</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Change:</p>
                                            <p className="fs-7 fw-regular text-danger mb-0 mx-2">-0.76%</p>
                                        </div>
                                        <Link href="#" className="fw-medium bg-transparent text-white ms-auto">
                                            Trade Now <i className="fa-solid fa-arrow-right-long ms-2" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="d-flex align-items-center gap-md-5 gap-3 flex-wrap">
                                        <div className="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <g clipPath="url(#clip0_798_1661)">
                                                    <path d="M39.4007 24.8383C36.7294 35.5525 25.8777 42.0731 15.1622 39.4013C4.45106 36.73 -2.06952 25.8777 0.602926 15.164C3.27289 4.44848 14.1247 -2.07272 24.8371 0.598483C35.5519 3.26973 42.0719 14.1234 39.4007 24.8383Z" fill="#F7931A" />
                                                    <path
                                                        d="M13.4243 23.3683C13.3155 23.6384 13.0399 24.0433 12.4187 23.8896C12.4406 23.9215 10.8237 23.4915 10.8237 23.4915L9.73438 26.0033L12.5899 26.7152C13.1212 26.8483 13.6418 26.9877 14.1543 27.1189L13.2462 30.7652L15.438 31.312L16.3374 27.7045C16.9362 27.867 17.5174 28.017 18.0861 28.1583L17.1898 31.7489L19.3842 32.2957L20.2923 28.6564C24.0342 29.3645 26.8479 29.0789 28.0323 25.6945C28.9866 22.9696 27.9848 21.3977 26.016 20.3727C27.4498 20.0421 28.5297 19.099 28.8179 17.1509C29.216 14.4897 27.1897 13.059 24.4191 12.1047L25.3179 8.49966L23.1235 7.95279L22.2485 11.4628C21.6717 11.319 21.0791 11.1834 20.4904 11.049L21.3717 7.51586L19.1786 6.96899L18.2792 10.5727C17.8017 10.464 17.333 10.3564 16.8779 10.2433L16.8804 10.2321L13.8542 9.47644L13.2704 11.8202C13.2704 11.8202 14.8986 12.1933 14.8642 12.2164C15.7529 12.4383 15.9135 13.0264 15.8867 13.4927L13.4243 23.3683ZM23.8042 24.1815C23.1261 26.9064 18.538 25.4333 17.0505 25.0639L18.2555 20.2334C19.7429 20.6046 24.5129 21.3396 23.8042 24.1815ZM24.4829 17.1115C23.8642 19.5903 20.0454 18.3309 18.8067 18.0222L19.8992 13.6409C21.1379 13.9497 25.1273 14.5259 24.4829 17.1115Z"
                                                        fill="white"
                                                    />
                                                </g>
                                            </svg>
                                            <span className="fs-7 fw-semibold text-white ms-2">Bitcoin</span>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Value:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$429,347,849,710</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Price:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$36,456.53</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Volume:</p>
                                            <p className="fs-7 fw-regular text-white text-opacity-50 mb-0 mx-2">$28,534,672,501</p>
                                        </div>
                                        <div className="d-flex">
                                            <p className="fs-7 fw-semibold text-white mb-0">Change:</p>
                                            <p className="fs-7 fw-regular text-danger mb-0 mx-2">-0.42%</p>
                                        </div>
                                        <Link href="#" className="fw-medium bg-transparent text-white ms-auto">
                                            Trade Now <i className="fa-solid fa-arrow-right-long ms-2" />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
