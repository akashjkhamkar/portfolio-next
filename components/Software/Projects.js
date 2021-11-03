import Image from "next/image"

const songslikethatimg = "/images/songslikethat.png";
const gitletimg = "/images/gitlet.png";
const notearcimg = "/images/notearc.png";
const bookreview = "/images/bookreview.png";
const byowimg = "/images/byow.png";
const tourpaperimg = "/images/tourpaper.png";
const flackimg = "/images/flack.png";

const Projects = () => {
    const data = [
        {
            id: 0,
            heading: "Songs-like-that",
            sub: "A songs recommendations web app, which generates playlist based on given combinations of artists and songs.",
            img: songslikethatimg,
            link: "https://songs-like-that.vercel.app/",
            linktext: "live version"
        },
        {
            id: 1,
            heading: "Gitlet - a lightweight java implementation of git.",
            sub: "Learning how to design the system, choosing the right data structures and algorithms while learning the inner workings of the git was a valuable learning experience.",
            img: gitletimg,
            link: "https://github.com/akashjkhamkar/Gitlet",
            linktext: "github"
        },
        {
            id: 2,
            heading: "Flack - A chat app with temporary chatrooms",
            sub: "One of my first fullstack apps. Made with flask and vanilla js.",
            img: flackimg,
            link: "https://github.com/akashjkhamkar/NoteArc",
            linktext: "github"
        },
        {
            id: 3,
            heading: "NoteArc - a minimalistic guitar tuner android app",
            sub: "For audio processing, i used TarsosDSP, and material ui for theming.",
            img: notearcimg,
            link: "https://github.com/akashjkhamkar/NoteArc",
            linktext: "github"
        },
        {
            id: 4,
            heading: "Book review website",
            sub: "A site made for reviewing books. It is one of the first fullstack apps that I have made. It was done as submission for harvards cs50. I used flask for backend , sql for storing all the books and user reviews and comments. Frontend was made using vanilla js and some bootstrap",
            img: bookreview,
            link: "https://bookd-project1.herokuapp.com/",
            linktext: "live version"
        },
        {
            id: 5,
            heading: "Byow - a game built in java , with pseudo random world/level generation",
            sub: "This was a collaborative project, done as a final project for Berkeley's 61B taught by Josh Hug. The main aim of this project was to design a pseudo random world generation algorithm , put it in the context of a playable game and using software engineering principles for managing complexity that comes with working on large projects. World generation is done by binary space partitioning.",
            img: byowimg,
            link: "https://github.com/Red-Hot-Chili-Coders/byow",
            linktext: "github"
        },
        {
            id: 6,
            heading: "TourPaper (npm package)- a command line tool, which downloads the wallpapers of given arguments, from unsplash",
            sub: "Its hard to choose one wallpaper when you visit the wallpaper websites. its better to leave that job on your program.",
            img: tourpaperimg,
            link: "https://www.npmjs.com/package/tourpaper",
            linktext: "npm"
        }
    ]

    return (
        <div className="projects">
            <h1 className="projectsH1">Projects</h1>
            {data.map(entry => {
                return <Entry key={entry.id} entry={entry}/>
            })}
        </div>
    )
}

const Entry = ({entry}) => {
    const {heading, sub, link, linktext, img} = entry;
    return (
        <div className="content project">
            <div className="contentdiv">
                <div className="contentText">
                    <h2 className="contentTextHeading projectHeading">{heading}</h2>
                    <div className="contentTextSub">
                        <p>
                            {sub}
                        </p>
                        <p className="softwareinvite">
                            <a href={link} target="_blank" rel="noreferrer">{linktext}</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="contentdiv">
                <div className="unset-img">
                    <Image
                    layout="fill"
                    className="contentImg custom-img" src={img} alt={heading}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;