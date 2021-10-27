import Image from "next/image";

const Interests = () => {
    return (
        <div className="content">
            <div className="contentdiv">
                <div style={{position:"relative", "width": "100%", "height":"fit-content" }}>
                    <Image
                        layout="responsive"
                        width={500}
                        height={500}
                        className="contentImg" src="/images/guitar.png" alt="guitars"/>
                </div>
            </div>
            <div className="contentdiv">
                <div className="contentText">
                    <h2 className="contentTextHeading">Other interests </h2>
                    <div className="contentTextSub">
                        <p>
                            I play guitar. I like Rock, Funk and Blues genres. John Frusciante, John Mayer and BB King are my idols.
                        </p>
                        <p>
                            Apart from guitar, I like to do photography whenever I am out. I do painting/ drawing sometimes, it has helped me in my web designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interests;