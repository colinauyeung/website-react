import GradCourses from "../data/GradCourses.json"
import ProjectGroup from '../components/ProjectGroup.jsx'

import PageCore from '../components/PageCore.jsx'
import NavItem from "../components/NavItem.jsx"
import NavBox from "../components/NavBox.jsx"

let contents = <ProjectGroup 
      Projects={GradCourses}
      Title={"Grad Courses"}
    />

function Projects(){
    return(
    <>
    <PageCore Contents={contents} Title={"projects"}/>
    </>

    )

}

export default Projects