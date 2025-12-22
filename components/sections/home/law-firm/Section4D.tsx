import Link from "next/link";

export default function Section4D() {
	return (
		<>
			{/*law-firm home section 4D - CTA Banner*/}
			<section className="law-firm-home-section-4d position-relative py-60 bg-primary">
				<div className="container position-relative z-1">
					<div className="row">
						<div className="col-12 text-center">
							<h2 className="text-white mb-4 text-anime-style-2 fw-bold" style={{ fontSize: "2.5rem", lineHeight: "1.3" }}>
								Feeling Out Of The Competition Due To The Absence Of A Website? Seek
								<br />
								Our WordPress Website Development Services To Stand Out In The Market
							</h2>
							<Link href="/contact" className="btn btn-warning text-dark fw-semibold px-5 py-3 rounded-3 mt-4 hover-up">
								Get in touch
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

