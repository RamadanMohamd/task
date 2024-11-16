"use client"
import Image from "next/image";

const LoadMore = ({onLoadMore}: {onLoadMore: ()=> void}) => {

    return (
        <div className="w-full flex items-center justify-center my-8">
            <button onClick={onLoadMore} className="px-5 py-3 flex items-center justify-center gap-2 rounded-lg bg-sbackground text-primary font-[500]"  >
                <Image alt="up" width={12} height={12} src="/assets/arrow-down.svg" />
                Load more
            </button>
        </div>
    )
}

export default LoadMore;