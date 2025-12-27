"use client";

export default function StatsTicker() {
    return (
        <div className="mt-0 mb-4">
            <style jsx>{`
                .ticker {
                    width: 100vw;
                    overflow: hidden;
                    background: #000;
                    color: #fff;
                    padding: 16px 0;
                    position: relative;
                    left: 50%;
                    margin-left: -50vw;
                    display: block;
                }
                .ticker__track {
                    display: inline-block;
                    white-space: nowrap;
                    will-change: transform;
                    animation: tickerMove 60s linear infinite;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                    font-size: 26px;
                    font-weight: 600;
                }
                .ticker__item {
                    display: inline-block;
                }
                .ticker__item + .ticker__item::before {
                    content: "*";
                    display: inline-block;
                    color: #fff;
                    opacity: 0.95;
                    margin: 0 36px;
                    vertical-align: middle;
                    line-height: 1;
                    transform: translateY(0.12em);
                }
                @keyframes tickerMove {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
            <div className="ticker" aria-label="key-highlights">
                <div className="ticker__track">
                    {/* First Half */}
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>

                    {/* Second Half (Identical copy) */}
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                    <span className="ticker__item">1000+ Projects</span>
                    <span className="ticker__item">20+ Team members</span>
                    <span className="ticker__item">Top Rated plus on Upwork</span>
                    <span className="ticker__item">world wide clients</span>
                </div>
            </div>
        </div>
    );
}


