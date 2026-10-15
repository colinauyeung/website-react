import ProjectBlock from "./ProjectBlock"
import sustainable from "./assets/project-images/sustainable.png"
import React from "react"
import GradCourses from "./GradCourses.json"

console.log(GradCourses)

const testLinks = [{title: "Demo Video", link: "https://youtu.be/rLPgDWHCytA?si=iAFxQgO1_wZRBb3b"},
    {title: "Test", link:"https://youtu.be/rLPgDWHCytA?si=iAFxQgO1_wZRBb3b"}
]

const myAuthors = ["Tianyi Zhang", "Colin Au Yeung", 
    "Emily Aurelia", "Yuki Onishi", 
    "Neil Chulpongsatorn", 
    "Jiannan Li", "Tony Tang"]

const imgUrl = new URL('./assets/project-images/sustainable.png', import.meta.url).href

function ProjectPage(){
    let res = GradCourses.map((course) =>{
        // console.log(course)
        const imgUrl = new URL(course.imgurl, import.meta.url).href

        return(
            <ProjectBlock 
                title={course.title}
                imagesrc={imgUrl}
                imagepos={course.imgpos}
                topText={course.topText}
                bottomText={course.bottomText}
                links={course.links}
            
            />
        )
    })
    return(
        <div>
            {res}
        </div>
    )

}

export default ProjectPage