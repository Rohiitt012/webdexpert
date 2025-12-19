import Link from "next/link";

export default function Section1() {
	return (
		<>
			{/*law-firm home section 1*/}
			<section
				className="law-firm-home-section-1 position-relative pt-150 overflow-hidden"
				data-background="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-1/bg-img.png"
			>
				<div className="overlay" />
				<div className="container position-relative z-1 pt-8 text-lg-start text-center">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12 px-md-0 pb-lg-0 pb-10">
							<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2">
							WordPress & &amp; CMS Development
							</span>
							<h1 className="text-white ds-1 mt-4 text-anime-style-222">
							WordPress & CMS
								<strong className="position-relative text-anime-style-3 ms-5">
								Development.
									<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={274}
											height={73}
											viewBox="0 0 274 73"
											fill="none"
										>
											<path
												d="M1 41.8062C48.1986 17.6383 163.699 -21.1402 248.109 17.089C353.623 64.8755 91.7525 75.8609 56.2169 70.9174C28.4292 67.0518 -0.640106 29.1729 41.4559 6.10354"
												stroke="#B98E44"
												strokeWidth={2}
											/>
										</svg>
									</span>
								</strong>
							</h1>
							<Link
								href="/practice-area"
								className="btn btn-primary mt-4"
								data-aos="fade-up"
							>
								<span>our services</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
								>
									<g clipPath="url(#clip0_964_205)">
										<path
											d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
											fill="white"
										/>
									</g>
								</svg>
							</Link>
						</div>
						<div className="col-lg-7">
							<div className="position-relative mt-lg-0 mt-80 d-none d-lg-block">
								<div className="position-relative z-1">
									<img
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-1/portrait.png"
										alt="AstraX"
									/>
								</div>
								<div className="position-absolute bottom-0 start-0">
									<div className="bg-circle" data-aos="zoom-in" />
									<div className="position-absolute top-0 end-0 m-6">
										<div className="position-relative z-1">
											<div className="parallax-item">
												<div
													className="icon-shape icon-100 bg-white rounded-circle"
													data-aos="zoom-in"
													data-aos-delay={500}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={40}
														height={40}
														viewBox="0 0 40 40"
														fill="none"
													>
														<g clipPath="url(#clip0_416_683)">
															<path
																d="M8.28125 30.5469C12.8806 30.5469 16.4844 27.9731 16.4844 24.6875V23.5156H13.8531L10.292 11.0527C11.5885 10.8209 12.6401 10.5648 13.5982 10.3286C15.2177 9.93047 16.6941 9.59406 18.8281 9.49602V33.5134L9.09609 40H30.9016L21.1719 33.5135V9.49602C23.3059 9.59398 24.7823 9.93047 26.4018 10.3286C27.3599 10.5648 28.4115 10.8209 29.708 11.0527L26.1469 23.5156H23.5156V24.6875C23.5156 27.9731 27.1194 30.5469 31.7188 30.5469C36.3181 30.5469 40 27.9731 40 24.6875V23.5156H37.2906L33.8777 11.5719C35.5462 11.7072 37.5754 11.7969 40 11.7969V9.45312C32.971 9.45312 29.9632 7.28906 27.378 5.38016C25.5694 4.04375 23.8473 2.69695 21.1719 2.4068V0H18.8281V2.4068C16.1527 2.69687 14.4306 4.04375 12.622 5.38016C10.0368 7.28906 7.02898 9.45312 0 9.45312V11.7969C2.42398 11.7969 4.45305 11.7073 6.12133 11.572L2.70937 23.5156H0V24.6875C0 27.9731 3.68187 30.5469 8.28125 30.5469ZM34.8523 23.5156H28.5852L31.7185 12.5495L34.8523 23.5156ZM8.28086 12.5477L11.4148 23.5156H5.14758L8.28086 12.5477Z"
																fill="#152833"
															/>
														</g>
													</svg>
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
