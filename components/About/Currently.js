import Image from "next/image";

const Currently = () => {
    return (
        <div className="content">
            <div className="contentdiv">
                <div className="contentText">
                    <h2 className="contentTextHeading">What am I doing these days ?</h2>
                    <div className="contentTextSub">
                        <p>
                            Currently I am in 3rd year of Computer Engineering at Savitribai Phule Pune University.
                        </p>
                        <p>
                            These days I am building few personal projects primarily using MERN stack and learning more about Operating Systems and System Design.
                        </p>
                        <p>
                            Due to pandemic my college is closed , hence currently I am in my hometown in Argaon, Ratnagiri (Kokan), Maharashtra, India.
                        </p>
                        <p>
                            Since I have been here, I got to learn things that I would not have gotten time to learn in regular pre-pandemic life. I read books on subjects such as Psychology, Evolution and Philosophy. Also I learned more about the music theory, painting, video editing. 
                        </p>
                        <p>
                            On top of that, evening walks are very peaceful over here.
                        </p>
                    </div>
                </div>
            </div>
            <div className="contentdiv">
                <div style={{position:"relative", "width": "100%", "height":"fit-content" }}>
                    <Image 
                    layout="responsive"
                    width={500}
                    height={500}
                    className="contentImg" src="/images/road.png" alt="currently"/>
                </div>
            </div>
        </div>
    )
}

export default Currently;