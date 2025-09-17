import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Target, Heart, Users, Globe, Shield, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

export default function Mission() {
  const values = [
    {
      icon: Heart,
      title: "accessibilité",
      description: "rendre les technologies data et ia accessibles à tous, sans distinction de moyens ou de compétences techniques."
    },
    {
      icon: Shield,
      title: "éthique",
      description: "développer des solutions respectueuses de la vie privée, transparentes et responsables."
    },
    {
      icon: Users,
      title: "collaboration",
      description: "favoriser la collaboration ouverte et le partage de connaissances au sein de la communauté."
    },
    {
      icon: Globe,
      title: "impact global",
      description: "créer un impact positif à l'échelle mondiale en démocratisant l'accès aux technologies."
    }
  ]

  const objectives = [
    {
      title: "démocratiser l'accès",
      description: "rendre les outils data et ia utilisables par tous",
      progress: 75,
      metrics: "5000+ utilisateurs actifs"
    },
    {
      title: "éduquer et former",
      description: "proposer des ressources d'apprentissage gratuites",
      progress: 60,
      metrics: "200+ tutoriels disponibles"
    },
    {
      title: "innover ensemble",
      description: "développer des solutions innovantes en communauté",
      progress: 85,
      metrics: "50+ projets actifs"
    },
    {
      title: "promouvoir l'éthique",
      description: "établir des standards éthiques pour l'ia",
      progress: 40,
      metrics: "framework éthique en développement"
    }
  ]

  const impact = [
    {
      category: "éducation",
      achievements: [
        "formation de 10 000+ personnes aux technologies data",
        "création de 200+ ressources pédagogiques gratuites",
        "partenariats avec 50+ universités et écoles"
      ]
    },
    {
      category: "innovation",
      achievements: [
        "développement de 50+ projets opensource",
        "contribution de 5000+ développeurs",
        "adoption par 100+ organisations"
      ]
    },
    {
      category: "société",
      achievements: [
        "amélioration de l'accès aux soins via l'ia",
        "optimisation des ressources publiques",
        "promotion de la transparence algorithmique"
      ]
    }
  ]

  const roadmap = [
    {
      year: "2025",
      title: "consolidation",
      goals: [
        "stabiliser les projets phares",
        "renforcer la communauté",
        "développer les partenariats"
      ]
    },
    {
      year: "2026",
      title: "expansion",
      goals: [
        "lancer 10 nouveaux projets",
        "atteindre 1000 utilisateurs",
        "créer un programme de certification"
      ]
    },
    {
      year: "2027",
      title: "impact global",
      goals: [
        "présence dans d'autres pays",
        "standard de référence en ia éthique"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              notre vision
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              mission
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              démocratiser l'accès aux technologies data et intelligence artificielle 
              pour créer un monde plus équitable et innovant.
            </p>

            <div className="bg-gray-50 border border-gray-200 p-8 mb-16">
              <h2 className="text-2xl font-mono font-bold text-black mb-4">notre mission</h2>
              <p className="text-lg text-gray-700 font-mono leading-relaxed">
                "développer et maintenir des solutions opensource de données et d'intelligence 
                artificielle accessibles à tous, en promouvant l'éthique, la transparence 
                et la collaboration pour un impact positif sur la société."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                nos valeurs
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                      <value.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-black">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 font-mono text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                nos objectifs
              </h2>
            </div>
            
            <div className="space-y-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-mono font-bold text-black">{objective.title}</h3>
                      <p className="text-gray-600 font-mono text-sm">{objective.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-bold text-black">{objective.progress}%</div>
                      <div className="text-gray-600 font-mono text-xs">{objective.metrics}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 h-2">
                    <div 
                      className="bg-black h-2 transition-all duration-500"
                      style={{ width: `${objective.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                notre impact
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {impact.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <h3 className="text-lg font-mono font-bold text-black mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-gray-700 font-mono text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                feuille de route
              </h2>
            </div>
            
            <div className="space-y-8">
              {roadmap.map((phase, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                    {phase.year}
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-6 flex-1">
                    <h3 className="text-lg font-mono font-bold text-black mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-center text-gray-700 font-mono text-sm">
                          <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                          {goal}
                        </li>
                      ))}
                    </ul>
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
              rejoignez notre mission
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              ensemble, construisons un avenir où les technologies data et ia 
              sont au service de tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contribute">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  <Heart className="mr-2 h-4 w-4" />
                  contribuer
                </Button>
              </Link>
              <Link to="/donate">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  <Target className="mr-2 h-4 w-4" />
                  soutenir financièrement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}