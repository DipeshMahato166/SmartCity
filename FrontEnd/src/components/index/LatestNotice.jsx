import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import { LuCalendar } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewArrivals } from "../../redux/slices/noticeSlice";




const LatestNotice = () => {
    const dispatch = useDispatch();

    const { newArrivals, loading } = useSelector((state) => state.notice);


    useEffect(() => {
        dispatch(getNewArrivals());
    }, [dispatch]);


    return (
        <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <p className=" text-[#4a6c8f] font-semibold uppercase tracking-wider mb-1">Latest News</p>
                    <h2 className="font-sora text-2xl sm:text-3xl font-bold text-[#10151c]">Announcements</h2>
                </div>
                <Link to="/notices" className="text-sm font-manrope text-[#4a6c8f] hover:underline flex items-center gap-1">
                    View All <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
            <div className="space-y-5">

                {loading ? (
                    <p className="text-center text-gray-500">
                        Loading...
                    </p>
                ) : (
                    newArrivals.map((notice) => (
                        <div key={notice._id} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                            <div className="w-1 rounded-full bg-[#d9a441] shrink-0" />
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <div className="text-xs bg-blue-100 rounded-full px-2.5 py-1 text-blue-700 border-0">{notice.department?.name}</div>
                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                        <LuCalendar className="w-3 h-3" /> {new Date(
                                            notice.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-[#10151c] mb-1 leading-snug">{notice.title}</h3>
                                <p className="font-manrope text-xs text-slate-500 leading-relaxed">{notice.description.length > 100 ? notice.description.slice(0, 100) + "..." : notice.description}</p>
                            </div>
                        </div>
                    ))
                )
                    }
                    
                    </div>
        </div>
    )
}

export default LatestNotice
