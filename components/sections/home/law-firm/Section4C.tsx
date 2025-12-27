import Link from "next/link";

export default function Section4C() {
	return (
		<>
			{/*law-firm home section 4C - WordPress Services Cards*/}
			<section className="law-firm-home-section-4c position-relative pt-0 pb-10 bg-white">
				<div className="container position-relative z-1">
					<div className="row g-1">
						{/* Card 1: WordPress Design */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
											<path d="M2 6L5 3L10 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										WordPress Design
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Design</h4>
								<p className="text-dark text-opacity-75 mb-0">
									The design remains our foremost focus. If you are looking for a custom design, then you are at the right place. We, as a WordPress development company, offer a full service that includes a simple blog, a brochure, and a static website to an advanced <span className="text-primary fw-semibold">eCommerce</span> solution.
								</p>
							</div>
						</div>

						{/* Card 2: WordPress Upgradation Service */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
											<path d="M2 6L5 3L10 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										WordPress Upgradation Service
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Upgradation Service</h4>
								<p className="text-dark text-opacity-75 mb-0">
									A site without security is life without breath for us. So we understand its importance and we provide high user-end security levels on your site. From maintaining a site free from virus attacks. Hire us for all WordPress and plugin upgrades.
								</p>
							</div>
						</div>

						{/* Card 3: WordPress Customization */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
											<path d="M2 6L5 3L10 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										WordPress Customization
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Customization</h4>
								<p className="text-dark text-opacity-75 mb-0">
									WordPress customization is done according to our client requirements on their websites. Our developers do it like a piece of art and seamlessly integrate third-party plugins and modules into your site suitably and perfectly to rank your site higher.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

