import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Database, Zap, BarChart, CheckCircle2, Github, ExternalLink, Terminal, Globe, Shield, Clock, Play, ChevronRight, Copy, Heart } from "lucide-react"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { ClientCarousel } from "@/components/ClientCarousel"
import { WorldMap } from "@/components/WorldMap"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto container-padding text-center">
          <div className="max-w-5xl mx-auto">
            {/* Minimal badge */}
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              solutions opensource data & ia
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-display mb-12 text-black leading-none">
              démocratiser.
              <br />
              innover.
              <br />
              partager.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              fondation opensource dédiée aux solutions data et ia.
              <br />
              accessible à tous, éthique et communautaire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link to="/projects">
                <Button className="btn-primary px-8 py-4 text-base font-mono">
                  découvrir nos projets
                </Button>
              </Link>
              
              <Link to="/contribute">
                <Button className="btn-secondary px-8 py-4 text-base font-mono">
                  <Heart className="mr-2 h-4 w-4" />
                  contribuer
                </Button>
              </Link>
            </div>

            {/* Client Carousel */}
            <ClientCarousel />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                nos valeurs
              </h2>
              <p className="text-lg text-gray-600 font-mono max-w-2xl mx-auto">
                les principes qui guident notre action au service de la communauté.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  01
                </div>
                <h3 className="text-xl font-mono font-bold mb-4 text-black">accessibilité</h3>
                <p className="text-gray-600 text-body font-mono text-sm">
                  rendre les technologies data et ia accessibles à tous, sans barrière.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  02
                </div>
                <h3 className="text-xl font-mono font-bold mb-4 text-black">éthique</h3>
                <p className="text-gray-600 text-body font-mono text-sm">
                  développer des solutions respectueuses de la vie privée et transparentes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  03
                </div>
                <h3 className="text-xl font-mono font-bold mb-4 text-black">collaboration</h3>
                <p className="text-gray-600 text-body font-mono text-sm">
                  favoriser la collaboration et le partage de connaissances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-display mb-16 text-black">
              impact communautaire
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-black mb-2">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-gray-600 font-mono text-sm">projets actifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-black mb-2">
                  <AnimatedCounter end={12} suffix="+" />
                </div>
                <div className="text-gray-600 font-mono text-sm">contributeurs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-black mb-2">
                  <AnimatedCounter end={11} suffix="+" />
                </div>
                <div className="text-gray-600 font-mono text-sm">organisations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-mono font-bold text-black mb-2">
                  <AnimatedCounter end={3} />
                </div>
                <div className="text-gray-600 font-mono text-sm">pays</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Experience */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  nos projets
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-mono">
                  solutions opensource pour démocratiser l'accès aux technologies data et ia.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-4 font-mono text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-black mb-1">dataflow</h4>
                      <p className="text-gray-600 text-sm font-mono">plateforme de traitement de données en temps réel</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-4 font-mono text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-black mb-1">mlops</h4>
                      <p className="text-gray-600 text-sm font-mono">déploiement et gestion de modèles ml</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center mr-4 font-mono text-xs flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-black mb-1">governance</h4>
                      <p className="text-gray-600 text-sm font-mono">outils de gouvernance et qualité des données</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/*<div className="section-padding bg-gray-50 border-t border-gray-200">*/}
      {/*  <div className="container mx-auto container-padding">*/}
      {/*    <div className="max-w-4xl mx-auto">*/}
      {/*      <div className="text-center mb-16">*/}
      {/*        <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">*/}
      {/*          témoignages*/}
      {/*        </h2>*/}
      {/*      </div>*/}
      {/*      */}
      {/*      <div className="grid md:grid-cols-2 gap-8">*/}
      {/*        <div className="bg-white p-8 border border-gray-200">*/}
      {/*          <p className="text-gray-700 text-base mb-6 text-body font-mono">*/}
      {/*            "grâce à la Varga Foundation, nous avons pu déployer une solution d'analyse de données en quelques jours. l'approche opensource et éthique correspond parfaitement à nos valeurs."*/}
      {/*          </p>*/}
      {/*          <div className="flex items-center">*/}
      {/*            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">*/}
      {/*              ML*/}
      {/*            </div>*/}
      {/*            <div>*/}
      {/*              <div className="font-mono font-bold text-black text-sm">marie.laurent</div>*/}
      {/*              <div className="text-gray-600 font-mono text-xs">directrice data, ong solidaire</div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        */}
      {/*        <div className="bg-white p-8 border border-gray-200">*/}
      {/*          <p className="text-gray-700 text-base mb-6 text-body font-mono">*/}
      {/*            "la communauté Varga Foundation est incroyable. des solutions robustes, une documentation claire et un support réactif. exactement ce dont nous avions besoin."*/}
      {/*          </p>*/}
      {/*          <div className="flex items-center">*/}
      {/*            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">*/}
      {/*              PD*/}
      {/*            </div>*/}
      {/*            <div>*/}
      {/*              <div className="font-mono font-bold text-black text-sm">pierre.dubois</div>*/}
      {/*              <div className="text-gray-600 font-mono text-xs">data scientist, université paris</div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Pricing */}
      <div className="bg-gray-50 border-t border-gray-200">
        {/* Title Section */}
        <div className="py-16">
          <div className="container mx-auto container-padding">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  communauté mondiale
                </h2>
                <p className="text-lg text-gray-600 font-mono">
                  une communauté active dans le monde entier.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full Width Map */}
        <div className="w-full bg-white">
          <WorldMap />
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
              rejoignez-nous
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              participez à la démocratisation des technologies data et ia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-base font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  contribuer
                </Button>
              </a>
              <Link to="/donate">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-8 py-4 text-base font-mono">
                  <Heart className="mr-2 h-4 w-4" />
                  faire un don
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}