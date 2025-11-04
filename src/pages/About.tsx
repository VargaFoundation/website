import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Users, Target, Zap, Heart, Award, Globe, TrendingUp, Shield, Clock, Star, ArrowRight, Github, Twitter, Mail } from "lucide-react"
import { AnimatedCounter } from "@/components/AnimatedCounter"

export default function About() {
  const teamMembers = [
    {
      name: "vincent.devillers",
      role: "ceo & founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "15 years building data infrastructure. former google, netflix.",
      github: "https://github.com/alexchen",
      twitter: "https://twitter.com/alexchen"
    },
    {
      name: "marie.dubois",
      role: "cto",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      bio: "distributed systems expert. phd computer science.",
      github: "https://github.com/mariedubois",
      twitter: "https://twitter.com/mariedubois"
    },
    {
      name: "thomas.martin",
      role: "head of product",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      bio: "product strategy. former airbnb, stripe.",
      github: "https://github.com/thomasmartin",
      twitter: "https://twitter.com/thomasmartin"
    },
    {
      name: "sophie.lambert",
      role: "head of engineering",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      bio: "kubernetes core contributor. open source advocate.",
      github: "https://github.com/sophielambert",
      twitter: "https://twitter.com/sophielambert"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "open",
      description: "100% open source. no vendor lock-in. complete transparency."
    },
    {
      icon: Heart,
      title: "simple",
      description: "complex problems, simple solutions. minimal configuration."
    },
    {
      icon: Shield,
      title: "reliable",
      description: "battle-tested in production."
    },
    {
      icon: Zap,
      title: "fast",
      description: "optimized for performance. sub-millisecond latency."
    }
  ]

  const milestones = [
    {
      year: "2024",
      title: "based",
      description: "started as independent modules at layer4"
    },
    {
      year: "2025",
      title: "founded",
      description: "founded in public"
    },
    {
      year: "2025",
      title: "open sourced",
      description: "projects released under apache 2.0 license"
    },
    // {
    //   year: "2025",
    //   title: "1k+ users",
    //   description: "adopted by major tech companies"
    // },
    // {
    //   year: "2026",
    //   title: "v2.0 release",
    //   description: "complete rewrite. kubernetes native."
    // },
    // {
    //   year: "2027",
    //   title: "enterprise ready",
    //   description: "production deployments at scale"
    // }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              founded 2025 • paris, france
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              about
              <br />
              varga.foundation
            </h1>

            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              we believe data infrastructure should be simple, reliable, and open.
              <br />
              no complexity. no vendor lock-in. just pure performance.
            </p>

            {/* Stats */}
            {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">*/}
            {/*  <div className="text-center">*/}
            {/*    <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">*/}
            {/*      <AnimatedCounter end={1000} suffix="+" />*/}
            {/*    </div>*/}
            {/*    <div className="text-gray-600 font-mono text-sm">developers</div>*/}
            {/*  </div>*/}
            {/*  <div className="text-center">*/}
            {/*    <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">*/}
            {/*      <AnimatedCounter end={50} suffix="+" />*/}
            {/*    </div>*/}
            {/*    <div className="text-gray-600 font-mono text-sm">companies using our prodcuts</div>*/}
            {/*  </div>*/}
            {/*  <div className="text-center">*/}
            {/*    <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">*/}
            {/*      <AnimatedCounter end={99} suffix="%" />*/}
            {/*    </div>*/}
            {/*    <div className="text-gray-600 font-mono text-sm">uptime</div>*/}
            {/*  </div>*/}
            {/*  <div className="text-center">*/}
            {/*    <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">*/}
            {/*      <AnimatedCounter end={4} suffix=" years" />*/}
            {/*    </div>*/}
            {/*    <div className="text-gray-600 font-mono text-sm">in production</div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                  mission
                </h2>
                <p className="text-lg text-gray-700 mb-6 text-body font-mono">
                  democratize access to enterprise-grade data infrastructure.
                </p>
                <p className="text-gray-600 mb-8 text-body font-mono">
                  every company deserves the same data capabilities as tech giants.
                  we're building the tools to make that possible.
                  open source. universal. simple.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary font-mono">
                      <Github className="mr-2 h-4 w-4" />
                      github
                    </Button>
                  </a>
                  <Link to="/features">
                    <Button className="btn-secondary font-mono">
                      features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white border border-gray-200 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                        01
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-black">universal deployment</h3>
                        <p className="text-gray-600 text-sm font-mono">kubernetes, docker, bare metal</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                        02
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-black">zero vendor lock-in</h3>
                        <p className="text-gray-600 text-sm font-mono">100% open source stack</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                        03
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-black">production ready</h3>
                        <p className="text-gray-600 text-sm font-mono">battle-tested at scale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
              values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-4 text-black">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-body font-mono text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
              timeline
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-white border border-gray-300 flex items-center justify-center mr-6 font-mono font-bold text-black flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="bg-white border border-gray-200 p-6 flex-1">
                    <h3 className="text-lg font-mono font-bold text-black mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 font-mono text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/*<div className="section-padding bg-white border-t border-gray-200">*/}
      {/*  <div className="container mx-auto container-padding">*/}
      {/*    <div className="max-w-6xl mx-auto">*/}
      {/*      <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">*/}
      {/*        team*/}
      {/*      </h2>*/}
      {/*      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
      {/*        {teamMembers.map((member, index) => (*/}
      {/*          <div key={index} className="text-center">*/}
      {/*            <div className="relative mb-6">*/}
      {/*              <img */}
      {/*                src={member.image} */}
      {/*                alt={member.name}*/}
      {/*                className="w-24 h-24 object-cover mx-auto border border-gray-200"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <h3 className="text-base font-mono font-bold mb-2 text-black">*/}
      {/*              {member.name}*/}
      {/*            </h3>*/}
      {/*            <p className="text-gray-600 font-mono text-sm mb-3">{member.role}</p>*/}
      {/*            <p className="text-gray-600 text-xs mb-4 font-mono">{member.bio}</p>*/}
      {/*            <div className="flex justify-center space-x-2">*/}
      {/*              <a */}
      {/*                href={member.github} */}
      {/*                target="_blank" */}
      {/*                rel="noopener noreferrer"*/}
      {/*                className="w-6 h-6 bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"*/}
      {/*              >*/}
      {/*                <Github className="h-3 w-3" />*/}
      {/*              </a>*/}
      {/*              <a */}
      {/*                href={member.twitter} */}
      {/*                target="_blank" */}
      {/*                rel="noopener noreferrer"*/}
      {/*                className="w-6 h-6 bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"*/}
      {/*              >*/}
      {/*                <Twitter className="h-3 w-3" />*/}
      {/*              </a>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Contact Section */}
      <div className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
              join us
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              building the future of data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@varga.foundation">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  <Mail className="mr-2 h-4 w-4" />
                  careers
                </Button>
              </a>
              <a href="mailto:hello@varga.foundation">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}