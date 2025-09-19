import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import { NewsBanner } from "./NewsBanner"
import { Github, Twitter, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <NewsBanner />
      <Navbar />
      <div className="pt-[64px]">
        {children}
      </div>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-black flex items-center justify-center">
                  <span className="text-white font-mono font-bold text-xs">O</span>
                </div>
                <span className="text-black font-mono font-bold text-lg">
                  varga.foundation
                </span>
              </div>
              <p className="text-gray-600 text-base mb-8 max-w-md font-mono">
                solutions opensource Data & IA.
                <br />
                accessible. éthique. communautaire.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/vargafoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://twitter.com/vargafoundation"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="mailto:hello@varga.foundation"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-mono font-bold text-black mb-6">projets</h4>
              <ul className="space-y-4">
                <li><Link to="/projects" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">nos projets</Link></li>
                <li><Link to="/contribute" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">contribuer</Link></li>
                {/*<li><Link to="/testimonials" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('nav.examples')}</Link></li>*/}
                <li><Link to="/guide" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">quickstart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-black mb-6">{t('footer.company')}</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('nav.about')}</Link></li>
                {/*<li><Link to="/blog" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('nav.blog')}</Link></li>*/}
                <li><Link to="/join" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">rejoindre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-black mb-6">{t('footer.trustSecurity')}</h4>
              <ul className="space-y-4">
                <li><Link to="/trust" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.trust')}</Link></li>
                <li><Link to="/vulnerabilities" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.vulnerabilities')}</Link></li>
                <li><Link to="/compliance" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">certifications & compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-black mb-6">communauté</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.contactUs')}</Link></li>
                <li><a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">discord</a></li>
                <li><Link to="/code-of-conduct" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">code de conduite</Link></li>

              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-black mb-6">{t('footer.legal')}</h4>
              <ul className="space-y-4">
                <li><Link to="/terms-of-service" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.terms')}</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.privacy')}</Link></li>
                <li><Link to="/legal-notice" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.legalNotice')}</Link></li>
                <li><Link to="/trademark" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">{t('footer.trademark')}</Link></li>
                <li><Link to="/rapports" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">rapports</Link></li>
                <li><Link to="/reglement-interieur" className="text-gray-600 hover:text-black transition-colors font-mono text-sm">règlement intérieur</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 font-mono text-sm">
              &copy; {new Date().getFullYear()} Varga Foundation
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/sitemap" className="text-gray-500 hover:text-black transition-colors font-mono text-sm">
                sitemap
              </Link>
              <span className="text-gray-500 font-mono text-sm">made in france</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}