function Header({title}){
    return(
        <div className="h-66 inset-shadow-header my-15 mx-5">
            <div className="h-full w-23 mr-5 bg-mbrown-500 float-left"></div>
            <div className="h-full w-7 mr-5 bg-mbrown-500 float-left"></div>
            <div className='pl-56 font-mono font-normal text-5xl/normal'>{title}</div>
        </div>
        
    )
}

export {Header};