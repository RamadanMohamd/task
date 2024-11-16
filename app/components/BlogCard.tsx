import Image from "next/image";
import { BlogType } from "@/app/types/blogs";
import moment from "moment";


const BlogCard = ({ cover_image, url, title, description, user, published_at, tags }: BlogType) => {
    return (
        <a href={url} target="_blank" className="w-full h-auto  px-8 py-6  flex flex-col bg-foreground shadow-card" >
            {cover_image ? <Image alt="bg" width={400} height={240} src={cover_image} className="h-[200px] lg:h-[240px] object-contain" /> : <div className="bg-gray-200 w-full h-[200px] lg:h-[240px]">
            </div>}

            <div className="flex flex-col justify-between flex-1 mt-6">

                <div className="flex flex-col gap-2">
                    <div className="text-primary font-semibold capitalize">{tags}</div>
                    <div className="w-full flex items-start">
                        <p className="font-semibold text-xl lg:text-2xl text-card-title truncate" title={title}>{title}</p>
                        <Image alt="arrow" src="assets/arrow-up-right.svg" width={24} height={24} />
                    </div>
                    <p className="text-card-subtitle text-sm lg:text-base">
                        {description}
                    </p>
                </div>
                <div className="mt-8 flex gap-4 items-center justify-center w-full">
                    <Image width={40} height={40} alt="user" src={user.profile_image} className="bg-gray-200 rounded-full shrink-0" />
                    <div className="flex flex-col gap-1 w-full">
                        <p className="text-sm  font-[500]">{user.username}</p>
                        <p className="text-card-subtitle text-sm">{moment(published_at.slice(0, 10)).format('DD MMM YYYY')}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BlogCard;