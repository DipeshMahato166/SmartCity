import Card from "../components/index/service/Card";
import { GoReport } from "react-icons/go";
import { PiNoteBold } from "react-icons/pi";
import { SiEventstore } from "react-icons/si";
import { MdImportContacts } from "react-icons/md";


const ServicePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-14 md:pt-16">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-[#25292C] to-[#1e3644] py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Smart City Services
                    </h1>

                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-blue-100/90 max-w-2xl font-light leading-relaxed">
                        Access government services digitally from anywhere without
                        visiting the office. Fast, transparent, and citizen-friendly.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                        Available Services
                    </h2>
                    <p className="mt-1 text-sm sm:text-base text-gray-500">
                        Choose a service to continue.
                    </p>
                </div>

                {/* Responsive Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <Card
                        props={{
                            icon: <GoReport className="h-6 w-6 text-white" />,
                            title: "Complaint Registration",
                            content:
                                "Submit, track, and resolve civic complaints with a transparent workflow and real-time status updates.",
                            link: "/complaint"
                        }}
                    />

                    <Card
                        props={{
                            icon: <PiNoteBold className="h-6 w-6 text-white" />,
                            title: "Public Notices",
                            content:
                                "Stay informed about water supply, electricity, road maintenance, government announcements, and infrastructure projects.",
                            link: "/notices"
                        }}
                    />

                    <Card
                        props={{
                            icon: <PiNoteBold className="h-6 w-6 text-white" />,
                            title: "Government Services",
                            content:
                                "One portal for all your government services. No need to search or visit different government websites.",
                            link: "/government"
                        }}
                    />
                    <Card
                        props={{
                            icon: <MdImportContacts  className="h-6 w-6 text-white" />,
                            title: "Public Events",
                            content:
                                "Explore local events, participate in civic initiatives, and stay connected with what's happening in your city.",
                            link: "/government"
                        }}
                    />
                    <Card
                        props={{
                            icon: <SiEventstore className="h-6 w-6 text-white" />,
                            title: "Emergency Hotlines",
                            content:
                                "Access essential emergency contacts for police, ambulance, fire brigade, hospitals, and disaster response services in one place",
                            link: "/emergency"
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default ServicePage;