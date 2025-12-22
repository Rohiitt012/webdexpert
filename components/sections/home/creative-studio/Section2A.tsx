"use client";
import { useState } from "react";
import Link from "next/link";

export default function Section2A() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            label: "1. Know your customers",
            content: {
                title: "The key to a successful business is understanding your customer.",
                paragraph1: "Before you create social media campaigns, landing pages, sales flows, and more, outline who your ideal customer is.",
                paragraph2: "Use XzectLabs's free persona tool to clarify the best-fit individual for your product or service and establish a baseline for your marketing, sales, and customer service efforts.",
                linkText: "XzectLabs's free persona tool",
                linkHref: "#"
            }
        },
        {
            id: 2,
            label: "2. Build a brand",
            content: {
                title: "A strong brand identity sets you apart from competitors.",
                paragraph1: "Your brand is more than just a logo—it's the complete visual and emotional experience your customers have with your business.",
                paragraph2: "XzectLabs helps you create cohesive brand identities, including logos, color palettes, typography, and brand guidelines that resonate with your target audience and build lasting recognition.",
                linkText: "XzectLabs brand identity services",
                linkHref: "#"
            }
        },
        {
            id: 3,
            label: "3. Create content",
            content: {
                title: "Engaging content drives customer engagement and conversions.",
                paragraph1: "From social media posts to blog articles, compelling content helps you connect with your audience and showcase your expertise.",
                paragraph2: "With XzectLabs's content creation tools and services, you can produce high-quality, SEO-optimized content that attracts visitors, builds trust, and converts leads into customers.",
                linkText: "XzectLabs content creation services",
                linkHref: "#"
            }
        },
        {
            id: 4,
            label: "4. Get discovered",
            content: {
                title: "Visibility is essential for business growth.",
                paragraph1: "Your business needs to be found where your customers are searching—whether that's Google, social media, or industry directories.",
                paragraph2: "XzectLabs provides SEO optimization, social media management, and digital marketing strategies that increase your online visibility, drive organic traffic, and help you reach the right customers at the right time.",
                linkText: "XzectLabs digital marketing services",
                linkHref: "#"
            }
        }
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content || tabs[0].content;

    return (
        <>
            {/*creative-studio section 2A - Tabbed Business Help Section*/}
            <section className="creative-studio-section-2a position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    {/* Main Heading */}
                    <div className="text-center mb-4">
                        <h2 className="text-dark fw-bold mb-3" style={{ fontFamily: 'serif', fontSize: '2.5rem' }}>
                            What does your business need help with?
                        </h2>
                        <p className="text-dark fs-5">Get help reaching your customers</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="border-top border-bottom py-4 mb-5">
                        <div className="row g-3">
                            {tabs.map((tab) => (
                                <div key={tab.id} className="col-lg-3 col-md-6 col-6">
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-100 text-start p-0 bg-transparent border-0 text-dark fw-semibold position-relative pb-2 ${
                                            activeTab === tab.id ? 'active-tab' : ''
                                        }`}
                                        style={{
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease',
                                            color: activeTab === tab.id ? '#292929' : '#666'
                                        }}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <span
                                                className="position-absolute bottom-0 start-0 w-100"
                                                style={{
                                                    height: '3px',
                                                    backgroundColor: '#ff8c00',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="row align-items-center">
                        {/* Left Side - Text Content */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="pe-lg-4">
                                <h3 className="text-dark fw-bold mb-4" style={{ fontSize: '1.5rem' }}>
                                    {activeContent.title}
                                </h3>
                                <p className="text-dark mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                    {activeContent.paragraph1}
                                </p>
                                <p className="text-dark mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                    {activeContent.paragraph2.split(activeContent.linkText)[0]}
                                    <Link 
                                        href={activeContent.linkHref} 
                                        className="text-primary text-decoration-underline"
                                        style={{ color: '#0066cc' }}
                                    >
                                        {activeContent.linkText}
                                    </Link>
                                    {activeContent.paragraph2.split(activeContent.linkText)[1]}
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Illustration */}
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center justify-content-lg-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="350" viewBox="0 0 400 350" fill="none" style={{ maxWidth: '100%', height: 'auto' }}>
                                    {/* Person with curly hair */}
                                    <circle cx="200" cy="120" r="35" stroke="#292929" strokeWidth="2.5" fill="none"/>
                                    {/* Curly hair */}
                                    <path d="M175 100 Q180 90 185 95 Q190 90 195 95 Q200 90 205 95 Q210 90 215 95 Q220 90 225 95" stroke="#292929" strokeWidth="2" fill="none"/>
                                    <path d="M175 100 Q178 85 183 90 Q188 85 193 90 Q198 85 203 90 Q208 85 213 90 Q218 85 223 90" stroke="#292929" strokeWidth="2" fill="none"/>
                                    
                                    {/* Body/chest */}
                                    <rect x="180" y="155" width="40" height="50" stroke="#292929" strokeWidth="2" fill="none" rx="3"/>
                                    
                                    {/* Right hand holding coffee cup */}
                                    <ellipse cx="230" cy="170" rx="8" ry="12" stroke="#292929" strokeWidth="2" fill="none"/>
                                    {/* Coffee cup */}
                                    <rect x="235" y="165" width="20" height="25" stroke="#292929" strokeWidth="2" fill="none" rx="2"/>
                                    <rect x="237" y="167" width="16" height="20" fill="#ff8c00"/>
                                    <line x1="255" y1="170" x2="260" y2="170" stroke="#292929" strokeWidth="2"/>
                                    
                                    {/* Left hand on tablet */}
                                    <ellipse cx="170" cy="180" rx="8" ry="12" stroke="#292929" strokeWidth="2" fill="none"/>
                                    {/* Tablet/laptop */}
                                    <rect x="140" y="190" width="60" height="40" stroke="#292929" strokeWidth="2.5" fill="#292929" rx="2"/>
                                    <rect x="145" y="195" width="50" height="30" fill="white" opacity="0.3"/>
                                    <line x1="150" y1="205" x2="190" y2="205" stroke="white" strokeWidth="1" opacity="0.5"/>
                                    <line x1="150" y1="215" x2="180" y2="215" stroke="white" strokeWidth="1" opacity="0.5"/>
                                    
                                    {/* Desk */}
                                    <line x1="100" y1="230" x2="300" y2="230" stroke="#292929" strokeWidth="3"/>
                                    
                                    {/* Potted plant */}
                                    <ellipse cx="280" cy="220" rx="15" ry="10" fill="#ff8c00"/>
                                    {/* Plant leaves */}
                                    <path d="M275 210 Q270 200 275 195 Q280 200 275 210" stroke="#47AD8D" strokeWidth="2" fill="#47AD8D"/>
                                    <path d="M280 210 Q275 200 280 195 Q285 200 280 210" stroke="#47AD8D" strokeWidth="2" fill="#47AD8D"/>
                                    <path d="M285 210 Q280 200 285 195 Q290 200 285 210" stroke="#47AD8D" strokeWidth="2" fill="#47AD8D"/>
                                    
                                    {/* Floating card above person */}
                                    <rect x="220" y="60" width="120" height="80" stroke="#292929" strokeWidth="2" fill="white" rx="4"/>
                                    {/* Three horizontal lines */}
                                    <line x1="235" y1="80" x2="320" y2="80" stroke="#292929" strokeWidth="1.5"/>
                                    <line x1="235" y1="95" x2="310" y2="95" stroke="#292929" strokeWidth="1.5"/>
                                    <line x1="235" y1="110" x2="300" y2="110" stroke="#292929" strokeWidth="1.5"/>
                                    {/* Three orange circles */}
                                    <circle cx="230" cy="80" r="3" fill="#ff8c00"/>
                                    <circle cx="230" cy="95" r="3" fill="#ff8c00"/>
                                    <circle cx="230" cy="110" r="3" fill="#ff8c00"/>
                                    {/* Orange button */}
                                    <rect x="235" y="125" width="70" height="12" fill="#ff8c00" rx="2"/>
                                    
                                    {/* Envelope icon */}
                                    <rect x="300" y="70" width="25" height="18" stroke="#292929" strokeWidth="2" fill="white" rx="1"/>
                                    <path d="M300 70 L312.5 78 L325 70" stroke="#292929" strokeWidth="2" fill="none"/>
                                    {/* Notification bubble */}
                                    <circle cx="320" cy="68" r="8" fill="#ff8c00"/>
                                    <text x="317" y="72" fill="white" fontSize="10" fontWeight="bold">1</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

