import Link from "next/link";

export default function Section3f() {
	return (
		<>
			{/* law-firm home section 3f - Our Process to Website Development */}
			<section className="law-firm-home-section-3f position-relative pt-10 pb-4 bg-white">
				<div className="container text-center">
					<h2 className="text-dark text-anime-style-2 mb-3 fw-bold">
						Our Process to Website Development
					</h2>
					<p
						className="text-dark text-opacity-75 fs-6 mx-auto mb-5"
						style={{ maxWidth: "880px" }}
					>
						At XzectLabs, each corporate website is custom designed and developed
						to meet the goals and needs of your business.
					</p>

					<div className="row g-1">
						{/* Step 1 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<circle
												cx="12"
												cy="12"
												r="9"
												stroke="#0d7377"
												strokeWidth="2"
											/>
											<path
												d="M9 14L11 12L9.5 10.5C9.5 9 10.5 8 12 8C13.5 8 14.5 9 14.5 10.5C14.5 12 13.5 13 12 13H11.5V15"
												stroke="#0d7377"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											1
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">Business R &amp; D</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									We analyse your business, audience, and goals to define the
									right website strategy.
								</p>
							</div>
						</div>

						{/* Step 2 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<rect
												x="4"
												y="5"
												width="16"
												height="12"
												rx="2"
												stroke="#0d7377"
												strokeWidth="2"
											/>
											<path
												d="M9 9H15M9 12H13"
												stroke="#0d7377"
												strokeWidth="1.8"
												strokeLinecap="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											2
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">UI/UX Design</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									We craft wireframes and modern interfaces focused on clarity
									and conversion.
								</p>
							</div>
						</div>

						{/* Step 3 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M7 10C7 7.79086 8.79086 6 11 6H13C15.2091 6 17 7.79086 17 10V15H7V10Z"
												stroke="#0d7377"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M9 18H15"
												stroke="#0d7377"
												strokeWidth="2"
												strokeLinecap="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											3
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">
									Tech Stack Finalisation
								</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									We choose the best technologies and CMS/platform stack for
									your project.
								</p>
							</div>
						</div>

						{/* Step 4 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<rect
												x="5"
												y="5"
												width="14"
												height="14"
												rx="2"
												stroke="#0d7377"
												strokeWidth="2"
											/>
											<path
												d="M10 14L12 16L16 10"
												stroke="#0d7377"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											4
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">Deployment</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									Your website is developed, integrated, and deployed on secure
									servers.
								</p>
							</div>
						</div>

						{/* Step 5 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<rect
												x="5"
												y="5"
												width="14"
												height="14"
												rx="2"
												stroke="#0d7377"
												strokeWidth="2"
											/>
											<path
												d="M9 11H15M9 14H13"
												stroke="#0d7377"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M17 9L19 11L15 15"
												stroke="#0d7377"
												strokeWidth="1.6"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											5
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">Testing / UAT</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									Rigorous QA and user acceptance testing ensure everything
									works perfectly.
								</p>
							</div>
						</div>

						{/* Step 6 */}
						<div className="col-lg-4 col-md-6">
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100 text-center">
								<div className="position-relative d-inline-block mb-3">
									<div
										className="rounded-circle d-flex align-items-center justify-content-center bg-white border border-primary"
										style={{ width: 100, height: 100, borderWidth: "2px", borderColor: "#0d7377" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={40}
											height={40}
											viewBox="0 0 24 24"
											fill="none"
										>
											<circle
												cx="12"
												cy="12"
												r="9"
												stroke="#0d7377"
												strokeWidth="2"
											/>
											<path
												d="M12 7V12L15 14"
												stroke="#0d7377"
												strokeWidth="1.8"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<div className="position-absolute bottom-0 end-0 translate-middle">
										<span className="badge bg-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "28px", height: "28px", fontSize: "12px" }}>
											6
										</span>
									</div>
								</div>
								<h5 className="text-dark fw-bold mb-2">
									Support and Maintenance
								</h5>
								<p className="text-dark text-opacity-75 fs-6 mb-0">
									We provide ongoing updates, security checks, and performance
									monitoring.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}


