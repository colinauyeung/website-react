import { Link } from "react-router-dom";
import NavBox from "./NavBox";
import avatar from "../assets/sprites/avatar2.png"
import NavItem from "./NavItem";

function SideBar({Pages, Links}){

    let avatarbox = <>
        <img 
            className="w-113 mx-auto mb-4"
            src={avatar}
        />
    </>


    console.log(Links)

    let linkbox = Links.map((link) => {
        return(
            <a href={link.Address}>
                <NavItem title={link.Title}/>
            </a>

        )


    })


    let menubox = Pages.map((page) => {
        return(
            <Link to={page.Address}>
                <NavItem title={page.Title}/>
            </Link>
        )


    })


    return(
        <div
            id="sidebar"
            className="w-155 sticky top-144 mx-16 hidden md:block"
        >
            <div className="text-left py-14">
                <NavBox
                    title={"avatar"}
                    content={avatarbox}
                
                />
                <div className="h-16"></div>
                <NavBox
                    title={"menu"}
                    content={menubox}
                />
                <div className="h-16"></div>
                <NavBox
                    title={"links"}
                    content={linkbox}
                />
                

            </div>




        </div>

    )


}

export default SideBar