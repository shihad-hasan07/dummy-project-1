import { Outlet } from "react-router"
import Header from "../Components/Header-Footer/Header"
import Footer from "../Components/Header-Footer/Footer"

const Outline = () => {
    return (
        <>
            <div className="">
                <Header></Header>
            </div>

            <div className="bg-[#f5f5fa] pt-8">
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Outline