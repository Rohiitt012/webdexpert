import Link from 'next/link'

export default function Section9() {
	return (
		<>
			{/*seo-agency section 9 - SEO Services Pricing*/}
			<section className="seo-agency-section-9 overflow-hidden py-120 bg-white">
				<div className="container">
					{/* Pricing Cards Section */}
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-10">
							<h2
								className="mb-4"
								style={{
									fontSize: '40px',
									lineHeight: '1.3',
									fontWeight: 400,
									fontFamily:
										'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
								}}
							>
								🔍 <span style={{ fontWeight: 'bold' }}>SEO Services</span> — Professional Pricing
							</h2>
							<p
								className="mb-0"
								style={{
									fontSize: '18px',
									lineHeight: '1.7',
									color: '#333',
									maxWidth: '1100px',
									margin: '0 auto',
								}}
							>
								Improve your search rankings and website performance with our comprehensive SEO solutions.
							</p>
						</div>
					</div>

					{/* Individual Services Row */}
					<div className="row g-4">
						{/* On-Page & Technical SEO */}
						<div className="col-md-6 col-lg-3">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🧩</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '24px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									On-Page & Technical SEO
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '32px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹14,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / month</span>
									</h4>
									<p style={{ fontSize: '14px', color: '#666' }}>
										Optimize your website structure, content, and technical foundation to improve search visibility.
									</p>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
								>
									<li>✔ On-page optimization (titles, meta, headings)</li>
									<li>✔ Technical SEO audit & fixes</li>
									<li>✔ Internal linking optimization</li>
									<li>✔ Sitemap & robots.txt setup</li>
									<li>✔ Monthly performance tracking</li>
								</ul>
								<Link
									href="/contact"
									className="btn btn-primary hover-up"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '10px 28px',
										fontSize: '14px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Optimize My Website
								</Link>
							</div>
						</div>

						{/* Local SEO */}
						<div className="col-md-6 col-lg-3">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>📍</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '24px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									Local SEO
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '32px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹9,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / month</span>
									</h4>
									<p style={{ fontSize: '14px', color: '#666' }}>
										Improve your visibility in local search results and Google Maps.
									</p>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
								>
									<li>✔ Google Business Profile optimization</li>
									<li>✔ Local keyword targeting</li>
									<li>✔ NAP consistency (Name, Address, Phone)</li>
									<li>✔ Local citations & reviews strategy</li>
									<li>✔ Monthly local ranking report</li>
								</ul>
								<Link
									href="/contact"
									className="btn btn-primary hover-up"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '10px 28px',
										fontSize: '14px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Rank Locally
								</Link>
							</div>
						</div>

						{/* Keyword Strategy */}
						<div className="col-md-6 col-lg-3">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🎯</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '24px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									Keyword Strategy
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '32px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹7,999<span style={{ fontSize: '16px', fontWeight: 400 }}> (One-Time)</span>
									</h4>
									<p style={{ fontSize: '14px', color: '#666' }}>
										Data-driven keyword research and content planning for sustainable growth.
									</p>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
								>
									<li>✔ Industry & competitor analysis</li>
									<li>✔ High-intent keyword research</li>
									<li>✔ Search volume & difficulty analysis</li>
									<li>✔ Content & page mapping</li>
								</ul>
								<Link
									href="/contact"
									className="btn btn-primary hover-up"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '10px 28px',
										fontSize: '14px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Plan My Keywords
								</Link>
							</div>
						</div>

						{/* Site Speed & Core Web Vitals */}
						<div className="col-md-6 col-lg-3">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>⚡</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '24px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									Site Speed & Core Web Vitals
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '32px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹8,999<span style={{ fontSize: '16px', fontWeight: 400 }}> (One-Time)</span>
									</h4>
									<p style={{ fontSize: '14px', color: '#666' }}>
										Optimize website speed and performance to meet Google's Core Web Vitals benchmarks.
									</p>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '14px', lineHeight: '1.8', color: '#333' }}
								>
									<li>✔ Page speed audit</li>
									<li>✔ LCP, CLS & INP optimization</li>
									<li>✔ Image & asset optimization</li>
									<li>✔ Performance improvement report</li>
								</ul>
								<Link
									href="/contact"
									className="btn btn-primary hover-up"
									style={{
										border: '2px solid #000',
										borderRadius: '999px',
										padding: '10px 28px',
										fontSize: '14px',
										fontWeight: 600,
										textTransform: 'uppercase',
										letterSpacing: '0.05em',
										backgroundColor: '#000',
										color: '#fff',
										display: 'inline-block',
										textDecoration: 'none',
									}}
								>
									Improve Site Speed
								</Link>
							</div>
						</div>
					</div>

					{/* Service Comparison Table */}
					<div className="row mt-160">
						<div className="col-12 text-center mb-5">
							<h2
								className="mb-3"
								style={{
									fontSize: '44px',
									lineHeight: '1.3',
									fontWeight: 400,
									fontFamily:
										'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
								}}
							>
								📊 <span style={{ fontWeight: 'bold' }}>SEO Service Comparison</span> Table
							</h2>
						</div>
					</div>

					{/* Comparison Table */}
					<div className="row">
						<div className="col-12">
							<div className="table-responsive">
								<table
									className="table table-bordered text-center"
									style={{
										fontSize: '16px',
										backgroundColor: '#fff',
									}}
								>
									<thead style={{ backgroundColor: '#000', color: '#fff' }}>
										<tr>
											<th style={{ padding: '20px', fontWeight: 600 }}>Features</th>
											<th style={{ padding: '20px', fontWeight: 600 }}>On-Page & Technical</th>
											<th style={{ padding: '20px', fontWeight: 600 }}>Local SEO</th>
											<th style={{ padding: '20px', fontWeight: 600 }}>Keyword Strategy</th>
											<th style={{ padding: '20px', fontWeight: 600 }}>Core Web Vitals</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
												Search Visibility
											</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
										</tr>
										<tr style={{ backgroundColor: '#f9f9f9' }}>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Google Ranking Boost</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✔</td>
										</tr>
										<tr>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Technical Optimization</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✖</td>
											<td style={{ padding: '16px' }}>✖</td>
											<td style={{ padding: '16px' }}>✔</td>
										</tr>
										<tr style={{ backgroundColor: '#f9f9f9' }}>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>
												Local Map Results
											</td>
											<td style={{ padding: '16px' }}>✖</td>
											<td style={{ padding: '16px' }}>✔</td>
											<td style={{ padding: '16px' }}>✖</td>
											<td style={{ padding: '16px' }}>✖</td>
										</tr>
										<tr>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>One-Time / Monthly</td>
											<td style={{ padding: '16px' }}>Monthly</td>
											<td style={{ padding: '16px' }}>Monthly</td>
											<td style={{ padding: '16px' }}>One-Time</td>
											<td style={{ padding: '16px' }}>One-Time</td>
										</tr>
										<tr style={{ backgroundColor: '#f9f9f9' }}>
											<td style={{ padding: '16px', textAlign: 'left', fontWeight: 500 }}>Best For</td>
											<td style={{ padding: '16px' }}>Business Sites</td>
											<td style={{ padding: '16px' }}>Local Businesses</td>
											<td style={{ padding: '16px' }}>Content Planning</td>
											<td style={{ padding: '16px' }}>Speed & UX</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* SEO Packages Section */}
					<div className="row mt-160">
						<div className="col-12 text-center mb-5">
							<h2
								className="mb-3"
								style={{
									fontSize: '44px',
									lineHeight: '1.3',
									fontWeight: 400,
									fontFamily:
										'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
								}}
							>
								📦 <span style={{ fontWeight: 'bold' }}>SEO Packages</span> (Recommended)
							</h2>
						</div>
					</div>

					<div className="row g-4">
						{/* SEO Starter Package */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>⭐</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									SEO Starter Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹19,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / month</span>
									</h4>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
								>
									<li>✔ On-page & technical SEO</li>
									<li>✔ Keyword strategy (initial)</li>
									<li>✔ Basic site speed optimization</li>
								</ul>
								<p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
									Best for: Small business websites
								</p>
							</div>
						</div>

						{/* SEO Growth Package */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#000', border: '2px solid #FDB913', color: '#fff' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🚀</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
										color: '#FDB913',
									}}
								>
									SEO Growth Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#FDB913',
										}}
									>
										₹34,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / month</span>
									</h4>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '16px', lineHeight: '2', color: '#fff' }}
								>
									<li>✔ Advanced on-page & technical SEO</li>
									<li>✔ Local SEO optimization</li>
									<li>✔ Keyword tracking & optimization</li>
									<li>✔ Core Web Vitals optimization</li>
								</ul>
								<p style={{ fontSize: '14px', color: '#ddd', fontStyle: 'italic' }}>
									Best for: Business & trading websites
								</p>
							</div>
						</div>

						{/* SEO Authority Package */}
						<div className="col-lg-4">
							<div
								className="h-100 text-center px-4 py-5 rounded-4"
								style={{ backgroundColor: '#f9f9f9', border: '2px solid #eee' }}
							>
								<div className="mb-3">
									<span style={{ fontSize: '48px' }}>🏆</span>
								</div>
								<h3
									className="mb-3"
									style={{
										fontSize: '28px',
										lineHeight: '1.3',
										fontWeight: 'bold',
									}}
								>
									SEO Authority Package
								</h3>
								<div className="mb-4">
									<h4
										style={{
											fontSize: '36px',
											fontWeight: 'bold',
											color: '#000',
										}}
									>
										₹59,999<span style={{ fontSize: '16px', fontWeight: 400 }}> / month</span>
									</h4>
								</div>
								<ul
									className="list-unstyled text-start mb-4"
									style={{ fontSize: '16px', lineHeight: '2', color: '#333' }}
								>
									<li>✔ Full technical SEO & site optimization</li>
									<li>✔ Advanced local SEO</li>
									<li>✔ Conversion-focused keyword strategy</li>
									<li>✔ Ongoing speed & performance monitoring</li>
									<li>✔ Priority support & reporting</li>
								</ul>
								<p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
									Best for: High-competition & enterprise websites
								</p>
							</div>
						</div>
					</div>

					{/* CTA Section */}
					<div className="row mt-160">
						<div className="col-12">
							<div
								className="text-center py-5 px-4 rounded-4"
								style={{ backgroundColor: '#000', color: '#fff' }}
							>
								<h2
									className="mb-4"
									style={{
										fontSize: '40px',
										lineHeight: '1.3',
										fontWeight: 600,
									}}
								>
									🔔 Ready to improve your search rankings and website performance?
								</h2>
								<p
									className="mb-5"
									style={{
										fontSize: '18px',
										lineHeight: '1.7',
										color: '#ddd',
										maxWidth: '800px',
										margin: '0 auto 40px',
									}}
								>
									Let's build a strong SEO foundation that delivers long-term results.
								</p>
								<div className="d-flex flex-wrap justify-content-center gap-3">
									<Link
										href="/contact"
										className="btn hover-up"
										style={{
											border: '2px solid #FDB913',
											borderRadius: '999px',
											padding: '14px 36px',
											fontSize: '16px',
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
											backgroundColor: '#FDB913',
											color: '#000',
											display: 'inline-block',
											textDecoration: 'none',
										}}
									>
										👉 Get a Free SEO Audit
									</Link>
									<Link
										href="/contact"
										className="btn hover-up"
										style={{
											border: '2px solid #fff',
											borderRadius: '999px',
											padding: '14px 36px',
											fontSize: '16px',
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
											backgroundColor: 'transparent',
											color: '#fff',
											display: 'inline-block',
											textDecoration: 'none',
										}}
									>
										👉 Start Ranking Higher
									</Link>
									<Link
										href="/contact"
										className="btn hover-up"
										style={{
											border: '2px solid #fff',
											borderRadius: '999px',
											padding: '14px 36px',
											fontSize: '16px',
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: '0.05em',
											backgroundColor: '#fff',
											color: '#000',
											display: 'inline-block',
											textDecoration: 'none',
										}}
									>
										👉 Request a Custom SEO Plan
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Professional SEO Disclaimer */}
					<div className="row mt-5">
						<div className="col-12">
							<div
								className="p-4 rounded-4"
								style={{ backgroundColor: '#fff9e6', border: '1px solid #ffd700' }}
							>
								<p
									className="mb-0"
									style={{ fontSize: '14px', lineHeight: '1.8', color: '#666', textAlign: 'center' }}
								>
									📌 <strong>Professional SEO Disclaimer:</strong> SEO results vary based on competition, industry, and website condition. Pricing may vary based on scope and goals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
