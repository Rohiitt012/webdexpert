import Link from "next/link";

export default function Section3e() {
	return (
		<>
			{/*law-firm home section 3e - Why Choose*/}
			<section className="law-firm-home-section-3e position-relative py-120 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mb-80">
							<h2 className="text-dark text-anime-style-2 mb-4 fw-bold">
								Why Choose Us for Website Development?
							</h2>
							<p className="text-dark text-opacity-75 fs-6 mx-auto mb-3" style={{ maxWidth: "900px" }}>
								From conceptualization to deployment, we ensure every step reflects our expertise in website design & development and dedication to your business goals.
							</p>
							<p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "900px" }}>
								Here's how we bring your vision to life:
							</p>
						</div>
					</div>
					<div className="row g-4">
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="mb-4 d-flex justify-content-center">
									<div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", backgroundColor: "#d4edda" }}>
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
											<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ffc107"/>
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">Established Expertise:</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Over 7 years of experience in web development and design.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="mb-4 d-flex justify-content-center">
									<div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", backgroundColor: "#d1ecf1" }}>
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="10" stroke="#007bff" strokeWidth="2" fill="none"/>
											<circle cx="12" cy="8" r="1.5" fill="#007bff"/>
											<path d="M12 11V16" stroke="#007bff" strokeWidth="2" strokeLinecap="round"/>
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">Global Reach:</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Successfully delivered 500+ projects in 10+ countries.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="mb-4 d-flex justify-content-center">
									<div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", backgroundColor: "#ffe5cc" }}>
										<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none">
											<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff8c00" strokeWidth="2" fill="none"/>
											<path d="M2 17L12 22L22 17" stroke="#ff8c00" strokeWidth="2" fill="none"/>
											<path d="M2 12L12 17L22 12" stroke="#ff8c00" strokeWidth="2" fill="none"/>
										</svg>
									</div>
								</div>
								<h4 className="text-dark fw-bold mb-3">Versatile Technology:</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Proficient in custom frameworks like React and platforms like Shopify and WordPress.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

