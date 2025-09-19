import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Database, BarChart, BookOpen, Users, Globe, Target, Github, ExternalLink, Cloud, Server, Shield, Building, Code, Heart, Brain } from "lucide-react"
import { LanguageSelector } from "./LanguageSelector"
import { useTranslation } from "react-i18next"
import projects from "@/data/projects";


export function Navbar() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // Regrouper les projets "featured" par catégorie
  const featuredProjectsByCategory = projects
      .filter((project) => project.featured) // Filtrer uniquement les projets "featured"
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

  return (
    <nav className="relative top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3" onClick={closeAllMenus}>
              <div className="w-6 h-6 bg-black flex items-center justify-center">
                <span className="text-white font-mono font-bold text-xs">V</span>
              </div>
              <span className="text-black font-mono font-bold text-lg">
                Varga Foundation
              </span>
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
                <span>projets</span>
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
                          {category}
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
                          tous les projets
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
                <span>communauté</span>
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
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">contribuer</div>
                        <div className="text-sm text-gray-600 font-mono">comment participer</div>
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
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">documentation</div>
                        <div className="text-sm text-gray-600 font-mono">guides et tutoriels</div>
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
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">code de conduite</div>
                        <div className="text-sm text-gray-600 font-mono">règles de la communauté</div>
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
                        prêt à contribuer ?
                      </div>
                      <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary text-sm font-mono">
                          rejoindre
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
                <span>fondation</span>
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
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">mission</div>
                        <div className="text-sm text-gray-600 font-mono">notre vision et objectifs</div>
                      </div>
                    </Link>
                    
                    <Link
                      to="/join"
                      className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                      onClick={closeAllMenus}
                    >
                      <Heart className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">rejoindre</div>
                        <div className="text-sm text-gray-600 font-mono">devenir membre</div>
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
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">à propos</div>
                        <div className="text-sm text-gray-600 font-mono">notre histoire</div>
                      </div>
                    </Link>

                    <Link
                        to="/mecenat-competences"
                        className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <Users className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">mécénat de compétences</div>
                        <div className="text-sm text-gray-600 font-mono">partenariats entreprises</div>
                      </div>
                    </Link>

                    <Link
                        to="/don-en-nature"
                        className="group flex items-start p-3 hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                    >
                      <Code className="w-4 h-4 text-gray-600 mr-3 mt-1" />
                      <div>
                        <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors">don en nature</div>
                        <div className="text-sm text-gray-600 font-mono">don de code source, matériels...</div>
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
              faire un don
            </Link>

            <a
              href="https://docs.varga.foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-mono transition-colors text-gray-700 hover:text-black"
            >
              docs
            </a>

          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <LanguageSelector />
            <a href="https://docs.varga.foundation" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-black font-mono"
              >
                docs
              </Button>
            </a>
            <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary font-mono">
                <Github className="mr-2 h-4 w-4" />
                github
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
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 bg-white">
            {/* Projects Mobile Menu */}
            <div className="px-3 py-2">
              <div className="font-mono font-bold text-black text-sm mb-2">projets</div>
              <div className="ml-4 space-y-2">
                <a href="/projects/dataflow" className="block text-sm font-mono text-gray-600 hover:text-black">dataflow</a>
                <a href="/projects/datalake" className="block text-sm font-mono text-gray-600 hover:text-black">datalake</a>
                <a href="/projects/mlops" className="block text-sm font-mono text-gray-600 hover:text-black">mlops</a>
                <a href="/projects/automl" className="block text-sm font-mono text-gray-600 hover:text-black">automl</a>
              </div>
            </div>
            
            <Link
              to="/contribute"
              className={`block px-3 py-2 text-sm font-mono transition-colors ${
                isActive('/contribute')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={closeAllMenus}
            >
              contribuer
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-sm font-mono transition-colors ${
                isActive('/about')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={closeAllMenus}
            >
              à propos
            </Link>
            {/*<Link*/}
            {/*  to="/blog"*/}
            {/*  className={`block px-3 py-2 text-sm font-mono transition-colors ${*/}
            {/*    isActive('/blog')*/}
            {/*      ? 'text-blue-600'*/}
            {/*      : 'text-gray-700 hover:text-black'*/}
            {/*  }`}*/}
            {/*  onClick={closeAllMenus}*/}
            {/*>*/}
            {/*  blog*/}
            {/*</Link>*/}
            <Link
              to="/donate"
              className={`block px-3 py-2 text-sm font-mono transition-colors ${
                isActive('/donate')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-black'
              }`}
              onClick={closeAllMenus}
            >
              faire un don
            </Link>
            
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a href="https://docs.varga.foundation" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  className="w-full text-gray-700 hover:text-black justify-start font-mono"
                >
                  docs
                </Button>
              </a>
              <Link to="/donate">
                <Button 
                  variant="ghost" 
                  className="w-full text-gray-700 hover:text-black justify-start font-mono"
                  onClick={closeAllMenus}
                >
                  faire un don
                </Button>
              </Link>
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="w-full btn-primary font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  github
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}