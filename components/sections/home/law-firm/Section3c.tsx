import Link from "next/link";

export default function Section3c() {
	return (
		<>
			{/*law-firm home section 3c - Technologies*/}
			<section className="law-firm-home-section-3c position-relative py-60 bg-white">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 mb-lg-0 mb-5">
							<h2 className="text-dark text-anime-style-2 mb-4 fw-bold">
								Technologies we use for <br /> website Development
							</h2>
							<p className="text-dark text-opacity-75 fs-6">
								From creating engaging website design & development solutions to crafting cutting-edge web application development, we excel in making your digital presence truly remarkable.
							</p>
						</div>
						<div className="col-lg-6">
							<div className="position-relative rounded-4 p-5" style={{ backgroundColor: "#e8f4f8", borderRadius: "16px" }}>
								<div className="position-absolute top-0 start-0" style={{ marginLeft: "-40px", marginTop: "10px", zIndex: 1 }}>
									<div style={{ width: "70px", height: "70px", backgroundColor: "#e8f4f8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #e8f4f8" }}>
										<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="10" stroke="#0d7377" strokeWidth="2" fill="none" />
											<rect x="8" y="9" width="8" height="6" rx="1" fill="#0d7377" />
											<text x="10" y="15" fontSize="8" fill="white" fontWeight="bold">www.</text>
										</svg>
									</div>
								</div>
								<div className="row">
									<div className="col-6 pe-4">
										<h5 className="text-dark fw-bold mb-4">Custom Builds:</h5>
										<ul className="list-unstyled mb-0">
											<li className="text-dark mb-2 fw-semibold">1. React</li>
											<li className="text-dark mb-2 fw-semibold">2. HTML</li>
											<li className="text-dark mb-2 fw-semibold">3. Next.js</li>
											<li className="text-dark mb-2 fw-semibold">4. PHP</li>
										</ul>
									</div>
									<div className="col-6 border-start border-dark border-opacity-25 ps-4">
										<h5 className="text-dark fw-bold mb-4">Platforms:</h5>
										<ul className="list-unstyled mb-0">
											<li className="text-dark mb-2 fw-semibold">1. Shopify</li>
											<li className="text-dark mb-2 fw-semibold">2. WordPress</li>
											<li className="text-dark mb-2 fw-semibold">3. Duda</li>
											<li className="text-dark mb-2 fw-semibold">4. Wix</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

