import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import projects from "@/data/projects";
import { Database, Brain, Shield, BarChart, Code, Users, Github, ExternalLink, Star, GitBranch, Download, Eye } from "lucide-react"
import {useState} from "react";
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const ALL = '__ALL__'
  // État pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState(ALL);

  // Fonction pour filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects =
      selectedCategory === ALL
          ? projects
          : projects.filter((project) => project.category === selectedCategory);

  const calculateCategories = (projects) => {
    const categoryCount = {};

    projects.forEach((project) => {
      if (categoryCount[project.category]) {
        categoryCount[project.category]++;
      } else {
        categoryCount[project.category] = 1;
      }
    });

    const categories = Object.keys(categoryCount).map((category) => ({
      name: category,
      count: categoryCount[category],
    }));

    return [{ name: ALL, count: projects.length }, ...categories];
  };

// Calcul des catégories avant l'export du composant
  const categories = calculateCategories(projects);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'text-green-600 bg-green-100'
      case 'beta': return 'text-blue-600 bg-blue-100'
      case 'alpha': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const lang = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  const getDesc = (project: any) => project.descriptionI18n?.[lang] || project.description
  const categoryLabel = (cat: string) => {
    if (cat === ALL) return t('pages.projects.allCategory')
    const key = cat.toLowerCase().replace(/\s+/g, '_')
    const tr = t(`pages.projects.categories.${key}`)
    return tr || cat
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              {t('pages.projects.badge')}
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              {t('pages.projects.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              {t('pages.projects.intro')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary px-6 py-3 font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  {t('pages.projects.viewOnGithub')}
                </Button>
              </a>
              <Link to="/contribute">
                <Button className="btn-secondary px-6 py-3 font-mono">
                  {t('pages.projects.contribute')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                {t('pages.projects.featured')}
              </h2>
            </div>
            
            <div className="space-y-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                          <project.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xl font-mono font-bold text-black">{project.name}</h3>
                          <div className={`inline-flex items-center px-2 py-1 font-mono text-xs mt-1 ${getStatusColor(project.status)}`}>
                            {t(`common.status.${project.status}`)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 font-mono text-sm mb-4">{getDesc(project)}</p>
                      
                      <div className="space-y-2 font-mono text-xs">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          <span className="text-black font-bold">{project.stars}</span>
                          <span className="text-gray-600 ml-1">{t('common.metrics.stars')}</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="text-black font-bold">{project.forks}</span>
                          <span className="text-gray-600 ml-1">{t('common.metrics.forks')}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="text-black font-bold">{project.contributors}</span>
                          <span className="text-gray-600 ml-1">{t('common.metrics.contributors')}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-mono font-bold text-black mb-4">{t('common.labels.features')}</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700 font-mono text-sm">
                            <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-mono font-bold text-black mb-4">{t('common.labels.links')}</h4>
                      <div className="space-y-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <Github className="w-4 h-4 mr-3" />
                          {t('pages.projects.sourceCode')}
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <Eye className="w-4 h-4 mr-3" />
                          {t('pages.projects.demo')}
                        </a>
                        <a
                          href={project.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-3" />
                          {t('pages.projects.documentation')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Projects */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                {t('pages.projects.all')}
              </h2>
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 font-mono text-sm border transition-colors ${
                      selectedCategory === category.name
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
                  }`}
                >
                  {categoryLabel(category.name)} ({category.count})
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6 hover:border-black transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-3">
                      <project.icon className="w-3 h-3" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-black text-sm">{project.name}</h3>
                      <div className={`inline-flex items-center px-2 py-1 font-mono text-xs mt-1 ${getStatusColor(project.status)}`}>
                        {t(`common.status.${project.status}`)}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-mono text-sm mb-4">{getDesc(project)}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 font-mono text-xs">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span className="text-black">{project.stars}</span>
                      </div>
                      <span className="text-gray-600">{project.language}</span>
                    </div>
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                      >
                    <Button className="btn-secondary text-xs font-mono px-3 py-1">
                      <Github className="mr-1 h-3 w-3" />
                      {t('common.actions.viewOnGithub')}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
              {t('pages.projects.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              {t('pages.projects.ctaText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contribute">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  {t('pages.projects.ctaGuide')}
                </Button>
              </Link>
              <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  {t('pages.projects.ctaJoinDiscord')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}