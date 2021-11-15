const Stack = () => {
    const entries = [
        {
            id: 0,
            name: "Languages",
            list: ["Javascript", "Java", "Python"]
        },
        {
            id: 1,
            name: "Frameworks",
            list: ["React & Redux", "Next.js", "Express", "Node.js", "Flask", "Mongoose (mongodb)"]
        },
        {
            id: 2,
            name: "Other",
            list: ["Linux", "Git", "Material Ui", "Bootstrap", "SEO"]
        },
        {
            id: 3,
            name: "Deployment",
            list: ["Vercel", "Heroku"]
        }
    ]

    return (
        <>
            <h1 className="projectsH1">Technology Stack</h1>
            <div className="techStack">
                <div className="stacks">
                    {entries.map(stack => <Entry key={stack.id} stack={stack}/>)}
                </div>
            </div>
        </>
    )
}

const Entry = ({stack}) => {
    const {list, name} = stack;
    return (
        <div className="stack">
            <h2 className="stackName">{name}</h2>
            <ul className="stackUl">
                {list.map((entry, index) => <li key={index} className="stacklist">{entry}</li>)}
            </ul>
        </div>
    )
}

export default Stack;