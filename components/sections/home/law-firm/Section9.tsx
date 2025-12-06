import Link from 'next/link'

export default function Section9() {
	return (
		<>
			{/*law-firm home section 9*/}
			<section className="law-firm-home-section-9 pt-120 pb-120 position-relative overflow-hidden">
				<div className="container">
					<div className="text-center">
						<span className="content-top btn-text text-primary fw-semibold rounded-pill border border-primary px-3 py-2 bg-white">
							insights
						</span>
						<h2 className="mt-3 text-anime-style-2">
							Company updates
						</h2>
					</div>
					<div className="row mt-8">
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
							<div className="card-news position-relative mb-lg-0 mb-8 hover-up">
								<Link
									href="/single-news"
									className="card-news-img position-relative d-block"
								>
									<img
										className="w-100"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-9/img-1.png"
										alt="AstraX"
									/>
									<span className="text-uppercase fw-bold fs-8 text-white bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5 z-1">
										law
									</span>
								</Link>
								<div className="card-news-body">
									<div className="d-flex card-news-information mt-5 gap-4">
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-1.svg"
												alt="AstraX"
											/>
											<p className="mb-0">December 21, 2025</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-2.svg"
												alt="AstraX"
											/>
											<span className="opacity-50">By</span>
											<Link href="#" className="mb-0">
												Admin
											</Link>
										</div>
									</div>
									<div className="card-news-title mt-2">
										<Link href="/single-news">
											<h6>2025: brace for the 'big one' cyber attack.</h6>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
							<div className="card-news position-relative mb-lg-0 mb-8 hover-up">
								<Link
									href="/single-news"
									className="card-news-img position-relative d-block"
								>
									<img
										className="w-100"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-9/img-2.png"
										alt="AstraX"
									/>
									<span className="text-uppercase fw-bold fs-8 text-white bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5 z-1">
										crime
									</span>
								</Link>
								<div className="card-news-body">
									<div className="d-flex card-news-information mt-5 gap-4">
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-1.svg"
												alt="AstraX"
											/>
											<p className="mb-0">December 21, 2025</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-2.svg"
												alt="AstraX"
											/>
											<span className="opacity-50">By</span>
											<Link href="#" className="mb-0">
												Admin
											</Link>
										</div>
									</div>
									<div className="card-news-title mt-2">
										<Link href="/single-news">
											<h6>2025: brace for the 'big one' cyber attack.</h6>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="fade-up" data-aos-delay={600}>
							<div className="card-news position-relative mb-lg-0 mb-8 hover-up">
								<Link
									href="/single-news"
									className="card-news-img position-relative d-block"
								>
									<img
										className="w-100"
										src="/assets/img/law-firm-img/pages/law-firm/page-home/home-section-9/img-3.png"
										alt="AstraX"
									/>
									<span className="text-uppercase fw-bold fs-8 text-white bg-primary px-2 py-1 position-absolute top-100 end-0 translate-middle-y me-5 z-1">
										insurance
									</span>
								</Link>
								<div className="card-news-body">
									<div className="d-flex card-news-information mt-5 gap-4">
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-1.svg"
												alt="AstraX"
											/>
											<p className="mb-0">December 21, 2025</p>
										</div>
										<div className="d-flex align-items-center gap-1">
											<img
												src="/assets/img/law-firm-img/template/icons/icon-2.svg"
												alt="AstraX"
											/>
											<span className="opacity-50">By</span>
											<Link href="#" className="mb-0">
												Admin
											</Link>
										</div>
									</div>
									<div className="card-news-title mt-2">
										<Link href="/single-news">
											<h6>2025: brace for the 'big one' cyber attack.</h6>
										</Link>
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
