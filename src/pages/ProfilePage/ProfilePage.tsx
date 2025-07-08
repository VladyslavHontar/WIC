import {LoadingSkeleton} from "@/pages/MarketPage/MarketPage.tsx";

export function ProfilePage() {
    return (
        <div className="p-4 pb-20 space-y-6">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10 flex items-center space-x-4">
                    <LoadingSkeleton className="w-16 h-16 rounded-full" />
                    <div className="space-y-2">
                        <LoadingSkeleton className="h-6 w-24" />
                        <LoadingSkeleton className="h-4 w-20" />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-700/50">
                        <LoadingSkeleton className="h-8 w-8 mx-auto mb-2 rounded" />
                        <LoadingSkeleton className="h-4 w-8 mx-auto mb-1" />
                        <LoadingSkeleton className="h-3 w-12 mx-auto" />
                    </div>
                ))}
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 flex items-center space-x-4">
                        <LoadingSkeleton className="w-10 h-10 rounded-xl" />
                        <LoadingSkeleton className="h-5 flex-1" />
                        <LoadingSkeleton className="h-4 w-4" />
                    </div>
                ))}
            </div>
        </div>
    );
}
