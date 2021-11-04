import Image from "next/image"

const Socials = (props) => {
    return (
    <div className={`socials ${props.className}`}>
        <a aria-label="github" href="https://github.com/akashjkhamkar/" target="_blank" rel="noreferrer">
            <Image 
            width="20px"
            height="20px"
            src="/images/github.svg" alt="github" className="socialIcon"/>
        </a>
        <a aria-label="portfolio" href="https://www.linkedin.com/in/akashjkhamkar/" target="_blank" rel="noreferrer">
            <Image 
            width="20px"
            height="20px" 
            src="/images/linkedin.svg" alt="github" className="socialIcon"/>
        </a>
        <a aria-label="email" href="mailto:akash.khamkar40@gmail.com" target="_blank" rel="noreferrer">
            <Image 
            width="20px"
            height="20px"
            src="/images/mail.svg" alt="github" className="socialIcon"/>
        </a>
        <a aria-label="resume" href="/AkashKhamkarResume.pdf">
            <Image 
            width="20px"
            height="20px"
            src="/images/resume.svg" alt="github" className="socialIcon"/>
        </a>
    </div>
    )
}

export default Socials;