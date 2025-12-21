"use client";
import Link from "next/link";

export default function Section3B() {
    return (
        <>
            {/*marketing-agency-home-section-3B - Why Choose Section */}
            <section className="marketing-agency-home-section-3b position-relative overflow-hidden py-120 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Text Content - Centered */}
                        <div className="col-lg-10 col-xl-8">
                            <div className="text-center">
                                <h2 className="text-dark mb-4 text-anime-style-2" style={{ fontSize: '42px', lineHeight: '1.3', fontWeight: 'bold' }}>
                                    Why Choose Us?
                                </h2>
                                <p className="text-dark mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '1.8', color: '#666' }}>
                                    We're not just media buyers. We're paid media strategists focused on business outcomes—not just impressions.
                                </p>
                                <h4 className="text-dark mb-4 mt-5" style={{ fontSize: '22px', fontWeight: 'bold' }}>
                                    What makes us different:
                                </h4>
                                <ul className="list-unstyled mb-4 text-start" style={{ fontSize: '16px', lineHeight: '2.2', maxWidth: '700px', margin: '0 auto' }}>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span className="text-dark me-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>•</span>
                                        <div>
                                            <strong className="text-dark">Performance-First Approach:</strong>
                                            <span className="text-dark text-opacity-75"> Every campaign is structured to maximize return on ad spend.</span>
                                        </div>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span className="text-dark me-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>•</span>
                                        <div>
                                            <strong className="text-dark">Cross-Platform Experience:</strong>
                                            <span className="text-dark text-opacity-75"> We know how to coordinate Meta Ads with Google, YouTube, and other channels.</span>
                                        </div>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span className="text-dark me-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>•</span>
                                        <div>
                                            <strong className="text-dark">Creative Strategy In-House:</strong>
                                            <span className="text-dark text-opacity-75"> Our designers, writers, and video editors specialize in social ad formats.</span>
                                        </div>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start">
                                        <span className="text-dark me-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>•</span>
                                        <div>
                                            <strong className="text-dark">Data-Driven Optimization:</strong>
                                            <span className="text-dark text-opacity-75"> Every decision we make is backed by performance data.</span>
                                        </div>
                                    </li>
                                    <li className="mb-0 d-flex align-items-start">
                                        <span className="text-dark me-3" style={{ fontSize: '20px', fontWeight: 'bold' }}>•</span>
                                        <div>
                                            <strong className="text-dark">Clear Communication:</strong>
                                            <span className="text-dark text-opacity-75"> You'll never be left in the dark about how your ads are performing.</span>
                                        </div>
                                    </li>
                                </ul>
                                <p className="text-dark mb-0 mx-auto" style={{ maxWidth: '800px', fontSize: '18px', lineHeight: '1.8', color: '#666', fontStyle: 'italic' }}>
                                    We treat your budget like our own—and manage it to deliver results that scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

