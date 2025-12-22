import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*creative-studio section 2 - Free Tools*/}
            <section className="creative-studio-section-2 position-relative overflow-hidden py-120 bg-white">
                {/* Banner Section */}
                <div className="container mb-80">
                    <div className="row align-items-center bg-primary rounded-4 p-5 p-lg-6 position-relative overflow-hidden">
                        <div className="col-lg-6">
                            <h2 className="text-white mb-3 fw-bold" style={{ fontFamily: 'serif' }}>Free tools to launch and grow your business</h2>
                            <p className="text-white mb-0">Grow better with these helpful free resources.</p>
                        </div>
                        <div className="col-lg-6 text-end d-none d-lg-block">
                            <div className="position-relative" style={{ height: '200px' }}>
                                {/* Illustration placeholder - you can replace with actual SVG or image */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200" fill="none" className="position-absolute end-0">
                                    {/* Color samples */}
                                    <rect x="50" y="50" width="30" height="20" stroke="white" strokeWidth="2" fill="none" rx="2"/>
                                    <rect x="55" y="55" width="8" height="5" fill="#ff8c00"/>
                                    <rect x="65" y="55" width="8" height="5" fill="white"/>
                                    <rect x="75" y="55" width="8" height="5" fill="white"/>
                                    {/* Magnifying glass */}
                                    <circle cx="120" cy="60" r="15" stroke="white" strokeWidth="2" fill="none"/>
                                    <line x1="130" y1="70" x2="145" y2="85" stroke="white" strokeWidth="2"/>
                                    {/* Spirit level */}
                                    <rect x="180" y="50" width="40" height="8" stroke="white" strokeWidth="2" fill="none" rx="2"/>
                                    <circle cx="200" cy="54" r="3" fill="#ff8c00"/>
                                    <rect x="185" y="52" width="4" height="4" fill="#ff8c00"/>
                                    <rect x="211" y="52" width="4" height="4" fill="#ff8c00"/>
                                    {/* Measuring tape */}
                                    <rect x="250" y="55" width="20" height="8" stroke="white" strokeWidth="2" fill="none" rx="2"/>
                                    <line x1="270" y1="55" x2="290" y2="45" stroke="#ff8c00" strokeWidth="2"/>
                                    {/* Set square */}
                                    <path d="M320 50 L340 50 L320 70 Z" stroke="white" strokeWidth="2" fill="none"/>
                                    <rect x="325" y="55" width="10" height="10" fill="#ff8c00" opacity="0.3"/>
                                    {/* Blueprint */}
                                    <rect x="50" y="100" width="80" height="60" stroke="white" strokeWidth="2" fill="none" rx="2"/>
                                    <rect x="60" y="110" width="25" height="20" stroke="white" strokeWidth="1" fill="none"/>
                                    <rect x="90" y="110" width="25" height="20" stroke="white" strokeWidth="1" fill="none"/>
                                    <line x1="60" y1="140" x2="115" y2="140" stroke="white" strokeWidth="1"/>
                                    <line x1="60" y1="150" x2="115" y2="150" stroke="white" strokeWidth="1"/>
                                    <rect x="55" y="155" width="15" height="5" stroke="#ff8c00" strokeWidth="1" fill="none"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tools Grid - First Row */}
                <div className="container">
                    <div className="row g-4 mb-5">
                        {/* AEO Grader */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="30" cy="30" r="20" stroke="#ff8c00" strokeWidth="2" fill="none"/>
                                        <circle cx="30" cy="30" r="12" stroke="#292929" strokeWidth="1.5" fill="none"/>
                                        <rect x="25" y="25" width="10" height="3" fill="#ff8c00"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">AEO Grader</h4>
                                <p className="text-dark mb-4">See how visible your brand is in AI engines and find areas to improve brand awareness and sentiment.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Analyze your brand
                                </Link>
                            </div>
                        </div>

                        {/* Blog Ideas Generator */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="15" y="10" width="30" height="40" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <line x1="20" y1="20" x2="40" y2="20" stroke="#292929" strokeWidth="1.5"/>
                                        <line x1="20" y1="28" x2="35" y2="28" stroke="#292929" strokeWidth="1.5"/>
                                        <line x1="20" y1="36" x2="40" y2="36" stroke="#292929" strokeWidth="1.5"/>
                                        <path d="M35 10 L40 5 L40 10 Z" fill="#292929"/>
                                        <circle cx="25" cy="45" r="5" fill="#ff8c00"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Blog Ideas Generator</h4>
                                <p className="text-dark mb-4">Use AI to brainstorm blog ideas, create a blog outline, write your first draft, and publish to your website.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Draft a blog post
                                </Link>
                            </div>
                        </div>

                        {/* Campaign Assistant */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="10" y="15" width="25" height="30" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <circle cx="22" cy="30" r="8" stroke="#292929" strokeWidth="1.5" fill="none"/>
                                        <rect x="18" y="28" width="8" height="4" fill="#ff8c00"/>
                                        <rect x="40" y="20" width="10" height="8" stroke="#292929" strokeWidth="1.5" fill="none" rx="1"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Campaign Assistant</h4>
                                <p className="text-dark mb-4">Create landing page copy, email copy, and paid ads copy for your business's future marketing campaigns.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Create your campaign
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Tools Grid - Second Row */}
                    <div className="row g-4 mb-5">
                        {/* Email Signature Generator */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="10" y="15" width="40" height="30" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <line x1="15" y1="25" x2="45" y2="25" stroke="#292929" strokeWidth="1.5"/>
                                        <line x1="15" y1="32" x2="35" y2="32" stroke="#292929" strokeWidth="1.5"/>
                                        <circle cx="42" cy="28" r="6" fill="#ff8c00"/>
                                        <text x="40" y="32" fill="white" fontSize="8" fontWeight="bold">1</text>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Email Signature Generator</h4>
                                <p className="text-dark mb-4">Make your professional email signature, then easily add it to Gmail, Outlook, Apple Mail, or any other provider.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Generate an email signature
                                </Link>
                            </div>
                        </div>

                        {/* Website Grader */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="10" y="10" width="40" height="30" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <line x1="15" y1="20" x2="45" y2="20" stroke="#292929" strokeWidth="1"/>
                                        <path d="M15 35 L20 28 L25 32 L30 25 L35 30 L40 22 L45 28" stroke="#ff8c00" strokeWidth="2" fill="none"/>
                                        <path d="M40 22 L42 18" stroke="#ff8c00" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Website Grader</h4>
                                <p className="text-dark mb-4">Grade your website in seconds, then learn how to improve it for free. Make a website that visitors and search engines love.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Grade your website
                                </Link>
                            </div>
                        </div>

                        {/* Landing Page Creator GPT */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="10" y="10" width="35" height="25" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <line x1="15" y1="18" x2="40" y2="18" stroke="#292929" strokeWidth="1"/>
                                        <line x1="15" y1="23" x2="35" y2="23" stroke="#292929" strokeWidth="1"/>
                                        <line x1="15" y1="28" x2="40" y2="28" stroke="#292929" strokeWidth="1"/>
                                        <circle cx="42" cy="22" r="8" fill="#ff8c00"/>
                                        <text x="39" y="26" fill="white" fontSize="10" fontWeight="bold">+</text>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Landing Page Creator GPT</h4>
                                <p className="text-dark mb-4">Generate landing pages for your next marketing campaign within ChatGPT. Edit and publish your page on HubSpot in minutes.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Draft landing page copy
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Additional Tools Row */}
                    <div className="row g-4">
                        {/* Make My Persona */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <circle cx="20" cy="20" r="8" stroke="#292929" strokeWidth="2" fill="none"/>
                                        <circle cx="40" cy="20" r="8" stroke="#292929" strokeWidth="2" fill="none"/>
                                        <circle cx="20" cy="40" r="8" stroke="#292929" strokeWidth="2" fill="none"/>
                                        <circle cx="40" cy="40" r="8" stroke="#292929" strokeWidth="2" fill="none"/>
                                        <line x1="28" y1="20" x2="32" y2="20" stroke="#ff8c00" strokeWidth="2"/>
                                        <line x1="20" y1="28" x2="20" y2="32" stroke="#ff8c00" strokeWidth="2"/>
                                        <line x1="40" y1="28" x2="40" y2="32" stroke="#ff8c00" strokeWidth="2"/>
                                        <rect x="18" y="18" width="4" height="4" fill="#ff8c00"/>
                                        <rect x="38" y="18" width="4" height="4" fill="#ff8c00"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Make My Persona</h4>
                                <p className="text-dark mb-4">Generate a customizable buyer persona document outlining demographics, psychographics, and more.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Outline your personas
                                </Link>
                            </div>
                        </div>

                        {/* Invoice Generator */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="15" y="10" width="30" height="35" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                        <line x1="20" y1="20" x2="40" y2="20" stroke="#292929" strokeWidth="1.5"/>
                                        <line x1="20" y1="28" x2="35" y2="28" stroke="#292929" strokeWidth="1.5"/>
                                        <circle cx="25" cy="38" r="8" stroke="#292929" strokeWidth="1.5" fill="none"/>
                                        <path d="M22 38 L24 40 L28 36" stroke="#ff8c00" strokeWidth="2" fill="none"/>
                                        <rect x="35" y="35" width="8" height="8" stroke="#ff8c00" strokeWidth="1.5" fill="none" rx="1"/>
                                        <line x1="37" y1="37" x2="41" y2="41" stroke="#ff8c00" strokeWidth="1.5"/>
                                        <line x1="41" y1="37" x2="37" y2="41" stroke="#ff8c00" strokeWidth="1.5"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">Invoice Generator</h4>
                                <p className="text-dark mb-4">Create branded professional invoices in minutes. Download and send it to customers, or manage billing in HubSpot.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Generate an invoice
                                </Link>
                            </div>
                        </div>

                        {/* HubSpot for Sheets App */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white rounded-4 p-5 h-100 border">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                        <rect x="15" y="10" width="30" height="40" stroke="#292929" strokeWidth="2" fill="none" rx="3"/>
                                        <line x1="20" y1="20" x2="40" y2="20" stroke="#292929" strokeWidth="1"/>
                                        <line x1="20" y1="28" x2="40" y2="28" stroke="#292929" strokeWidth="1"/>
                                        <line x1="20" y1="36" x2="40" y2="36" stroke="#292929" strokeWidth="1"/>
                                        <line x1="20" y1="44" x2="35" y2="44" stroke="#292929" strokeWidth="1"/>
                                        <line x1="25" y1="15" x2="25" y2="48" stroke="#292929" strokeWidth="1"/>
                                        <line x1="30" y1="15" x2="30" y2="48" stroke="#292929" strokeWidth="1"/>
                                        <line x1="35" y1="15" x2="35" y2="48" stroke="#292929" strokeWidth="1"/>
                                        <rect x="18" y="12" width="12" height="5" fill="#ff8c00"/>
                                        <circle cx="42" cy="15" r="6" fill="#ff8c00"/>
                                        <circle cx="42" cy="15" r="3" fill="white"/>
                                    </svg>
                                </div>
                                <h4 className="text-dark fw-bold mb-3">HubSpot for Sheets App</h4>
                                <p className="text-dark mb-4">Sync and manage your contacts directly from Google Sheets. Download our integration to save time.</p>
                                <Link href="#" className="text-primary text-decoration-none fw-semibold" style={{ borderBottom: '2px solid #ff8c00', paddingBottom: '2px' }}>
                                    Sync your contacts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Resources Section */}
                <div className="container mt-80">
                    <h2 className="text-dark text-center mb-5 fw-bold">Other resources to set you up for success...</h2>
                    
                    <div className="bg-white rounded-4 p-5 p-lg-6 border">
                        <div className="row align-items-center">
                            {/* Left Side - Illustration */}
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 300 250" fill="none" style={{ maxWidth: '100%', height: 'auto' }}>
                                        {/* Document outline */}
                                        <rect x="20" y="20" width="260" height="210" stroke="#292929" strokeWidth="2.5" fill="#faf8f3" rx="4" strokeDasharray="3 2"/>
                                        
                                        {/* Orange header bar */}
                                        <rect x="20" y="20" width="260" height="40" fill="#ff8c00" rx="4"/>
                                        
                                        {/* Envelope icon in header */}
                                        <rect x="30" y="28" width="20" height="15" stroke="white" strokeWidth="1.5" fill="none" rx="1"/>
                                        <path d="M30 28 L40 35 L50 28" stroke="white" strokeWidth="1.5" fill="none"/>
                                        
                                        {/* Horizontal oval shape in header */}
                                        <ellipse cx="200" cy="40" rx="50" ry="8" fill="white" opacity="0.8"/>
                                        
                                        {/* Form fields - three rows with ovals */}
                                        <ellipse cx="40" cy="85" rx="6" ry="4" fill="#292929"/>
                                        <text x="50" y="88" fill="#292929" fontSize="12" fontWeight="500">:</text>
                                        <line x1="60" y1="85" x2="250" y2="85" stroke="#292929" strokeWidth="1.5" strokeDasharray="2 2"/>
                                        
                                        <ellipse cx="40" cy="110" rx="6" ry="4" fill="#292929"/>
                                        <text x="50" y="113" fill="#292929" fontSize="12" fontWeight="500">:</text>
                                        <line x1="60" y1="110" x2="250" y2="110" stroke="#292929" strokeWidth="1.5" strokeDasharray="2 2"/>
                                        
                                        <ellipse cx="40" cy="135" rx="6" ry="4" fill="#292929"/>
                                        <text x="50" y="138" fill="#292929" fontSize="12" fontWeight="500">:</text>
                                        <line x1="60" y1="135" x2="250" y2="135" stroke="#292929" strokeWidth="1.5" strokeDasharray="2 2"/>
                                        
                                        {/* More horizontal lines (text paragraphs) */}
                                        <line x1="30" y1="160" x2="270" y2="160" stroke="#292929" strokeWidth="1" strokeDasharray="1 1"/>
                                        <line x1="30" y1="175" x2="200" y2="175" stroke="#292929" strokeWidth="1" strokeDasharray="1 1"/>
                                        <line x1="30" y1="190" x2="250" y2="190" stroke="#292929" strokeWidth="1" strokeDasharray="1 1"/>
                                        
                                        {/* Bottom section - circle and buttons */}
                                        <circle cx="50" cy="210" r="8" fill="#292929"/>
                                        <rect x="45" y="205" width="10" height="10" fill="white" opacity="0.5"/>
                                        
                                        {/* Two orange buttons */}
                                        <rect x="200" y="200" width="35" height="20" fill="#ff8c00" rx="3"/>
                                        <rect x="245" y="200" width="30" height="20" fill="#ff8c00" rx="3" opacity="0.9"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Right Side - Text Content */}
                            <div className="col-lg-6 offset-lg-1">
                                <h3 className="text-dark fw-bold mb-4">Access 130+ free business templates</h3>
                                <p className="text-dark mb-4">Simplify your life, impress your clients, win more deals, and skyrocket your productivity with our collection of free, designer-approved professional templates.</p>
                                <Link href="#" className="btn btn-outline-primary border-primary text-primary px-4 py-3 rounded-3 fw-semibold d-inline-block">
                                    Access business templates
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
