"use client"
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi'
import { useRouter } from 'next/navigation';



export default function Home() {

    const router = useRouter();

    const redirect = () => {
        const url = `/notes`;
        router.push(url);
    };

    return (


        <div className="bg-custom-color min-h-screen flex flex-col items-center justify-center space-y-4">
            <img src="/add_notes.svg" className="h-[60vh] mx-auto" alt="Add Notes" />

            <div className="items-center">
                <p className=" overflow-hidden whitespace-nowrap text-rose font-medium text-lg flex justify-center">
                    For the Love of Notes: </p>
                <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-rose pr-3  text-text-color font-mono text-xl">
                    Write, Edit, Repeat!</p>
            </div>

            <button onClick={redirect} className="mt-4 text-lg font-medium bg-accent-color text-white border-2 border-accent-color py-2 px-8 rounded-full hover:text-accent-color group relative flex items-center overflow-hidden">
                <span className="absolute left-0 w-full h-0 transition-all bg-custom-color opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease">
                </span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration--300 transform translate-x-full group-hover:translate-x-0 ease">
                    <HiArrowRight className="ml-3" /> </span>
                <span className="relative font-medium">Go to Notes</span>
            </button>

        </div>
    )
}
