import Link from "next/link";

export default function Section2I() {
    return (
        <>
            {/*tax-software section 2i - Three Step Process*/}
            <section className="tax-software-section-2i position-relative overflow-hidden py-120 bg-light-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="d-flex align-items-start gap-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "60px", height: "60px", backgroundColor: "#1877F2" }}>
                                        <span className="text-white fw-bold" style={{ fontSize: "1.5rem" }}>1</span>
                                    </div>
                                    <div>
                                        <h4 className="text-dark mb-3 fw-bold">Platform Integration</h4>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                            The Convrs Omnichannel Messaging Platform connects with the WhatsApp Business API and your CRM for seamless data sharing, making automated messaging smooth and efficient.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="d-flex align-items-start gap-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "60px", height: "60px", backgroundColor: "#1877F2" }}>
                                        <span className="text-white fw-bold" style={{ fontSize: "1.5rem" }}>2</span>
                                    </div>
                                    <div>
                                        <h4 className="text-dark mb-3 fw-bold">Message Trigger</h4>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                            Set up predefined triggers that prompt automated WhatsApp messages. These automated messages are designed to be relevant and timely based on customer actions or inactivity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white rounded-4 p-5 h-100 shadow-sm">
                                <div className="d-flex align-items-start gap-4">
                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "60px", height: "60px", backgroundColor: "#1877F2" }}>
                                        <span className="text-white fw-bold" style={{ fontSize: "1.5rem" }}>3</span>
                                    </div>
                                    <div>
                                        <h4 className="text-dark mb-3 fw-bold">Automated Message Delivery</h4>
                                        <p className="text-dark text-opacity-75 mb-0" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                                            Once triggered, WhatsApp automated messages are sent by the Convrs Omnichannel Messaging Platform, ensuring timely and personalized communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

