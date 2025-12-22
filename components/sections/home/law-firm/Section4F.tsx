import Link from "next/link";

export default function Section4F() {
	return (
		<>
			{/*law-firm home section 4F - Additional WordPress Services*/}
			<section className="law-firm-home-section-4f position-relative py-60 bg-white">
				<div className="container position-relative z-1">
					<div className="row g-1">
						{/* Card 1: EDD Development */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<rect x="3" y="3" width="10" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
											<path d="M6 6H10M6 8H10M6 10H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
										EDD Development
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">EDD Development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Our expertise in EDD development resides in giving tailor-made solutions for our clients through the EDD plugin. EDD is specifically designed to help in selling digital products such as eBooks, software, music, and some other digital assets. We assist every client in leveraging this plugin to expand their business.
								</p>
							</div>
						</div>

						{/* Card 2: WordPress Speed Optimization */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path d="M8 2L8 14M2 8L14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
											<circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" fill="none" />
										</svg>
										WordPress Speed Optimization
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">WordPress Speed Optimization</h4>
								<p className="text-dark text-opacity-75 mb-0">
									We especially take care of the clients&apos; websites to ensure that the speed of the website is proper or not as it is the crucial factor in attracting users. We understand how it plays an integral role in user experience and SEO thus our complete team is dedicated to delivering high-performing or fast-loading solutions.
								</p>
							</div>
						</div>

						{/* Card 3: Theme Design & development */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm position-relative" style={{ borderRadius: "16px 16px 16px 16px" }}>
								<div className="mb-3">
									<span className="badge bg-primary text-white rounded-3 px-3 py-2 d-inline-flex align-items-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path d="M8 2L8 14M2 8L14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
											<circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.5" fill="none" />
										</svg>
										Theme Design &amp; development
									</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Theme Design &amp; development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									XzectLabs focuses on providing customized WordPress themes that can simply align well with the client&apos;s brand identity and ideology. We not only focus on forming themes that are pleasing to the eyes but also those that are highly functional and easy to use for the user to let them have a great experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

