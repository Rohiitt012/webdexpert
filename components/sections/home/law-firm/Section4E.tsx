import Link from "next/link";

export default function Section4E() {
	return (
		<>
			{/*law-firm home section 4E - Expertise We Have As a WordPress Development Company*/}
			<section className="law-firm-home-section-4e position-relative pt-60 pb-0 bg-white">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="text-dark mb-4 text-anime-style-2 fw-bold">
								Expertise We Have As a WordPress Development <br /> Company
							</h2>
							<p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "900px" }}>
								When you look for a WordPress Development company, our name i.e., XzectLabs comes to the top as we provide impeccable service to our clients no matter what industry they belong to. Our team has experience and expertise in delivering exceptional outcomes that go beyond the expectations of our clients. If you want the best service for yourself, shake hands with us.
							</p>
						</div>
					</div>
					<div className="row g-1">
						{/* Card 1: WordPress Plugin Development */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<rect x="3" y="3" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
											<path d="M6 6H10M6 8H10M6 10H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
										WordPress Plugin Development
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Plugin Development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Our Plugin development service focuses on improving the functionalities of our clients rather than relying on what is already available. We know that every company is different thus their requirements are different as well and we strive hard to create custom plugins that meet those specific needs carefully.
								</p>
							</div>
						</div>

						{/* Card 2: WordPress Migration Services */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<rect x="3" y="3" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
											<path d="M6 6H10M6 8H10M6 10H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
										WordPress Migration Services
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Migration Services</h4>
								<p className="text-dark text-opacity-75 mb-0">
									As a migration service provider of WordPress, we settle the needs of our clients when they want to shift their existing website to WordPress or want to migrate their website from one platform to another. We understand that the website migration process is quite hard to perform as it demands some form of expertise thus we are here to assist you whenever you need.
								</p>
							</div>
						</div>

						{/* Card 3: WooCommerce Development */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<rect x="3" y="3" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
											<path d="M6 6H10M6 8H10M6 10H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
										WooCommerce Development
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WooCommerce Development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									We have a team of experts who are proficient in creating custom eCommerce Solutions for our clients by utilizing the popular WooCommerce Plugin of WordPress. Our developers know that the requirements of every company differ thus they need customized solutions that can fulfill their business objectives.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

