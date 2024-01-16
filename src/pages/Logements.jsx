import Carousel from "../components/carousel/carousel";
import { logements } from "../data/data"
import { useParams} from "react-router-dom"
import "../css/logements.css"

function Logements () {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
   

return(
    <>
    <span>Carousel component</span>
    <h2>{logement.title}</h2>
    <Carousel pictures={logement.pictures} title={logement.title} />
    </>
)
}
export default Logements;