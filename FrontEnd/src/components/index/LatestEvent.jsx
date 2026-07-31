import { FaArrowRight, FaCalendar, FaMapPin } from "react-icons/fa";
import { Link } from "react-router-dom"


const events = [
    { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_41f3a50f5b_90a1c82f5b4c0d9f.png", date: "Dec 20", title: "City Winter Festival", location: "Central Park Plaza", tag: "Culture" },
    { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b2f30dd318_626464f840287b18.png", date: "Dec 22", title: "Public Town Hall Meeting", location: "City Council Hall", tag: "Civic" },
    { img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_f76da81214_766fe020285da8da.png", date: "Jan 5", title: "New Year City Marathon", location: "Riverside Boulevard", tag: "Sports" },
];

const LatestEvent = () => {
    return (
        <div>
            <div className="flex items-end justify-between mb-8">
                <div>
                    <p className="font-manrope text-sm text-[#4a6c8f] font-semibold uppercase tracking-wider mb-1">Upcoming</p>
                    <h2 className="font-sora text-2xl sm:text-3xl font-bold text-[#10151c]">Events</h2>
                </div>
                <Link to="/events" className="text-sm font-manrope text-[#4a6c8f] hover:underline flex items-center gap-1">
                    All <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
            <div className="space-y-4">
                {events.map((e) => (
                    <div key={e.title} className="rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                        <div className="relative h-36 overflow-hidden">
                            <img src={e.img_url} alt={e.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />
                            <div className="absolute top-2 left-2">
                                <div className="text-xs bg-brand-gold text-[#10151c] border-0 font-semibold">{e.tag}</div>
                            </div>
                            <div className="absolute bottom-2 left-3 right-3">
                                <p className="font-sora text-sm font-bold text-white leading-tight">{e.title}</p>
                            </div>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between">
                            <span className="text-xs text-slate-500 font-manrope flex items-center gap-1">
                                <FaCalendar className="w-3 h-3" /> {e.date}
                            </span>
                            <span className="text-xs text-slate-500 font-manrope flex items-center gap-1">
                                <FaMapPin className="w-3 h-3" /> {e.location}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestEvent
