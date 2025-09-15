import { Outlet } from "react-router"
import Header from "../Components/Header-Footer/Header"
import Footer from "../Components/Header-Footer/Footer"

const Outline = () => {
    return (
        <>
            <div className="">
                <Header></Header>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Outline