import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Resume() {

    return (
        <section className="d-flex align-items-center flex-column justify-content-center p-5 ">
            <h3>Resume</h3>
            <a className="text-decoration-none resume"href="/resume.pdf download">Click to download</a>
            <div className="d-flex align-items-center justify-content-center p-5 ">
            <FaHtml5 className="icon"/>
            <FaCss3Alt className="icon"/>
            <IoLogoJavascript className="icon"/>
            </div>
        </section>
    )
}

export default Resume