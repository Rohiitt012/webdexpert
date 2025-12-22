import Link from "next/link";

export default function Section3d() {
	return (
		<>
			{/*law-firm home section 3d - CTA Section*/}
			<section className="law-firm-home-section-3d position-relative py-60 bg-white">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-8">
							<p className="text-dark fs-5 mb-0 fw-regular">
								Curious about the cost of our web development solutions? Get in touch to receive an accurate quote for your project.
							</p>
						</div>
						<div className="col-lg-4 text-lg-end text-start mt-lg-0 mt-4">
							<Link href="/contact" className="btn btn-white border border-primary hover-up rounded-pill px-5 py-3 d-inline-flex align-items-center">
								<span className="text-primary fw-semibold">Get a Free Quote</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									className="ms-2"
								>
									<path
										d="M15.8167 7.55759C15.8165 7.5574 15.8163 7.55719 15.8161 7.557L12.5504 4.307C12.3057 4.06353 11.91 4.06444 11.6665 4.30912C11.423 4.55378 11.4239 4.9495 11.6686 5.193L13.8612 7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H13.8612L11.6686 10.807C11.4239 11.0505 11.423 11.4462 11.6665 11.6909C11.91 11.9356 12.3058 11.9364 12.5504 11.693L15.8162 8.443C15.8163 8.44281 15.8165 8.44259 15.8167 8.4424C16.0615 8.19809 16.0607 7.80109 15.8167 7.55759Z"
										fill="#0d7377"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

