
import {
    FaIdCard,
    FaCar,
    FaPassport,
    FaFileInvoiceDollar,
    FaBriefcase,
    FaHeartbeat,
} from "react-icons/fa";

import Card from "../components/index/government/Card";

const services = [
    {
        id: 1,
        title: "National Identity Card",
        description:
            "Apply for a National Identity Card or check your application status online.",
        category: "Citizen Services",
        icon: <FaIdCard />,
        link: "https://donidcr.gov.np/",
    },
    {
        id: 2,
        title: "Driving License",
        description:
            "Apply for a new driving license, renew your license, or check application status.",
        category: "Transport",
        icon: <FaCar />,
        link: "https://dotm.gov.np/",
    },
    {
        id: 3,
        title: "Passport",
        description:
            "Apply for a passport and access passport-related online services.",
        category: "Citizen Services",
        icon: <FaPassport />,
        link: "https://nepalpassport.gov.np/",
    },
    {
        id: 4,
        title: "PAN Registration",
        description:
            "Register for a Permanent Account Number (PAN) and tax-related services.",
        category: "Finance",
        icon: <FaFileInvoiceDollar />,
        link: "https://ird.gov.np/",
    },
    {
        id: 5,
        title: "Company Registration",
        description:
            "Register a new business or manage company registration services.",
        category: "Business",
        icon: <FaBriefcase />,
        link: "https://ocr.gov.np/",
    },
    {
        id: 6,
        title: "Health Insurance",
        description:
            "Access government health insurance information and enrollment services.",
        category: "Health",
        icon: <FaHeartbeat />,
        link: "https://hib.gov.np/",
    },

];

const GovernmentPage = () => {
    return (
        <section className="min-h-screen bg-gray-50 pt-16">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-[#25292C] to-[#1e3644] pt-28 pb-18">
                <div className="max-w-7xl mx-auto px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Government Services
                    </h1>

                    <p className="mt-4 max-w-2xl text-blue-100 text-lg">
                        Access essential government services from one place. No need to
                        browse multiple websites simply choose the service you need and
                        continue to the official government portal.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-3xl font-bold text-black tracking-tight">
                        Available Government Services
                    </h2>
                    <p className="mt-1 sm:text-base text-gray-500">
                        Choose a service to continue.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            category={service.category}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernmentPage;