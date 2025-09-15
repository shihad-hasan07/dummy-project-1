import { useEffect, useState } from "react";
import Card from "../Components/Card";

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

            <div className="grid lg:grid-cols-12 gap-10 py-5 px-8">
                <div className="col-span-8">
                    {
                        blogs.map(d=><Card key={d.div} data={d}></Card>)
                    }
                </div>

                <div className="col-span-4 border h-lvh">
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
