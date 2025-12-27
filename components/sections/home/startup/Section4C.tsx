import Link from "next/link";

export default function Section4C() {
	return (
		<>
			{/*startup home section 4C - Website Optimization & UX Services Pricing*/}
			<section className="startup-home-section-4c position-relative py-5 bg-white">
				<div className="container position-relative z-1">
					<div className="row justify-content-center">
						<div className="col-xl-10 text-center mb-5">
							<span className="btn-text" style={{ color: '#FDB913' }}>Our Pricing</span>
							<h2 className="text-dark my-3 fw-bold">
								💎 Website Optimization &amp; UX Services
							</h2>
						</div>
					</div>

					{/* Individual Services */}
					<div className="row g-1 mb-5">
						{/* Service 1: UI/UX Redesign */}
						<div className="col-lg-3 col-md-6">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">🎨</span>
								</div>
								<h5 className="text-dark fw-bold mb-2">UI/UX Redesign</h5>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-4 fw-bold text-dark">₹29,999</span>
								</div>
								<p className="text-muted small mb-4">Starting from ₹29,999</p>
								<p className="text-dark text-opacity-75 fs-7 mb-4">
									We redesign your website interface and user journey to improve usability, engagement, and conversions while maintaining a modern, brand-consistent look.
								</p>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>Modern, conversion-focused design</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Improved navigation &amp; layout hierarchy</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>CTA &amp; user flow optimization</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Desktop &amp; mobile UI alignment</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Service 2: Speed & Performance Optimization */}
						<div className="col-lg-3 col-md-6">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">⚡</span>
								</div>
								<h5 className="text-dark fw-bold mb-2">Speed &amp; Performance Optimization</h5>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-4 fw-bold text-dark">₹6,999</span>
								</div>
								<p className="text-muted small mb-4">Starting from ₹6,999</p>
								<p className="text-dark text-opacity-75 fs-7 mb-4">
									We optimize your website&apos;s performance to ensure faster load times, better user experience, and improved Core Web Vitals scores.
								</p>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>Image &amp; asset optimization</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Caching &amp; code minification</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Performance audit &amp; fixes</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Improved page load speed</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Service 3: Mobile Responsiveness */}
						<div className="col-lg-3 col-md-6">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">📱</span>
								</div>
								<h5 className="text-dark fw-bold mb-2">Mobile Responsiveness</h5>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-4 fw-bold text-dark">₹7,999</span>
								</div>
								<p className="text-muted small mb-4">Starting from ₹7,999</p>
								<p className="text-dark text-opacity-75 fs-7 mb-4">
									We ensure your website delivers a seamless and consistent experience across all screen sizes and devices.
								</p>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>Mobile &amp; tablet layout fixes</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Touch-friendly UI elements</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Cross-device testing</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Consistent design across devices</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Service 4: SEO-Optimized Structure */}
						<div className="col-lg-3 col-md-6">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">🔍</span>
								</div>
								<h5 className="text-dark fw-bold mb-2">SEO-Optimized Structure</h5>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-4 fw-bold text-dark">₹11,999</span>
								</div>
								<p className="text-muted small mb-4">Starting from ₹11,999</p>
								<p className="text-dark text-opacity-75 fs-7 mb-4">
									We build a strong technical SEO foundation to improve search visibility and long-term ranking performance.
								</p>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>SEO-friendly URL structure</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Proper heading hierarchy (H1–H6)</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Meta tags &amp; image optimization</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Sitemap &amp; robots.txt setup</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Professional Packages */}
					<div className="row mt-5">
						<div className="col-12 text-center mb-5">
							<h3 className="text-dark fw-bold">📦 Professional Packages</h3>
						</div>
					</div>
					<div className="row g-1 align-items-stretch">
						{/* Package 1: Performance Essentials Package */}
						<div className="col-xl-4">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">⭐</span>
									<h4 className="text-dark fw-bold mb-0 d-inline-block ms-2">Performance Essentials Package</h4>
								</div>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-1 fw-bold text-dark">₹24,999</span>
								</div>
								<Link href="/contact" className="btn w-100 mb-4" style={{ backgroundColor: '#FDB913', color: '#000', fontWeight: 'bold', border: 'none' }}>
									Choose Plan
								</Link>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>Speed &amp; performance optimization</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Mobile responsiveness</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Basic SEO-optimized structure</span>
									</li>
								</ul>
								<p className="fw-semibold mt-4 mb-0 small" style={{ color: '#FDB913' }}>Ideal for: Existing business &amp; trading websites</p>
							</div>
						</div>

						{/* Package 2: UX & Growth Package (Most Popular) */}
						<div className="col-xl-4">
							<div
								className="h-100 border rounded-4 p-4 p-lg-5 text-white position-relative shadow-sm"
								style={{ backgroundColor: '#000', border: '2px solid #FDB913' }}
							>
								<div className="position-absolute top-0 start-50 translate-middle-x mt-0">
									<span
										className="badge rounded-pill px-3 py-2 fw-semibold"
										style={{ backgroundColor: '#FDB913', color: '#000' }}
									>
										Most Popular
									</span>
								</div>
								<div className="mt-4 pt-3">
									<div className="mb-3">
										<span className="fs-4">🚀</span>
										<h4 className="mb-0 d-inline-block ms-2 text-white">UX &amp; Growth Package</h4>
									</div>
									<div className="d-flex align-items-baseline mb-3">
										<span className="fs-1 fw-bold text-white">₹49,999</span>
									</div>
									<Link
										href="/contact"
										className="btn w-100 mb-4"
										style={{
											backgroundColor: '#FDB913',
											color: '#000',
											fontWeight: 'bold',
											border: 'none'
										}}
									>
										Choose Plan
									</Link>
									<ul className="list-unstyled mb-0 small">
										<li className="mb-2 d-flex align-items-start">
											<span>Complete UI/UX redesign</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<span>Speed &amp; performance optimization</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<span>Mobile responsiveness</span>
										</li>
										<li className="mb-2 d-flex align-items-start">
											<span>SEO-optimized structure</span>
										</li>
									</ul>
									<p className="fw-semibold mt-4 mb-0 small" style={{ color: '#FDB913' }}>Ideal for: Conversion-focused business websites</p>
								</div>
							</div>
						</div>

						{/* Package 3: Premium Business Optimization Package */}
						<div className="col-xl-4">
							<div className="h-100 border rounded-4 p-4 p-lg-5 bg-white shadow-sm">
								<div className="mb-3">
									<span className="fs-4">🏆</span>
									<h4 className="text-dark fw-bold mb-0 d-inline-block ms-2">Premium Business Optimization Package</h4>
								</div>
								<div className="d-flex align-items-baseline mb-3">
									<span className="fs-1 fw-bold text-dark">₹89,999</span>
								</div>
								<Link href="/contact" className="btn w-100 mb-4" style={{ backgroundColor: '#FDB913', color: '#000', fontWeight: 'bold', border: 'none' }}>
									Choose Plan
								</Link>
								<ul className="list-unstyled mb-0 small text-muted">
									<li className="mb-2 d-flex align-items-start">
										<span>Advanced UI/UX redesign</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>High-performance optimization</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Mobile-first experience</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Advanced technical SEO structure</span>
									</li>
									<li className="mb-2 d-flex align-items-start">
										<span>Conversion-focused improvements</span>
									</li>
								</ul>
								<p className="fw-semibold mt-4 mb-0 small" style={{ color: '#FDB913' }}>Ideal for: High-traffic &amp; enterprise websites</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

