import Image from "next/image"
import Socials from "./Socials";

const Cover = () => {
    const readMore = () => {
        if(typeof document !== "object"){
            return;
        }

        document.querySelector(".downarrowdiv").scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }

    return (
        <div className="cover">
            <div className="coverTop">
                <div className="covertext">
                    <h1 className="title">Akash Khamkar</h1>
                    <div className="subtitle">I am a software developer, a hobbyist photographer, currently a Junior at SPPU studying Computer Engineering and an aspiring guitar god. </div>

                    <Socials className="socialsCover" />
                </div>

                <div className="coverimages">
                    <div style={{position:"relative", "width": "100%", "height":"100%" }}>
                        <Image
                        layout="responsive"
                        priority={true}
                        width={1}
                        height={1}
                        className="coverimg" src="/images/insta.png" alt="cover"/>
                    </div>
                </div>
            </div>

            <div onClick={() => readMore()} className="downarrowdiv">
                <Image
                width={25}
                height={25}
                alt="click here" className="downarrow" src="/images/downarrow.svg"/>
            </div>
        </div>
    )
}

export default Cover;
