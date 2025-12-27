import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            {/*tax-software section header*/}
            <section className="ai-solutions-section-header position-relative bg-dark-1">

                <div className="position-relative">
                    <div className="container position-relative">
                        <div className="bg-overlay" />
                        <div className="container position-relative z-1 py-120-keep">
                            <div className="row align-items-center">
                                <div className="col-lg-9">
                                    <h2 className="text-white">{title}</h2>
                                </div>
                            </div>
                            <Breadcrumb page={current_page} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
