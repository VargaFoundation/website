import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Terminal, Code, Database, Settings, BarChart, Github, ExternalLink, BookOpen, Users, GitBranch, Play, CheckCircle, ArrowRight, FileText, MessageSquare, Award, Lightbulb, Target } from "lucide-react"

export default function UserGuide() {
  const contributionGuides = [
    {
      icon: Code,
      title: "développement",
      description: "contribuer au code des projets opensource",
      difficulty: "intermédiaire",
      duration: "2-4 semaines",
      steps: [
        "forker le repository du projet",
        "configurer l'environnement de développement",
        "choisir une issue 'good first issue'",
        "développer et tester votre contribution",
        "soumettre une pull request"
      ],
      code: `# cloner votre fork
git clone https://github.com/votre-username/dataflow
cd dataflow

# installer les dépendances
pip install -r requirements.txt
pip install -r requirements-dev.txt

# créer une branche pour votre feature
git checkout -b feature/nouvelle-fonctionnalite

# lancer les tests
pytest tests/

# soumettre votre contribution
git push origin feature/nouvelle-fonctionnalite`
    },
    {
      icon: FileText,
      title: "documentation",
      description: "améliorer guides, tutoriels et documentation",
      difficulty: "débutant",
      duration: "1-2 semaines",
      steps: [
        "identifier les lacunes dans la documentation",
        "proposer des améliorations via une issue",
        "rédiger en markdown",
        "ajouter des exemples pratiques",
        "soumettre pour review"
      ],
      code: `# structure de documentation
docs/
├── guides/
│   ├── getting-started.md
│   ├── advanced-usage.md
│   └── troubleshooting.md
├── tutorials/
│   ├── first-pipeline.md
│   └── data-transformation.md
└── api/
    └── reference.md

# format markdown
## Installation

\`\`\`bash
pip install dataflow
\`\`\`

## Exemple rapide

\`\`\`python
from dataflow import Pipeline
pipeline = Pipeline()
\`\`\``
    },
    {
      icon: Users,
      title: "communauté",
      description: "animer la communauté et aider les nouveaux",
      difficulty: "débutant",
      duration: "continu",
      steps: [
        "rejoindre le discord de l'association",
        "se présenter et partager ses compétences",
        "répondre aux questions des nouveaux",
        "organiser des événements communautaires",
        "modérer les discussions"
      ],
      code: `# canaux discord principaux
#général - discussions générales
#aide-débutants - support nouveaux membres
#projets-dataflow - discussions projet dataflow
#projets-mlops - discussions projet mlops
#contributions - coordination contributions
#événements - organisation événements

# rôles communautaires
@contributeur - membres actifs
@mentor - aide aux débutants
@mainteneur - responsables projets
@modérateur - modération communauté`
    },
    {
      icon: BarChart,
      title: "tests & qualité",
      description: "tester les applications et améliorer la qualité",
      difficulty: "intermédiaire",
      duration: "1-3 semaines",
      steps: [
        "comprendre l'architecture du projet",
        "identifier les zones non testées",
        "écrire des tests unitaires et d'intégration",
        "tester les cas limites",
        "documenter les procédures de test"
      ],
      code: `# structure des tests
tests/
├── unit/
│   ├── test_connectors.py
│   ├── test_transforms.py
│   └── test_sinks.py
├── integration/
│   ├── test_pipeline_e2e.py
│   └── test_database_integration.py
└── fixtures/
    ├── sample_data.json
    └── test_config.yaml

# exemple de test
def test_data_transformation():
    input_data = load_fixture('sample_data.json')
    result = transform_data(input_data)
    assert len(result) > 0
    assert 'processed_at' in result[0]`
    }
  ]

  const tutorials = [
    {
      title: "premier pipeline de données",
      description: "créer votre premier pipeline avec dataflow",
      level: "débutant",
      duration: "30 minutes",
      topics: ["installation", "configuration", "premier pipeline", "monitoring"],
      link: "/tutorials/first-pipeline"
    },
    {
      title: "déploiement de modèle ml",
      description: "déployer un modèle avec mlops",
      level: "intermédiaire",
      duration: "1 heure",
      topics: ["préparation modèle", "containerisation", "déploiement", "monitoring"],
      link: "/tutorials/ml-deployment"
    },
    {
      title: "gouvernance des données",
      description: "mettre en place la gouvernance avec datagovernance",
      level: "avancé",
      duration: "2 heures",
      topics: ["catalogage", "lignage", "qualité", "conformité"],
      link: "/tutorials/data-governance"
    },
    {
      title: "contribution opensource",
      description: "guide complet pour contribuer aux projets",
      level: "débutant",
      duration: "45 minutes",
      topics: ["git workflow", "code review", "tests", "documentation"],
      link: "/tutorials/contributing"
    }
  ]

  const resources = [
    {
      category: "développement",
      icon: Code,
      items: [
        { name: "standards de code", description: "conventions et bonnes pratiques", link: "/docs/coding-standards" },
        { name: "architecture des projets", description: "comprendre l'architecture", link: "/docs/architecture" },
        { name: "guide git", description: "workflow git et bonnes pratiques", link: "/docs/git-workflow" },
        { name: "review process", description: "processus de review de code", link: "/docs/code-review" }
      ]
    },
    {
      category: "communauté",
      icon: Users,
      items: [
        { name: "code de conduite", description: "règles de la communauté", link: "/docs/code-of-conduct" },
        { name: "discord guide", description: "utiliser efficacement discord", link: "/docs/discord-guide" },
        { name: "événements", description: "organiser des événements", link: "/docs/events" },
        { name: "mentorat", description: "devenir mentor", link: "/docs/mentoring" }
      ]
    },
    {
      category: "projets",
      icon: Database,
      items: [
        { name: "dataflow docs", description: "documentation complète dataflow", link: "https://docs.dataflow.odf.org" },
        { name: "mlops docs", description: "documentation complète mlops", link: "https://docs.mlops.odf.org" },
        { name: "governance docs", description: "documentation governance", link: "https://docs.governance.odf.org" },
        { name: "api reference", description: "référence des apis", link: "/docs/api-reference" }
      ]
    }
  ]

  const quickStart = [
    {
      step: "1",
      title: "rejoindre la communauté",
      description: "créer un compte github et rejoindre notre discord",
      actions: [
        "créer un compte github si nécessaire",
        "rejoindre le discord vargafoundation",
        "se présenter dans #général",
        "lire le code de conduite"
      ]
    },
    {
      step: "2",
      title: "choisir un projet",
      description: "explorer nos projets et trouver celui qui vous intéresse",
      actions: [
        "parcourir les repositories github",
        "lire les readme et documentation",
        "identifier vos compétences",
        "choisir un projet aligné"
      ]
    },
    {
      step: "3",
      title: "première contribution",
      description: "commencer par une contribution simple",
      actions: [
        "chercher les issues 'good first issue'",
        "demander à être assigné",
        "forker le repository",
        "développer votre contribution"
      ]
    },
    {
      step: "4",
      title: "devenir contributeur régulier",
      description: "s'impliquer davantage dans le projet",
      actions: [
        "participer aux discussions",
        "proposer de nouvelles fonctionnalités",
        "aider les nouveaux contributeurs",
        "candidater pour devenir mainteneur"
      ]
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'débutant': return 'text-green-600 bg-green-100'
      case 'intermédiaire': return 'text-yellow-600 bg-yellow-100'
      case 'avancé': return 'text-red-600 bg-red-100'
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
                documentation contributeurs
              </div>

              <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                documentation
              </h1>

              <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                guides complets pour contribuer aux projets opensource de l'association.
                <br />
                de votre première contribution à devenir mainteneur.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-primary font-mono">
                    <Github className="mr-2 h-4 w-4" />
                    voir sur github
                  </Button>
                </a>
                <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-secondary font-mono">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    rejoindre discord
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="section-padding bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  démarrage rapide
                </h2>
                <p className="text-lg text-gray-600 font-mono">
                  4 étapes pour commencer à contribuer
                </p>
              </div>

              <div className="space-y-8">
                {quickStart.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="bg-white border border-gray-200 p-6 flex-1">
                        <h3 className="text-lg font-mono font-bold text-black mb-3">{step.title}</h3>
                        <p className="text-gray-600 font-mono text-sm mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-center text-gray-700 font-mono text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                                {action}
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

        {/* Guides de contribution */}
        <div className="section-padding bg-white border-t border-gray-200">
          <div className="container mx-auto container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  guides de contribution
                </h2>
                <p className="text-lg text-gray-600 font-mono">
                  guides détaillés selon votre domaine d'expertise
                </p>
              </div>

              <div className="space-y-12">
                {contributionGuides.map((guide, index) => (
                    <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <h3 className="text-2xl font-mono font-bold text-black">{guide.title}</h3>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className={`inline-flex items-center px-2 py-1 font-mono text-xs ${getDifficultyColor(guide.difficulty)}`}>
                                {guide.difficulty}
                              </div>
                              <div className="text-gray-600 font-mono text-xs">
                                durée : {guide.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 font-mono text-sm mb-8">
                          {guide.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-mono font-bold text-black text-sm">étapes :</h4>
                          {guide.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                <div className="w-4 h-4 border border-gray-400 mr-3 flex-shrink-0 flex items-center justify-center mt-0.5">
                                  <div className="w-2 h-2 bg-black"></div>
                                </div>
                                <span>{step}</span>
                              </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-black text-white">
                        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                          <span className="font-mono text-xs text-gray-300">exemple - {guide.title}</span>
                        </div>
                        <div className="p-4">
                      <pre className="font-mono text-sm text-white whitespace-pre-wrap overflow-x-auto">
                        {guide.code}
                      </pre>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tutorials */}
        <div className="section-padding bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  tutoriels pratiques
                </h2>
                <p className="text-lg text-gray-600 font-mono">
                  apprenez par la pratique avec nos tutoriels step-by-step
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {tutorials.map((tutorial, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-mono font-bold text-black">{tutorial.title}</h3>
                        <div className={`inline-flex items-center px-2 py-1 font-mono text-xs ${getDifficultyColor(tutorial.level)}`}>
                          {tutorial.level}
                        </div>
                      </div>

                      <p className="text-gray-600 font-mono text-sm mb-4">{tutorial.description}</p>

                      <div className="flex items-center space-x-4 mb-4 font-mono text-xs text-gray-600">
                        <div className="flex items-center">
                          <Play className="w-3 h-3 mr-1" />
                          {tutorial.duration}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-mono font-bold text-black mb-2 text-sm">sujets couverts :</h4>
                        <div className="flex flex-wrap gap-2">
                          {tutorial.topics.map((topic, topicIndex) => (
                              <span key={topicIndex} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 font-mono text-xs">
                          {topic}
                        </span>
                          ))}
                        </div>
                      </div>

                      <a href={tutorial.link}>
                        <Button className="w-full btn-secondary font-mono">
                          <BookOpen className="mr-2 h-4 w-4" />
                          commencer le tutoriel
                        </Button>
                      </a>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="section-padding bg-white border-t border-gray-200">
          <div className="container mx-auto container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  ressources
                </h2>
                <p className="text-lg text-gray-600 font-mono">
                  documentation technique et guides de référence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {resources.map((category, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                      <div className="flex items-center mb-6">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                          <category.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-mono font-bold text-black">{category.category}</h3>
                      </div>

                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                            <a
                                key={itemIndex}
                                href={item.link}
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="block p-3 bg-white border border-gray-200 hover:border-black transition-colors"
                            >
                              <div className="font-mono font-bold text-black text-sm mb-1">{item.name}</div>
                              <div className="text-gray-600 font-mono text-xs">{item.description}</div>
                            </a>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Contributeurs */}
        <div className="section-padding bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto container-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  faq contributeurs
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-3">comment choisir ma première contribution ?</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    commencez par les issues marquées "good first issue" ou "help wanted".
                    ces issues sont spécialement sélectionnées pour les nouveaux contributeurs
                    et incluent des instructions détaillées.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-3">dois-je connaître tous les projets ?</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    non, concentrez-vous sur un projet qui vous intéresse.
                    chaque projet a sa propre documentation et sa communauté.
                    vous pouvez toujours contribuer à d'autres projets plus tard.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-3">que faire si ma pull request est refusée ?</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    c'est normal et fait partie du processus d'apprentissage.
                    lisez attentivement les commentaires, apportez les modifications demandées,
                    et n'hésitez pas à poser des questions sur discord.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-3">puis-je contribuer sans savoir coder ?</h3>
                  <p className="text-gray-700 font-mono text-sm">
                    absolument ! nous avons besoin de contributions en documentation,
                    tests, design, traduction, animation communauté, et bien d'autres domaines.
                    consultez notre guide "contribution non-technique".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-padding bg-black">
          <div className="container mx-auto container-padding">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
                prêt à contribuer ?
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-mono">
                rejoignez notre communauté de contributeurs et participez
                à la démocratisation des technologies data et ia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    rejoindre la communauté
                  </Button>
                </a>
                <Link to="/contribute">
                  <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                    <Target className="mr-2 h-4 w-4" />
                    guide de contribution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}