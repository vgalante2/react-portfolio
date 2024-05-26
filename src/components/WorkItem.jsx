
function WorkItem({item}) {



    return (
        <div className="d-flex flex-column align-items-center justify-content-around p-5">
            <h1 className="text-info">{item.title}</h1>
            <p>{item.info}</p>
            <a className="text-decoration-none text-info" href={item.github} >REPO</a>
        </div>
    )
}

export default WorkItem