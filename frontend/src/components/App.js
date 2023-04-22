import {Component} from "react";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Header from "./header/header";
import NotesListPage from "./pages/NotesListPage";
import NotePages from "./pages/NotePages";

class App extends Component {
    render() {
        return (
            <div className='container dark'>
                <div className='app'>
                    <Header/>
                    <Routes>
                        <Route path='/' exact element={<NotesListPage/>}/>
                        <Route path='/note/:id' element={<NotePages/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App