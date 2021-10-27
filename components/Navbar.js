import { Button } from 'theme-ui'

import Link from "next/link"
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const NavBar = () => {
    const [onTop, setTop] = useState(false);
    const [page, setPage] = useState(0);
    const path = useRouter().pathname;

    useEffect(() => {
        window.onscroll = () => {
            if(typeof document !== "object"){
                return
            } 
            
            if(window.pageYOffset > 0){
                setTop(true);
                return;
            }
            setTop(false);
        }
    }, [])

    useEffect(() => {
        if(path === "/blogs"){
            setPage(2);
        }else if(path === "/software"){
            setPage(1);
        }else if(path === "/"){
            setPage(0);
        }else{
            setPage(3);
        }
    }, [path])

    let navBarClass = "justify-content-center myNavBar";
    let myNavLinksTextColor = {
        color: "black"
    }
    
    let specialLink = {
        background: "black",
        color: "white"
    }
    
    if(onTop){
        navBarClass = navBarClass + " fixed-top";
    }

    return (
        <div className={navBarClass}>
            <Link href="/" passHref={true}>
                <a className="navlink">
                    <Button className="linksbutton" onClick={() => setPage(0)} style={page === 0 ? specialLink : myNavLinksTextColor} passHref>
                        About
                    </Button>
                </a>
            </Link>

            <Link href="/software" passHref={true}>
                <a className="navlink">
                    <Button className="linksbutton" onClick={() => setPage(1)} style={page === 1 ? specialLink : myNavLinksTextColor}>
                        software
                    </Button>
                </a>
            </Link>

            <Link href="/blogs" passHref={true}>
                <a className="navlink">
                    <Button className="linksbutton" onClick={() => setPage(2)} style={page === 2 ? specialLink : myNavLinksTextColor}>
                        blogs
                    </Button>
                </a>
            </Link>
        </div>
    )
}

export default NavBar;