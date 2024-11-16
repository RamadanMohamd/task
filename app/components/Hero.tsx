import Image from "next/image";
const Hero = () => {
    return (
        <section className="h-[483px] flex flex-col items-center justify-center gap-10 w-full z-10 bg-transparent px-8" >
            <p className="text-sm font-[500] bg-sbackground px-3 py-1 rounded-2xl text-primary m-0"> Our blog </p>
            <h1 className="text-4xl lg:text-5xl text-primary font-semibold text-center">
                Resources and insights
            </h1>
            <p className="text-lg lg:text-xl text-secondary text-center">The latest industry news, interviews, technologies, and resources. </p>
            <div className="flex items-center gap-1 bg-white  px-2 rounded border w-full md:w-[320px] h-[48px]">
                <Image alt="search" width={20} height={20} src="/assets/search.svg" />
                <input className="w-full outline-none " placeholder="search" />
            </div>
        </section>
    )
}

export default Hero;