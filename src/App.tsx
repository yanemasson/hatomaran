import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

function App() {
    const ProjectListPage = lazy(() => import("./Pages/ProjectListPage/ProjectListPage.tsx"))
    const AnimationListPage = lazy(() => import("./Pages/AnimationListPage/AnimationListPage.tsx"))
    const ProjectPage = lazy(() => import("./Pages/ProjectPage/ProjectPage.tsx"));
    const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage.tsx'))
    const ContactPage = lazy(() => import('./Pages/ContactPage/ContactPage.tsx'))

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <main className="flex-grow px-4 lg:px-48">
                            <Routes>
                                <Route path="/" element={<ProjectListPage />} />
                                <Route path="/animation" element={<AnimationListPage/>}/>
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/project/:title" element={<ProjectPage />}/>
                            </Routes>
                        </main>
                    </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App
