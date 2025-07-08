
export function LoadingSkeleton({ className }: { className?: string }) {
    return (
        <div className={`bg-gray-700 animate-pulse rounded-lg ${className}`} />
    );
}

// Sample Market Page Component
export function MarketPage() {
    return (
        <div className="p-4 pb-20 space-y-6">
            {/* Categories */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
                {['All', 'Electronics', 'Audio', 'Gaming', 'Accessories'].map((category) => (
                    <LoadingSkeleton key={category} className="h-8 w-20 rounded-full flex-shrink-0" />
                ))}
            </div>

            {/* Featured Banner */}
            <LoadingSkeleton className="h-32 w-full rounded-3xl" />

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 space-y-3">
                        <LoadingSkeleton className="h-16 w-16 rounded-lg mx-auto" />
                        <LoadingSkeleton className="h-4 w-full" />
                        <LoadingSkeleton className="h-3 w-2/3" />
                        <div className="flex items-center justify-between">
                            <LoadingSkeleton className="h-4 w-16" />
                            <LoadingSkeleton className="h-8 w-8 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
