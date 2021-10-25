import Image from "next/image";

const History = () => {
    return (
        <div className="content">
            <div className="contentdiv">
                <div style={{position:"relative", "width": "100%", "height":"fit-content" }}>
                    <Image
                        layout="responsive"
                        width={500}
                        height={500}
                        className="contentImg" src="/images/about1.jpeg" alt=""/>
                </div>
            </div>
            <div className="contentdiv">
                <div className="contentText">
                    <h2 className="contentTextHeading">About me</h2>
                    <div className="contentTextSub">
                        <p>
                            I liked working with the Computers since I was a kid. I started with adding mods to the games that I used to play, to installing custom ROMS on the outdated phones in the house.
                        </p>
                        <p>
                            I first saw python shell when I was 13 years old , coding fascinated me.
                            Later on I taught myself java and basic web development. After that I started learning the MERN stack. JS became my primary language for development. 
                        </p>
                        <p>
                            I like to build stuff that I can actually use in my day to day life, 
                        </p>
                        <p className="softwareinvite">
                            You can read more about my technology stack on the software page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;