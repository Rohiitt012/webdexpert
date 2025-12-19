import Link from "next/link";

export default function Section3b() {
	return (
		<>
			{/*law-firm home section 3b - Additional Services*/}
			<section className="law-firm-home-section-3b position-relative py-120 bg-white">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">CMS Integration</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Manage your content effortlessly with CMS integrations like WordPress, Shopify, and more. Gain full control of your website without technical know-how.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">SEO Optimization</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Our websites are built with SEO in mind, ensuring your business ranks high in search results. We optimize for visibility, traffic, and lead generation.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">Website Maintenance</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Ensure your website remains up-to-date, secure, and performing at its best with our maintenance and support services.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

