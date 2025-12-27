import Link from "next/link";

export default function Section4H() {
	return (
		<>
			{/*law-firm home section 4H - Additional Advantages*/}
			<section className="law-firm-home-section-4h position-relative pt-0 pb-10 bg-white">
				<div className="container position-relative z-1">
					<div className="row g-1">
						{/* Card 1: Flexible Development */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M10 3L10 17M3 10L17 10" stroke="#0d7377" strokeWidth="2" strokeLinecap="round" />
											<circle cx="10" cy="10" r="6" stroke="#0d7377" strokeWidth="2" fill="none" />
										</svg>
									</div>
									<span className="text-primary fw-semibold small">Flexible Development</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Flexible Development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Our team offers you with well-coordinated web development process so that you stay in the loop. We have a team that dedicatedly works on the directives that you give as your satisfaction is our end rather than anything else.
								</p>
							</div>
						</div>

						{/* Card 2: Psychology Driven Ideology */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<circle cx="10" cy="10" r="7" stroke="#0d7377" strokeWidth="2" fill="none" />
											<circle cx="10" cy="10" r="3" stroke="#0d7377" strokeWidth="2" fill="none" />
											<path d="M10 3L10 7M10 13L10 17M3 10L7 10M13 10L17 10" stroke="#0d7377" strokeWidth="2" strokeLinecap="round" />
										</svg>
									</div>
									<span className="text-primary fw-semibold small">Psychology</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Psychology Driven Ideology</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Our team provides website design based on the brain science of clients to build habit-forming or addictively pleasing applications and other solutions. The catch behind this is to attract users to the website so that the client can drive business growth through our impeccable solution.
								</p>
							</div>
						</div>

						{/* Card 3: Unit Testing */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 p-lg-5 h-100 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<div className="icon-shape icon-40 rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
											<path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z" stroke="#0d7377" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<span className="text-primary fw-semibold small">Unit Testing</span>
								</div>
								<h4 className="text-dark fw-bold mb-3">Unit Testing</h4>
								<p className="text-dark text-opacity-75 mb-0">
									It is indeed true that we carefully assess the solution before proceeding to deployment to ensure that no issue will persist at that time. Thus, we took each web application and tested it with big business-grade security and thorough numerous unit tests.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

