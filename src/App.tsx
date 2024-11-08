import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectListPage from "./Pages/ProjectListPage/ProjectListPage.tsx";
import AboutPage from './Pages/AboutPage/AboutPage.tsx'
import ContactPage from './Pages/ContactPage/ContactPage.tsx'
import ProjectPage from "./Pages/ProjectPage/ProjectPage.tsx";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow px-4 lg:px-48">
                    <Routes>
                        <Route path="/" element={<ProjectListPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/project/:title" element={<ProjectPage />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App
