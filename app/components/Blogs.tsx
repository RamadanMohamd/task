import Image from "next/image";
import BlogsContainer from "./BlogsContainer";

const Blogs = async () => {

    return (
        <section className="relative w-full"  >
            <Image priority alt="bg" width={3000} height={100} src="/assets/bg.svg" className="absolute -top-44" />
            <BlogsContainer />
        </section>
    )
}

export default Blogs;