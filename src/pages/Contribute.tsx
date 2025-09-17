import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Code, Users, Heart, Github, MessageSquare, BookOpen, Award, CheckCircle, ArrowRight } from "lucide-react"

export default function Contribute() {
  const contributionTypes = [
    {
      icon: Code,
      title: "développement",
      description: "contribuer au code des projets opensource",
      skills: ["Python", "Java", "JavaScript", "Scala"],
      timeCommitment: "2-10h/semaine",
      difficulty: "intermédiaire à avancé"
    },
    {
      icon: BookOpen,
      title: "documentation",
      description: "améliorer guides, tutoriels et documentation",
      skills: ["Rédaction", "Markdown", "Technique"],
      timeCommitment: "1-5h/semaine",
      difficulty: "débutant à intermédiaire"
    },
    {
      icon: Users,
      title: "communauté",
      description: "animer la communauté et aider les nouveaux",
      skills: ["Communication", "Pédagogie", "Empathie"],
      timeCommitment: "3-8h/semaine",
      difficulty: "débutant"
    },
    {
      icon: Award,
      title: "tests & qualité",
      description: "tester les applications et signaler les bugs",
      skills: ["Tests", "QA", "Attention aux détails"],
      timeCommitment: "2-6h/semaine",
      difficulty: "débutant à intermédiaire"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "rejoindre la communauté",
      description: "inscrivez-vous sur notre discord et présentez-vous",
      action: "rejoindre discord",
      link: "https://discord.gg/vargafoundation"
    },
    {
      number: "02",
      title: "choisir un projet",
      description: "explorez nos projets et trouvez celui qui vous intéresse",
      action: "voir les projets",
      link: "/projects"
    },
    {
      number: "03",
      title: "première contribution",
      description: "commencez par une issue marquée 'good first issue'",
      action: "voir les issues",
      link: "https://github.com/vargafoundation"
    },
    {
      number: "04",
      title: "devenir membre",
      description: "après quelques contributions, devenez membre officiel",
      action: "candidater",
      link: "mailto:join@varga.foundation"
    }
  ]

  const benefits = [
    {
      title: "apprentissage",
      description: "développez vos compétences techniques et collaboratives",
      icon: BookOpen
    },
    {
      title: "réseau",
      description: "rencontrez des experts et passionnés du domaine",
      icon: Users
    },
    {
      title: "impact",
      description: "contribuez à démocratiser l'accès aux technologies data/ia",
      icon: Heart
    },
    {
      title: "reconnaissance",
      description: "votre travail est reconnu et valorisé publiquement",
      icon: Award
    }
  ]

  const guidelines = [
    {
      title: "code de conduite",
      items: [
        "respecter tous les membres de la communauté",
        "favoriser un environnement inclusif et bienveillant",
        "accepter les critiques constructives",
        "se concentrer sur l'intérêt collectif"
      ]
    },
    {
      title: "standards techniques",
      items: [
        "suivre les conventions de code du projet",
        "écrire des tests pour les nouvelles fonctionnalités",
        "documenter les changements importants",
        "respecter les principes de sécurité et de confidentialité"
      ]
    },
    {
      title: "processus de contribution",
      items: [
        "créer une issue avant de commencer",
        "faire des pull requests atomiques",
        "demander une review avant de merger",
        "maintenir un historique git propre"
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
              rejoindre la communauté
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              contribuer
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              participez au développement de solutions opensource pour 
              démocratiser l'accès aux technologies data et intelligence artificielle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary px-6 py-3 font-mono">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  rejoindre discord
                </Button>
              </a>
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary px-6 py-3 font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  voir sur github
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution Types */}
      {/*<div className="section-padding bg-gray-50 border-t border-gray-200">*/}
      {/*  <div className="container mx-auto container-padding">*/}
      {/*    <div className="max-w-6xl mx-auto">*/}
      {/*      <div className="text-center mb-16">*/}
      {/*        <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">*/}
      {/*          comment contribuer*/}
      {/*        </h2>*/}
      {/*      </div>*/}
      {/*      */}
      {/*      <div className="grid md:grid-cols-2 gap-8">*/}
      {/*        {contributionTypes.map((type, index) => (*/}
      {/*          <div key={index} className="bg-white border border-gray-200 p-6">*/}
      {/*            <div className="flex items-center mb-4">*/}
      {/*              <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">*/}
      {/*                <type.icon className="w-4 h-4" />*/}
      {/*              </div>*/}
      {/*              <h3 className="text-xl font-mono font-bold text-black">{type.title}</h3>*/}
      {/*            </div>*/}
      {/*            */}
      {/*            <p className="text-gray-600 font-mono text-sm mb-4">{type.description}</p>*/}
      {/*            */}
      {/*            <div className="space-y-3 font-mono text-sm">*/}
      {/*              <div>*/}
      {/*                <span className="text-gray-600">compétences :</span>*/}
      {/*                <div className="flex flex-wrap gap-2 mt-1">*/}
      {/*                  {type.skills.map((skill, skillIndex) => (*/}
      {/*                    <span key={skillIndex} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs">*/}
      {/*                      {skill}*/}
      {/*                    </span>*/}
      {/*                  ))}*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="flex justify-between">*/}
      {/*                <span className="text-gray-600">temps :</span>*/}
      {/*                <span className="text-black">{type.timeCommitment}</span>*/}
      {/*              </div>*/}
      {/*              <div className="flex justify-between">*/}
      {/*                <span className="text-gray-600">niveau :</span>*/}
      {/*                <span className="text-black">{type.difficulty}</span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Steps to Contribute */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                premiers pas
              </h2>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-mono font-bold text-black">{step.title}</h3>
                      <a href={step.link} target={step.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                        <Button className="btn-secondary text-sm font-mono px-4 py-2">
                          {step.action}
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </a>
                    </div>
                    <p className="text-gray-600 font-mono text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                pourquoi contribuer
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-3 text-black">{benefit.title}</h3>
                  <p className="text-gray-600 font-mono text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                nos principes
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-4">{guideline.title}</h3>
                  <ul className="space-y-2">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700 font-mono text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              prêt à commencer ?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              rejoignez une communauté passionnée et contribuez à un avenir 
              où les technologies data et ia sont accessibles à tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  rejoindre la communauté
                </Button>
              </a>
              <Link to="/projects">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  explorer les projets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}