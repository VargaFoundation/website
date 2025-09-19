import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, Users, Heart, AlertTriangle, CheckCircle, Mail, MessageSquare, Eye, Scale, Gavel } from "lucide-react"

export default function CodeOfConduct() {
    const principles = [
        {
            icon: Heart,
            title: "bienveillance",
            description: "nous nous engageons à créer un environnement accueillant et bienveillant pour tous",
            details: [
                "traiter chaque membre avec respect et dignité",
                "faire preuve d'empathie et de compréhension",
                "encourager et soutenir les nouveaux contributeurs",
                "célébrer la diversité des perspectives et expériences"
            ]
        },
        {
            icon: Users,
            title: "inclusion",
            description: "notre communauté est ouverte à tous, sans discrimination",
            details: [
                "accueillir les personnes de tous horizons",
                "respecter les différences culturelles et linguistiques",
                "promouvoir l'égalité des chances de participation",
                "adapter nos pratiques pour l'accessibilité"
            ]
        },
        {
            icon: Shield,
            title: "respect",
            description: "nous maintenons un standard élevé de respect mutuel",
            details: [
                "utiliser un langage respectueux et professionnel",
                "éviter les attaques personnelles ou les insultes",
                "respecter les opinions divergentes",
                "maintenir la confidentialité quand approprié"
            ]
        },
        {
            icon: CheckCircle,
            title: "collaboration",
            description: "nous privilégions la collaboration constructive",
            details: [
                "donner des retours constructifs et utiles",
                "accepter les critiques avec ouverture",
                "partager les connaissances et l'expertise",
                "travailler ensemble vers des objectifs communs"
            ]
        }
    ]

    const expectedBehaviors = [
        {
            category: "communication",
            behaviors: [
                "utiliser un langage inclusif et respectueux",
                "être patient avec les débutants et les questions",
                "donner des retours constructifs et spécifiques",
                "reconnaître et créditer le travail des autres",
                "demander de l'aide quand nécessaire"
            ]
        },
        {
            category: "collaboration",
            behaviors: [
                "respecter les processus établis (pull requests, reviews)",
                "documenter son travail pour les autres",
                "tester son code avant de le soumettre",
                "participer aux discussions de manière constructive",
                "aider les autres contributeurs quand possible"
            ]
        },
        {
            category: "communauté",
            behaviors: [
                "accueillir les nouveaux membres",
                "partager ses connaissances et expériences",
                "participer aux événements et initiatives",
                "promouvoir les valeurs de l'association",
                "contribuer à un environnement positif"
            ]
        }
    ]

    const unacceptableBehaviors = [
        {
            category: "harcèlement",
            examples: [
                "commentaires offensants liés à l'identité personnelle",
                "harcèlement public ou privé",
                "intimidation ou menaces",
                "publication d'informations privées sans consentement",
                "attention sexuelle non désirée"
            ]
        },
        {
            category: "perturbation",
            examples: [
                "trolling ou commentaires inflammatoires",
                "spam ou promotion excessive",
                "perturbation délibérée des discussions",
                "sabotage du travail communautaire",
                "violation répétée des règles"
            ]
        },
        {
            category: "discrimination",
            examples: [
                "discrimination basée sur l'identité",
                "exclusion délibérée de groupes",
                "langage discriminatoire ou offensant",
                "stéréotypes ou préjugés",
                "création d'environnements hostiles"
            ]
        }
    ]

    const reportingProcess = [
        {
            step: "1",
            title: "signalement",
            description: "signaler l'incident via les canaux appropriés",
            channels: [
                "email : conduct@varga.foundation",
                "message privé aux modérateurs discord",
                "formulaire de signalement anonyme",
                "contact direct avec un membre du bureau"
            ]
        },
        {
            step: "2",
            title: "évaluation",
            description: "examen de l'incident par l'équipe de modération",
            process: [
                "accusé de réception sous 24h",
                "investigation confidentielle",
                "collecte de preuves et témoignages",
                "évaluation de la gravité"
            ]
        },
        {
            step: "3",
            title: "action",
            description: "mesures appropriées selon la gravité",
            measures: [
                "avertissement privé",
                "avertissement public",
                "suspension temporaire",
                "exclusion définitive"
            ]
        },
        {
            step: "4",
            title: "suivi",
            description: "communication et suivi des mesures prises",
            followup: [
                "notification aux parties concernées",
                "documentation de l'incident",
                "suivi de l'efficacité des mesures",
                "prévention de récidives"
            ]
        }
    ]

    const enforcement = [
        {
            level: "avertissement",
            description: "pour les violations mineures ou premières infractions",
            consequences: [
                "discussion privée avec l'équipe de modération",
                "explication des règles violées",
                "demande d'excuse si approprié",
                "engagement à respecter le code"
            ]
        },
        {
            level: "suspension temporaire",
            description: "pour les violations répétées ou plus graves",
            consequences: [
                "suspension de 7 à 30 jours",
                "interdiction de participer aux discussions",
                "révision du comportement avant réintégration",
                "conditions spécifiques de retour"
            ]
        },
        {
            level: "exclusion définitive",
            description: "pour les violations graves ou récidives",
            consequences: [
                "bannissement permanent de tous les espaces",
                "suppression des accès et privilèges",
                "notification publique si nécessaire",
                "pas de possibilité de réintégration"
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
                            règles de la communauté
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            code de
                            <br />
                            conduite
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            notre engagement pour une communauté inclusive, respectueuse et bienveillante.
                            ces règles s'appliquent à tous nos espaces communautaires.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 p-6 mb-16">
                            <div className="flex items-center justify-center mb-4">
                                <Shield className="w-5 h-5 text-green-600 mr-3" />
                                <span className="font-mono font-bold text-black">version 2.1</span>
                            </div>
                            <div className="font-mono text-sm text-gray-700">
                                <div>adopté par l'assemblée générale</div>
                                <div>applicable à tous les espaces vargafoundation</div>
                                <div>dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notre engagement */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                notre engagement
                            </h2>
                        </div>

                        <div className="bg-white border border-gray-200 p-8 mb-8">
                            <p className="text-lg text-gray-700 font-mono leading-relaxed text-center">
                                "nous nous engageons à faire de la participation à notre communauté
                                une expérience sans harcèlement pour tous, quel que soit l'âge,
                                la taille corporelle, le handicap visible ou invisible, l'ethnicité,
                                les caractéristiques sexuelles, l'identité et l'expression de genre,
                                le niveau d'expérience, l'éducation, le statut socio-économique,
                                la nationalité, l'apparence personnelle, la race, la religion,
                                ou l'identité et l'orientation sexuelle."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Principes fondamentaux */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                principes fondamentaux
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {principles.map((principle, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                                            <principle.icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-mono font-bold text-black">{principle.title}</h3>
                                    </div>
                                    <p className="text-gray-600 font-mono text-sm mb-6">
                                        {principle.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {principle.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comportements attendus */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                comportements attendus
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {expectedBehaviors.map((category, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    <h3 className="font-mono font-bold text-black mb-4">{category.category}</h3>
                                    <ul className="space-y-2">
                                        {category.behaviors.map((behavior, behaviorIndex) => (
                                            <li key={behaviorIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                {behavior}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comportements inacceptables */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                comportements inacceptables
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {unacceptableBehaviors.map((category, index) => (
                                <div key={index} className="bg-red-50 border border-red-200 p-6">
                                    <div className="flex items-center mb-4">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                                        <h3 className="font-mono font-bold text-black">{category.category}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.examples.map((example, exampleIndex) => (
                                            <li key={exampleIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                <div className="w-2 h-2 bg-red-600 mt-2 mr-3 flex-shrink-0"></div>
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Processus de signalement */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                signaler un incident
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                processus confidentiel et bienveillant pour signaler les violations
                            </p>
                        </div>

                        <div className="space-y-8">
                            {reportingProcess.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                                        {step.step}
                                    </div>
                                    <div className="bg-white border border-gray-200 p-6 flex-1">
                                        <h3 className="text-lg font-mono font-bold text-black mb-3">{step.title}</h3>
                                        <p className="text-gray-600 font-mono text-sm mb-4">{step.description}</p>

                                        <div className="space-y-2">
                                            {step.channels && (
                                                <div>
                                                    <h4 className="font-mono font-bold text-black text-sm mb-2">canaux de signalement :</h4>
                                                    <ul className="space-y-1">
                                                        {step.channels.map((channel, channelIndex) => (
                                                            <li key={channelIndex} className="text-gray-700 font-mono text-sm flex items-center">
                                                                <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                                                                {channel}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {step.process && (
                                                <div>
                                                    <h4 className="font-mono font-bold text-black text-sm mb-2">processus :</h4>
                                                    <ul className="space-y-1">
                                                        {step.process.map((proc, procIndex) => (
                                                            <li key={procIndex} className="text-gray-700 font-mono text-sm flex items-center">
                                                                <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                                                                {proc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {step.measures && (
                                                <div>
                                                    <h4 className="font-mono font-bold text-black text-sm mb-2">mesures possibles :</h4>
                                                    <ul className="space-y-1">
                                                        {step.measures.map((measure, measureIndex) => (
                                                            <li key={measureIndex} className="text-gray-700 font-mono text-sm flex items-center">
                                                                <Scale className="w-3 h-3 text-blue-600 mr-2 flex-shrink-0" />
                                                                {measure}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {step.followup && (
                                                <div>
                                                    <h4 className="font-mono font-bold text-black text-sm mb-2">suivi :</h4>
                                                    <ul className="space-y-1">
                                                        {step.followup.map((follow, followIndex) => (
                                                            <li key={followIndex} className="text-gray-700 font-mono text-sm flex items-center">
                                                                <Eye className="w-3 h-3 text-purple-600 mr-2 flex-shrink-0" />
                                                                {follow}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mesures disciplinaires */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                mesures disciplinaires
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                sanctions graduées selon la gravité des violations
                            </p>
                        </div>

                        <div className="space-y-6">
                            {enforcement.map((level, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 p-8">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <Gavel className="w-5 h-5 text-gray-600 mr-3" />
                                                <h3 className="text-xl font-mono font-bold text-black">{level.level}</h3>
                                            </div>
                                            <p className="text-gray-600 font-mono text-sm">{level.description}</p>
                                        </div>

                                        <div className="lg:col-span-2">
                                            <h4 className="font-mono font-bold text-black mb-4">conséquences :</h4>
                                            <ul className="space-y-2">
                                                {level.consequences.map((consequence, consequenceIndex) => (
                                                    <li key={consequenceIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                        <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                                                        {consequence}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Espaces d'application */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                espaces d'application
                            </h2>
                        </div>

                        <div className="bg-white border border-gray-200 p-8">
                            <p className="text-gray-700 font-mono text-sm mb-6">
                                ce code de conduite s'applique à tous les espaces communautaires vargafoundation :
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-mono font-bold text-black mb-3">espaces numériques :</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            repositories github
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            serveur discord
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            forums et discussions
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            réseaux sociaux officiels
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-mono font-bold text-black mb-3">événements physiques :</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            conférences et meetups
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            hackathons et ateliers
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            formations et séminaires
                                        </li>
                                        <li className="flex items-center text-gray-700 font-mono text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                                            représentation publique
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact et ressources */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                contact et ressources
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 border border-gray-200 p-6">
                                <h3 className="font-mono font-bold text-black mb-4">équipe de modération</h3>
                                <div className="space-y-3 font-mono text-sm">
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 text-gray-600 mr-3" />
                                        <span className="text-gray-700">conduct@varga.foundation</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MessageSquare className="w-4 h-4 text-gray-600 mr-3" />
                                        <span className="text-gray-700">@modérateurs sur discord</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Eye className="w-4 h-4 text-gray-600 mr-3" />
                                        <span className="text-gray-700">formulaire anonyme disponible</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-6">
                                <h3 className="font-mono font-bold text-black mb-4">ressources d'aide</h3>
                                <div className="space-y-2">
                                    <a href="/support" className="block text-gray-700 hover:text-black transition-colors font-mono text-sm">
                                        → guide de support communautaire
                                    </a>
                                    <a href="/contribute" className="block text-gray-700 hover:text-black transition-colors font-mono text-sm">
                                        → guide de contribution
                                    </a>
                                    <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-black transition-colors font-mono text-sm">
                                        → rejoindre le discord
                                    </a>
                                    <a href="/contact" className="block text-gray-700 hover:text-black transition-colors font-mono text-sm">
                                        → nous contacter
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attribution */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-gray-200 p-8">
                            <h3 className="font-mono font-bold text-black mb-4 text-center">attribution</h3>
                            <p className="text-gray-700 font-mono text-sm text-center leading-relaxed">
                                ce code de conduite est adapté du
                                <a href="https://www.contributor-covenant.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 underline mx-1">
                                    contributor covenant
                                </a>
                                version 2.1, disponible à l'adresse
                                <a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 underline mx-1">
                                    https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="section-padding bg-black">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
                            questions sur le code de conduite ?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 font-mono">
                            notre équipe de modération est là pour clarifier toute question
                            et assurer le respect de ces règles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                contacter l'équipe
                            </Button>
                            <a href="https://discord.gg/vargafoundation" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                                    <MessageSquare className="mr-2 h-4 w-4" />
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