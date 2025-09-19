import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Users, Building, TrendingUp, Shield, CheckCircle, Mail, FileText, Calculator, Award, Clock, Target, DollarSign, HeartHandshake as Handshake, Star } from "lucide-react"
import { useState } from "react"
import {info} from "@/data/info.tsx";

export default function MecenatCompetences() {
    const [simulatorData, setSimulatorData] = useState({
        hoursPerWeek: 10,
        weeks: 44,
        annualSalary: 120000,
        hourlyRate: 120000 / (35 * 52), // Calcul automatique basé sur 35h/semaine
        annualRevenue: 220000 // CA par défaut : 500k€
    })

    const profileTypes = [
        { name: "architecte senior ia - 120k€", salary: 120000 },
        { name: "data engineer junior - 50k€", salary: 50000 },
        { name: "data engineer senior - 75k€", salary: 75000 },
        { name: "data scientist junior - 55k€", salary: 55000 },
        { name: "data scientist senior - 85k€", salary: 85000 },
        { name: "architecte data - 95k€", salary: 95000 },
        { name: "lead tech - 110k€", salary: 110000 },
        { name: "cto - 150k€", salary: 150000 }
    ]

    const handleProfileChange = (salary: number) => {
        const hourlyRate = salary / (35 * 52) // 35h/semaine, 52 semaines/an
        setSimulatorData(prev => ({
            ...prev,
            annualSalary: salary,
            hourlyRate: Math.round(hourlyRate)
        }))
    }

    const handleSalaryChange = (salary: number) => {
        const hourlyRate = salary / (35 * 52)
        setSimulatorData(prev => ({
            ...prev,
            annualSalary: salary,
            hourlyRate: Math.round(hourlyRate)
        }))
    }

    const handleHourlyRateChange = (rate: number) => {
        const annualSalary = rate * 35 * 52
        setSimulatorData(prev => ({
            ...prev,
            hourlyRate: rate,
            annualSalary: Math.round(annualSalary)
        }))
    }
    const calculateTaxBenefit = () => {
        const { hoursPerWeek, weeks, hourlyRate, annualRevenue } = simulatorData;

        // Montant total de la donation
        const totalHours = hoursPerWeek * weeks;
        const donationValue = totalHours * hourlyRate;

        // Calcul du plafond : 20 000 € ou 0,5 % du chiffre d'affaires (le plus élevé)
        const fivePerMilleCA = annualRevenue * 0.005; // 0,5 % du CA
        const donationCeiling = Math.max(fivePerMilleCA, 20000);

        // Calcul de la réduction d'impôt sur le montant éligible
        let taxReduction = 0;

        if (donationValue <= 2000000) {
            // Réduction à 60 % si le montant est <= 2M€
            taxReduction = donationValue * 0.6;
        } else {
            // Réduction à 60 % sur les 2M€ initiaux + 40 % sur le reste
            taxReduction = (2000000 * 0.6) + ((donationValue - 2000000) * 0.4);
        }

        const cappedTaxReduction = Math.min(donationCeiling, taxReduction);

        // Calcul du coût réel (donation après réduction fiscale)
        const realCost = donationValue - cappedTaxReduction;

        // Résultats renvoyés pour affichage
        const results = {
            totalHours,
            donationValue,
            fivePerMilleCA,
            donationCeiling,
            taxReduction,
            cappedTaxReduction,
            realCost,
        };

        console.log(results);
        return results;
    };

    // Fonction pour convertir une valeur linéaire (0-100) en valeur logarithmique
    const linearToLog = (linearValue: number, min: number, max: number) => {
        const logMin = Math.log(min)
        const logMax = Math.log(max)
        const scale = (logMax - logMin) / 100
        return Math.round(Math.exp(logMin + scale * linearValue))
    }

    // Fonction pour convertir une valeur logarithmique en valeur linéaire (0-100)
    const logToLinear = (logValue: number, min: number, max: number) => {
        const logMin = Math.log(min)
        const logMax = Math.log(max)
        const scale = (logMax - logMin) / 100
        return Math.round((Math.log(logValue) - logMin) / scale)
    }

    const handleRevenueChange = (linearValue: number) => {
        const logValue = linearToLog(linearValue, 150000, 50000000)
        setSimulatorData(prev => ({ ...prev, annualRevenue: logValue }))
    }

    const results = calculateTaxBenefit()

    const advantages = [
        {
            icon: DollarSign,
            title: "réduction d'impôt",
            description: "60% de réduction d'impôt sur les sociétés",
            details: [
                "réduction fiscale immédiate",
                "plafond : 20 000€ ou 0,5% du ca",
                "report possible sur 5 ans",
                "valorisation du temps salarié"
            ]
        },
        {
            icon: Users,
            title: "engagement collaborateurs",
            description: "motivation et développement des équipes",
            details: [
                "projets à impact social",
                "développement de compétences",
                "fierté d'appartenance",
                "team building solidaire"
            ]
        },
        {
            icon: Award,
            title: "image de marque",
            description: "renforcement de la réputation rse",
            details: [
                "communication positive",
                "différenciation concurrentielle",
                "attractivité employeur",
                "reconnaissance publique"
            ]
        },
        {
            icon: Target,
            title: "innovation",
            description: "accès à de nouveaux projets et technologies",
            details: [
                "veille technologique",
                "expérimentation ia/data",
                "nouvelles méthodologies",
                "réseau d'experts"
            ]
        }
    ]

    const projectTypes = [
        {
            title: "développement logiciel",
            description: "contribution au code des projets opensource",
            skills: ["développement python/java/js", "architecture logicielle", "devops", "tests"],
            duration: "3-6 mois",
            impact: "création d'outils utilisés par des milliers de personnes"
        },
        {
            title: "data science & ia",
            description: "développement de modèles et algorithmes",
            skills: ["machine learning", "data engineering", "statistiques", "visualisation"],
            duration: "2-4 mois",
            impact: "démocratisation de l'accès aux technologies ia"
        },
        {
            title: "formation & documentation",
            description: "création de contenus pédagogiques",
            skills: ["pédagogie", "rédaction technique", "design", "vidéo"],
            duration: "1-3 mois",
            impact: "formation gratuite de centaines d'apprenants"
        },
        {
            title: "gouvernance & éthique",
            description: "définition de standards éthiques",
            skills: ["juridique", "éthique", "gouvernance", "compliance"],
            duration: "2-6 mois",
            impact: "établissement de standards pour l'ia responsable"
        }
    ]

    const process = [
        {
            step: "1",
            title: "prise de contact",
            description: "discussion des besoins et objectifs",
            duration: "1 semaine"
        },
        {
            step: "2",
            title: "définition du projet",
            description: "cadrage précis de la mission",
            duration: "2 semaines"
        },
        {
            step: "3",
            title: "convention de mécénat",
            description: "signature de l'accord juridique",
            duration: "1 semaine"
        },
        {
            step: "4",
            title: "réalisation",
            description: "exécution du projet avec suivi",
            duration: "variable"
        },
        {
            step: "5",
            title: "valorisation",
            description: "reçu fiscal et communication",
            duration: "1 semaine"
        }
    ]

    const legalFramework = [
        {
            title: "cadre fiscal",
            content: "Cette opération s'inscrit dans le cadre du mécénat d'entreprise prévu par l'article 238 bis du Code général des impôts, permettant à l'Entreprise de bénéficier d'une réduction d'impôt."
        },
        {
            title: "objet de l'association",
            content: "L'Association a pour objet promouvoir l'accès à l'intelligence artificielle et aux logiciels open source pour le grand public, à travers le développement de projets collaboratifs, de formations gratuites, et de ressources éducatives sous licences libres (ex. : MIT, Apache…)."
        },
        {
            title: "engagement de l'entreprise",
            content: "Dans le cadre d'une opération de mécénat de compétences, l'Entreprise s'engage à mettre à disposition de l'Association, à titre gratuit et sans contrepartie directe ou indirecte significative, les compétences de ses salariés ou son gérant non salarié pour la réalisation d'un projet d'intérêt général."
        },
        {
            title: "suivi et transparence",
            content: "L'Association met à disposition une solution de timesheet pour le suivi du temps consacré au projet, afin de garantir une valorisation transparente du don."
        },
        {
            title: "contreparties autorisées",
            content: "Les contreparties accordées à l'Entreprise seront symboliques et ne dépasseront pas 25 % de la valeur du don, conformément à l'article 238 bis du Code général des impôts."
        }
    ]

    const contreparties = [
        "Une mention de l'Entreprise dans les crédits du projet (ex. : fichier README, documentation, dépôt Git)",
        "Une communication publique sur le projet, avec l'accord préalable de l'Entreprise (ex. : réseaux sociaux)",
        "L'utilisation du logo de l'Entreprise dans les supports du projet, selon ses guidelines"
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
                            <div className="w-1 h-1 bg-black mr-2"></div>
                            partenariats entreprises
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            mécénat de
                            <br />
                            compétences
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            engagez vos équipes dans des projets à impact social tout en bénéficiant
                            d'avantages fiscaux et d'un renforcement de votre image rse.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="btn-primary px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                nous contacter
                            </Button>
                            </a>
                            <Button className="btn-secondary px-6 py-3 font-mono">
                                <FileText className="mr-2 h-4 w-4" />
                                télécharger la plaquette
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantages Section */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                avantages pour votre entreprise
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {advantages.map((advantage, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                                            <advantage.icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-mono font-bold text-black">{advantage.title}</h3>
                                    </div>
                                    <p className="text-gray-600 font-mono text-sm mb-6">
                                        {advantage.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {advantage.details.map((detail, detailIndex) => (
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

            {/* Project Types Section */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                types de projets
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                missions adaptées aux compétences de vos équipes
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {projectTypes.map((project, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono text-sm">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-lg font-mono font-bold text-black">{project.title}</h3>
                                    </div>

                                    <p className="text-gray-600 font-mono text-sm mb-4">{project.description}</p>

                                    <div className="space-y-3 font-mono text-sm">
                                        <div>
                                            <span className="text-gray-600">compétences :</span>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="inline-flex items-center px-2 py-1 bg-white text-gray-700 text-xs border border-gray-300">
                            {skill}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">durée :</span>
                                            <span className="text-black">{project.duration}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">impact :</span>
                                            <div className="text-black mt-1">{project.impact}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                processus
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {process.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                                        {step.step}
                                    </div>
                                    <div className="bg-white border border-gray-200 p-6 flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-mono font-bold text-black">{step.title}</h3>
                                            <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 font-mono text-xs">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {step.duration}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 font-mono text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Framework Section */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                cadre juridique
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {legalFramework.map((item, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                                    <h3 className="font-mono font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-gray-700 font-mono text-sm leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contreparties Section */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                contreparties autorisées
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                contreparties symboliques ≤ 25% de la valeur du don
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 p-8">
                            <ul className="space-y-4">
                                {contreparties.map((contrepartie, index) => (
                                    <li key={index} className="flex items-start text-gray-700 font-mono text-sm">
                                        <Star className="w-4 h-4 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                                        {contrepartie}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculator Section */}
            <div className="section-padding bg-white border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                                simulateur fiscal
                            </h2>
                            <p className="text-lg text-gray-600 font-mono">
                                calculez votre réduction d'impôt en temps réel
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Simulateur */}
                            <div className="bg-gray-50 border border-gray-200 p-8">
                                <h3 className="font-mono font-bold text-black mb-6 flex items-center">
                                    <Calculator className="w-5 h-5 mr-2" />
                                    paramètres du projet
                                </h3>

                                <div className="space-y-6">
                                    {/* Profils types */}
                                    <div>
                                        <label className="block font-mono text-sm text-black mb-3">profil type</label>
                                        <select
                                            value={simulatorData.annualSalary}
                                            onChange={(e) => handleProfileChange(parseInt(e.target.value))}
                                            className="w-full px-4 py-3 bg-white text-black border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                                        >
                                            {profileTypes.map((profile, index) => (
                                                <option key={index} value={profile.salary}>
                                                    {profile.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Chiffre d'affaires annuel */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">chiffre d'affaires annuel (€)</label>
                                            <span className="font-mono text-sm text-gray-600">{simulatorData.annualRevenue.toLocaleString()}€</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={logToLinear(simulatorData.annualRevenue, 150000, 50000000)}
                                            onChange={(e) => handleRevenueChange(parseInt(e.target.value))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>150k€ (50% = 500k€)</span>
                                            <span>50M€</span>
                                        </div>
                                    </div>

                                    {/* Salaire brut annuel */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">salaire brut annuel (€)</label>
                                            <span className="font-mono text-sm text-gray-600">{simulatorData.annualSalary.toLocaleString()}€</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="35000"
                                            max="200000"
                                            step="1000"
                                            value={simulatorData.annualSalary}
                                            onChange={(e) => handleSalaryChange(parseInt(e.target.value))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>35k€</span>
                                            <span>200k€</span>
                                        </div>
                                    </div>

                                    {/* Coût horaire (calculé automatiquement) */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">coût horaire (€)</label>
                                            <span className="font-mono text-sm text-gray-600">{simulatorData.hourlyRate}€/h</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="20"
                                            max="120"
                                            value={simulatorData.hourlyRate}
                                            onChange={(e) => handleHourlyRateChange(parseInt(e.target.value))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>20€</span>
                                            <span>120€</span>
                                        </div>
                                        <div className="text-xs text-gray-500 font-mono mt-2">
                                            basé sur 35h/semaine, 52 semaines/an
                                        </div>
                                    </div>

                                    {/* Heures par semaine */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">heures par semaine</label>
                                            <span className="font-mono text-sm text-gray-600">{simulatorData.hoursPerWeek}h</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="20"
                                            value={simulatorData.hoursPerWeek}
                                            onChange={(e) => setSimulatorData(prev => ({ ...prev, hoursPerWeek: parseInt(e.target.value) }))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>1h</span>
                                            <span>20h</span>
                                        </div>
                                    </div>

                                    {/* Nombre de semaines */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="font-mono text-sm text-black">durée (semaines)</label>
                                            <span className="font-mono text-sm text-gray-600">{simulatorData.weeks} semaines</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="4"
                                            max="52"
                                            value={simulatorData.weeks}
                                            onChange={(e) => setSimulatorData(prev => ({ ...prev, weeks: parseInt(e.target.value) }))}
                                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer slider"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500 font-mono mt-1">
                                            <span>4 sem</span>
                                            <span>52 sem</span>
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
                                <div>
                                    <div className="space-y-4 font-mono text-sm">
                                        {/* Temps total et coût horaire */}
                                        <div className="bg-gray-50 p-4">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">temps total :</span>
                                                <span className="text-black font-bold">{results.totalHours} heures</span>
                                            </div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">coût horaire :</span>
                                                <span className="text-black">{simulatorData.hourlyRate}€/h</span>
                                            </div>
                                            <div className="flex justify-between border-t border-gray-300 pt-2">
                                                <span className="text-gray-600">valeur du don :</span>
                                                <span className="text-black font-bold">{results.donationValue.toLocaleString()}€</span>
                                            </div>
                                        </div>

                                        {/* Plafond et dons éligibles */}
                                        <div className="bg-green-50 p-4 border border-green-200">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-gray-600">plafond réduction d'impôts :</span>
                                                <span className="text-black font-bold">{results.donationCeiling.toLocaleString()}€</span>
                                            </div>
                                            <div className="flex justify-between mb-2 text-xs">
                                                <span className="text-gray-500">5‰ du CA :</span>
                                                <span className="text-gray-500">{results.fivePerMilleCA.toLocaleString()}€</span>
                                            </div>
                                            <div className="flex justify-between mb-2 text-xs">
                                                <span className="text-gray-500">minimum légal :</span>
                                                <span className="text-gray-500">20 000€</span>
                                            </div>
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
                                                {Math.round((results.cappedTaxReduction / results.donationValue) * 100)}% d'économie
                                            </div>
                                            <div className="text-xs text-gray-600 font-mono">
                                                sur le coût total du projet
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 font-mono text-sm mb-4">
                                * calcul indicatif basé sur l'article 238 bis du cgi
                            </p>
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="btn-primary font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                demander une étude personnalisée
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="section-padding bg-black">
                <div className="container mx-auto container-padding">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
                            intéressé par un partenariat ?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 font-mono">
                            contactez un responsable de l'association pour discuter
                            des opportunités de mécénat de compétences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                                <Mail className="mr-2 h-4 w-4" />
                                contacter un responsable
                            </Button>
                            </a>

                            <a href="mailto:mecenat@varga.foundation">
                            <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                                <Handshake className="mr-2 h-4 w-4" />
                                planifier un rendez-vous
                            </Button>
                            </a>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <p className="text-gray-400 font-mono text-sm">
                                {info.mail.mecenat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}