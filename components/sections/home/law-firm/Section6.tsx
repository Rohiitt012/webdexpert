'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	watchOverflow: true,
}

export default function Section6() {
	return (
		<>
			{/*law-firm section 6*/}
			<section className="law-firm-home-section-6 position-relative overflow-hidden pt-120 pb-120">
				<div className="container">
					<div className="text-center">
						<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
							testimonials
						</span>
						<h2 className="mt-3 text-anime-style-2">
							Happy users feedbacks
						</h2>
					</div>
					<div className="row mt-80">
						<div className="col-12">
							{/* Swiper */}
							<Swiper {...swiperOptions} className="swiper slider-1 overflow-visible pb-2">
								<div className="swiper-wrapper z-1">
									<SwiperSlide>
										<div className="card-testimonial py-5 px-lg-5 px-4 pb-0 rounded-top-5 position-relative">
											<div className="row align-self-stretch position-relative z-1">
												<div className="col-lg-7 p-5 pe-lg-0 border">
													<div className="h-100 d-flex flex-column">
														<div className="d-flex gap-2">
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
														</div>
														<h5 className="mt-3 pb-7 mb-auto pe-lg-8">
															" Unrivaled brilliance surpassing all others. Highly
															recommended for novices and experts alike. We will
															hire them for sure anytime. "
														</h5>
														<div className="d-flex align-items-center justify-content-between flex-column flex-md-row border-top pt-3">
															<div className="text-start mt-3">
																<Link href="#">
																	<span className="btn-text">Alonso J. Carter</span>
																</Link>
																<p className="fs-7 text-primary">
																	Head Of Idea, Treve LLC
																</p>
															</div>
															<div className="right d-flex gap-2 pe-lg-8 ">
																<div className="d-flex align-items-center">
																	<div className="icon-shape icon-60 rounded-circle overflow-hidden border border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-1.png"
																			alt="AstraX"
																		/>
																	</div>
																	<div className="avatar-2 icon-shape icon-60 rounded-circle overflow-hidden border border-2 border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-2.png"
																			alt="AstraX"
																		/>
																	</div>
																</div>
																<div>
																	<h6 className="text-primary mb-0">5k</h6>
																	<p className="mb-0 text-dark">Happy Customers</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 ps-lg-0 d-none d-lg-block">
													<div className="position-relative text-center">
														<div className="position-absolute top-0 end-0 z-2 me-5 mt-5">
															<Link
																href="https://www.youtube.com/watch?v=2GOTlI8pYeo"
																className="fw-semibold bg-white rounded-circle popup-video play-btn  hover-up icon-shape icon-80"
															>
																<i className="ri-play-fill text-dark fs-3" />
															</Link>
														</div>
														<img
															src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/img-1.png"
															alt="AstraX"
														/>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonial py-5 px-lg-5 px-4 pb-0 rounded-top-5 position-relative">
											<div className="row align-self-stretch position-relative z-1">
												<div className="col-lg-7 p-5 pe-lg-0 border">
													<div className="h-100 d-flex flex-column">
														<div className="d-flex gap-2">
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
														</div>
														<h5 className="mt-3 pb-7 mb-auto pe-lg-8">
															" Unrivaled brilliance surpassing all others. Highly
															recommended for novices and experts alike. We will
															hire them for sure anytime. "
														</h5>
														<div className="d-flex align-items-center justify-content-between flex-column flex-md-row border-top pt-3">
															<div className="text-start mt-3">
																<Link href="#">
																	<span className="btn-text">Alonso J. Carter</span>
																</Link>
																<p className="fs-7 text-primary">
																	Head Of Idea, Treve LLC
																</p>
															</div>
															<div className="right d-flex gap-2 pe-lg-8 ">
																<div className="d-flex align-items-center">
																	<div className="icon-shape icon-60 rounded-circle overflow-hidden border border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-1.png"
																			alt="AstraX"
																		/>
																	</div>
																	<div className="avatar-2 icon-shape icon-60 rounded-circle overflow-hidden border border-2 border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-2.png"
																			alt="AstraX"
																		/>
																	</div>
																</div>
																<div>
																	<h6 className="text-primary mb-0">5k</h6>
																	<p className="mb-0 text-dark">Happy Customers</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 ps-lg-0 d-none d-lg-block">
													<div className="position-relative text-center">
														<div className="position-absolute top-0 end-0 z-2 me-5 mt-5">
															<Link
																href="https://www.youtube.com/watch?v=2GOTlI8pYeo"
																className="fw-semibold bg-white rounded-circle popup-video play-btn  hover-up icon-shape icon-80"
															>
																<i className="ri-play-fill text-dark fs-3" />
															</Link>
														</div>
														<img
															src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/img-2.png"
															alt="AstraX"
														/>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonial py-5 px-lg-5 px-4 pb-0 rounded-top-5 position-relative">
											<div className="row align-self-stretch position-relative z-1">
												<div className="col-lg-7 p-5 pe-lg-0 border">
													<div className="h-100 d-flex flex-column">
														<div className="d-flex gap-2">
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
														</div>
														<h5 className="mt-3 pb-7 mb-auto pe-lg-8">
															" Unrivaled brilliance surpassing all others. Highly
															recommended for novices and experts alike. We will
															hire them for sure anytime. "
														</h5>
														<div className="d-flex align-items-center justify-content-between flex-column flex-md-row border-top pt-3">
															<div className="text-start mt-3">
																<Link href="#">
																	<span className="btn-text">Alonso J. Carter</span>
																</Link>
																<p className="fs-7 text-primary">
																	Head Of Idea, Treve LLC
																</p>
															</div>
															<div className="right d-flex gap-2 pe-lg-8 ">
																<div className="d-flex align-items-center">
																	<div className="icon-shape icon-60 rounded-circle overflow-hidden border border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-1.png"
																			alt="AstraX"
																		/>
																	</div>
																	<div className="avatar-2 icon-shape icon-60 rounded-circle overflow-hidden border border-2 border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-2.png"
																			alt="AstraX"
																		/>
																	</div>
																</div>
																<div>
																	<h6 className="text-primary mb-0">5k</h6>
																	<p className="mb-0 text-dark">Happy Customers</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 ps-lg-0 d-none d-lg-block">
													<div className="position-relative text-center">
														<div className="position-absolute top-0 end-0 z-2 me-5 mt-5">
															<Link
																href="https://www.youtube.com/watch?v=2GOTlI8pYeo"
																className="fw-semibold bg-white rounded-circle popup-video play-btn  hover-up icon-shape icon-80"
															>
																<i className="ri-play-fill text-dark fs-3" />
															</Link>
														</div>
														<img
															src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/img-3.png"
															alt="AstraX"
														/>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="card-testimonial py-5 px-lg-5 px-4 pb-0 rounded-top-5 position-relative">
											<div className="row align-self-stretch position-relative z-1">
												<div className="col-lg-7 p-5 pe-lg-0 border">
													<div className="h-100 d-flex flex-column">
														<div className="d-flex gap-2">
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
															<i className="bi bi-star-fill text-primary fs-7" />
														</div>
														<h5 className="mt-3 pb-7 mb-auto pe-lg-8">
															" Unrivaled brilliance surpassing all others. Highly
															recommended for novices and experts alike. We will
															hire them for sure anytime. "
														</h5>
														<div className="d-flex align-items-center justify-content-between flex-column flex-md-row border-top pt-3">
															<div className="text-start mt-3">
																<Link href="#">
																	<span className="btn-text">Alonso J. Carter</span>
																</Link>
																<p className="fs-7 text-primary">
																	Head Of Idea, Treve LLC
																</p>
															</div>
															<div className="right d-flex gap-2 pe-lg-8 ">
																<div className="d-flex align-items-center">
																	<div className="icon-shape icon-60 rounded-circle overflow-hidden border border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-1.png"
																			alt="AstraX"
																		/>
																	</div>
																	<div className="avatar-2 icon-shape icon-60 rounded-circle overflow-hidden border border-2 border-white">
																		<img
																			src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/avatar-2.png"
																			alt="AstraX"
																		/>
																	</div>
																</div>
																<div>
																	<h6 className="text-primary mb-0">5k</h6>
																	<p className="mb-0 text-dark">Happy Customers</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 ps-lg-0 d-none d-lg-block">
													<div className="position-relative text-center">
														<div className="position-absolute top-0 end-0 z-2 me-5 mt-5">
															<a
																href="https://www.youtube.com/watch?v=2GOTlI8pYeo"
																className="fw-semibold bg-white rounded-circle popup-video play-btn  hover-up icon-shape icon-80"
															>
																<i className="ri-play-fill text-dark fs-3" />
															</a>
														</div>
														<img
															src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-6/img-1.png"
															alt="AstraX"
														/>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
						{/* Swiper JS */}
					</div>
				</div>
			</section>
		</>

	)
}
