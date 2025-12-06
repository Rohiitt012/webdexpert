import Link from "next/link";

export default function Section7() {
    return (
        <>
            {/*fintech-app home section 7*/}
            <section className="fintech-app-home-section-7 position-relative bg-dark">
                <div className="position-absolute bottom-50 start-50 translate-middle-x w-100 h-50 bg-dark-3 rounded-bottom-5" />
                <div className="container overflow-hidden">
                    <div className="position-relative z-1 text-center bg-primary rounded-3 py-120 px-md-4 px-3">
                        <div className="position-relative z-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} viewBox="0 0 60 60" fill="none">
                                <path d="M24.7266 31.7578H35.2734V35.2734H24.7266V31.7578Z" fill="#292929" />
                                <path d="M48.6772 35.2742H38.7891V37.032C38.7891 38.0034 38.0026 38.7898 37.0312 38.7898H22.9688C21.9974 38.7898 21.2109 38.0034 21.2109 37.032V35.2742H11.3228C9.04999 35.2742 7.03995 33.8254 6.32034 31.6693L0 12.7051V51.0945C0 54.0022 2.36572 56.368 5.27344 56.368H54.7266C57.6343 56.368 60 54.0022 60 51.0945V12.7065L53.6792 31.6693C52.9601 33.8254 50.95 35.2742 48.6772 35.2742Z" fill="#292929" />
                                <path opacity="0.4" d="M37.0322 3.63281H22.9697C20.062 3.63281 17.6963 5.99854 17.6963 8.90625V10.6641H3.02539L9.65518 30.5562C9.89551 31.2753 10.5666 31.7578 11.3237 31.7578H21.2119V30C21.2119 29.0286 21.9983 28.2422 22.9697 28.2422H37.0322C38.0036 28.2422 38.79 29.0286 38.79 30V31.7578H48.6782C49.4353 31.7578 50.1064 31.2753 50.3467 30.5562L56.977 10.6641H42.3056V8.90625C42.3056 5.99854 39.9399 3.63281 37.0322 3.63281ZM21.2119 10.6641V8.90625C21.2119 7.93625 21.9997 7.14844 22.9697 7.14844H37.0322C38.0022 7.14844 38.79 7.93625 38.79 8.90625V10.6641H21.2119Z" fill="#292929" />
                            </svg>
                            <h2 className="text-dark pt-4 text-anime-style-3">
                                Astrax on a journey of <br />
                                learning and skill-building today
                            </h2>
                            <p className="text-dark py-3">Download our app from here:</p>
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <Link href="#" className="rounded-4 overflow-hidden hover-up">
                                    <img data-aos="fade-up" data-aos-delay={200} className="shadow" src="/assets/img/fintech-app-img/template/icons/app-1.png" alt="AstraX" />
                                </Link>
                                <Link href="#" className="rounded-4 overflow-hidden hover-up">
                                    <img data-aos="fade-up" data-aos-delay={400} className="shadow" src="/assets/img/fintech-app-img/template/icons/app-2.png" alt="AstraX" />
                                </Link>
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 end-0 me-lg-10 z-0 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width={679} height={525} viewBox="0 0 679 525" fill="none">
                                <path d="M64.6699 618.947V231.51L339.471 74.4863L614.34 231.51V544.461L339.471 701.514L194 618.375V306.559L339.471 223.43L485 306.559V469.402L339.471 552.541L323.34 543.326V381.627L404.645 335.145L339.471 297.916L258.67 344.117V580.836L339.471 627.027L549.67 506.912V269.049L339.471 148.973L129.34 269.049V655.885L339.471 776L679 582V194L339.471 0L0 194V582L64.6699 618.947Z" fill="#292929" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
