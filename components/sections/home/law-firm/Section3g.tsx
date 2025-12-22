import Link from "next/link";

export default function Section3g() {
	return (
		<>
			{/*law-firm home section 3g - Pricing Plans*/}
			<section className="law-firm-home-section-3g position-relative py-60 bg-white">
				<div className="container position-relative z-1">
					<div className="row justify-content-center">
						<div className="col-xl-8 text-center mb-5">
							<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
								Our Pricing
							</span>
							<h2 className="text-dark mt-3 mb-4 text-anime-style-2 fw-bold">
								WordPress & CMS Development Packages
							</h2>
						</div>
					</div>
					<div className="row g-1 align-items-stretch">
						{/* Starter Website Package */}
						<div className="col-xl-4">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white">
								<div className="d-flex align-items-center gap-2 mb-3">
									<span className="fs-3">🚀</span>
									<h4 className="text-dark mb-0">Starter Website Package</h4>
								</div>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-1 fw-bold text-dark">₹14,999</span>
								</div>
								<p className="text-muted mb-4">(One-Time)</p>
								<Link href="/contact" className="btn btn-primary w-100 mb-4 hover-up">
									Choose Plan
								</Link>
								<div className="text-start small text-muted">
									<ul className="list-unstyled mb-0">
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>WordPress setup &amp; customization</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Premium theme installation</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Essential plugins (SEO, cache, security)</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Mobile-responsive design</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Basic speed optimization</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Basic security setup</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Contact form &amp; basic pages (Up to 5 pages)</span>
										</li>
									</ul>
									<p className="fw-semibold text-primary mt-4 mb-0">Best for: Individuals, startups, small businesses</p>
								</div>
							</div>
						</div>

						{/* Business Website Package (Most Popular) */}
						<div className="col-xl-4">
							<div className="h-100 border border-primary rounded-4 p-4 p-lg-5 bg-primary text-white position-relative shadow-sm">
								<div className="position-absolute top-0 start-50 translate-middle-x mt-0">
									<span className="badge bg-white text-primary rounded-pill px-3 py-2 fw-semibold">
										Most Popular
									</span>
								</div>
								<div className="mt-4 pt-3">
									<div className="d-flex align-items-center gap-2 mb-3">
										<span className="fs-3">💼</span>
										<h4 className="mb-0">Business Website Package</h4>
									</div>
									<div className="d-flex align-items-baseline mb-3">
										<span className="fs-1 fw-bold">₹29,999</span>
									</div>
									<p className="mb-4">(One-Time)</p>
									<Link href="/contact" className="btn btn-light text-primary w-100 mb-4 hover-up">
										Choose Plan
									</Link>
									<div className="text-start small">
										<ul className="list-unstyled mb-0">
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Everything in Starter Package</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Custom theme design (brand-based)</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Custom functionality / plugin tweaks</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Advanced speed optimization</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>SEO-friendly structure</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Webflow / CMS setup (if required)</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Website migration (old → new)</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Security hardening &amp; firewall setup</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Backup &amp; recovery setup</span>
											</li>
											<li className="mb-2 d-flex align-items-start">
												<i className="bi bi-check-lg text-white me-2 mt-1" />
												<span>Up to 10 pages</span>
											</li>
										</ul>
										<p className="fw-semibold mt-4 mb-0">Best for: Growing businesses, service providers</p>
									</div>
								</div>
							</div>
						</div>

						{/* Premium / Enterprise Package */}
						<div className="col-xl-4">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white">
								<div className="d-flex align-items-center gap-2 mb-3">
									<span className="fs-3">🏢</span>
									<h4 className="text-dark mb-0">Premium / Enterprise Package</h4>
								</div>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-1 fw-bold text-dark">₹49,999</span>
								</div>
								<p className="text-muted mb-4">(One-Time)</p>
								<Link href="/contact" className="btn btn-primary w-100 mb-4 hover-up">
									Choose Plan
								</Link>
								<div className="text-start small text-muted">
									<ul className="list-unstyled mb-0">
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Everything in Business Package</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Fully custom WordPress theme</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Custom plugin development</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Advanced Webflow / CMS development</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>High-performance optimization</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Malware cleanup &amp; security audit</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>CDN &amp; advanced security setup</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Zero-downtime migration</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Priority support</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Unlimited pages</span>
										</li>
									</ul>
									<p className="fw-semibold text-primary mt-4 mb-0">Best for: Large businesses, agencies, high-traffic websites</p>
								</div>
							</div>
						</div>
					</div>
					
					{/* Optional Add-Ons Section */}
					<div className="row mt-5">
						<div className="col-xl-10 mx-auto">
							<div className="border rounded-4 p-4 p-lg-5 bg-light">
								<div className="d-flex align-items-center gap-2 mb-4">
									<span className="fs-4">🔧</span>
									<h4 className="text-dark mb-0">Optional Add-Ons (Extra)</h4>
								</div>
								<div className="row g-1">
									<div className="col-md-6">
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Custom Plugin Development</span>
											<span className="text-primary fw-bold">₹6,999+</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Webflow CMS Advanced Setup</span>
											<span className="text-primary fw-bold">₹4,999+</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Speed Optimization (Core Web Vitals)</span>
											<span className="text-primary fw-bold">₹3,999</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Security Hardening &amp; Malware Removal</span>
											<span className="text-primary fw-bold">₹2,999</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Website Migration</span>
											<span className="text-primary fw-bold">₹1,999</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Monthly Maintenance</span>
											<span className="text-primary fw-bold">₹2,499 / month</span>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<span className="text-dark fw-semibold">Content Upload (Per Page)</span>
											<span className="text-primary fw-bold">₹299</span>
										</div>
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

