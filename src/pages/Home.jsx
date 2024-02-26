import Accordion from "../components/accordion/Accordion";
import Card from "../components/card/card";
import Card2 from "../components/card/card2";
import ModalComponent from "../components/card/card4";
import Counter from "../components/counter/Counter";
import Cube3D from "../components/cube3D/Cube3D";
import Dropdown from "../components/dropdown/Dropdown";
import Feature from "../components/feature/Feature";
import LoginForm from "../containers/loginForm/LoginForm";
import { accordionData, dropdownData, featuresData, logements } from "../data/data"
import PalindromeChecker from "../fonction/palindrome/Palindrome";
import TodoList from "../fonction/todolist/ToDoList";
import TodoList2 from "../fonction/todolist/Todolist2";

function Home() {

    return (
        <>
            <h1>Components</h1>
            <a className="github" href="https://github.com/jacquescarlier/components" target="_blank" rel="noopener">Github link</a>
            <div className="trait"></div>
            <Counter />
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
            <div className="trait"></div>
            <PalindromeChecker />
            <div className="trait"></div>
            <TodoList />
            <div className="trait"></div>
            <TodoList2 />
            <div className="trait"></div>
            <Cube3D />
            <div className="trait"></div>
            <ModalComponent logements={logements} />

        </>
    )
}
export default Home;