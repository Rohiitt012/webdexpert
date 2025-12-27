import Link from "next/link";

export default function Section10() {
	return (
		<>
			{/*law-firm home faq section*/}
			<section className="law-firm-home-section-10 position-relative pt-10 pb-20" style={{ backgroundColor: "#eff4f9" }}>
				<div className="container position-relative z-1">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center gap-3">
							<span className="small-line" />
							<span className="btn-text text-primary">faq &amp; a.</span>
							<span className="small-line" />
						</div>
						<h2 className="text-dark mt-3 mb-8 text-anime-style-2">Get every single answer</h2>
					</div>
					<div className="row flex-wrap align-items-end">
						<div className="col-lg-12 col-md-12">
							<div className="accordion-2">
								<div className="px-0 card border-bottom-0 rounded-bottom-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-1">
											<h6 className="text-primary mb-0">
												<span className="text-dark">What services does your company offer?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-1" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											We specialize in WordPress development, custom themes, CMS solutions, website migration, security optimization, and performance-focused web solutions.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-2">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Do you provide custom website designs?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-2" className="collapse show" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Yes, we create fully customized, brand-focused designs tailored to your business goals and user experience requirements.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-3">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Is my website mobile-friendly?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-3" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Absolutely. All our websites are fully responsive, ensuring seamless performance across mobile, tablet, and desktop devices.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-4">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Can you migrate my existing website safely?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-4" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Yes, we handle secure website migrations with zero data loss, minimal downtime, and enhanced security measures.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-5">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Do you optimize websites for speed and performance?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-5" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Yes, we improve load speed, optimize code, and enhance performance for smoother user experience and better conversions.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-6">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Are your websites SEO-friendly?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-6" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Our websites are built with clean code, structured layouts, and SEO-optimized architecture for better search engine visibility.
										</p>
									</div>
								</div>
								<div className="px-0 card border-bottom-0 rounded-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-7">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Do you offer ongoing support and maintenance?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-7" className="collapse" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											Yes, we provide ongoing maintenance, updates, security monitoring, and technical support after project completion.
										</p>
									</div>
								</div>
								<div className="px-0 card rounded-top-0 collapse-custom bg-transparent">
									<div className="p-0 card-header border-0 rounded-bottom-3 bg-transparent">
										<Link className="collapsed p-4 fw-bold d-flex align-items-center" data-bs-toggle="collapse" href="#lf-faq-8">
											<h6 className="text-primary mb-0">
												<span className="text-dark">Why should businesses choose your company?</span>
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div id="lf-faq-8" className="collapse rounded-bottom-3" data-bs-parent=".accordion-2">
										<p className="px-3 fs-6 fw-regular text-dark text-opacity-75">
											We deliver reliable, scalable, and result-driven web solutions using modern technologies and a professional, client-focused approach.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

