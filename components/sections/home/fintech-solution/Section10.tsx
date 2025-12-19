import Link from "next/link";

export default function Section10() {
    return (
        <>
            {/*fintech-solution section 10 - Custom vs Customized CRM */}
            <section className="fintech-solution-section-10 position-relative overflow-hidden py-120 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-dark mb-4 text-anime-style-2" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: '1.2', maxWidth: '900px', margin: '0 auto' }}>
                            Call It Custom or Customized, We Will Give You the Best-Suited CRM
                        </h2>
                        <p className="text-dark text-opacity-75 mb-5" style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                            ScienceSoft is a full-cycle custom CRM development company that will treat your requirements seriously and advise you towards a CRM best-suited to your business needs and budget.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-light-subtle">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-white d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <circle cx="25" cy="25" r="8" fill="#FFD700" fillOpacity="0.3"/>
                                            <path d="M25 20L25 30L30 25Z" fill="#794AFF"/>
                                            <path d="M35 20L35 30L40 25Z" fill="#794AFF"/>
                                            <path d="M25 25L35 25" stroke="#794AFF" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '28px', fontWeight: 'bold' }}>A custom CRM built from scratch</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    If your business workflows are too specific to be covered by a standard CRM platform, we'll create CRM individually for your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border rounded-4 p-5 h-100 shadow-sm bg-light-subtle">
                                <div className="text-center mb-4">
                                    <div className="icon-shape icon-120 rounded-circle bg-white d-inline-flex align-items-center justify-content-center mb-4">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.5 50 10 41.5 10 30C10 18.5 18.5 10 30 10C41.5 10 50 18.5 50 30C50 41.5 41.5 50 30 50Z" fill="#794AFF" fillOpacity="0.2"/>
                                            <path d="M20 25L25 30L30 25L35 30L40 25" stroke="#794AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="25" cy="25" r="3" fill="#FF6B35"/>
                                            <circle cx="35" cy="25" r="3" fill="#FF6B35"/>
                                            <path d="M20 20L30 15L40 20" stroke="#794AFF" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-dark mb-3" style={{ fontSize: '28px', fontWeight: 'bold' }}>A customized CRM platform</h3>
                                </div>
                                <p className="text-dark text-opacity-75 mb-0 text-center" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                    If the core functionality of a CRM platform meets your goals, we can strengthen it with the custom features and modules you are lacking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

