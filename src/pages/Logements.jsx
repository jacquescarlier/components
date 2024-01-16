import Carousel from "../components/carousel/carousel";
import { logements } from "../data/data"
import { useParams} from "react-router-dom"

function Logements () {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
   

return(
    <>
    <h2>{logement.title}</h2>
    <Carousel pictures={logement.pictures} title={logement.title} />
    </>
)
}
export default Logements;