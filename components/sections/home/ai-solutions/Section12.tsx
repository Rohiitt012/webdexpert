export default function Section12() {
    const clients = [
        "WAY2 AUTOMATION",
        "APPLE FOSTERING UK",
        "CLINICAL MASSAGE MK",
        "THE EXPAT TOURS"
    ];

    return (
        <>
            {/*ai-solutions-home section 12 - Our Clients*/}
            <section className="ai-solutions-home-section-12 position-relative overflow-hidden py-60 bg-dark">
                <div className="container-fluid">
                    <div className="clients-row-wrapper">
                        {/* Static first client */}
                        <div className="static-client-box">
                            <div className="client-text">OUR CLIENTS</div>
                        </div>

                        {/* Scrolling clients */}
                        <div className="clients-marquee-container">
                            <div className="clients-marquee-content">
                                {clients.map((client, index) => (
                                    <div key={index} className="client-box">
                                        <div className="client-text">{client}</div>
                                    </div>
                                ))}
                                {clients.map((client, index) => (
                                    <div key={`duplicate-${index}`} className="client-box">
                                        <div className="client-text">{client}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
