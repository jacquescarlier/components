import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './containers/loginForm/LoginForm'
import Feature from './components/feature/Feature'
import { featuresData } from "./data/data"
import Accordion from './components/accordion/Accordion'
import {accordionData} from "./data/data"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App
