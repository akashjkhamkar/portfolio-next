import History from './History'
import Currently from './Currently';
import Interests from './Interests';
import Cover from "/components/Cover";

const About = () => {
    return (
        <>
            <Cover/>
            <div className="contentContainer">
                <History/>            
                <Currently/>
                <Interests/>
            </div>
        </>
    )
}

export default About;