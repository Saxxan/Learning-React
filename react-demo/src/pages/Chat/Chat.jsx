import { useParams } from "react-router-dom"

export default function Chat(props) {
    const parameters = useParams();
    return <h2>Estoy en el chat de {parameters.name}</h2>
}