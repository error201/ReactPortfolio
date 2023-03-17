import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar"
import About from "../src/components/About"
import Portfolio from "../src/components/Portfolio"
import Contact from "../src/components/Contact"
import Resume from "../src/components/Resume"
import Footer from "../src/components/Footer"


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={< About />}></Route>
                    <Route path="/about" element={< About />}></Route>
                    <Route path="/portfolio" element={< Portfolio />}></Route>
                    <Route path="/contact" element={< Contact />}></Route>
                    <Route path="/resume" element={< Resume />}></Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}


export default App;
