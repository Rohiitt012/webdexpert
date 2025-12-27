import Link from "next/link";

export default function Section4B() {
	return (
		<>
			{/*law-firm home section 4B - Diverse WordPress Services*/}
			<section className="law-firm-home-section-4b position-relative pt-10 pb-0 bg-white">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="text-dark mb-3 text-anime-style-2 fw-bold">
								Diverse WordPress Services Offered By Us
							</h2>
							<p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "800px" }}>
								Check out the range of services we provide to get your WordPress website development project done.
							</p>
						</div>
					</div>
					<div className="row g-1">
						{/* Card 1: WordPress Services */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="mb-4">
									<div className="icon-shape icon-60 rounded-4 bg-primary-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
											<rect x="5" y="5" width="30" height="30" rx="4" fill="#0d7377" />
											<path d="M20 12L15 18L20 24L25 18L20 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M12 20L18 15L18 25L12 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M28 20L22 15L22 25L28 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Services</h4>
								<p className="text-dark text-opacity-75 mb-0">
									XzectLabs offers all possible WordPress services, ranging from custom WordPress theme development, plugin customization, WordPress speed optimization, SEO, and integration with 3rd party modules and applications like Facebook Apps or for creating Facebook Apps for your WordPress website.
								</p>
							</div>
						</div>

						{/* Card 2: WordPress SEO (Highlighted) */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-primary-subtle rounded-4 p-4 p-lg-5 h-100 border border-primary shadow-sm">
								<div className="mb-4">
									<div className="icon-shape icon-60 rounded-4 bg-primary d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
											<circle cx="20" cy="20" r="15" stroke="white" strokeWidth="2" fill="none" />
											<circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none" />
											<path d="M20 12L20 8M20 32L20 28M12 20L8 20M32 20L28 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
											<text x="16" y="24" fill="white" fontSize="8" fontWeight="bold">SEO</text>
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress SEO</h4>
								<p className="text-dark text-opacity-75 mb-0">
									XzectLabs follows the best practices as per the latest strategy to advance your site for web indexing. We will work to bring the site to its higher ranking through <Link href="#" className="text-primary text-decoration-underline fw-semibold">SEO Services</Link>. We search for relevant keywords, valuable content, backlinks for websites, and more.
								</p>
							</div>
						</div>

						{/* Card 3: WordPress Support */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="mb-4">
									<div className="icon-shape icon-60 rounded-4 bg-primary-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
											<circle cx="20" cy="15" r="8" stroke="#0d7377" strokeWidth="2" fill="none" />
											<path d="M10 30C10 25 14 22 20 22C26 22 30 25 30 30" stroke="#0d7377" strokeWidth="2" strokeLinecap="round" />
											<rect x="15" y="28" width="10" height="8" rx="2" stroke="#0d7377" strokeWidth="2" fill="none" />
											<circle cx="18" cy="32" r="1" fill="#0d7377" />
											<circle cx="22" cy="32" r="1" fill="#0d7377" />
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Support</h4>
								<p className="text-dark text-opacity-75 mb-0">
									We offer quality WordPress support services. Our services include customization of website design, plugins, updates, migration, staging, maintenance, and troubleshooting. Our developers have years of experience in providing <Link href="#" className="text-primary text-decoration-underline fw-semibold">technical support services</Link> and maintaining your website to match the pace of the updates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

