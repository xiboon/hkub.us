import { Route, Routes } from 'react-router';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

function App() {
    return (
        <div className="App">
            <Navbar items={['About', 'Projects', 'Contact']}></Navbar>
            <Routes>
                <Route
                    path="/"
                    element={<About description="Hi! I'm a fullstack typescript developer."></About>}
                ></Route>
                <Route path="projects" element={<Projects />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
