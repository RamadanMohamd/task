
const BlogCardSkeleton = () => {

    const shimmer =
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

    return (
        <div
            className={`${shimmer} relative overflow-hidden flex flex-col bg-gray-100 px-8 py-6 shadow-card`}
        >
            <div className="h-[200px] lg:h-[240px] bg-gray-200"></div>
            <div className="flex flex-col mt-6 gap-2">
                <div className="bg-gray-200 h-6  w-6/12"></div>
                <div className="bg-gray-200 h-6  w-full"></div>
                <div className="bg-gray-200 h-12 w-full"></div>

            </div>
            <div className="mt-8 flex gap-2 items-center justify-center w-full">
                <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="bg-gray-200 h-3 w-3/12"></div>
                    <div className="bg-gray-200 h-3 w-3/12"></div>
                </div>
            </div>
        </div>
    );
}

const Skeleton = () => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-8 md:px-0 md:w-[90%] lg:w-[85%] mx-auto gap-x-8 gap-y-12">
            {
                Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
            }
        </div>
    )
}

export default Skeleton;