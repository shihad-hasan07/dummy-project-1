import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { FaDotCircle } from "react-icons/fa";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error("Error loading data:", error));
    }, []);


    return (
        <div className="container mx-auto">

            <div className="grid  lg:grid-cols-12 gap-10 py-5 px-8">

                <div className="lg:col-span-8">
                    {
                        blogs.map(d => <Card key={d.div} data={d}></Card>)
                    }
                </div>

                <div className="flex drop-shadow-xl flex-col px-5 py-8 h-[900px] items-center bg-white rounded-2xl lg:col-span-4">
                    <div>
                        <img src="/public/person.webp" alt="" className="rounded-full border-4 border-gray-200" />
                    </div>
                    <p className="font-semibold mt-2">@RivaxStudio</p>
                    <p className="text-gray-500 text-sm">We become what we think about!</p>
                    <button className="border-gray-300 border mt-3 text-[15px] rounded-2xl px-5 py-[2px] ">Follow Me</button>
                    <p className="flex w-full items-center font-bold text-lg mt-9 gap-2"><FaDotCircle className="text-yellow-600" />Popular Posts</p>

                    <div className="overflow-hidden relative w-full">
                        <div class="flex animate-scroll whitespace-nowrap">
                            <img src="house.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="cycle.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="cat.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="ship.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="flower.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="guiter.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                            <img src="parasuite.jpg" className="rounded-lg w-28 h-28 object-cover mr-4" />
                        </div>
                    </div>

                    <div className="flex w-full gap-4 mt-4">
                        <div className="bg-gray-200 px-4 py-3 rounded-xl flex flex-col items-center">
                            <p className="font-semibold text-xl">20</p>
                            <p>Aug</p>
                        </div>
                        <div>
                            <p className="font-semibold">Computer Filters Noise To Make You A Better Listener</p>
                            <p className="text-sm font-semibold text-gray-500 mt-2">By Jessica smith</p>
                        </div>
                    </div>

                    <div className="flex w-full gap-4 mt-4">
                        <div className="bg-gray-200 px-4 py-3 rounded-xl flex flex-col items-center">
                            <p className="font-semibold text-xl">06</p>
                            <p>Aug</p>
                        </div>
                        <div>
                            <p className="font-semibold">Ultimate Guide To Planning Your First Overseas Trip</p>
                            <p className="text-sm font-semibold text-gray-500 mt-2">By Mr. kodu</p>
                        </div>
                    </div>

                    <div className="flex w-full gap-4 mt-4">
                        <div className="bg-gray-200 px-4 py-3 rounded-xl flex flex-col items-center">
                            <p className="font-semibold text-xl">16</p>
                            <p>Aug</p>
                        </div>
                        <div>
                            <p className="font-semibold">Exploring New Trends In Home Decor And Interior Design</p>
                            <p className="text-sm font-semibold text-gray-500 mt-2">By Jessica smith</p>
                        </div>
                    </div>

                    <p className="flex w-full items-center font-bold text-lg mt-9 gap-2"><FaDotCircle className="text-yellow-600" />Categories</p>

                    <div className="w-full py-5">
                        <span>#Entertainment &nbsp;</span>
                        <span> #Gadget &nbsp;</span>
                        <span>#Ideas &nbsp;</span>
                        <br />
                        <span>#Lifestyle &nbsp;</span>
                        <span>#Music &nbsp;</span>
                        <span>#Travel &nbsp;</span>
                        <br />
                        <span>#Inspiration</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
