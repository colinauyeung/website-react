import xbutton2 from "../assets/sprites/xbutton2.png"
import maxbutton from "../assets/sprites/maxbutton.png"
import minbutton from "../assets/sprites/minbutton.png"
import SideBar from "./sidebar"

function TitleBar({Title}){
    let text = "colin.auyeung/" + Title
    return(
        <div className="h-40 flex">

            <div className="font-micro bg-mbrown-500 text-mwhite-500 text-5xl/[40px] pl-10 grow overflow-hidden">
                {text}
            </div>
            <img
                src={minbutton}
                className="ml-5"
            />
            <img
                src={maxbutton}
                className="ml-5"
            />
           <img
                src={xbutton2}
                className="ml-5"
            />
        </div>
    )
}


function PageCore({Contents, Title}){


    return(
        <div
            id="layout"
            className="flex w-screen items-start justify-center"
        >

            <SideBar/>
            <div
                id="main-wrapper"
                className="relative w-755"
            
            >
                <div
                    id="content-wrapper"
                    className=""
                >

                    <div
                        id="mainbox"
                        className="relative p-5 top-32 overflow-hidden bg-mwhite-500 border-6 border-solid border-mbrown-500 h-min-[90vh]"
                    
                    >

                        <TitleBar Title={Title}/>
                        {Contents}

                    </div>



                </div>
    



            </div>
            <aside className="w-150 h-375 ml-16"></aside>



        </div>



    )

}

export default PageCore