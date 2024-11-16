const Error = ({refetch}: {refetch: ()=> void}) => {
    return (
        <section className="relative mx-auto h-72 w-[85%] flex flex-col items-center justify-center gap-10 bg-foreground shadow-card" >
            <h2 className="text-red-400 text-2xl text-center">There is something went wrong!</h2>
            <button onClick={refetch} className="px-5 py-3 flex items-center justify-center gap-2 rounded-lg bg-sbackground text-primary font-[500]"  >
                Try again
            </button>
        </section>
    )
}
export default Error;