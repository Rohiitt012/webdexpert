"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    <span>About</span>
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Services</span>
                </Link>
                <ul className="dropdown-menu mega-menu" style={{ backgroundColor: '#ffffff', padding: '1.5rem 1rem', minWidth: '850px', maxWidth: '950px' }}>
                    <li>
                        <div className="container-fluid px-0">
                            <div className="row g-2">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/website-design-development" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Website Design & Development</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/website-redesign-optimization" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Website Redesign & Optimization</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/website-maintenance-support" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Website Maintenance & Support</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/wordpress-cms-development" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>WordPress & CMS Development</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/automation-integrations" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Automation & Integrations</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/ai-solutions" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>AI Solutions</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/crm-development" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>CRM Development</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/saas-web-apps-mobile-apps" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>SaaS, Web Apps & Mobile Apps</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/performance-marketing" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Performance Marketing</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/seo-services" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>SEO Services</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/social-media-management-marketing" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Social Media Management & Marketing</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/branding-graphics-content" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Branding, Graphics & Content</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/hosting-domain-email-setup" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Hosting, Domain & Email Setup</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/security-performance" style={{ padding: '0.5rem 0.75rem', lineHeight: '1.4', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                        <span>Security & Performance</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Blog</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog">
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            <span>Blog Details</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Pages</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/pricing">
                            <span>Pricing</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/contact">
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
    );
}
