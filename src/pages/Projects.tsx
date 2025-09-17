import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Database, Brain, Shield, BarChart, Code, Users, Github, ExternalLink, Star, GitBranch, Download, Eye } from "lucide-react"

export default function Projects() {
  const featuredProjects = [
    {
      name: "DataFlow",
      description: "plateforme de traitement de données en temps réel",
      category: "data processing",
      language: "Python",
      stars: 2400,
      forks: 340,
      contributors: 45,
      lastUpdate: "2024-01-15",
      status: "stable",
      icon: Database,
      features: [
        "traitement en temps réel",
        "scalabilité automatique",
        "interface graphique intuitive",
        "connecteurs multiples"
      ],
      github: "https://github.com/vargafoundation/dataflow",
      demo: "https://demo.dataflow.odf.org",
      docs: "https://docs.dataflow.odf.org"
    },
    {
      name: "MLOps",
      description: "déploiement et gestion de modèles machine learning",
      category: "machine learning",
      language: "Python",
      stars: 1800,
      forks: 220,
      contributors: 32,
      lastUpdate: "2024-01-12",
      status: "stable",
      icon: Brain,
      features: [
        "déploiement automatisé",
        "monitoring des modèles",
        "versioning des modèles",
        "a/b testing intégré"
      ],
      github: "https://github.com/vargafoundation/mlops",
      demo: "https://demo.mlops.odf.org",
      docs: "https://docs.mlops.odf.org"
    },
    {
      name: "DataGovernance",
      description: "outils de gouvernance et qualité des données",
      category: "governance",
      language: "Java",
      stars: 1200,
      forks: 180,
      contributors: 28,
      lastUpdate: "2024-01-10",
      status: "beta",
      icon: Shield,
      features: [
        "catalogage automatique",
        "lignage des données",
        "contrôle qualité",
        "conformité rgpd"
      ],
      github: "https://github.com/vargafoundation/governance",
      demo: "https://demo.governance.odf.org",
      docs: "https://docs.governance.odf.org"
    }
  ]

  const allProjects = [
    {
      name: "DataLake",
      description: "solution de stockage de données massives",
      category: "storage",
      language: "Scala",
      stars: 950,
      status: "stable",
      icon: Database
    },
    {
      name: "AutoML",
      description: "automatisation de la création de modèles ml",
      category: "machine learning",
      language: "Python",
      stars: 1400,
      status: "stable",
      icon: Brain
    },
    {
      name: "DataViz",
      description: "outils de visualisation de données",
      category: "visualization",
      language: "JavaScript",
      stars: 800,
      status: "beta",
      icon: BarChart
    },
    {
      name: "EthicalAI",
      description: "framework pour une ia éthique et responsable",
      category: "ethics",
      language: "Python",
      stars: 650,
      status: "alpha",
      icon: Shield
    },
    {
      name: "OpenAPI",
      description: "apis ouvertes pour l'accès aux données publiques",
      category: "api",
      language: "Node.js",
      stars: 720,
      status: "stable",
      icon: Code
    },
    {
      name: "Community",
      description: "plateforme collaborative pour la communauté",
      category: "community",
      language: "React",
      stars: 480,
      status: "beta",
      icon: Users
    }
  ]

  const categories = [
    { name: "tous", count: featuredProjects.length + allProjects.length },
    { name: "data processing", count: 2 },
    { name: "machine learning", count: 2 },
    { name: "governance", count: 2 },
    { name: "visualization", count: 1 },
    { name: "ethics", count: 1 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'text-green-600 bg-green-100'
      case 'beta': return 'text-blue-600 bg-blue-100'
      case 'alpha': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              solutions opensource
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              nos projets
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              découvrez nos solutions opensource pour démocratiser l'accès 
              aux technologies data et intelligence artificielle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary px-6 py-3 font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  voir sur github
                </Button>
              </a>
              <Link to="/contribute">
                <Button className="btn-secondary px-6 py-3 font-mono">
                  contribuer
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
                projets phares
              </h2>
            </div>
            
            <div className="space-y-8">
              {featuredProjects.map((project, index) => (
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
                            {project.status}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 font-mono text-sm mb-4">{project.description}</p>
                      
                      <div className="space-y-2 font-mono text-xs">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          <span className="text-black font-bold">{project.stars}</span>
                          <span className="text-gray-600 ml-1">stars</span>
                        </div>
                        <div className="flex items-center">
                          <GitBranch className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="text-black font-bold">{project.forks}</span>
                          <span className="text-gray-600 ml-1">forks</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 text-gray-600 mr-2" />
                          <span className="text-black font-bold">{project.contributors}</span>
                          <span className="text-gray-600 ml-1">contributeurs</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-mono font-bold text-black mb-4">fonctionnalités</h4>
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
                      <h4 className="font-mono font-bold text-black mb-4">liens</h4>
                      <div className="space-y-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <Github className="w-4 h-4 mr-3" />
                          code source
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <Eye className="w-4 h-4 mr-3" />
                          démonstration
                        </a>
                        <a
                          href={project.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 hover:text-black transition-colors font-mono text-sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-3" />
                          documentation
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
                tous nos projets
              </h2>
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 font-mono text-sm border transition-colors ${
                    index === 0 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6 hover:border-black transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-3">
                      <project.icon className="w-3 h-3" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-black text-sm">{project.name}</h3>
                      <div className={`inline-flex items-center px-2 py-1 font-mono text-xs mt-1 ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-mono text-sm mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 font-mono text-xs">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        <span className="text-black">{project.stars}</span>
                      </div>
                      <span className="text-gray-600">{project.language}</span>
                    </div>
                    <Button className="btn-secondary text-xs font-mono px-3 py-1">
                      <Github className="mr-1 h-3 w-3" />
                      voir
                    </Button>
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
              contribuez
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              rejoignez notre communauté et participez au développement 
              de solutions opensource pour tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contribute">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  guide de contribution
                </Button>
              </Link>
              <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  rejoindre discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}