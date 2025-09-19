import React from 'react';
import {HashRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import {Layout} from './components/Layout';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contribute from './pages/Contribute';
import UserGuide from './pages/UserGuide';
import Blog from './pages/Blog';
import Mission from './pages/Mission';
import Donate from './pages/Donate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LegalNotice from './pages/LegalNotice';
import UseOfData from './pages/UseOfData';
import NotFound from './pages/NotFound';
import Trust from './pages/Trust';
import Vulnerabilities from './pages/Vulnerabilities';
import Contact from './pages/Contact';
import Trademark from './pages/Trademark';
import Sitemap from './pages/Sitemap';
import ProjectDetail from "./pages/ProjectDetail";
import Rapports from "@/pages/Rapports.tsx";
import ReglementInterieur from "@/pages/ReglementInterieur.tsx";

import { useEffect, useState } from "react"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent"
import ReactGA from "react-ga4";
import MecenatCompetences from "@/pages/MecenatCompetences.tsx";
import DonEnNature from "@/pages/DonEnNature.tsx";
import CodeOfConduct from "@/pages/CodeOfConduct.tsx";

// Composant pour suivre les changements de page
function PageTracker() {
    const location = useLocation()
    const consent = getCookieConsentValue("iouhiuhsdf987-cook")

    useEffect(() => {
        if (consent === "true") {
            ReactGA.send({ hitType: "pageview", page: location.pathname })
        }
    }, [location, consent])

    return null
}

function App() {
    const [hasConsent, setHasConsent] = useState(getCookieConsentValue("iouhiuhsdf987-cook") === "true")

    const handleAccept = () => {
        setHasConsent(true)
        // Initialiser GA après consentement
        ReactGA.initialize('G-T5F73692SC')
    }

    const handleDecline = () => {
        setHasConsent(false)
    }

    return (
        <HashRouter>
            {hasConsent && <PageTracker />}
            <Layout>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contribute" element={<Contribute/>}/>
                    <Route path="/guide" element={<UserGuide/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/mission" element={<Mission/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-of-service" element={<TermsOfService/>}/>
                    <Route path="/legal-notice" element={<LegalNotice/>}/>
                    <Route path="/use-of-data" element={<UseOfData/>}/>
                    <Route path="/trust" element={<Trust/>}/>
                    <Route path="/vulnerabilities" element={<Vulnerabilities/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/trademark" element={<Trademark/>}/>
                    <Route path="/sitemap" element={<Sitemap/>}/>
                    <Route path="/projects/:id" element={<ProjectDetail/>}/>
                    <Route path="/rapports" element={<Rapports />} />
                    <Route path="/reglement-interieur" element={<ReglementInterieur />} />
                    <Route path="/mecenat-competences" element={<MecenatCompetences />} />
                    <Route path="/don-en-nature" element={<DonEnNature />} />
                    <Route path="/code-of-conduct" element={<CodeOfConduct />} />
                    {/* Route 404 - doit être en dernier */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
            <CookieConsent
                location="bottom"
                buttonText="J'accepte"
                declineButtonText="Je refuse"
                cookieName="iouhiuhsdf987-cook"
                style={{ background: "#383737", borderTop: "1px solid #374151" }}
                buttonStyle={{
                    background: "oklch(77.7% 0.152 181.912)",
                    color: "white",
                    fontSize: "14px",
                    padding: "8px 16px",
                    borderRadius: "6px"
                }}
                declineButtonStyle={{
                    background: "transparent",
                    border: "1px solid #4b5563",
                    color: "oklch(77.7% 0.152 181.912)",
                    fontSize: "10px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    marginRight: "12px"
                }}
                expires={150}
                onAccept={handleAccept}
                onDecline={handleDecline}
            >
                Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.{" "}
                <Link
                    to="/privacy-policy"
                    style={{ textDecoration: "underline" }}
                    className="text-teal-400 hover:text-teal-300"
                >
                    En savoir plus
                </Link>
            </CookieConsent>
        </HashRouter>
    );
}

export default App;