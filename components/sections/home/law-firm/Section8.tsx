import Link from 'next/link'

export default function Section8() {
	return (
		<>
			{/*law-firm home section 8*/}
			<section className="law-firm-home-section-8 pt-50 pb-10 position-relative bg-white">
				<div className="container">
					<div className="newsletter-bg rounded-top-5 position-relative">
						<div className="container pt-20 pb-20">
							<div className="row">
								<div className="col-lg-5">
									<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-transparent">
										get in touch
									</span>
									<h2 className="mt-3 text-dark text-anime-style-2">
										Contact us
										<strong className="position-relative">
											anytime
											<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={198}
													height={53}
													viewBox="0 0 198 53"
													fill="none"
												>
													<path
														d="M1 30.3115C35.0108 12.9514 118.239 -14.9035 179.064 12.5569C255.096 46.8824 66.3952 54.7733 40.7886 51.2224C20.7652 48.4457 -0.181841 21.2369 30.1521 4.66592"
														stroke="#B98E44"
														strokeWidth={2}
													/>
												</svg>
											</span>
										</strong>
										<br />
										for any help
									</h2>
									<div className="d-flex flex-md-row flex-column gap-5 mt-7">
										<div data-aos="fade-up" data-aos-delay={200}>
											<div className="icon">
												<svg
													className="stroke-primary"
													xmlns="http://www.w3.org/2000/svg"
													width={60}
													height={60}
													viewBox="0 0 60 60"
													fill="none"
												>
													<g clipPath="url(#clip0_349_948)">
														<path
															d="M41.25 25C48.845 25 55 30.0375 55 36.25C55 39.7425 53.055 42.8625 50 44.925V50L45.09 47.055C43.8317 47.3522 42.543 47.5015 41.25 47.5C33.655 47.5 27.5 42.4625 27.5 36.25C27.5 30.0375 33.655 25 41.25 25Z"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M27.9925 39.245C26.2675 39.735 24.4175 40 22.5 40C20.2785 40.0048 18.0717 39.6398 15.97 38.92L10 42.5V35.4975C6.9075 32.7925 5 29.0875 5 25C5 16.715 12.835 10 22.5 10C31.955 10 39.6575 16.425 40 24.4625V25.045"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M25 20H25.025"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M17.5 20H17.525"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M37.5 35H37.525"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M45 35H45.025"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</g>
												</svg>
											</div>
											<Link href="#">
												<h6 className="mt-5 mb-3 fs-20 text-dark">
													Email: contact@xzect.com
												</h6>
											</Link>
											<p className="mb-0 text-dark text-opacity-75">
												Media strategy encapsulates your intentions.
											</p>
										</div>
										<div data-aos="fade-up" data-aos-delay={400}>
											<div className="icon">
												<svg
													className="stroke-primary"
													xmlns="http://www.w3.org/2000/svg"
													width={60}
													height={60}
													viewBox="0 0 60 60"
													fill="none"
												>
													<g clipPath="url(#clip0_349_2617)">
														<path
															d="M29.8325 12.5H12.5V52.5H45V32.5"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M35 42.5H22.5"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M22.5 32.5H35V22.5H22.5V32.5Z"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M37.5 12.5V7.5"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M45 15L50 10"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M47.5 22.5H52.5"
															stroke="#0D6EFD"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</g>
												</svg>
											</div>
											<a href="telto:(123) 456 789 00">
												<h6 className="mt-5 mb-3 fs-20 text-dark">
													Contact: +91 98188 06393
												</h6>
											</a>
											<p className="mb-0 text-dark text-opacity-75">
												Media strategy encapsulates your intentions.
											</p>
										</div>
									</div>
									<form className="input-group mt-7 position-relative">
										<input
											type="text"
											className="form-control rounded-start-0 border bg-white"
											name="name"
											placeholder="astrax@"
										/>
										<div className="border border-0 rounded-end-4">
											<button
												aria-label="subscribe"
												className="btn btn-primary h-100"
												type="submit"
												data-aos="fade-zoom-in"
												data-aos-delay={100}
											>
												subscribe
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
												>
													<g clipPath="url(#clip0_948_688)">
														<path
															d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
															fill="white"
														/>
													</g>
												</svg>
											</button>
										</div>
									</form>
								</div>
								<div className="col-lg-6 offset-lg-1 text-end mt-lg-0 mt-8">
									<div className="position-relative d-inline-block">
										<img
											className="position-relative z-1 wow img-custom-anim-top"
											src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-8/img.png"
											alt="AstraX"
										/>
										<div className="circle-1 position-absolute top-md-50 top-100 start-md-0 start-50 translate-middle z-0" />
										<div className="circle-2 position-absolute top-md-50 top-100 start-md-0 start-50 translate-middle z-0" />
										<div className="position-absolute top-md-50 top-100 start-md-0 start-50 translate-middle z-2">
											<div className="text-center">
												<div className="position-relative bg-primary icon-shape icon-160 rounded-circle">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={53}
														height={60}
														viewBox="0 0 53 60"
														fill="none"
													>
														<g clipPath="url(#clip0_423_1815)">
															<path
																d="M5.04787 47.8567V17.9002L26.4977 5.75925L47.9529 17.9002V42.0975L26.4977 54.2407L15.1429 47.8125V23.703L26.4977 17.2755L37.8571 23.703V36.294L26.4977 42.7222L25.2386 42.0097V29.5072L31.585 25.9132L26.4977 23.0347L20.1907 26.607V44.91L26.4977 48.4815L42.905 39.1942V20.8027L26.4977 11.5185L10.0957 20.8027V50.7127L26.4977 60L53 45V15L26.4977 0L0 15V45L5.04787 47.8567Z"
																fill="white"
															/>
														</g>
													</svg>
													<div className="position-absolute top-50 start-50 translate-middle w-100">
														<h6 className="circle-text rotateme text-white">
															hire us for your case / hire us for your /
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}
