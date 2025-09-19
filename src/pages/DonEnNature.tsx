import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Code, Building, Shield, FileText, CheckCircle, Mail, Github, Award, Clock, Users, Target, DollarSign, Scale, Eye, Download, ArrowRight, Server, Monitor, Cpu, HardDrive, Cable } from "lucide-react"
import { useState } from "react"

export default function DonEnNature() {
    const [projectValue, setProjectValue] = useState(50000)
    const [companyRevenue, setCompanyRevenue] = useState(500000)

    const donationTypes = [
        {
            icon: Code,
            title: "code source",
            description: "logiciels, applications, bibliothèques développés en interne",
            examples: [
                "outils de data processing",
                "frameworks ml/ia",
                "applications métier",
                "bibliothèques techniques"
            ],
            requirements: [
                "code documenté et testé",
                "licence opensource compatible",
                "valeur économique démontrable",
                "intérêt pour la communauté"
            ]
        },
        {
            icon: Server,
            title: "matériel informatique",
            description: "équipements informatiques et infrastructure technique",
            examples: [
                "serveurs et stations de travail",
                "onduleurs et équipements réseau",
                "baies informatiques et accessoires",
                "ordinateurs portables ou fixes",
                "écrans et périphériques",
                "câbles réseau et d'alimentation"
            ],
            requirements: [
                "matériel en bon état de fonctionnement",
                "documentation technique disponible",
                "évaluation par expert si > 7 500€",
                "utilité pour nos projets"
            ]
        },
        {
            icon: Shield,
            title: "propriété intellectuelle",
            description: "brevets, algorithmes, méthodologies propriétaires",
            examples: [
                "algorithmes d'optimisation",
                "méthodes de traitement",
                "architectures innovantes",
                "processus métier"
            ],
            requirements: [
                "documentation technique complète",
                "transfert de propriété clair",
                "évaluation par expert",
                "compatibilité opensource"
            ]
        },
        {
            icon: FileText,
            title: "documentation & données",
            description: "documentation technique, datasets, formations",
            examples: [
                "guides techniques",
                "datasets anonymisés",
                "formations internes",
                "bonnes pratiques"
            ],
            requirements: [
                "contenu original",
                "droits de diffusion",
                "anonymisation si nécessaire",
                "valeur pédagogique"
            ]
        }
    ]

    const evaluationCriteria = [
        {
            category: "technique",
            weight: "40%",
            criteria: [
                "qualité du code et architecture",
                "documentation et tests",
                "maintenabilité et évolutivité",
                "standards de développement",
                "état du matériel (si applicable)"
            ]
        },
        {
            category: "impact",
            weight: "30%",
            criteria: [
                "utilité pour la communauté",
                "potentiel d'adoption",
                "innovation et originalité",
                "alignement avec notre mission",
                "besoins infrastructure (matériel)"
            ]
        },
        {
            category: "juridique",
            weight: "20%",
            criteria: [
                "propriété intellectuelle claire",
                "absence de dépendances propriétaires",
                "compatibilité licence opensource",
                "conformité réglementaire",
                "certificats de conformité (matériel)"
            ]
        },
        {
            category: "économique",
            weight: "10%",
            criteria: [
                "coût de développement",
                "valeur marchande",
                "économies générées",
                "retour sur investissement",
                "coût de maintenance évité"
            ]
        }
    ]

    const process = [
        {
            step: "1",
            title: "évaluation préliminaire",
            description: "analyse de faisabilité et d'intérêt du projet",
            duration: "1-2 semaines",
            deliverables: ["rapport d'évaluation", "estimation de valeur"]
        },
        {
            step: "2",
            title: "audit technique",
            description: "revue approfondie du code/matériel et de la documentation",
            duration: "2-4 semaines",
            deliverables: ["audit de sécurité", "plan de migration", "évaluation qualité", "test matériel (si applicable)"]
        },
        {
            step: "3",
            title: "valorisation économique",
            description: "estimation de la valeur du don par expert indépendant",
            duration: "1-2 semaines",
            deliverables: ["rapport d'expertise", "certificat de valeur"]
        },
        {
            step: "4",
            title: "préparation juridique",
            description: "vérification des droits et préparation des contrats",
            duration: "2-3 semaines",
            deliverables: ["contrat de don", "transfert de propriété", "licence opensource"]
        },
        {
            step: "5",
            title: "intégration",
            description: "migration vers nos infrastructures, installation matériel et publication",
            duration: "3-6 semaines",
            deliverables: ["repository public", "documentation", "communication", "mise en service matériel"]
        },
        {
            step: "6",
            title: "reçu fiscal",
            description: "émission du reçu fiscal pour la réduction d'impôt",
            duration: "1 semaine",
            deliverables: ["reçu fiscal officiel", "rapport d'impact"]
        }
    ]

    const legalFramework = [
        {
            title: "cadre fiscal",
            content: "Les dons en nature (code source et matériel informatique) sont éligibles à la réduction d'impôt de 60% (puis 40% au-delà de 2M€) prévue par l'article 238 bis du CGI, sous réserve d'une évaluation par un expert indépendant."
        },
        {
            title: "évaluation obligatoire",
            content: "Pour les dons supérieurs à 7 500€, une évaluation par un expert indépendant est obligatoire. L'expert doit être agréé et indépendant du donateur. Pour le matériel, l'évaluation se base sur la valeur vénale."
        },
        {
            title: "transfert de propriété",
            content: "Le don doit constituer un transfert définitif et irrévocable de la propriété (code source ou matériel), sans contrepartie directe ou indirecte."
        },
        {
            title: "licence opensource",
            content: "Le code donné doit être publié sous une licence opensource reconnue (Apache 2.0, MIT, GPL, etc.) pour garantir l'intérêt général. Le matériel est utilisé pour nos infrastructures communautaires."
        }
    ]

    // Calcul de la réduction d'impôt
    const calculateTaxBenefit = () => {
        const fivePerMilleCA = companyRevenue * 0.005
        const donationCeiling = Math.max(fivePerMilleCA, 20000)

        // Calcul de la réduction d'impôt sur le montant éligible
        let taxReduction = 0;

        if (projectValue <= 2000000) {
            // Réduction à 60 % si le montant est <= 2M€
            taxReduction = projectValue * 0.6;
        } else {
            // Réduction à 60 % sur les 2M€ initiaux + 40 % sur le reste
            taxReduction = (2000000 * 0.6) + ((projectValue - 2000000) * 0.4);
        }

        const cappedTaxReduction = Math.min(donationCeiling, taxReduction);

        // Calcul du coût réel (donation après réduction fiscale)
        const realCost = projectValue - cappedTaxReduction;

        return {
            fivePerMilleCA,
            donationCeiling,
            cappedTaxReduction,
            taxReduction,
            realCost
        }
    }

    const results = calculateTaxBenefit()

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
                            <div className="w-1 h-1 bg-black mr-2"></div>
                            mécénat d'entreprise
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            don en nature
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            donnez vos projets informatiques et matériel technique à la communauté opensource
                            et bénéficiez d'avantages fiscaux significatifs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="btn-primary px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                proposer un projet
                            </Button>
                            </a>
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="btn-secondary px-6 py-3 font-mono">
                                <FileText className="mr-2 h-4 w-4" />
                                guide du donateur
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types de dons */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                types de dons acceptés
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                code source, matériel informatique et propriété intellectuelle
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {donationTypes.map((type, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                                            <type.icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-lg font-mono font-bold text-black">{type.title}</h3>
                                    </div>

                                    <p className="text-gray-600 font-mono text-sm mb-6">{type.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-mono font-bold text-black mb-3 text-sm">exemples :</h4>
                                        <ul className="space-y-1">
                                            {type.examples.map((example, exampleIndex) => (
                                                <li key={exampleIndex} className="text-gray-700 font-mono text-xs flex items-center">
                                                    <div className="w-1 h-1 bg-gray-400 mr-2"></div>
                                                    {example}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-mono font-bold text-black mb-3 text-sm">prérequis :</h4>
                                        <ul className="space-y-1">
                                            {type.requirements.map((req, reqIndex) => (
                                                <li key={reqIndex} className="flex items-start text-gray-700 font-mono text-xs">
                                                    <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    {req}
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

            {/* Simulateur fiscal */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                simulateur fiscal
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                calculez votre réduction d'impôt pour un don de code source
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Paramètres */}
                            <div className="bg-gray-50 border border-gray-200 p-8">
                                <h3 className="font-mono font-bold text-black mb-6">paramètres du don</h3>

                                <div className="space-y-6">
                                    {/* Chiffre d'affaires */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">chiffre d'affaires annuel (€)</label>
                                            <span className="font-mono text-sm text-gray-600">{companyRevenue.toLocaleString()}€</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={Math.round((Math.log(companyRevenue) - Math.log(150000)) / ((Math.log(50000000) - Math.log(150000)) / 100))}
                                            onChange={(e) => {
                                                const linearValue = parseInt(e.target.value)
                                                const logMin = Math.log(150000)
                                                const logMax = Math.log(50000000)
                                                const scale = (logMax - logMin) / 100
                                                const logValue = Math.round(Math.exp(logMin + scale * linearValue))
                                                setCompanyRevenue(logValue)
                                            }}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>150k€</span>
                                            <span className="text-center">(50% = 500k€)</span>
                                            <span>50M€</span>
                                        </div>
                                    </div>

                                    {/* Valeur du projet */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">valeur du projet (€)</label>
                                            <span className="font-mono text-sm text-gray-600">{projectValue.toLocaleString()}€</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5000"
                                            max="500000"
                                            step="5000"
                                            value={projectValue}
                                            onChange={(e) => setProjectValue(parseInt(e.target.value))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>5k€</span>
                                            <span>500k€</span>
                                        </div>
                                        <div className="text-xs text-gray-500 font-mono mt-2">
                                            {"évaluation par expert indépendant si > 7 500€"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Résultats */}
                            <div className="bg-white border border-gray-200 p-8">
                                <h3 className="font-mono font-bold text-black mb-6 flex items-center">
                                    <DollarSign className="w-5 h-5 mr-2" />
                                    calcul de la réduction
                                </h3>

                                <div className="space-y-4 font-mono text-sm">
                                    <div className="bg-gray-50 p-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">valeur du don :</span>
                                            <span className="text-black font-bold">{projectValue.toLocaleString()}€</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">5‰ du CA :</span>
                                            <span className="text-black">{results.fivePerMilleCA.toLocaleString()}€</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">minimum légal :</span>
                                            <span className="text-black">20 000€</span>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-300 pt-2">
                                            <span className="text-gray-600">plafond dons éligibles :</span>
                                            <span className="text-black font-bold">{results.donationCeiling.toLocaleString()}€</span>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 p-4 border border-green-200">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">réduction d'impôts :</span>
                                            <span className="text-gray-500 font-bold">{results.taxReduction.toLocaleString()}€</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">réduction d'impôts après plafond :</span>
                                            <span className="text-green-600 font-bold">{results.cappedTaxReduction.toLocaleString()}€</span>
                                        </div>
                                        <div className="flex justify-between border-t border-green-300 pt-2">
                                            <span className="text-gray-600">coût réel :</span>
                                            <span className="text-black font-bold">{results.realCost.toLocaleString()}€</span>
                                        </div>
                                    </div>

                                    {/* Notification plafond atteint */}
                                    {results.taxReduction > results.cappedTaxReduction && (
                                        <div className="bg-yellow-50 p-4 border border-yellow-200">
                                            <div className="text-yellow-800 font-mono text-xs">
                                                ⚠️ plafond dons éligibles atteint : {results.cappedTaxReduction.toLocaleString()}€
                                                <br />
                                                seuls {results.cappedTaxReduction.toLocaleString()}€ sont éligibles à la réduction
                                            </div>
                                        </div>
                                    )}

                                    {/* Résumé et pourcentage d'économie */}
                                    <div className="text-center pt-4">
                                        <div className="text-2xl font-mono font-bold text-green-600 mb-1">
                                            {Math.round((results.cappedTaxReduction / projectValue) * 100)}% d'économie
                                        </div>
                                        <div className="text-xs text-gray-600 font-mono">
                                            sur le coût total du projet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Critères d'évaluation */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                critères d'évaluation
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                comment nous évaluons la valeur et l'intérêt de votre don
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {evaluationCriteria.map((category, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-mono font-bold text-black">{category.category}</h3>
                                        <span className="font-mono text-sm text-gray-600">{category.weight}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.criteria.map((criterion, criterionIndex) => (
                                            <li key={criterionIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                {criterion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Processus */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                processus de don
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {process.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                                        {step.step}
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 p-6 flex-1">
                                        <div className="grid lg:grid-cols-3 gap-6">
                                            <div>
                                                <h3 className="text-lg font-mono font-bold text-black mb-2">{step.title}</h3>
                                                <div className="inline-flex items-center px-2 py-1 bg-white text-gray-700 font-mono text-xs mb-3">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {step.duration}
                                                </div>
                                                <p className="text-gray-600 font-mono text-sm">{step.description}</p>
                                            </div>
                                            <div className="lg:col-span-2">
                                                <h4 className="font-mono font-bold text-black mb-3 text-sm">livrables :</h4>
                                                <ul className="space-y-1">
                                                    {step.deliverables.map((deliverable, deliverableIndex) => (
                                                        <li key={deliverableIndex} className="flex items-center text-gray-700 font-mono text-sm">
                                                            <div className="w-2 h-2 bg-black mr-3 flex-shrink-0"></div>
                                                            {deliverable}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cadre juridique */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                cadre juridique
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {legalFramework.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    <h3 className="font-mono font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-gray-700 font-mono text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Avantages */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                avantages pour votre entreprise
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-mono font-bold mb-3 text-black">réduction fiscale</h3>
                                <p className="text-gray-600 font-mono text-sm">
                                    jusqu'à 60% de réduction d'impôt sur la valeur du don
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-mono font-bold mb-3 text-black">image rse</h3>
                                <p className="text-gray-600 font-mono text-sm">
                                    renforcement de votre engagement societal et innovation
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-mono font-bold mb-3 text-black">visibilité</h3>
                                <p className="text-gray-600 font-mono text-sm">
                                    reconnaissance publique et valorisation de vos équipes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="section-padding bg-black">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
                            prêt à faire un don ?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 font-mono">
                            contactez notre équipe pour évaluer votre projet et
                            démarrer le processus de don en nature.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                proposer un projet
                            </Button>
                            </a>

                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                                <FileText className="mr-2 h-4 w-4" />
                                télécharger le guide
                            </Button>
                            </a>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <p className="text-gray-400 font-mono text-sm">
                                mecenat@varga.foundation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}