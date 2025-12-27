import Link from "next/link";

export default function Section4G() {
	return (
		<>
			{/*law-firm home section 4G - What Advantages you will receive*/}
			<section className="law-firm-home-section-4g position-relative pt-10 pb-0 bg-white">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="col-12 text-center mb-5">
							<h2 className="text-dark mb-4 text-anime-style-2 fw-bold">
								What Advantages you will receive with our WordPress Development Services?
							</h2>
							<p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "800px" }}>
								We have the best team of WordPress Developers that can fulfill all of your business needs and expectations without any issues.
							</p>
						</div>
					</div>
					<div className="row g-1">
						{/* Card 1: Architecture Implementation */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-success-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M3 17H17M5 17V7M9 17V12M13 17V9M17 17V5" stroke="#198754" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</div>
									<span className="text-success fw-semibold small">Architecture</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Architecture Implementation</h4>
								<p className="text-dark text-opacity-75 mb-0">
									We carefully proceed with the development to ensure the product will come out as highly functional and with low cost. Our developers are experienced with every situation and know how to execute things properly to deliver the expected results.
								</p>
							</div>
						</div>

						{/* Card 2: Compelling UI/UX Design */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-success-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<rect x="3" y="3" width="14" height="14" rx="2" stroke="#198754" strokeWidth="2" />
											<circle cx="8" cy="8" r="2" stroke="#198754" strokeWidth="2" />
											<path d="M12 12L14 14" stroke="#198754" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</div>
									<span className="text-success fw-semibold small">Compelling UI/UX Design</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Compelling UI/UX Design</h4>
								<p className="text-dark text-opacity-75 mb-0">
									XzectLabs offers beyond-imagination UI/UX design by keeping your brand ideology in your mind. As a WordPress Development company, our team members are well-versed in bringing whatever you imagine into reality.
								</p>
							</div>
						</div>

						{/* Card 3: High Scalable */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-success-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M3 17L10 10L17 17" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M3 10L10 3L17 10" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<span className="text-success fw-semibold small">High Scalable</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">High Scalable</h4>
								<p className="text-dark text-opacity-75 mb-0">
									XzectLabs always looks precisely at making the web platform highly adaptable so that no issues will emerge when the business starts to expand. Furthermore, our main purpose is to make our clients succeed in their business thus ensuring that their website remains aligned well when the business expands.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

