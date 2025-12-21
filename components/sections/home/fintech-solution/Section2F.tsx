export default function Section2F() {
    return (
        <>
            {/*fintech-solution section 2f - Statistics*/}
            <section className="fintech-solution-section-2f position-relative overflow-hidden py-120" style={{ backgroundColor: "#2a2a2a" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-center">
                            <div className="position-relative d-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <circle cx="100" cy="100" r="90" stroke="#4a4a4a" strokeWidth="8" fill="none"/>
                                    <circle cx="100" cy="100" r="90" stroke="#ff8c00" strokeWidth="8" fill="none" 
                                        strokeDasharray={`${2 * Math.PI * 90 * 0.74} ${2 * Math.PI * 90}`}
                                        strokeDashoffset={2 * Math.PI * 90 * 0.25}
                                        transform="rotate(-90 100 100)"/>
                                    <text x="100" y="110" textAnchor="middle" fill="white" fontSize="48" fontWeight="700">74%</text>
                                </svg>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <p className="text-white mb-3" style={{ fontSize: "1rem" }}>Nucleus Research report:</p>
                            <h3 className="text-white fw-bold" style={{ fontSize: "1.8rem", lineHeight: "1.4" }}>
                                In 2019, 74% of businesses who applied CRM software, increased their access to customer data.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

