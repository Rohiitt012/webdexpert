import Link from "next/link";

export default function Section2() {
	return (
		<>
			{/*law-firm home section 2*/}
			<section className="law-firm-home-section-2 position-relative">
				<div className="container position-relative z-1 py-20">
					<div className="row">
						<div className="col-lg-2">
							<div className="position-relative z-1">
								<div className="parallax-item">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={150}
										height={150}
										viewBox="0 0 40 40"
										fill="none"
									>
										<g>
											<path
												fill="#b98e44"
												d="M24.5043 9.79724L22.7082 18.3981L35.2929 17.1948L37.1117 7.00605L24.5043 9.79724Z"
											/>
											<path
												fill="#b98e44"
												d="M31.9171 17.6837L23.2697 20.6189L30.6333 30.3865L40.723 26.6545L31.9171 17.6837Z"
											/>
											<path
												fill="#b98e44"
												d="M28.4204 27.86L21.4605 22.2312L16.332 33.3249L24.7296 39.7347L28.4204 27.86Z"
											/>
											<path
												fill="#b98e44"
												d="M17.5913 29.998L19.1912 21.3633L6.63465 22.8288L5.04812 33.0511L17.5913 29.998Z"
											/>
											<path
												fill="#b98e44"
												d="M10.2917 22.1777L18.8717 19.0632L11.2859 9.45346L1.28177 13.3945L10.2917 22.1777Z"
											/>
											<path
												fill="#b98e44"
												d="M13.7243 12.2243L20.8121 17.7054L25.6875 6.50938L17.1442 0.277556L13.7243 12.2243Z"
											/>
										</g>
									</svg>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="position-relative">
								<h2 className="text-dark text-anime-style-3">
									Our expert team delivers WordPress customization, custom themes, CMS development, and secure website migrations  <span className="text-primary">to build </span>
									powerful, scalable, and
									<strong className="text-primary text-decoration-underline">
										performance-driven
									</strong>
									to <span className="text-primary"> digital</span> solutions.
								</h2>
							</div>
						</div>
					</div>
					<div className="row mt-80">
						<div className="col-lg-10 ms-auto">
							<div className="row">
								<div className="col-lg-7">
									<img
										className="wow img-custom-anim-left"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-2/img-2.png"
										alt="AstraX"
									/>
								</div>
								<div className="col-lg-5 col-md-8 mt-lg-0 mt-5 marketing-info">
									<div className="text-start wow img-custom-anim-left mb-4">
										<svg width="40%" height={100} className="w-md-40 w-50" style={{ overflow: "visible" }}>
											<text className="fs-70" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
												100%
											</text>
										</svg>
									</div>
									<h4 className="text-anime-style-2">
										Success <strong>rate</strong>
									</h4>
									<p>
										We provide complete web design, development, and optimization services tailored for businesses of all sizes, using smart strategies and modern technologies to drive growth..
									</p>
									<Link
										href="/contact"
										className="btn btn-outline-secondary hover-up"
									>
										<span>get in touch</span>
										<span className="mt-2">
											<svg
												fill="primary"
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												viewBox="0 0 16 16"
											>
												<path
													d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
													fill="#B98E44"
												/>
											</svg>
										</span>
									</Link>
									<Link href="" className="btn">
										<span className="text-dark">Email: contact@xzect.com</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}
