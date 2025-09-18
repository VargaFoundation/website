import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Users, Shield, FileText, CheckCircle, AlertTriangle, Scale, Gavel, Mail, Download } from "lucide-react"

export default function ReglementInterieur() {
    const sections = [
        {
            number: "1",
            title: "membres",
            icon: Users,
            subsections: [
                {
                    title: "1.1 modalités d'admission",
                    content: "Les candidatures pour devenir membre adhérent ou bienfaiteur, conformément à l'article 6 des statuts, sont soumises via un formulaire numérique sur le site web ou par écrit au secrétaire. Le bureau statue dans un délai de 30 jours et notifie sa décision par courriel. En cas de refus, un appel est possible devant le conseil d'administration dans un délai de 60 jours. Une non-réponse vaut pour refus."
                },
                {
                    title: "1.2 cotisations",
                    content: "La cotisation annuelle des membres adhérents est fixée à 50 euros, payable avant le 1er janvier par virement bancaire, chèque ou autre moyen précisé par le trésorier. Un reçu est délivré sur demande. Le montant peut être modifié par l'assemblée générale ordinaire, sur proposition du conseil d'administration."
                },
                {
                    title: "1.3 procédure de radiation",
                    content: "En cas de non-paiement de la cotisation (article 8 des statuts), une mise en demeure est envoyée par courrier recommandé avec accusé de réception. Sans régularisation sous 30 jours, la radiation est prononcée par le conseil d'administration. Pour un motif grave, le membre concerné est invité à présenter sa défense par écrit ou en personne au moins 15 jours avant la réunion du conseil."
                }
            ]
        },
        {
            number: "2",
            title: "fonctionnement des organes",
            icon: Shield,
            subsections: [
                {
                    title: "2.1 conseil d'administration",
                    content: "Les réunions, prévues par l'article 10 des statuts, sont convoquées par courriel avec un préavis de 7 jours, incluant l'ordre du jour. Les réunions peuvent se tenir en présentiel ou par visioconférence. Les candidatures aux postes de membres élus (article 9 des statuts) sont soumises par écrit ou via un formulaire numérique 15 jours avant l'assemblée générale. Les conflits d'intérêts, conformément à l'article 10 des statuts, sont déclarés par courriel au président ou au secrétaire avant la réunion concernée."
                },
                {
                    title: "2.2 bureau",
                    content: "Le bureau, élu par le conseil d'administration (article 9 des statuts), se réunit sur convocation du président ou à la demande de deux membres, avec un préavis de 5 jours. Le secrétaire transmet les procès-verbaux aux membres du conseil dans un délai de 15 jours après chaque réunion."
                },
                {
                    title: "2.3 assemblées générales",
                    content: "Les convocations aux assemblées générales ordinaires et extraordinaires (articles 11 et 12 des statuts) sont envoyées par courriel 15 jours avant, avec l'ordre du jour et les documents pertinents (rapports moral et financier, candidatures). Les membres peuvent soumettre des questions à l'ordre du jour par écrit au moins 15 jours avant l'assemblée."
                }
            ]
        },
        {
            number: "3",
            title: "gestion financière",
            icon: Scale,
            subsections: [
                {
                    title: "3.1 budget et comptabilité",
                    content: "Le trésorier établit un budget annuel, approuvé par le conseil d'administration avant le 31 décembre de l'année précédente, et présenté à l'assemblée générale ordinaire. Une comptabilité conforme aux normes françaises est tenue et accessible au conseil sur demande. Les dépenses supérieures à 5 000 € requièrent l'approbation du conseil d'administration."
                },
                {
                    title: "3.2 remboursement des frais",
                    content: "Les frais engagés par les membres (déplacements, matériel) sont remboursés sur justificatifs, dans la limite de 1 000 € par an et par membre, fixée par le conseil d'administration."
                },
                {
                    title: "3.3 contrôle",
                    content: "Si les subventions publiques dépassent 153 000 € par an (article 16 des statuts), les comptes sont certifiés par un commissaire aux comptes."
                }
            ]
        },
        {
            number: "4",
            title: "activités",
            icon: CheckCircle,
            subsections: [
                {
                    title: "4.1 événements",
                    content: "Les ateliers, formations et hackathons sont organisés sous la supervision du conseil d'administration. Une inscription préalable est requise pour les non-membres, avec des frais éventuels fixés par le conseil et communiqués à l'avance."
                },
                {
                    title: "4.2 dons en nature (code informatique)",
                    content: "Les dons de code (article 14 des statuts) sont accompagnés d'un contrat écrit, précisant la licence open-source et les obligations de maintenance. Un comité technique, nommé par le conseil, évalue les dons dans un délai de 30 jours. Les dépôts de code sont hébergés sur GitHub ou GitLab, avec une documentation claire et un processus de contribution défini (article 15 des statuts)."
                }
            ]
        },
        {
            number: "5",
            title: "résolution des conflits",
            icon: Gavel,
            subsections: [
                {
                    title: "",
                    content: "Les différends sont résolus à l'amiable dans la mesure du possible. En cas d'échec, une médiation est proposée par le conseil d'administration. Si nécessaire, l'assemblée générale ordinaire statue en dernier ressort."
                }
            ]
        },
        {
            number: "6",
            title: "modification",
            icon: FileText,
            subsections: [
                {
                    title: "",
                    content: "Les modifications du règlement intérieur peuvent être proposées par le conseil d'administration ou par au moins un quart des membres adhérents. Elles sont adoptées par l'assemblée générale ordinaire à la majorité simple et prennent effet immédiatement, sauf disposition contraire."
                }
            ]
        },
        {
            number: "7",
            title: "dispositions diverses",
            icon: AlertTriangle,
            subsections: [
                {
                    title: "",
                    content: "Nom et logo : L'utilisation du nom \"Varga Foundation\" et de son logo est soumise à l'autorisation écrite du président. Communication : Les communications officielles sont envoyées par courriel. Les membres doivent fournir une adresse courriel valide. Transparence : Les rapports annuels d'activité et financiers sont publiés sur le site web dans un délai de 30 jours après leur approbation par l'assemblée générale."
                }
            ]
        },
        {
            number: "8",
            title: "exercice comptable",
            icon: Scale,
            subsections: [
                {
                    title: "",
                    content: "L'exercice comptable s'étend du 1er janvier au 31 décembre de chaque année, sauf décision contraire du conseil d'administration, ratifiée par l'assemblée générale ordinaire."
                }
            ]
        },
        {
            number: "9",
            title: "entrée en vigueur",
            icon: Gavel,
            subsections: [
                {
                    title: "",
                    content: "Ce règlement intérieur entre en vigueur à la date de son adoption par l'assemblée générale ordinaire et est accessible sur le site web de l'association. Une copie est remise aux nouveaux membres."
                }
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
                            gouvernance interne
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            règlement
                            <br />
                            intérieur
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            règles de fonctionnement interne de l'association Varga Foundation.
                            adopté par l'assemblée générale ordinaire du 04 septembre 2025.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 p-6 mb-16">
                            <div className="flex items-center justify-center mb-4">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3" />
                                <span className="font-mono font-bold text-black">version en vigueur</span>
                            </div>
                            <div className="font-mono text-sm text-gray-700">
                                <div>lieu : versailles</div>
                                <div>version : 2.1</div>
                                <div>adoptée le : 04 septembre 2025</div>
                                <div>entrée en vigueur : 04 septembre 2025</div>
                            </div>
                        </div>

                        <Button className="btn-primary px-6 py-3 font-mono mb-16">
                            <Download className="mr-2 h-4 w-4" />
                            télécharger pdf
                        </Button>
                    </div>
                </div>
            </div>

            {/* Préambule */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white border border-gray-200 p-8 mb-8">
                            <h2 className="text-2xl font-mono font-bold text-black mb-6">préambule</h2>
                            <p className="text-gray-700 font-mono text-sm leading-relaxed">
                                Ce règlement intérieur, adopté conformément à l'article 18 des statuts de l'association Varga Foundation,
                                précise les modalités pratiques d'application des statuts. Il entre en vigueur à la date de son adoption
                                par l'assemblée générale ordinaire et peut être modifié selon l'article 5 ci-dessous.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles */}
            {sections.map((section, index) => (
                <div key={section.number} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-200`}>
                    <div className="container mx-auto container-padding">
                        <div className="max-w-4xl mx-auto">
                            <div className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border border-gray-200 p-8`}>
                                <div className="flex items-center mb-8">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                                        <section.icon className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-mono font-bold text-black">
                                        article {section.number} : {section.title}
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <div key={subIndex}>
                                            {subsection.title && (
                                                <h3 className="font-mono font-bold text-black mb-3">{subsection.title}</h3>
                                            )}
                                            <p className="text-gray-700 font-mono text-sm leading-relaxed">
                                                {subsection.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Contact Section */}
            <div className="section-padding bg-black">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
                            questions sur le règlement ?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 font-mono">
                            contactez le secrétaire de l'association pour toute question
                            relative au règlement intérieur.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                contacter le secrétaire
                            </Button>
                            <Link to="/contact">
                                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                                    nous contacter
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}