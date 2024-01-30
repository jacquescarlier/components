import Carousel from "../components/carousel/carousel";
import { logements } from "../data/data"
import { useParams, Link} from "react-router-dom"


import "../css/logements.css"
import Slider from "../components/carousel/Slider";

function Logements () {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
   

return(
    <>
    <Link
          to={`/`}
          key={logement.id}
          className="card"
        >Home</Link>
    <h2>Carousel component</h2>
    <h2>{logement.title}</h2>
    <Carousel pictures={logement.pictures} title={logement.title} />
    

    <Slider  logement={logement}/>
    </>
)
}
export default Logements;