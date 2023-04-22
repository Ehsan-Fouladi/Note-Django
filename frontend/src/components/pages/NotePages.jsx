import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {ReactComponent as ArrowLeft} from "../../assets/arrow-left.svg";

const NotePages = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [id])

    let getNote = async () => {
        if (id === 'new') return
        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`/api/notes/update/${id}/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/delete/${id}/`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        navigate('/')
    }

    const handlerSubmit = () => {
        if (id !== 'new' && note.body === '') {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')
    }

    const handleChange = (value) => {
        setNote(note => ({...note, 'body':value}))
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handlerSubmit}/>
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handlerSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => {
                handleChange(e.target.value)
            }} value={note?.body}></textarea>
        </div>
    );
}
export default NotePages;