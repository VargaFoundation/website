import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Heart, Users, Shield, Lightbulb, CheckCircle, CreditCard, Building, Award, Target } from "lucide-react"
import { useState } from "react"

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [donationType, setDonationType] = useState<'monthly' | 'once'>('monthly')

  const predefinedAmounts = [10, 25, 50, 100, 250, 500]

  const impactLevels = [
    {
      amount: 10,
      title: "supporter",
      impact: "finance 1 heure de développement",
      benefits: ["remerciement public", "newsletter exclusive"]
    },
    {
      amount: 25,
      title: "contributeur",
      impact: "finance 2.5 heures de développement",
      benefits: ["badge contributeur", "accès early access", "newsletter exclusive"]
    },
    {
      amount: 50,
      title: "sponsor",
      impact: "finance 5 heures de développement",
      benefits: ["mention sur le site", "rapport d'impact trimestriel", "invitation aux événements"]
    },
    {
      amount: 100,
      title: "mécène",
      impact: "finance 10 heures de développement",
      benefits: ["logo sur le site", "rapport personnalisé", "appel avec l'équipe"]
    }
  ]

  const usageBreakdown = [
    {
      category: "développement",
      percentage: 60,
      description: "salaires développeurs, infrastructure technique"
    },
    {
      category: "communauté",
      percentage: 20,
      description: "événements, formation, support communauté"
    },
    {
      category: "infrastructure",
      percentage: 15,
      description: "serveurs, outils, licences logicielles"
    },
    {
      category: "administration",
      percentage: 5,
      description: "frais légaux, comptabilité, gouvernance"
    }
  ]

  const corporateSponsors = [
    {
      name: "LAYER4",
      logo: "L4",
      tier: "argent",
      contribution: "1 000€/an"
    },
    {
      name: "ackware",
      logo: "AW",
      tier: "argent",
      contribution: "1 000€/an"
    }
  ]

  const getCurrentImpact = () => {
    return impactLevels.find(level => level.amount <= selectedAmount) || impactLevels[0]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              soutenir notre mission
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              faire un don
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              soutenez le développement de solutions opensource data et ia 
              accessibles à tous. chaque contribution compte.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">12+</div>
                <div className="text-gray-600 font-mono text-sm">donateurs en 2025 (prévisionnel)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">€180k</div>
                <div className="text-gray-600 font-mono text-sm">collectés en 2025 (prévisionnel)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">5+</div>
                <div className="text-gray-600 font-mono text-sm">projets financés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">95%</div>
                <div className="text-gray-600 font-mono text-sm">pour les projets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-mono font-bold text-black mb-6">choisir votre contribution</h2>
                  
                  {/* Donation Type */}
                  <div className="mb-6">
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={() => setDonationType('monthly')}
                        className={`px-4 py-2 font-mono text-sm transition-colors ${
                          donationType === 'monthly' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        mensuel
                      </button>
                      <button
                        onClick={() => setDonationType('once')}
                        className={`px-4 py-2 font-mono text-sm transition-colors ${
                          donationType === 'once' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ponctuel
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block font-mono text-sm text-black mb-3">montant (€)</label>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {predefinedAmounts.map(amount => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`p-3 font-mono text-sm border transition-colors ${
                            selectedAmount === amount
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                          }`}
                        >
                          {amount}€
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 font-mono text-sm focus:outline-none focus:border-black"
                      placeholder="montant personnalisé"
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <label className="block font-mono text-sm text-black mb-3">méthode de paiement</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="payment" className="mr-3" defaultChecked />
                        <CreditCard className="w-4 h-4 mr-2" />
                        <span className="font-mono text-sm">carte bancaire</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="payment" className="mr-3" />
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-mono text-sm">virement bancaire</span>
                      </label>
                    </div>
                  </div>

                  <Button className="w-full btn-primary py-3 font-mono">
                    <Heart className="mr-2 h-4 w-4" />
                    faire un don de {selectedAmount}€{donationType === 'monthly' ? '/mois' : ''}
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-mono font-bold text-black mb-4">votre impact</h3>
                  
                  <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 text-black mr-3" />
                      <span className="font-mono font-bold text-black">{getCurrentImpact().title}</span>
                    </div>
                    <p className="text-gray-600 font-mono text-sm mb-4">{getCurrentImpact().impact}</p>
                    
                    <h4 className="font-mono font-bold text-black mb-2 text-sm">avantages inclus :</h4>
                    <ul className="space-y-1">
                      {getCurrentImpact().benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700 font-mono text-xs">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600 font-mono text-xs mb-2">
                      don déductible des impôts à 66%
                    </p>
                    <p className="text-black font-mono text-sm font-bold">
                      coût réel : {Math.round(selectedAmount * 0.34)}€
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Breakdown */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                utilisation des fonds
              </h2>
              <p className="text-lg text-gray-600 font-mono">
                transparence totale sur l'utilisation de vos dons
              </p>
            </div>
            
            <div className="space-y-6">
              {usageBreakdown.map((usage, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono font-bold text-black">{usage.category}</h3>
                    <span className="font-mono font-bold text-black">{usage.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 mb-3">
                    <div 
                      className="bg-black h-2"
                      style={{ width: `${usage.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600 font-mono text-sm">{usage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Sponsors */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                nos mécènes
              </h2>
              <p className="text-lg text-gray-600 font-mono">
                entreprises qui soutiennent notre mission
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {corporateSponsors.map((sponsor, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 text-center">
                  <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-lg">
                    {sponsor.logo}
                  </div>
                  <h3 className="font-mono font-bold text-black mb-2">{sponsor.name}</h3>
                  <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 font-mono text-xs mb-2">
                    {sponsor.tier}
                  </div>
                  <p className="text-gray-600 font-mono text-sm">{sponsor.contribution}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-mono text-sm mb-4">
                votre entreprise souhaite nous soutenir ?
              </p>
              <Button className="btn-secondary font-mono">
                <Building className="mr-2 h-4 w-4" />
                mécénat d'entreprise
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Ways to Help */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                autres façons d'aider
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-3 text-black">contribuer</h3>
                <p className="text-gray-600 font-mono text-sm mb-4">
                  participez au développement de nos projets opensource
                </p>
                <Link to="/contribute">
                  <Button className="btn-secondary text-sm font-mono">
                    en savoir plus
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-3 text-black">partager</h3>
                <p className="text-gray-600 font-mono text-sm mb-4">
                  faites connaître nos projets autour de vous
                </p>
                <Button className="btn-secondary text-sm font-mono">
                  partager
                </Button>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-mono font-bold mb-3 text-black">utiliser</h3>
                <p className="text-gray-600 font-mono text-sm mb-4">
                  adoptez nos solutions dans vos projets
                </p>
                <Link to="/projects">
                  <Button className="btn-secondary text-sm font-mono">
                    découvrir
                  </Button>
                </Link>
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
              merci pour votre soutien
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              ensemble, nous démocratisons l'accès aux technologies data et ia 
              pour créer un monde plus équitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                <Heart className="mr-2 h-4 w-4" />
                faire un don maintenant
              </Button>
              <Link to="/mission">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  découvrir notre mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}