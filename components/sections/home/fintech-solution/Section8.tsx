import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*fintech-solution section 8 - CRM Development Benefits */}
            <section className="fintech-solution-section-8 position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-4 text-anime-style-2" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '1.2', maxWidth: '900px', margin: '0 auto' }}>
                            The Path of Custom CRM Development Is Not Easy. But Look at the <span className="bg-info-subtle px-2">Benefits!</span>
                        </h2>
                        <p className="text-dark text-opacity-75 mb-5" style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                            ScienceSoft is ready to go the extra mile to make sure all your efforts and investments into a custom CRM are rewarded at their best.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#FFD700" fillOpacity="0.2"/>
                                            <path d="M20 35L25 40L40 25" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="30" cy="20" r="8" fill="#FFD700" fillOpacity="0.3"/>
                                            <path d="M25 20L30 15L35 20L30 25Z" fill="#FFD700"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Simplicity</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    You may find the default functionality of CRM platforms excessive. We offer to tune your CRM's functional filling and UI to minimize users' learning curve and facilitate the system's adoption.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-white">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#FFD700" fillOpacity="0.2"/>
                                            <path d="M20 35C20 32.8 21.8 31 24 31H36C38.2 31 40 32.8 40 35V40C40 42.2 38.2 44 36 44H24C21.8 44 20 42.2 20 40V35Z" fill="#FFD700" fillOpacity="0.3"/>
                                            <circle cx="30" cy="37.5" r="3" fill="#FFD700"/>
                                            <path d="M25 20L30 15L35 20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Cost-efficiency in the long run</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    You succeed at each step of customer relationship building and can expect a higher return in the form of a higher lead conversion rate, faster case resolution in customer service, and so on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

