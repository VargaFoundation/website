import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FileText, Download, Calendar, BarChart, DollarSign, Users, TrendingUp, Eye } from "lucide-react"

export default function Rapports() {
    const rapportsActivite = [
        {
            year: "2025",
            title: "rapport d'activité 2025",
            description: "bilan complet des activités, projets réalisés et impact communautaire",
            pages: 0,
            highlights: [
                "lancement de 0 nouveaux projets opensource",
                "formation de 0+ personnes",
                "partenariats avec 0 universités"
            ],
            downloadUrl: "/documents/rapport-activite-2025.pdf",
            published: "2025-12-31",
        }
    ]

    const rapportsFinanciers = [
        {
            year: "2025",
            title: "rapport financier 2023",
            description: "comptes annuels certifiés et utilisation des fonds",
            budget: "€285,000",
            highlights: [
                "budget développement : 0%",
                "frais de fonctionnement : 0%",
                "actions communautaires : 0%"
            ],
            downloadUrl: "/documents/rapport-financier-2025.pdf",
            published: "2025-12-31",
            certified: true
        }
    ]

    const transparencyMetrics = [
        { label: "transparence financière", value: "100%", icon: DollarSign },
        { label: "rapports publiés", value: "2", icon: FileText },
        { label: "certification externe", value: "oui", icon: BarChart },
        { label: "audit annuel", value: "oui", icon: Users }
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
                            <div className="w-1 h-1 bg-black mr-2"></div>
                            transparence et gouvernance
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            rapports
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            découvrez nos rapports d'activité et financiers annuels.
                            une transparence totale sur nos actions et l'utilisation des fonds.
                        </p>

                        {/* Transparency Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                            {transparencyMetrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-3">
                                        <metric.icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-mono font-bold text-black mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-gray-600 font-mono text-sm">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rapports d'Activité */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                rapports d'activité
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                bilan annuel de nos activités, projets et impact
                            </p>
                        </div>

                        <div className="space-y-8">
                            {rapportsActivite.map((rapport, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-8">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono font-bold">
                                                    {rapport.year}
                                                </div>
                                                <h3 className="text-xl font-mono font-bold text-black">{rapport.title}</h3>
                                            </div>
                                            <p className="text-gray-600 font-mono text-sm mb-4">{rapport.description}</p>

                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">pages :</span>
                                                    <span className="text-black">{rapport.pages}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">publié le :</span>
                                                    <span className="text-black">{new Date(rapport.published).toLocaleDateString('fr-FR')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-mono font-bold text-black mb-4">points clés</h4>
                                            <ul className="space-y-2">
                                                {rapport.highlights.map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                        <div className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></div>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <a
                                                href={rapport.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mb-4"
                                            >
                                                <Button className="w-full btn-primary font-mono">
                                                    <Download className="mr-2 h-4 w-4" />
                                                    télécharger pdf
                                                </Button>
                                            </a>
                                            <Button className="w-full btn-secondary font-mono">
                                                <Eye className="mr-2 h-4 w-4" />
                                                lire en ligne
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rapports Financiers */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                rapports financiers
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                comptes annuels certifiés et transparence financière
                            </p>
                        </div>

                        <div className="space-y-8">
                            {rapportsFinanciers.map((rapport, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 p-8">
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono font-bold">
                                                    {rapport.year}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-mono font-bold text-black">{rapport.title}</h3>
                                                    {rapport.certified && (
                                                        <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 font-mono text-xs mt-1">
                                                            certifié
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 font-mono text-sm mb-4">{rapport.description}</p>

                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">budget total :</span>
                                                    <span className="text-black font-bold">{rapport.budget}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">publié le :</span>
                                                    <span className="text-black">{new Date(rapport.published).toLocaleDateString('fr-FR')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-mono font-bold text-black mb-4">répartition du budget</h4>
                                            <ul className="space-y-2">
                                                {rapport.highlights.map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start text-gray-700 font-mono text-sm">
                                                        <DollarSign className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <a
                                                href={rapport.downloadUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mb-4"
                                            >
                                                <Button className="w-full btn-primary font-mono">
                                                    <Download className="mr-2 h-4 w-4" />
                                                    télécharger pdf
                                                </Button>
                                            </a>
                                            <Button className="w-full btn-secondary font-mono">
                                                <BarChart className="mr-2 h-4 w-4" />
                                                voir les détails
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Transparency Information */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                transparence
                            </h2>
                        </div>

                        <div className="bg-white border border-gray-200 p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-mono font-bold text-black mb-4">certification</h3>
                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex items-center">
                                            <BarChart className="w-4 h-4 text-green-600 mr-3" />
                                            <span className="text-gray-700">audit externe annuel</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FileText className="w-4 h-4 text-green-600 mr-3" />
                                            <span className="text-gray-700">comptes certifiés par expert-comptable</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 text-green-600 mr-3" />
                                            <span className="text-gray-700">conseil d'administration indépendant</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-mono font-bold text-black mb-4">publication</h3>
                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 text-blue-600 mr-3" />
                                            <span className="text-gray-700">rapports publiés chaque année</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Eye className="w-4 h-4 text-blue-600 mr-3" />
                                            <span className="text-gray-700">accès libre et gratuit</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TrendingUp className="w-4 h-4 text-blue-600 mr-3" />
                                            <span className="text-gray-700">métriques d'impact détaillées</span>
                                        </div>
                                    </div>
                                </div>
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
                            questions sur nos rapports ?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 font-mono">
                            notre équipe est disponible pour répondre à vos questions
                            sur nos activités et notre gestion financière.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                                    nous contacter
                                </Button>
                            </Link>
                            <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                                <FileText className="mr-2 h-4 w-4" />
                                demander des informations
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}