'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	watchOverflow: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
}

export default function Section5() {
	return (
		<>
			{/*law-firm home section 5*/}
			<section className="law-firm-home-section-5 position-relative overflow-hidden d-none d-lg-block">
				<div className="container pb-120 border-top border-primary pt-120">
					<div className="row">
						<div className="col-lg-2">
							<h5 className="mt-3 me-auto text-anime-style-2 d-block">
								Got so <br />
								many
								<strong className="position-relative ms-3">
									rewards
									<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={125}
											height={33}
											viewBox="0 0 125 33"
											fill="none"
										>
											<path
												d="M1 18.8168C22.3435 8.2646 74.5732 -8.66684 112.744 8.02478C160.458 28.8893 42.0388 33.6857 25.9694 31.5273C13.4037 29.8395 0.258334 13.3008 19.2944 3.2283"
												stroke="#B98E44"
												strokeWidth={2}
											/>
										</svg>
									</span>
								</strong>
							</h5>
						</div>
						<div className="col-lg-9 ms-lg-auto">
							<div className="carouselTicker carouselTicker-left mask-image-2">
								<Swiper {...swiperOptions}>
									<SwiperSlide>
										<img
											data-aos="fade-left"
											data-aos-delay={200}
											src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-5/img-1.png"
											alt="AstraX"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											data-aos="fade-left"
											data-aos-delay={400}
											src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-5/img-2.png"
											alt="AstraX"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											data-aos="fade-left"
											data-aos-delay={600}
											src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-5/img-3.png"
											alt="AstraX"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											data-aos="fade-left"
											data-aos-delay={600}
											src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-5/img-2.png"
											alt="AstraX"
										/>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}
