"use client"
import { BlogType } from "@/app/types/blogs";

import BlogCard from "@/app/components/BlogCard";
import Skeleton from "@/app/components/BlogCardSkeleton";
import LoadMore from "@/app/components/LoadMore";
import NoBlogs from "@/app/components/NoBlogs";
import ErrorComponent from '@/app/components/Error'
import useFetchBlogs from "@/app/hooks/useFetchBlogs";

const BlogsContainer = () => {
    const { blogs, isLoading, loadMore, hasError, refetch

    } = useFetchBlogs();

    if (!isLoading && blogs.length == 0)
        return <NoBlogs />

    if (hasError)
        return <ErrorComponent refetch={refetch} />

    return (
        <div className="flex flex-col gap-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-8 md:px-0 md:w-[90%] lg:w-[85%] mx-auto gap-x-8 gap-y-12">
                {
                    blogs.map((blog: BlogType) => {
                        return (
                            <BlogCard key={blog.id} {...blog} />
                        )
                    })
                }
            </div>

            {isLoading && <Skeleton />}

            <LoadMore onLoadMore={loadMore} />
        </div>
    )
}

export default BlogsContainer;
