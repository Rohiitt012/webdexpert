import Link from "next/link";

export default function Section3a() {
	return (
		<>
			{/*law-firm home section 3a - Website Design and Development Company*/}
			<section className="law-firm-home-section-3a position-relative py-60 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center mb-80">
							<h2 className="text-dark text-anime-style-2 mb-4 fw-bold">
								Website Design and Development Company
							</h2>
							<p className="text-dark text-opacity-75 fs-6 mx-auto" style={{ maxWidth: "900px" }}>
								Whether you're seeking skilled website developers or a reliable web dev company, we've got you covered. Our reputation as a leading web development firm and web programming company stems from our ability to transform your vision into reality.
							</p>
						</div>
					</div>
					<div className="row g-1">
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={0}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">Custom Website Design</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Custom websites tailored to your unique business needs, enhancing your online presence & user experience. As a top web designing company, we create visually appealing, responsive, and user-friendly designs tailored to your brand.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">Web Development</h4>
								<p className="text-dark text-opacity-75 mb-0">
									We specialize in building websites using both custom frameworks and popular platforms. Whether you need a simple website or a complex application, we are the web development company you can count on.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
							<div className="bg-white rounded-4 p-4 shadow-sm border h-100">
								<h4 className="text-dark fw-bold mb-3">E-Commerce Solutions</h4>
								<p className="text-dark text-opacity-75 mb-0">
									Expand your business with powerful e-commerce websites. We create intuitive, feature-rich online stores to enhance user experience and drive sales using Custom technologies and by platforms like Shopify, Wix, WordPress, etc.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

