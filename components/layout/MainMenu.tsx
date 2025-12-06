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
                <ul className="dropdown-menu mega-menu" style={{ backgroundColor: '#ffffff', padding: '2rem 1rem', minWidth: '800px' }}>
                    <li>
                        <div className="container">
                            <div className="row g-3">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/ai-solutions">
                                        <span>AI Solutions</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/digital-agency">
                                        <span>Digital Agency</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/business">
                                        <span>Business</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/accounting-service">
                                        <span>Accounting Service</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/application">
                                        <span>Application</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/charity">
                                        <span>Charity</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/conference">
                                        <span>Conference</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/coworking-space">
                                        <span>Coworking Space</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/creative-studio">
                                        <span>Creative Studio</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/crypto-agency">
                                        <span>Crypto Agency</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/data-analysis">
                                        <span>Data Analysis</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/elearning">
                                        <span>E-Learning</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/event">
                                        <span>Event</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/finance-consultant">
                                        <span>Finance Consultant</span>
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link className="dropdown-item text-capitalize" href="/service/fintech-app">
                                        <span>Fintech App</span>
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
