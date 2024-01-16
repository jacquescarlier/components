import { useState } from 'react'
import './App.css'
import LoginForm from './containers/loginForm/LoginForm'
import Feature from './components/feature/Feature'
import Accordion from './components/accordion/Accordion'
import { accordionData, dropdownData, featuresData, logements } from "./data/data"
import Dropdown from './components/dropdown/Dropdown'
import Card from './components/card/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Components</h1>
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
        
    </>
  )
}

export default App
