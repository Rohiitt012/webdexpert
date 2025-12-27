import Link from "next/link";

export default function Section3g() {
	return (
		<>
			{/*law-firm home section 3g - Pricing Plans*/}
			<section className="law-firm-home-section-3g position-relative pt-4 pb-10 bg-white">
				<div className="container position-relative z-1">
					<div className="row justify-content-center">
						<div className="col-xl-8 text-center mb-5">
							<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
								Our Pricing
							</span>
							<h2 className="text-dark mt-3 mb-4 text-anime-style-2 fw-bold">
								WordPress & CMS Development <br /> Packages
							</h2>
						</div>
					</div>
					<div className="row g-4 align-items-center">
						{/* Starter Website Package */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🚀</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									Starter Website Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹14,999<span style={{ fontSize: '18px', fontWeight: 400 }}> (One-Time)</span>
									</h4>
								</div>

								<div className="text-start small text-muted mb-4">
									<ul className="list-unstyled mb-0" style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>WordPress setup &amp; customization</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Premium theme installation</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Essential plugins (SEO, cache, security)</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Mobile-responsive design</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Basic speed optimization</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Basic security setup</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Contact form &amp; basic pages (Up to 5 pages)</span>
										</li>
									</ul>
								</div>
								<Link
									href="/contact"
									className="btn btn-primary w-100"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '12px 32px',
										fontSize: '16px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Choose Plan
								</Link>
								<p className="fw-semibold text-primary mt-4 mb-0">Best for: Individuals, startups, small businesses</p>
							</div>
						</div>

						{/* Business Website Package (Most Popular) */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4 position-relative"
								style={{ backgroundColor: '#000', border: '2px solid #FDB913', color: '#fff' }}
							>
								<div className="position-absolute top-0 start-50 translate-middle-x mt-0" style={{ marginTop: "-15px" }}>
									<span className="badge bg-white text-dark rounded-pill px-3 py-2 fw-semibold" style={{ border: "2px solid #FDB913" }}>
										Most Popular
									</span>
								</div>

								<div className="mb-3 mt-3">
									<span style={{ fontSize: '48px' }}>💼</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
										color: '#FDB913',
									}}
								>
									Business Website Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#FDB913',
										}}
									>
										₹29,999<span style={{ fontSize: '18px', fontWeight: 400, color: "#fff" }}> (One-Time)</span>
									</h4>
								</div>

								<div className="text-start small mb-4">
									<ul className="list-unstyled mb-0" style={{ fontSize: '16px', lineHeight: '2', color: '#fff' }}>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Everything in Starter Package</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Custom theme design (brand-based)</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Custom functionality / plugin tweaks</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Advanced speed optimization</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>SEO-friendly structure</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Webflow / CMS setup (if required)</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Website migration (old → new)</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Security hardening &amp; firewall setup</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Backup &amp; recovery setup</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-white me-2 mt-1" />
											<span>Up to 10 pages</span>
										</li>
									</ul>
								</div>

								<Link
									href="/contact"
									className="btn w-100"
									style={{
										border: '2px solid #FDB913',
										borderRadius: '999px',
										padding: '12px 32px',
										fontSize: '16px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#FDB913',
										color: '#000',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Choose Plan
								</Link>
								<p className="fw-semibold mt-4 mb-0" style={{ color: "#FDB913" }}>Best for: Growing businesses, service providers</p>
							</div>
						</div>

						{/* Premium / Enterprise Package */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🏢</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									Premium / Enterprise Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹49,999<span style={{ fontSize: '18px', fontWeight: 400 }}> (One-Time)</span>
									</h4>
								</div>

								<div className="text-start small text-muted mb-4">
									<ul className="list-unstyled mb-0" style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Everything in Business Package</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Fully custom WordPress theme</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Custom plugin development</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Advanced Webflow / CMS development</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>High-performance optimization</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Malware cleanup &amp; security audit</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>CDN &amp; advanced security setup</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Zero-downtime migration</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Priority support</span>
										</li>
										<li className="d-flex align-items-start">
											<i className="bi bi-check-lg text-success me-2 mt-1" />
											<span>Unlimited pages</span>
										</li>
									</ul>
								</div>
								<Link
									href="/contact"
									className="btn btn-primary w-100"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '12px 32px',
										fontSize: '16px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Choose Plan
								</Link>
								<p className="fw-semibold text-primary mt-4 mb-0">Best for: Large businesses, agencies, high-traffic websites</p>
							</div>
						</div>
					</div>

					{/* Optional Add-Ons Section */}
					<div className="row mt-5">
						<div className="col-xl-10 mx-auto">
							<div className="border rounded-4 p-4 p-lg-5 bg-white">
								<div className="d-flex align-items-center gap-2 mb-4">
									<span className="fs-4">🔧</span>
									<h4 className="text-dark mb-0">Optional Add-Ons (Extra)</h4>
								</div>
								<div className="row g-1">
									<div className="col-md-6">
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Custom Plugin Development</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹6,999+</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Webflow CMS Advanced Setup</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹4,999+</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Speed Optimization (Core Web Vitals)</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹3,999</span>
										</div>
									</div>
									<div className="col-md-6">
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Security Hardening &amp; Malware Removal</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹2,999</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Website Migration</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹1,999</span>
										</div>
										<div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
											<span className="text-dark fw-semibold">Monthly Maintenance</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹2,499 / month</span>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<span className="text-dark fw-semibold">Content Upload (Per Page)</span>
											<span className="fw-bold" style={{ color: '#FDB913' }}>₹299</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="row mt-5">
						<div className="col-12">
							<div
								className="text-center py-5 px-4 rounded-4"
								style={{ backgroundColor: '#000', color: '#fff' }}
							>
								<h2
									className="mb-4"
									style={{
										fontSize: '40px',
										lineHeight: '1.3',
										fontWeight: 600,
										color: '#fff',
									}}
								>
									🚀 Ready to build your dream website?
								</h2>
								<p
									className="mb-5"
									style={{
										fontSize: '18px',
										lineHeight: '1.7',
										color: '#ddd',
										maxWidth: '800px',
										margin: '0 auto 40px',
									}}
								>
									Let&apos;s create a website that drives real business results.
								</p>
								<div className="d-flex flex-wrap justify-content-center gap-3">
									<Link
										href="/contact"
										className="btn"
										style={{
											border: '2px solid #FDB913',
											borderRadius: '999px',
											padding: '14px 36px',
											fontSize: '16px',
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
											backgroundColor: '#FDB913',
											color: '#000',
											display: 'inline-block',
											textDecoration: 'none',
										}}
									>
										👉 Get Free Consultation
									</Link>
									<Link
										href="/contact"
										className="btn"
										style={{
											border: '2px solid #fff',
											borderRadius: '999px',
											padding: '14px 36px',
											fontSize: '16px',
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
											backgroundColor: '#fff',
											color: '#000',
											display: 'inline-block',
											textDecoration: 'none',
										}}
									>
										👉 View Our Portfolio
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

