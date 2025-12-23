import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";


// Importing Service Pricing Sections
import SeoPricing from "@/components/sections/home/seo-agency/Section9";
import MarketingPricing from "@/components/sections/home/marketing-agency/Section11";
import TaxSoftwarePricing from "@/components/sections/home/tax-software/Section9";
import SupportPricing from "@/components/sections/home/support-desk/Section9";
import StartupPricing from "@/components/sections/home/startup/Section4C";
import InsurancePricing from "@/components/sections/home/insurance-consultancy/Section9";
import ItSolutionsPricing from "@/components/sections/home/it-solutions/Section11";
import FintechPricing from "@/components/sections/home/fintech-solution/Section6";
import AppDevelopmentPricing from "@/components/sections/home/application/Section9";

export default function Home() {
    return (
        <>
            <Layout hideLogo={true}>
                <PageHeader title="Pricing" current_page="Pricing" />

                {/* SEO Agency Pricing */}
                <div className="py-5">
                    <SeoPricing />
                </div>

                {/* Marketing Agency Pricing */}
                <div className="py-5">
                    <MarketingPricing />
                </div>

                {/* Product & Application Development Pricing */}
                <div className="py-5">
                    <AppDevelopmentPricing />
                </div>

                {/* Tax Software Pricing */}
                <div className="py-5">
                    <TaxSoftwarePricing />
                </div>

                {/* IT Solutions Pricing */}
                <div className="py-5">
                    <ItSolutionsPricing />
                </div>

                {/* Startup Solutions Pricing */}
                <div className="py-5">
                    <StartupPricing />
                </div>

                {/* Fintech Solutions Pricing */}
                <div className="py-5">
                    <FintechPricing />
                </div>

                {/* Support Desk Pricing */}
                <div className="py-5">
                    <SupportPricing />
                </div>

                {/* Insurance Consultancy Pricing */}
                <div className="py-5">
                    <InsurancePricing />
                </div>


            </Layout>
        </>
    );
}
