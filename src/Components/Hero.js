import React from "react";

export default function Hero() {
    return (
        <section className="hero-section relative grid place-items-center ">
            <article className="mt-80 w-10/12 lg:w-11/12 lg:mt-20 lg:pb-40">
                <div className="flex items-center">
                    <p className="hero--new  tracking-wide uppercase text-m font-bold mr-4 px-3 py-1 rounded-full">New</p>

                    <p className="hero--title uppercase tracking-[0.2em] text-m">Monograph dashboard</p>
                </div>

                <h1 className="hero--header  mt-6 text-4xl font-bold uppercase lg:w-96 lg:text-5xl 2xl:text-8xl 2xl:w-[46rem]">Powerful insights into your team</h1>

                <p className="hero--bottom-text text-lg mt-6 lg:w-4/12 lg:text-xl lg:w-[320px] 2xl:text-2xl 2xl:w-[360px]">Project planning and time tracking for agile teams</p>
            
                <div className="flex items-center mt-8 lg:mt-16">
                    <button className="hero--bottom-button    cursor-pointer rounded font-bold tracking-widest px-3.5 py-2.5  ease-in duration-300 uppercase text-sm lg:px-6 lg:py-2.5 lg:text-base 2xl:text-xl">Schedule a demo</button>
                    <p className="hero--bottom-paragraph  text-lg ml-4 uppercase lg:tracking-[0.25em] lg:ml-12 2xl:text-xl">To see a preview</p>
                </div>

            </article>

        </section>
    )
}