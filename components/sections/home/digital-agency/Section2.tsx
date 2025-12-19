import Link from "next/link";

export default function Section2({ bg }: any) {
    return (
        <>
            {/*digital-agency home section 2*/}
            <section className={`digital-agency-home-section-2 position-relative overflow-hidden ${bg} py-120`}>
                <div className="container">
                    <div className="text-center">
                        <div className="mb-4 bg-primary rounded-pill border border-dark btn-text d-inline-block px-3 py-2">
                            <span className="text-dark">our expertise</span>
                        </div>
                        <h2 className="mb-80 text-anime-style-3">
                            Company able to serve <br />
                            quality service
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="card-service p-md-5 p-3 border border-dark bg-white rounded wow fadeInLeft2" data-wow-delay=".8s">
                                <div className="d-flex gap-4 align-items-center mb-4">
                                    <div>
                                        <div className="icon-shape icon-80 rounded-circle border border-dark bg-linear">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={32} viewBox="0 0 40 32" fill="none">
                                                <path
                                                    d="M0.583638 12.1329C0.67552 12.1329 0.768729 12.1113 0.855611 12.0656L7.86659 8.3824C8.60625 9.09769 9.89369 8.96596 10.4782 8.13082L18.2426 10.4596C18.287 11.3897 19.0575 12.1327 19.9984 12.1327C21.1786 12.1545 22.0599 10.9183 21.6633 9.81164L29.9965 3.26469C30.8348 3.82746 32.0668 3.47525 32.4976 2.58776L39.3336 3.53283C39.6475 3.57838 39.9515 3.35469 39.9944 3.03264C40.0387 2.71207 39.8147 2.41627 39.4942 2.37197L32.659 1.42698C32.4949 0.626449 31.785 0.022499 30.9368 0.022499C29.7566 0.000778662 28.8753 1.23696 29.2719 2.3436L20.9388 8.89064C20.1978 8.38779 19.0761 8.6139 18.5806 9.33739L10.8161 7.00863C10.5842 4.57923 7.08528 4.91332 7.32077 7.34537L0.310649 11.028C-0.229624 11.3128 -0.0182025 12.1352 0.583638 12.1329ZM30.9368 1.19446C31.7112 1.21907 31.711 2.34196 30.9368 2.36642C30.1623 2.34181 30.1625 1.21891 30.9368 1.19446ZM19.9986 9.78883C20.773 9.81344 20.7728 10.9363 19.9986 10.9608C19.2241 10.9362 19.2243 9.81328 19.9986 9.78883ZM9.06027 6.50734C9.8347 6.53195 9.83446 7.65485 9.06027 7.6793C8.28591 7.65469 8.28607 6.5318 9.06027 6.50734Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M38.2411 28.4621H34.9596V13.3821C34.9596 13.0584 34.6973 12.7961 34.3736 12.7961C34.0499 12.7961 33.7876 13.0584 33.7876 13.3821V28.4621H28.0841V9.63265H33.7876V10.7635C33.7876 11.0871 34.0499 11.3495 34.3736 11.3495C34.6973 11.3495 34.9596 11.0871 34.9596 10.7635V9.04667C34.9596 8.72306 34.6973 8.46069 34.3736 8.46069H27.4981C27.1744 8.46069 26.9121 8.72306 26.9121 9.04667V28.4621H24.0213V16.3128C24.0213 15.9892 23.759 15.7268 23.4353 15.7268H16.5598C16.2362 15.7268 15.9738 15.9892 15.9738 16.3128V28.4621H13.083V13.3821C13.083 13.0584 12.8206 12.7961 12.497 12.7961H5.62153C5.29792 12.7961 5.03555 13.0584 5.03555 13.3821V28.4621H1.75407C-0.56657 28.5466 -0.581962 31.8872 1.75407 31.978H10.2351C11.0129 31.9525 11.0068 30.8292 10.2351 30.8061H1.75399C0.990417 30.7861 0.970416 29.6609 1.75399 29.6341H38.2408C38.9973 29.6536 39.033 30.7736 38.2408 30.8061H13.0078C12.2353 30.8289 12.2316 31.9539 13.0078 31.978H38.2408C40.5566 31.8961 40.5818 28.5546 38.2411 28.4621ZM6.20775 13.968H11.9113V28.4222H6.20775V13.968ZM17.146 28.4621V16.8988H22.8495V28.4621H17.146Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/services-details">
                                            ROI <br />
                                            business growth
                                        </Link>
                                    </h6>
                                </div>
                                <p>Exclusive collaboration feature designed to make workflows smoother for your entire team is ready anytime.</p>
                                <Link href="/services-details" className="fw-bold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service p-md-5 p-3 border border-dark bg-white rounded wow fadeInLeft2" data-wow-delay=".4s">
                                <div className="d-flex gap-4 align-items-center mb-4">
                                    <div>
                                        <div className="icon-shape icon-80 rounded-circle border border-dark bg-linear">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={30} viewBox="0 0 40 30" fill="none">
                                                <path
                                                    d="M23.4692 1.51685C22.4993 1.51685 21.7102 2.30589 21.7102 3.27584V3.76327C21.1329 4.41754 18.6028 7.08214 13.9814 9.20504C13.6871 9.34021 13.5581 9.68834 13.6933 9.9826C13.8285 10.2769 14.1765 10.4057 14.4709 10.2707C18.0915 8.60753 20.4657 6.65263 21.7102 5.45527V24.5143C20.0348 22.9582 16.2982 20.0326 10.2182 18.0829V11.8555C10.7626 11.696 11.3036 11.5221 11.8315 11.3366C12.137 11.2293 12.2977 10.8946 12.1903 10.5891C12.0829 10.2836 11.7484 10.123 11.4427 10.2303C10.9958 10.3873 10.5389 10.5351 10.0787 10.6731C9.81187 10.0476 9.19083 9.60812 8.46902 9.60812H5.33207C-0.294663 9.65753 -2.03763 17.1759 2.88911 19.7262V24.9219C3.03647 28.8057 8.6056 28.8047 8.75241 24.9219V22.7371C10.5037 23.3249 12.4399 22.0184 12.5616 20.1937C18.0757 22.4912 21.0588 25.4719 21.7102 26.1722V26.6507C21.7969 28.9773 25.1389 28.9838 25.2282 26.6507V3.27591C25.2282 2.30589 24.4392 1.51685 23.4692 1.51685ZM1.14959 14.9632C1.14959 12.657 3.02584 10.7807 5.33207 10.7807H8.46902C8.78689 10.7807 9.04558 11.0393 9.04558 11.3572V18.5691C9.04558 18.887 8.78697 19.1456 8.46902 19.1456H5.33207C3.02584 19.1457 1.14959 17.2694 1.14959 14.9632ZM5.82076 26.6808C4.85081 26.6808 4.06177 25.8918 4.06177 24.9218V20.1648C4.87005 20.4077 6.72308 20.2948 7.57975 20.3183V24.9218C7.57975 25.8918 6.79071 26.6808 5.82076 26.6808ZM11.4004 19.9425C11.4248 21.2755 9.88638 22.1552 8.75241 21.4594V20.295C9.34468 20.1981 9.83759 19.8028 10.0717 19.269C10.5236 19.4173 10.9626 19.5711 11.3877 19.7299C11.3961 19.8001 11.4004 19.8712 11.4004 19.9425ZM24.0556 26.6506C24.0343 27.4174 22.9092 27.4324 22.8829 26.6506V3.27584C22.9042 2.50907 24.0292 2.49406 24.0556 3.27584V26.6506Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M39.4286 15.2706C40.5583 14.1994 39.9187 12.2263 38.3731 12.0235L36.4972 11.7512C36.2587 11.7165 36.0527 11.5671 35.9461 11.3512L35.1072 9.65274C34.784 8.99832 34.1296 8.5918 33.3993 8.5918C32.6691 8.5918 32.0147 8.99832 31.6915 9.65274L30.8526 11.3512C30.746 11.5671 30.5399 11.7166 30.3015 11.7513L28.4256 12.0236C26.8821 12.2266 26.2387 14.1981 27.3702 15.2706L28.7275 16.5928C28.9 16.7606 28.9785 17.0024 28.9378 17.2395L28.6174 19.1063C28.3898 20.2327 29.3572 21.36 30.4928 21.3338C30.7953 21.3338 31.0995 21.2608 31.3806 21.1132C31.4769 21.0703 33.2144 20.1201 33.2597 20.1611C34.0171 19.9884 33.8008 18.8863 33.0364 19.0099C32.6323 19.0549 31.2161 19.9013 30.8353 20.075C30.3203 20.3659 29.6545 19.8864 29.7731 19.3047L30.0935 17.4379C30.1996 16.8201 29.9948 16.1902 29.5456 15.7528L28.1882 14.4307C27.9845 14.2322 27.9152 13.9523 28.003 13.682C28.091 13.4113 28.3118 13.2251 28.594 13.1842L30.4699 12.9118C31.0903 12.8217 31.6263 12.4325 31.9039 11.8706L32.7429 10.1722C32.9886 9.63414 33.8097 9.63218 34.0557 10.1722L34.8946 11.8707C35.1721 12.4326 35.7083 12.8217 36.3286 12.9119L38.2045 13.1842C38.7923 13.2516 39.0481 14.0299 38.6102 14.4308L37.2528 15.7528C36.8037 16.1903 36.5989 16.8203 36.7049 17.438L37.0253 19.3048C37.1429 19.885 36.4793 20.3673 35.9631 20.0751C35.2646 19.7354 34.7439 20.7334 35.4179 21.1132C36.0645 21.453 36.8334 21.3972 37.4242 20.9677C38.0145 20.5386 38.3046 19.8253 38.1811 19.1064L37.8607 17.2395C37.8199 17.0025 37.8986 16.7608 38.071 16.5929C38.0712 16.5926 39.4286 15.2706 39.4286 15.2706Z"
                                                    fill="black"
                                                />
                                                <path d="M28.2554 6.08642C28.342 6.08642 28.4301 6.06711 28.5132 6.02638L36.8781 1.92441C37.5611 1.56441 37.0709 0.551229 36.3618 0.871522L27.9968 4.97349C27.4421 5.2468 27.6432 6.08814 28.2554 6.08642Z" fill="black" />
                                                <path d="M36.8771 28.0772L28.5122 23.9752C27.8092 23.6558 27.3085 24.6636 27.9959 25.0281L36.3608 29.1301C36.4439 29.1708 36.5319 29.1901 36.6186 29.1901C37.2276 29.1915 37.4347 28.3528 36.8771 28.0772Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/services-details">
                                            Digital <br />
                                            marketing service
                                        </Link>
                                    </h6>
                                </div>
                                <p>Exclusive collaboration feature designed to make workflows smoother for your entire team is ready anytime.</p>
                                <Link href="/services-details" className="fw-bold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service p-md-5 p-3 border border-dark bg-white rounded wow fadeInLeft2" data-wow-delay=".0s">
                                <div className="d-flex gap-4 align-items-center mb-4">
                                    <div>
                                        <div className="icon-shape icon-80 rounded-circle border border-dark bg-linear">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                                <path
                                                    d="M38.9453 35.0781H37.2697C37.6586 34.5729 37.8906 33.9409 37.8906 33.2555V14.1664C37.8906 12.5152 36.5473 11.1719 34.8961 11.1719H31.1328V2.14844C31.1328 0.963828 30.169 0 28.9844 0H11.0156C9.83094 0 8.86719 0.963828 8.86719 2.14844V11.1719H5.10391C3.45273 11.1719 2.10938 12.5152 2.10938 14.1664V28.2412C2.13109 29.0097 3.25578 29.0209 3.28125 28.2412V14.1664C3.28125 13.1614 4.09891 12.3438 5.10391 12.3438H8.86719V13.5156H5.96875C5.13305 13.5156 4.45312 14.1955 4.45312 15.0312V32.3906C4.45312 33.2263 5.13305 33.9062 5.96875 33.9062H34.0312C34.867 33.9062 35.5469 33.2263 35.5469 32.3906V15.0312C35.5469 14.1955 34.867 13.5156 34.0312 13.5156H31.1328V12.3438H34.8961C35.9011 12.3438 36.7188 13.1614 36.7188 14.1664V33.2555C36.7188 34.2605 35.9011 35.0781 34.8961 35.0781H5.10391C4.09891 35.0781 3.28125 34.2605 3.28125 33.2555V31.0137C3.28125 30.69 3.01891 30.4277 2.69531 30.4277C2.37172 30.4277 2.10938 30.69 2.10938 31.0137V33.2555C2.10938 33.9409 2.34141 34.5729 2.73031 35.0781H1.05469C0.473125 35.0781 0 35.5513 0 36.1328V37.5249C0 38.8897 1.11031 40 2.47508 40H37.5249C38.8897 40 40 38.8897 40 37.5249V36.1328C40 35.5513 39.5269 35.0781 38.9453 35.0781ZM10.0391 2.14844C10.0391 1.60992 10.4771 1.17188 11.0156 1.17188H28.9844C29.5229 1.17188 29.9609 1.60992 29.9609 2.14844V6.25H10.0391V2.14844ZM5.625 32.3906V15.0312C5.625 14.8416 5.77922 14.6875 5.96875 14.6875H8.86719V32.7344H5.96875C5.77922 32.7344 5.625 32.5802 5.625 32.3906ZM10.0391 32.7344V7.42188H29.9609V32.7344H10.0391ZM34.0312 14.6875C34.2209 14.6875 34.375 14.8417 34.375 15.0312V32.3906C34.375 32.5802 34.2208 32.7344 34.0312 32.7344H31.1328V14.6875H34.0312ZM23.4741 36.25L23.2307 36.9531H16.7695L16.526 36.25H23.4741ZM38.8281 37.5249C38.8281 38.2434 38.2435 38.8281 37.5249 38.8281H2.47508C1.75648 38.8281 1.17188 38.2435 1.17188 37.5249V36.25H15.2859L15.7112 37.4784C15.845 37.8652 16.2099 38.125 16.6192 38.125H23.3809C23.7899 38.125 24.1548 37.8653 24.289 37.4784L24.7141 36.25H38.8281V37.5249Z"
                                                    fill="black"
                                                />
                                                <path d="M13.625 1.84937C12.6127 1.84937 11.7891 2.67296 11.7891 3.6853C11.8813 6.11757 15.369 6.11694 15.4609 3.6853C15.4609 2.67296 14.6373 1.84937 13.625 1.84937ZM13.625 4.34937C13.2588 4.34937 12.9609 4.05147 12.9609 3.6853C12.9921 2.8064 14.258 2.80663 14.2891 3.6853C14.2891 4.0514 13.9912 4.34937 13.625 4.34937Z" fill="black" />
                                                <path d="M18.207 1.84937C17.1947 1.84937 16.3711 2.67296 16.3711 3.6853C16.4634 6.11757 19.951 6.11694 20.043 3.6853C20.043 2.67296 19.2194 1.84937 18.207 1.84937ZM18.207 4.34937C17.8409 4.34937 17.543 4.05147 17.543 3.6853C17.5741 2.8064 18.84 2.80663 18.8711 3.6853C18.8711 4.0514 18.5732 4.34937 18.207 4.34937Z" fill="black" />
                                                <path d="M22.793 1.84937C21.7806 1.84937 20.957 2.67296 20.957 3.6853C21.0493 6.11757 24.537 6.11694 24.6289 3.6853C24.6289 2.67296 23.8053 1.84937 22.793 1.84937ZM22.793 4.34937C22.4268 4.34937 22.1289 4.05147 22.1289 3.6853C22.1602 2.8064 23.4259 2.80663 23.457 3.6853C23.457 4.0514 23.1591 4.34937 22.793 4.34937Z" fill="black" />
                                                <path d="M12.7878 21.3557H19.5534C19.877 21.3557 20.1393 21.0934 20.1393 20.7698C20.1393 20.4461 19.877 20.1838 19.5534 20.1838H12.7878C12.0152 20.2069 12.0117 21.3314 12.7878 21.3557Z" fill="black" />
                                                <path d="M27.2123 23.1526H12.7876C12.0176 23.1745 12.0094 24.2996 12.7876 24.3245H27.2124C27.9823 24.3025 27.9907 23.1774 27.2123 23.1526Z" fill="black" />
                                                <path d="M27.2123 26.1213H12.7876C12.0176 26.1433 12.0094 27.2684 12.7876 27.2932H27.2124C27.9823 27.2713 27.9907 26.1461 27.2123 26.1213Z" fill="black" />
                                                <path d="M27.2123 29.0901H12.7876C12.0176 29.112 12.0094 30.2371 12.7876 30.262H27.2124C27.9823 30.24 27.9907 29.1149 27.2123 29.0901Z" fill="black" />
                                                <path d="M13.4445 17.0803H26.5555C27.2271 17.0803 27.7734 16.534 27.7734 15.8624V10.5639C27.7734 9.89228 27.2271 9.34595 26.5555 9.34595H23.9483C23.1716 9.37126 23.1756 10.4942 23.9483 10.5178H26.5555C26.5809 10.5178 26.6016 10.5385 26.6016 10.5639V15.8624C26.6016 15.8877 26.5809 15.9084 26.5555 15.9084C26.5014 15.8583 13.3946 15.9995 13.3985 15.8625L13.3984 10.5639C13.3984 10.5385 13.4191 10.5178 13.4445 10.5178H21.1598C21.4835 10.5178 21.7458 10.2556 21.7458 9.93188C21.7458 9.60821 21.4835 9.34595 21.1598 9.34595H13.4445C12.773 9.34595 12.2266 9.89228 12.2266 10.5639V15.8624C12.2266 16.534 12.773 17.0803 13.4445 17.0803Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6>
                                        <Link href="/services-details">
                                            Website <br />
                                            ui &amp; ux design
                                        </Link>
                                    </h6>
                                </div>
                                <p>Exclusive collaboration feature designed to make workflows smoother for your entire team is ready anytime.</p>
                                <Link href="/services-details" className="fw-bold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Website Maintenance Section */}
                    <div className="row mt-80 align-items-center g-5">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="position-relative">
                                <img 
                                    src="/assets/imgs/website-maintenance.png" 
                                    alt="Website Maintenance Illustration" 
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ps-lg-5">
                                <h2 className="mb-4 fw-normal" style={{ fontSize: '2.75rem', lineHeight: '1.3', fontFamily: 'inherit' }}>
                                    Is Your Website Under-maintained? Get Best <strong style={{ fontWeight: '700' }}>Website Maintenance</strong> Services in India NOW!
                                </h2>
                                <p className="mb-5" style={{ fontSize: '1.125rem', color: '#333' }}>
                                    Do you know under maintained websites are at risk, not just 1, but many risks!
                                </p>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>Your website is prone to cyber attacks</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>Your website may not recover data; if it gets crashed</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>You website will be so slow to load</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>You may lost potential clients on their first experience</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>Your search engine rankings is prone to decline</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex gap-3 align-items-start">
                                            <div className="flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                                                    <circle cx="10" cy="10" r="9" fill="#E63946" stroke="#E63946" strokeWidth="1.5"/>
                                                    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.5' }}>Your conversion rate is prone to decline</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h2 className="mb-0 fw-normal" style={{ fontSize: '2.75rem', lineHeight: '1.3', fontFamily: 'inherit' }}>
                                        Website Maintenance Company In India You Can Rely On
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Website Maintenance Content */}
                    <div className="row mt-80">
                        {/* Upper Section - White Background */}
                        <div className="col-12">
                            <div className="text-center mb-5">
                                <p className="mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    At Rankon Technologies, we recognize the importance of maintaining a well-functioning website to drive success in today's digital landscape. As a leading website maintenance company, we are dedicated to delivering exceptional services that you can trust.
                                </p>
                                <p className="mb-0" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    With years of industry experience and a dedicated team of experts, we offer comprehensive website maintenance solutions to ensure your website remains up-to-date, secure, and optimized for peak performance. Get the following solutions and embark on your journey to success:
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Lower Section - Black Background with Red Abstract Lines - All Services Together */}
                    <div className="row mt-5 position-relative" style={{ backgroundColor: '#000', padding: '80px 20px', borderRadius: '8px', overflow: 'hidden' }}>
                        {/* Red Abstract Lines Background */}
                        <div className="position-absolute top-0 end-0" style={{ width: '200px', height: '200px', opacity: '0.3' }}>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 100 Q50 50, 100 100 T200 100" stroke="#E63946" strokeWidth="2" fill="none"/>
                                <path d="M0 150 Q50 100, 100 150 T200 150" stroke="#E63946" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <div className="position-absolute bottom-0 start-0" style={{ width: '150px', height: '150px', opacity: '0.3' }}>
                            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 75 Q37.5 37.5, 75 75 T150 75" stroke="#E63946" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <div className="position-absolute top-0 start-0" style={{ width: '150px', height: '150px', opacity: '0.3' }}>
                            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 75 Q37.5 37.5, 75 75 T150 75" stroke="#E63946" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <div className="position-absolute bottom-0 end-0" style={{ width: '200px', height: '200px', opacity: '0.3' }}>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 100 Q50 50, 100 100 T200 100" stroke="#E63946" strokeWidth="2" fill="none"/>
                                <path d="M0 150 Q50 100, 100 150 T200 150" stroke="#E63946" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>

                        <div className="col-12 position-relative">
                            {/* Heading */}
                            <div className="text-center mb-5">
                                <h2 className="mb-0 fw-normal" style={{ fontSize: '2.75rem', lineHeight: '1.3', fontFamily: 'inherit' }}>
                                    Our <span style={{ color: '#FFC107', fontWeight: '700' }}>Website Maintenance Services</span> Include
                                </h2>
                            </div>

                            {/* All Service Offerings - 6 boxes together */}
                            <div className="row g-4 mt-4">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Security Updates/ Monitoring
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.12 5.13L18.87 8.88L20.71 7.04Z" fill="white"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Content Management
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 8H18V11C18 11.55 17.55 12 17 12S16 11.55 16 11V8H8V11C8 11.55 7.55 12 7 12S6 11.55 6 11V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V10C22 8.9 21.1 8 20 8ZM20 20H4V15H20V20ZM20 13H4V10H20V13Z" fill="white"/>
                                                <circle cx="8.5" cy="16.5" r="1.5" fill="white"/>
                                                <circle cx="15.5" cy="16.5" r="1.5" fill="white"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Bug Fixes and Technical Support
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2" fill="none"/>
                                                <path d="M3 9H21" stroke="black" strokeWidth="2"/>
                                                <rect x="6" y="12" width="4" height="6" fill="black"/>
                                                <rect x="12" y="10" width="4" height="8" fill="black"/>
                                                <circle cx="18" cy="16" r="2" stroke="black" strokeWidth="2" fill="none"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Performance Optimization
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <path d="M10 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V14" stroke="black" strokeWidth="2" fill="none"/>
                                                <path d="M18 2L22 6L18 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                                <path d="M22 6H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Backup and Restore
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFC107' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                                                <rect x="2" y="4" width="14" height="18" rx="2" stroke="black" strokeWidth="2" fill="none"/>
                                                <path d="M2 8H16" stroke="black" strokeWidth="2"/>
                                                <rect x="18" y="6" width="4" height="14" rx="1" stroke="black" strokeWidth="2" fill="none"/>
                                                <path d="M20 8H22" stroke="black" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 text-white" style={{ fontSize: '1rem', lineHeight: '1.5', fontFamily: 'inherit' }}>
                                            Mobile Responsiveness
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checklist Section - White Background */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="text-center">
                                <h2 className="mb-4 fw-normal" style={{ fontSize: '2.75rem', lineHeight: '1.3', fontFamily: 'inherit' }}>
                                    <strong style={{ fontWeight: '700' }}>Website Maintenance</strong> Checklist We Follow
                                </h2>
                                <p className="mb-0" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit', maxWidth: '900px', margin: '0 auto' }}>
                                    A website maintenance checklist is a valuable tool to keep your website running smoothly and effectively. Here's a comprehensive checklist that covers various aspects of website maintenance:
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Website Maintenance Service Cards */}
                    <div className="row mt-80 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <path d="M8 21H16"/>
                                        <path d="M12 17V21"/>
                                        <circle cx="12" cy="10" r="3" fill="none"/>
                                        <path d="M12 7L12 10L14 12" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Update Software
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We regularly update your website's content management system (CMS), plugins, themes, and any other software components to ensure they are running on the latest versions. This helps patch security vulnerabilities and improves performance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <polyline points="3 6 5 6 21 6"/>
                                        <path d="M19 6V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V6"/>
                                        <path d="M8 6V4C8 2.9 8.9 2 10 2H14C15.1 2 16 2.9 16 4V6"/>
                                        <path d="M12 10V16"/>
                                        <path d="M9 13L12 10L15 13"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Backup Your Website
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We create regular backups of your website's files and databases. We store them securely in an off-site location or use a reliable backup service. This ensures you have a copy of your website in case of data loss or a security breach.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M8 10L10 12L12 10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 10L14 12L16 10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 14L10 16L12 14" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 14L14 16L16 14" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="7" cy="10" r="1" fill="black"/>
                                        <circle cx="17" cy="10" r="1" fill="black"/>
                                        <circle cx="7" cy="14" r="1" fill="black"/>
                                        <circle cx="17" cy="14" r="1" fill="black"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Check For Broken Links
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We scan your website for broken links using tools like Xenu Link Sleuth or online link checkers. We fix or remove any broken links to maintain a seamless user experience and improve SEO.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Website Maintenance Service Cards */}
                    <div className="row mt-5 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M4.5 16.5C2.5 15.5 1 13.5 1 11C1 7.5 4 4.5 7.5 4.5C9.5 4.5 11.2 5.5 12.2 7C13.2 5.5 14.9 4.5 16.9 4.5C20.4 4.5 23.4 7.5 23.4 11C23.4 13.5 21.9 15.5 19.9 16.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 2L12 8L16 6" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="10" r="2" fill="black"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Test Website Speed
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We use tools like Google PageSpeed Insights or GTmetrix to analyze your website's loading speed. We optimize images, minimize CSS and JavaScript files, and leverage caching to improve page load times.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <rect x="8" y="10" width="8" height="6" rx="1"/>
                                        <path d="M8 10V8C8 6.9 8.9 6 10 6H14C15.1 6 16 6.9 16 8V10" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Review Security Measures
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We regularly audit your website's security measures. We install an SSL certificate to enable HTTPS, use strong passwords, implement two-factor authentication, and consider a web application firewall to protect against hacking attempts.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <rect x="8" y="2" width="8" height="4" rx="1"/>
                                        <path d="M12 6V12L16 14"/>
                                        <circle cx="12" cy="12" r="9"/>
                                        <path d="M12 8L12 12L16 14" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="12" r="1" fill="black"/>
                                        <path d="M12 6L12 8" strokeLinecap="round"/>
                                        <path d="M12 6L12 8" strokeLinecap="round"/>
                                        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="black" fontWeight="bold">!</text>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Monitor Website Uptime
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We set up website monitoring tools or services to receive notifications if your website goes down. We promptly address any downtime issues to minimize disruptions and maintain a positive user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* More Website Maintenance Service Cards */}
                    <div className="row mt-5 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M14 2H6C5.5 2 5 2.5 5 3V21C5 21.5 5.5 22 6 22H18C18.5 22 19 21.5 19 21V7L14 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2V7H19" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 12L11 14L15 10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Check Contact Forms
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We test and verify that all contact forms on your website are functioning correctly. We ensure that form submissions are received, and notifications are sent to the appropriate recipients.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M14 2H6C5.5 2 5 2.5 5 3V21C5 21.5 5.5 22 6 22H18C18.5 22 19 21.5 19 21V7L14 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2V7H19" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 12H15" strokeLinecap="round"/>
                                        <path d="M9 16H15" strokeLinecap="round"/>
                                        <circle cx="18" cy="4" r="2" fill="none"/>
                                        <path d="M17 3L19 5L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Review And Update Content
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We regularly review your website's content for accuracy, relevance, and freshness. We update outdated information, remove obsolete pages, and publish new content to engage visitors and improve search engine rankings.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <path d="M8 21H16"/>
                                        <path d="M12 17V21"/>
                                        <circle cx="9" cy="19" r="1.5" fill="none"/>
                                        <path d="M9 17.5V19.5" strokeLinecap="round"/>
                                        <path d="M15 19L17 17L19 19" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Review Analytics
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We analyze your website's performance using tools like Google Analytics. We monitor key metrics such as traffic sources, page views, bounce rates, and conversions. Use these insights to identify areas for improvement and make data-driven decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final Website Maintenance Service Cards */}
                    <div className="row mt-5 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <rect x="2" y="4" width="14" height="18" rx="2"/>
                                        <path d="M2 8H16" strokeLinecap="round"/>
                                        <rect x="18" y="6" width="4" height="14" rx="1"/>
                                        <path d="M20 8H22" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Evaluate User Experience
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We continuously assess and enhance the user experience (UX) on your website. We pay attention to navigation, readability, accessibility, and overall design. We gather user feedback and make necessary adjustments to improve usability.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <path d="M2 7H22" strokeLinecap="round"/>
                                        <text x="12" y="13" textAnchor="middle" fontSize="10" fill="black" fontWeight="bold">404</text>
                                        <path d="M4 18L6 20L8 18" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 19L7 19" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Check For 404 Errors
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We scan your website for 404 error pages and broken links. We redirect or fix them to provide a seamless browsing experience and maintain good SEO practices.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="p-4 bg-white border border-dark rounded h-100">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
                                        <path d="M14 2H6C5.5 2 5 2.5 5 3V21C5 21.5 5.5 22 6 22H18C18.5 22 19 21.5 19 21V7L14 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2V7H19" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 12H15" strokeLinecap="round"/>
                                        <path d="M9 16H15" strokeLinecap="round"/>
                                        <path d="M20 4L22 6L20 8" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h3 className="mb-3 fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    Review Website Policies
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    We ensure your website's privacy policy, terms of service, and any other legal documents are up to date and comply with relevant regulations, such as GDPR or CCPA.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Concluding Paragraph */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <p className="text-center mb-0" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit', maxWidth: '900px', margin: '0 auto' }}>
                                By following this website maintenance checklist regularly, we proactively address potential issues, improve security, enhance user experience, and keep your website performing optimally. Remember, a well-maintained website is a valuable asset that contributes to your overall online success.
                            </p>
                        </div>
                    </div>

                    {/* Why is Website Maintenance Crucial Section */}
                    <div className="row mt-80 align-items-start g-5">
                        <div className="col-lg-6 position-sticky" style={{ top: '100px', alignSelf: 'flex-start' }}>
                            <h2 className="mb-4 fw-bold" style={{ fontSize: '3rem', lineHeight: '1.2', fontFamily: 'inherit', color: '#000' }}>
                                Why is<br />
                                <span style={{ fontWeight: '700' }}>Website Maintenance Crucial</span>
                            </h2>
                            <p className="mb-4" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                More than 50% of customers won't do business with a company that has a poorly designed mobile website. 83% believe a website should be as good on mobile through responsive design, and 80% expect sites to load within three seconds for a satisfactory experience.
                            </p>
                            <p className="mb-0" style={{ fontSize: '1.125rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                While the above stats might have given you the gist of the cruciality of website maintenance, there are several other reasons why you must opt for website maintenance services:
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4 p-4 bg-white border border-dark rounded">
                                <h3 className="mb-3 fw-bold text-uppercase" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    SECURITY
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    Cybersecurity threats are constantly evolving, and websites are a prime target for hackers. Regular website maintenance helps keep your site secure by installing the latest security patches, updates, and fixes. It reduces the risk of data breaches, malware infections, and unauthorized access to sensitive information.
                                </p>
                            </div>
                            <div className="mb-4 p-4 bg-white border border-dark rounded">
                                <h3 className="mb-3 fw-bold text-uppercase" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    PERFORMANCE
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    A well-maintained website ensures optimal performance and fast loading times. Regular updates to software, plugins, and themes help improve efficiency, fix bugs, and enhance overall functionality. This translates into a better user experience, increased visitor engagement, and higher conversion rates.
                                </p>
                            </div>
                            <div className="mb-4 p-4 bg-white border border-dark rounded">
                                <h3 className="mb-3 fw-bold text-uppercase" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    USER EXPERIENCE
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    Users expect seamless navigation, easy access to information, and a pleasant browsing experience. By maintaining your website, you can ensure that all links, forms, and interactive features are functioning properly. Regular content updates and design improvements help provide relevant and engaging experiences for your visitors.
                                </p>
                            </div>
                            <div className="p-4 bg-white border border-dark rounded">
                                <h3 className="mb-3 fw-bold text-uppercase" style={{ fontSize: '1.5rem', fontFamily: 'inherit', color: '#000' }}>
                                    SEO
                                </h3>
                                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333', fontFamily: 'inherit' }}>
                                    Search engines favor websites that are regularly updated, have fresh content, and meet certain technical requirements. Website maintenance helps optimize your site for search engine rankings by improving site speed, fixing broken links, updating meta tags, and enhancing overall user experience. This can lead to higher visibility, increased organic traffic, and better search engine rankings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Close container so next section background can span full width */}
                    </div>

                    {/* Benefits Of Hiring Section and below - white background */}
                    <div style={{ backgroundColor: "#ffffff" }}>
                    {/* Benefits Of Hiring Section */}
                    <div className="mt-120">
                        <div className="text-center mb-5">
                            <h2
                                className="mb-4"
                                style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                            >
                                Benefits Of Hiring A Website{" "}
                                <span style={{ fontWeight: "bold" }}>Maintenance Company</span> In India
                            </h2>
                            <p
                                className="mx-auto"
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "1.8",
                                    color: "#333",
                                    maxWidth: "900px",
                                    fontFamily: "inherit",
                                }}
                            >
                                Having a website maintenance plan offers numerous benefits for your business or organization. Here
                                are some key advantages of implementing a website maintenance plan:
                            </p>
                        </div>

                        {/* Enhanced Security */}
                        <div className="row g-5 align-items-center mb-80">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-1/img-1.png"
                                        alt="Enhanced Security Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Enhanced <span style={{ fontWeight: "bold" }}>Security</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    A website maintenance plan includes regular updates to your website&apos;s software, plugins, and
                                    themes, which helps patch security vulnerabilities. By staying current with security measures, you can
                                    reduce the risk of hacking attempts, data breaches, and other cyber threats, safeguarding your website
                                    and protecting sensitive user information.
                                </p>
                            </div>
                        </div>

                        {/* Improved Performance */}
                        <div className="row g-5 align-items-center mb-80 flex-lg-row-reverse">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-3/img-1.png"
                                        alt="Improved Performance Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Improved <span style={{ fontWeight: "bold" }}>Performance</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    Regular maintenance ensures that your website runs smoothly and efficiently. By optimizing code,
                                    cleaning up databases, and optimizing images and files, you can enhance page loading speed and
                                    overall performance. This leads to a better user experience, increased visitor engagement, and higher
                                    conversion rates.
                                </p>
                            </div>
                        </div>

                        {/* Increased Reliability */}
                        <div className="row g-5 align-items-center mb-80">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-1.png"
                                        alt="Increased Reliability Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Increased <span style={{ fontWeight: "bold" }}>Reliability</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    With a maintenance plan in place, you can proactively monitor your website&apos;s uptime and
                                    performance. By promptly addressing any downtime issues or technical glitches, you minimize
                                    disruptions and ensure that your website is available to users around the clock. This reliability builds
                                    trust and credibility among your audience.
                                </p>
                            </div>
                        </div>

                        {/* Better User Experience */}
                        <div className="row g-5 align-items-center mb-80 flex-lg-row-reverse">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-2.png"
                                        alt="Better User Experience Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Better <span style={{ fontWeight: "bold" }}>User Experience</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    A well-maintained website provides a positive and seamless user experience. Regular updates and
                                    improvements to navigation, functionality, and design make it easier for visitors to find what
                                    they&apos;re looking for, interact with your content, and achieve their goals on your site. This
                                    translates into higher satisfaction, longer visit durations, and increased conversion rates.
                                </p>
                            </div>
                        </div>

                        {/* SEO Optimization */}
                        <div className="row g-5 align-items-center mb-80">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-home/home-section-8/img-3.png"
                                        alt="SEO Optimization Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    SEO <span style={{ fontWeight: "bold" }}>Optimization</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    Search engines favor websites that are regularly updated and provide a great user experience. A
                                    website maintenance plan allows you to continually optimize your website for search engine rankings
                                    by updating content, optimizing metadata, improving site speed, and fixing broken links. This helps
                                    drive organic traffic and improve your overall online presence.
                                </p>
                            </div>
                        </div>

                        {/* Cost Savings */}
                        <div className="row g-5 align-items-center mb-80 flex-lg-row-reverse">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-services/img-2.png"
                                        alt="Cost Savings Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Cost <span style={{ fontWeight: "bold" }}>Savings</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    A proactive maintenance plan can save you money in the long run. By regularly monitoring and
                                    addressing issues, you can prevent major breakdowns, downtime, or security breaches that would
                                    require expensive emergency fixes. Additionally, maintaining your website prevents the need for a
                                    complete overhaul or redesign, which can be more costly than ongoing maintenance.
                                </p>
                            </div>
                        </div>

                        {/* Professional Image */}
                        <div className="row g-5 align-items-center mb-80">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-services/img-3.png"
                                        alt="Professional Image Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Professional <span style={{ fontWeight: "bold" }}>Image</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    A well-maintained website reflects positively on your brand&apos;s image and professionalism. It
                                    demonstrates your commitment to quality, attention to detail, and dedication to providing a positive
                                    online experience for your audience. A polished and up-to-date website helps build trust and
                                    credibility with visitors, increasing their confidence in your products, services, or information.
                                </p>
                            </div>
                        </div>

                        {/* Compliance With Regulations */}
                        <div className="row g-5 align-items-center mb-80 flex-lg-row-reverse">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <img
                                        src="/assets/img/digital-agency-img/pages/digital-agency/page-services/img-4.png"
                                        alt="Compliance With Regulations Illustration"
                                        className="img-fluid"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3
                                    className="mb-4"
                                    style={{ fontSize: "40px", lineHeight: "1.3", fontWeight: 400, color: "#000", fontFamily: "inherit" }}
                                >
                                    Compliance With <span style={{ fontWeight: "bold" }}>Regulations</span>
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{ fontSize: "16px", lineHeight: "1.8", color: "#333", fontFamily: "inherit" }}
                                >
                                    Depending on your industry or location, there may be legal requirements and regulations related to
                                    data privacy, accessibility, and online practices. A website maintenance plan ensures that your website
                                    remains compliant with these regulations, such as regularly updating privacy policies, implementing
                                    cookie consent mechanisms, and maintaining accessibility standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* A to Z Section */}
                    <div className="mt-120 py-120" style={{ backgroundColor: "#ffffff" }}>
                        <div className="container">
                            <div className="text-center">
                                <h2
                                    className="mb-4"
                                    style={{
                                        fontSize: "40px",
                                        lineHeight: "1.3",
                                        fontWeight: 400,
                                        color: "#000",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    A to Z of Our{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        Website Maintenance
                                    </span>{" "}
                                    Services in India
                                </h2>
                                <p
                                    className="mx-auto mb-4"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        maxWidth: "1100px",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Website maintenance services encompass a range of tasks and activities
                                    designed to keep a website running smoothly and efficiently. It involves
                                    regular updates, bug fixes, security enhancements, content management,
                                    performance optimization, and more. By availing website maintenance
                                    services, you can ensure that your website remains secure, up-to-date,
                                    and provides an optimal user experience.
                                </p>
                                <p
                                    className="mx-auto mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        maxWidth: "1100px",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Moreover, our website maintenance services are tailored to meet your
                                    specific needs and requirements. We begin by conducting a thorough
                                    analysis of your website to identify areas that need improvement or
                                    attention. Based on the analysis, we create a customized maintenance
                                    plan. Thereafter, our team of experts works diligently to implement
                                    these tasks and ensure that your website remains in top shape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Website Maintenance Services Process */}
                    <div className="py-120">
                        <div className="container">
                            <div className="text-center mb-5">
                                <h2
                                    className="mb-4"
                                    style={{
                                        fontSize: "40px",
                                        lineHeight: "1.3",
                                        fontWeight: 400,
                                        color: "#000",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Our{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        Website Maintenance Services
                                    </span>{" "}
                                    Process
                                </h2>
                                <p
                                    className="mx-auto mb-3"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        maxWidth: "1000px",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    The website maintenance process involves a series of steps to ensure the smooth
                                    functioning, security, and optimal performance of your website.
                                </p>
                                <p
                                    className="mx-auto mb-0"
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "1.8",
                                        color: "#333",
                                        maxWidth: "1000px",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Here&apos;s a general outline of the website maintenance process:
                                </p>
                            </div>

                            <div className="row g-3 text-start">
                                {/* Step 1 */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Establish A Maintenance Schedule
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We determine the frequency of website maintenance based on the
                                                complexity of your website, the volume of content updates, and the
                                                nature of your business. It can be weekly, bi-weekly, monthly, or as
                                                needed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Create a Backup
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Before making any changes or updates, we create a backup of your
                                                website&apos;s files and databases. This serves as a safety net in case
                                                anything goes wrong during the maintenance process.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Update Software
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We start by updating your website&apos;s CMS, plugins, themes, and other
                                                software components to their latest versions. We verify compatibility
                                                with your CMS version and ensure you have adequate backups in place.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Next Steps Row 2 */}
                            <div className="row g-3 text-start mt-0">
                                {/* Test Functionality */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Test Functionality
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                After updating the software, we thoroughly test your website&apos;s functionality. We verify
                                                all links, forms, navigation menus, and interactive elements to ensure they function
                                                correctly. We test different features and user interactions to catch any potential issues.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Check Security Measures */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Check Security Measures
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We review and strengthen your website&apos;s security measures, including making sure your
                                                CMS and plugins have the latest security patches, enabling HTTPS with an SSL certificate,
                                                implementing strong passwords, and considering additional security measures such as a web
                                                application firewall.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Scan for Malware */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Scan for Malware and Vulnerabilities
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We run malware scans and security audits to identify any potential threats or
                                                vulnerabilities. Using security plugins and online scanning tools, we detect malware,
                                                viruses, and suspicious code injections and take immediate action to resolve them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Next Steps Row 3 */}
                            <div className="row g-3 text-start mt-0">
                                {/* Optimize Performance */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Optimize Performance
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We assess your website&apos;s performance and loading speed, optimize images, minify CSS
                                                and JavaScript files, leverage caching, and use a content delivery network (CDN) if
                                                necessary. We test your website&apos;s speed on different devices and browsers to ensure a
                                                smooth experience for all users.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Update Content */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Update Content
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We regularly review and update the content of your website&mdash;adding new blog posts,
                                                updating product or service information, removing outdated content, and refreshing images
                                                or videos&mdash;to keep everything accurate, relevant, and engaging for your target
                                                audience.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Monitor Analytics */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Monitor Analytics
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We regularly analyze your website&apos;s performance using tools like Google Analytics.
                                                Reviewing key metrics such as traffic sources, page views, bounce rates, and conversions
                                                helps identify trends, track user behavior, and gather insights to make data-driven
                                                decisions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Next Steps Row 4 */}
                            <div className="row g-3 text-start mt-0">
                                {/* Test Responsiveness */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Test Responsiveness
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We check your website&apos;s responsiveness across devices, screen sizes, and browsers to
                                                ensure it displays and functions properly on desktops, laptops, tablets, and mobile
                                                devices, paying attention to touch interactions and mobile-specific features.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* User Experience Evaluation */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                User Experience Evaluation
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We continuously assess and improve the user experience (UX) of your website through user
                                                testing, feedback, and design adjustments that enhance navigation, readability,
                                                accessibility, and overall design.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review Legal Compliance */}
                                <div className="col-lg-4">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Review Legal Compliance
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We ensure your website complies with applicable laws and regulations by reviewing your
                                                privacy policy, terms of service, and cookie policy to keep them up to date and aligned
                                                with data protection regulations such as GDPR or CCPA.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Final Steps Row 5 */}
                            <div className="row g-3 text-start mt-0">
                                {/* Monitor Website Uptime */}
                                <div className="col-lg-6">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#f6af1a" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Monitor Website Uptime
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#000",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We utilize website monitoring tools or services to track your website&apos;s uptime and
                                                receive alerts in the event of any downtime, addressing issues promptly to minimize
                                                disruptions and provide a seamless user experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Stay Updated */}
                                <div className="col-lg-6">
                                    <div
                                        className="h-100 p-5 d-flex flex-column justify-content-between"
                                        style={{ backgroundColor: "#000000" }}
                                    >
                                        <div>
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontSize: "28px",
                                                    lineHeight: "1.3",
                                                    fontWeight: 600,
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                Stay Updated
                                            </h3>
                                            <p
                                                className="mb-0"
                                                style={{
                                                    fontSize: "16px",
                                                    lineHeight: "1.8",
                                                    color: "#ffffff",
                                                    fontFamily: "inherit",
                                                }}
                                            >
                                                We stay informed about the latest trends, technologies, and security practices related to
                                                website maintenance and upkeep by following reputable sources and participating in industry
                                                forums and communities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-7 px-3">
                        <p>
                            Let's talk if you have any subject you have.
                            <Link href="/contact" className="fw-bold">
                                Get In Touch
                            </Link>
                        </p>
                    </div>
                    </div>
            </section>
        </>
    );
}
