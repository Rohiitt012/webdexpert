
import Link from "next/link"

export default function Section4() {
	return (
		<>
			{/*law-firm home section 4*/}
			<section className="law-firm-home-section-4 position-relative overflow-hidden pt-120">
				<div className="container position-relative z-1 pb-md-250">
					<div className="row align-items-center">
						<div className="col-lg-6 order-2 order-lg-1">
							<div className="position-relative d-inline-block mt-lg-0 mt-5">
								<div className="position-relative z-0">
									<img
										className=" wow img-custom-anim-left"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-4/img-1.png"
										alt="AstraX"
									/>
								</div>
								<div
									className="d-none d-md-block"
									data-aos="fade-up"
									data-aos-delay={200}
								>
									<img
										className="position-absolute top-100 start-100 z-2 translate-middle z-1 border border-4 border-white shadow"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-4/img-2.png"
										alt="AstraX"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-8 order-1 order-lg-2">
							<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
								faq &amp; a.
							</span>
							<h2 className="mt-3 text-anime-style-2">
								Get every
								<strong className="position-relative ms-3">
									answer
									<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={198}
											height={53}
											viewBox="0 0 198 53"
											fill="none"
										>
											<path
												d="M1 30.3115C35.0108 12.9514 118.239 -14.9035 179.064 12.5569C255.096 46.8824 66.3952 54.7733 40.7886 51.2224C20.7652 48.4457 -0.181841 21.2369 30.1521 4.66592"
												stroke="#B98E44"
												strokeWidth={2}
											/>
										</svg>
									</span>
								</strong>
								<br />
								from here
							</h2>
							<div className="accordion mt-8">
								<div
									className="px-0 card border-0 mb-3 collapse-custom"
									data-aos="fade-up"
									data-aos-delay={200}
								>
									<div className="p-0 card-header border-0 rounded-3">
										<Link
											className="px-5 py-2 fw-bold d-flex align-items-center"
											data-bs-toggle="collapse"
											href="#collapse-1"
										>
											<h6 className="text-dark fs-20 mb-0">
												How to develop a wesbite?
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div
										id="collapse-1"
										className="collapse show"
										data-bs-parent=".accordion"
									>
										<p className="px-5 fs-6 fw-regular">
											Business is what you're offered four times a year by designers
											and style is what you choose. The key to style is learning who
											you are which takes years.
										</p>
									</div>
								</div>
								<div
									className="px-0 card border-0 mb-3 collapse-custom"
									data-aos="fade-up"
									data-aos-delay={400}
								>
									<div className="p-0 card-header border-0 rounded-3">
										<Link
											className="collapsed px-5 py-2 fw-bold d-flex align-items-center"
											data-bs-toggle="collapse"
											href="#collapse-2"
										>
											<h6 className="text-dark fs-20 mb-0">
												How can I got componants?
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div
										id="collapse-2"
										className="collapse"
										data-bs-parent=".accordion"
									>
										<p className="px-5 fs-6 fw-regular">
											Business is what you're offered four times a year by designers
											and style is what you choose. The key to style is learning who
											you are which takes years.
										</p>
									</div>
								</div>
								<div
									className="px-0 card border-0 mb-3 collapse-custom"
									data-aos="fade-up"
									data-aos-delay={600}
								>
									<div className="p-0 card-header border-0 rounded-3">
										<Link
											className="collapsed px-5 py-2 fw-bold d-flex align-items-center"
											data-bs-toggle="collapse"
											href="#collapse-3"
										>
											<h6 className="text-dark fs-20 mb-0">
												Where I can get free videos?
											</h6>
											<span className="ms-auto arrow" />
										</Link>
									</div>
									<div
										id="collapse-3"
										className="collapse"
										data-bs-parent=".accordion"
									>
										<p className="px-5 fs-6 fw-regular">
											Business is what you're offered four times a year by designers
											and style is what you choose. The key to style is learning who
											you are which takes years.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
