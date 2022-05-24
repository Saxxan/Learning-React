import { Link, useParams } from "react-router-dom";
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';
import { useState } from "react";

export default function Chat() {
    const [message, setMessage] = useState('');
    const params = useParams();
    const conversationReference = doc(useFirestore(), 'chats', params.id.toLowerCase());

    const { status, data } = useFirestoreDocData(conversationReference);

    const sendMessage = function() {
        if (data?.messages) {
            setDoc(conversationReference, {
                messages: [...data.messages, message]
            });
        }
    }

    return <>
        <Link to="/">Volver</Link>
        <h1>Esta es la vista de chat con {params.id}</h1>
        { data && data.messages.map(message => <p> {message}</p>)}


        <input value={message} onChange={(ev) => setMessage(ev.target.value)}></input>
        <button onClick={sendMessage}>Send!</button>
    </>
}
