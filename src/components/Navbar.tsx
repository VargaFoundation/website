import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import {
    Menu,
    X,
    ChevronDown,
    Database,
    BarChart,
    BookOpen,
    Users,
    Globe,
    Target,
    Github,
    ExternalLink,
    Cloud,
    Server,
    Shield,
    Building,
    Code,
    Heart,
    Brain,
    BookText
} from "lucide-react"
import { LanguageSelector } from "./LanguageSelector"
import { useTranslation } from "react-i18next"
import projects from "@/data/projects";


export function Navbar() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // Regrouper les projets "featured" par catégorie
  let featuredProjects = projects
      .filter((project) => project.featured);
  const featuredProjectsByCategory = featuredProjects // Filtrer uniquement les projets "featured"
      .reduce((acc, project) => {
        if (!acc[project.category]) {
          acc[project.category] = [];
        }

        acc[project.category].push(project);
        return acc;
      }, {});

  const isActive = (path: string) => location.pathname === path

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const closeAllMenus = () => {
    setActiveDropdown(null)
    setIsMobileMenuOpen(false)
  }

  const categoryLabel = (cat: string) => {
    const key = cat.toLowerCase().replace(/\s+/g, '_')
    const tr = t(`pages.projects.categories.${key}`)
    return tr || cat
  }

  return (
    <nav className="relative top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center" onClick={closeAllMenus}>
              <img
                src="/Image1.png"
                alt="varga.foundation logo"
                className="h-16 w-auto block"
                style={{ marginTop: '8px'}}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Projects Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-mono transition-colors ${
                  false // Platform items don't have direct routes yet
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-black'
                }`}
                onMouseEnter={() => handleDropdownEnter('projects')}
                onMouseLeave={handleDropdownLeave}
              >
                <span>{t('nav.projects')}</span>
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                  activeDropdown === 'projects' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[500px] bg-white border border-gray-200 transition-all duration-200 ${
                  activeDropdown === 'projects' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => handleDropdownEnter('projects')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="p-6">
                  {/* Parcourir chaque catégorie */}
                  {Object.entries(featuredProjectsByCategory).map(([category, projects]) => (
                      <div className="mb-6" key={category}>
                        <h4 className="font-mono font-bold text-black mb-4 text-sm flex items-center">
                          {categoryLabel(category)}
                        </h4>

                        <div className="space-y-3 ml-6">
                          {/* Parcourir les projets de cette catégorie */}
                          {projects.map((project) => (
                              <Link
                                  key={project.name}
                                  to={`/projects/${project.name.toLowerCase()}`}
                                  className="group flex items-start p-2 hover:bg-gray-50 transition-colors"
                                  onClick={closeAllMenus}
                              >
                                <div className="flex items-center">
                                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-3">
                                    <project.icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors text-sm">
                                      {project.name}
                                    </div>
                                    <div className="text-xs text-gray-600 font-mono">
                                      {project.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                          ))}
                        </div>
                      </div>
                  ))}

                  {/* Lien vers tous les projets */}
                  <div>
                    <Link
                        to="/projects"
                        className="group flex items-start hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors text-sm">
                          {t('nav.allProjects')}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Product Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-mono transition-colors ${
                  isActive('/features') || isActive('/contribute') || isActive('/testimonials') || isActive('/guide')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-black'
                }`}
                onMouseEnter={() => handleDropdownEnter('product')}
                onMouseLeave={handleDropdownLeave}
              >
                <span>{t('nav.community')}</span>
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                  activeDropdown === 'product' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[400px] bg-white border border-gray-200 transition-all duration-200 ${
                  activeDropdown === 'product' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => handleDropdownEnter('product')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="p-6">
                  <div className="space-y-4">
                    <Link
                      to="/contribute"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                        01
                      </div>
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.contribute')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.community.contributeSubtitle')}</div>
                      </div>
                    </Link>
                    
                    <Link
                      to="/guide"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                        02
                      </div>
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.docs')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.community.guideSubtitle')}</div>
                      </div>
                    </Link>

                    <Link
                        to="/code-of-conduct"
                        className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                        03
                      </div>
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.codeOfConduct')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.community.codeSubtitle')}</div>
                      </div>
                    </Link>

                    {/*<Link*/}
                    {/*  to="/testimonials"*/}
                    {/*  className="group flex items-start p-3 hover:bg-gray-50 transition-colors"*/}
                    {/*  onClick={closeAllMenus}*/}
                    {/*>*/}
                    {/*  <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">*/}
                    {/*    03*/}
                    {/*  </div>*/}
                    {/*  <div>*/}
                    {/*    <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">témoignages</div>*/}
                    {/*    <div className="text-sm text-gray-600 font-mono">retours de la communauté</div>*/}
                    {/*  </div>*/}
                    {/*</Link>*/}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 font-mono">
                        {t('pages.navbar.community.ctaReady')}
                      </div>
                      <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary text-sm font-mono">
                          {t('common.actions.join')}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-mono transition-colors ${
                  isActive('/about') || isActive('/blog') || isActive('/mission')
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-black'
                }`}
                onMouseEnter={() => handleDropdownEnter('company')}
                onMouseLeave={handleDropdownLeave}
              >
                <span>{t('nav.company')}</span>
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Dropdown */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-white border border-gray-200 transition-all duration-200 ${
                  activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => handleDropdownEnter('company')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="p-6">
                  <div className="space-y-4">
                    <Link
                      to="/mission"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <Target className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.mission')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.company.missionSubtitle')}</div>
                      </div>
                    </Link>
                    
                    <Link
                      to="/join"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <Heart className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.join')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.company.joinSubtitle')}</div>
                      </div>
                    </Link>
                    
                    {/*<Link*/}
                    {/*  to="/blog"*/}
                    {/*  className="group flex items-start p-3 hover:bg-gray-50 transition-colors"*/}
                    {/*  onClick={closeAllMenus}*/}
                    {/*>*/}
                    {/*  <Code className="w-4 h-4 text-gray-600 mr-3 mt-1" />*/}
                    {/*  <div>*/}
                    {/*    <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">blog</div>*/}
                    {/*    <div className="text-sm text-gray-600 font-mono">actualités et articles</div>*/}
                    {/*  </div>*/}
                    {/*</Link>*/}

                    <Link
                      to="/about"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <Building className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.about')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.company.aboutSubtitle')}</div>
                      </div>
                    </Link>

                    <Link
                        to="/mecenat-competences"
                        className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <Users className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.mecenatCompetences')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.company.mecenatSubtitle')}</div>
                      </div>
                    </Link>

                    <Link
                        to="/don-en-nature"
                        className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <Code className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">{t('nav.donEnNature')}</div>
                        <div className="text-sm text-gray-600 font-mono">{t('pages.navbar.company.donEnNatureSubtitle')}</div>
                      </div>
                    </Link>

                      <Link
                          to="/rapports"
                          className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                          onClick={closeAllMenus}
                      >
                          <BookText className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                          <div>
                              <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">rapports</div>
                              <div className="text-sm text-gray-600 font-mono">rapports d'activité et financiers annuels</div>
                          </div>
                      </Link>

                  </div>
                </div>
              </div>
            </div>

            {/* Direct links */}
            <Link
              to="/donate"
              className={`px-3 py-2 text-sm font-mono transition-colors ${
                isActive('/donate')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={closeAllMenus}
            >
              {t('nav.donate')}
            </Link>

            <a
              href="https://docs.varga.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-mono transition-colors text-gray-700 hover:text-black"
            >
              {t('nav.docs')}
            </a>

          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageSelector />
            <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary font-mono">
                <Github className="mr-2 h-4 w-4" />
                {t('nav.github')}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-black transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 bg-white">
            {/* Projects Mobile Menu */}
            <div className="px-3 py-2">
              <div className="font-mono font-bold text-black text-sm mb-2">{t('nav.projects')}</div>
              <div className="ml-4 space-y-2">
                {featuredProjects.map((project) => (
                    <Link
                        key={project.name}
                        to={`/projects/${project.name.toLowerCase()}`}
                        className="block text-sm font-mono text-gray-600 hover:text-black"
                    >
                      {project.name}
                    </Link>
                    ))}
                <Link
                    to="/projects"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.allProjects')}
                </Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="font-mono font-bold text-black text-sm mb-2">{t('nav.community')}</div>
              <div className="ml-4 space-y-2">
                <Link
                    to="/contribute"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.contribute')}
                </Link>
                <Link
                    to="/guide"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.docs')}
                </Link>
                <Link
                    to="/code-of-conduct"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.codeOfConduct')}
                </Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="font-mono font-bold text-black text-sm mb-2">{t('nav.company')}</div>
              <div className="ml-4 space-y-2">
                <Link
                    to="/mission"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.mission')}
                </Link>
                <Link
                    to="/join"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.join')}
                </Link>
                <Link
                    to="/about"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.about')}
                </Link>
                <Link
                    to="/mecenat-competences"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.mecenatCompetences')}
                </Link>
                <Link
                    to="/don-en-nature"
                    className="block text-sm font-mono text-gray-600 hover:text-black"
                >
                  {t('nav.donEnNature')}
                </Link>
              </div>
            </div>

            <Link
              to="/donate"
              className={`block px-3 py-2 text-sm font-mono transition-colors ${
                isActive('/donate')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={closeAllMenus}
            >
              {t('nav.donate')}
            </Link>
            <Link
                to="https://docs.varga.foundation" target="_blank"
                className={`block px-3 py-2 text-sm font-mono transition-colors ${
                    isActive('/donate')
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-black'
                }`}
                onClick={closeAllMenus}
            >
              {t('nav.docs')}
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  )
}