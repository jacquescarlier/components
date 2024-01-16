import Accordion from "../components/accordion/Accordion";
import Card from "../components/card/card";
import Card2 from "../components/card/card2";
import Dropdown from "../components/dropdown/Dropdown";
import Feature from "../components/feature/Feature";
import LoginForm from "../containers/loginForm/LoginForm";
import { accordionData, dropdownData, featuresData, logements } from "../data/data"

function Home () {

    return (
        <>
            <h1>Components</h1>
            <a className="github" href="https://github.com/jacquescarlier/components" target="_blank" rel="noopener">Github link</a>
            <div className="trait"></div>
            <h2> login form</h2>
            <LoginForm />
            <div className="trait"></div>
            <h2>features component</h2>
            <section className="features">
                {featuresData.map((feature) => (
                    <Feature
                        key={feature.title}
                        title={feature.title}
                        content={feature.content}
                        imageSrc={feature.imageSrc}
                        altText={feature.altText}
                    />
                ))}
            </section >
            <div className="trait"></div>
            <h2>Accordion component</h2>
            <section className="accordionSection">
                <div className="accordionBody">
                    {accordionData.map(({ title, content, id }) => (
                        <Accordion key={id} title={title} content={content} />
                    ))}
                </div>
            </section>
            <div className="trait"></div>
            <h2>Dropdown component</h2>
            <Dropdown dropdownData={dropdownData} />
            <div className="trait"></div>
            <h2>Card component</h2>
            <Card logements={logements} />
            <div className="trait"></div>
            <h2>Card component with Link</h2>
            <Card2 logements={logements} />
        </>
    )
}
export default Home;