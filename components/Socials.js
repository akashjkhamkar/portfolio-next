import Image from "next/image"

const Socials = (props) => {
    return (
    <div className={`socials ${props.className}`}>
        <a href="https://github.com/akashjkhamkar/" target="_blank" rel="noreferrer">
        <Image 
        width="20px"
        height="20px"
        src="/images/github.svg" alt="github" className="socialIcon"/>
        </a>
        <a href="https://www.linkedin.com/in/akash-khamkar-378518191/" target="_blank" rel="noreferrer">
        <Image 
        width="20px"
        height="20px" 
        src="/images/linkedin.svg" alt="github" className="socialIcon"/>
        </a>
        <a href="mailto:akash.khamkar40@gmail.com" target="_blank" rel="noreferrer">
        <Image 
        width="20px"
        height="20px"
        src="/images/mail.svg" alt="github" className="socialIcon"/>
        </a>
        <a href="#">
        <Image 
        width="20px"
        height="20px"
        src="/images/resume.svg" alt="github" className="socialIcon"/>
        </a>
    </div>
    )
}

export default Socials;