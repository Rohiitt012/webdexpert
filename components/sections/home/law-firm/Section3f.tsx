import Link from "next/link";

export default function Section3f() {
	return (
		<>
			{/* law-firm home section 3f - Our Process to Website Development */}
			<section className="law-firm-home-section-3f position-relative py-120 bg-white">
				<div className="container text-center">
					<h2 className="text-dark text-anime-style-2 mb-3 fw-bold">
						Our Process to Website Development
					</h2>
					<p
						className="text-dark text-opacity-75 fs-6 mx-auto mb-5"
						style={{ maxWidth: "880px" }}
					>
						At Gomilestone, each corporate website is custom designed and developed
						to meet the goals and needs of your business.
					</p>

					<div className="row justify-content-center">
						<div className="col-12">
							<div className="d-flex flex-wrap flex-lg-nowrap justify-content-between gap-4 gap-lg-0">
								{/* Step 1 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												1
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">Business R &amp; D</h5>
									<p className="text-dark text-opacity-75 fs-6 mb-0">
										We analyse your business, audience, and goals to define the
										right website strategy.
									</p>
								</div>

								{/* Step 2 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												2
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">UI/UX Design</h5>
									<p className="text-dark text-opacity-75 fs-6 mb-0">
										We craft wireframes and modern interfaces focused on clarity
										and conversion.
									</p>
								</div>

								{/* Step 3 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												3
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">
										Tech Stack Finalisation
									</h5>
									<p className="text-dark text-opacity-75 fs-6 mb-0">
										We choose the best technologies and CMS/platform stack for
										your project.
									</p>
								</div>

								{/* Step 4 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												4
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">Deployment</h5>
									<p className="text-dark text-opacity-75 fs-6 mb-0">
										Your website is developed, integrated, and deployed on secure
										servers.
									</p>
								</div>

								{/* Step 5 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												5
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">Testing / UAT</h5>
									<p className="text-dark text-opacity-75 fs-6 mb-0">
										Rigorous QA and user acceptance testing ensure everything
										works perfectly.
									</p>
								</div>

								{/* Step 6 */}
								<div className="text-center flex-fill">
									<div className="position-relative d-inline-block mb-3">
										<div
											className="rounded-circle d-flex align-items-center justify-content-center shadow-sm bg-white"
											style={{ width: 140, height: 140 }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={54}
												height={54}
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
											<span className="badge bg-dark text-white rounded-3 px-2 py-1">
												6
											</span>
										</div>
									</div>
									<h5 className="text-dark fw-bold mb-1">
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
				</div>
			</section>
		</>
	);
}


