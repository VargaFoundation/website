import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, Lock, Eye, FileText, Users, Globe, CheckCircle, ArrowRight, Mail, Phone, Building } from "lucide-react"

export default function Government() {
  const certifications = [
    {
      name: "FedRAMP Moderate",
      description: "authorized for federal government use",
      status: "certified"
    },
    {
      name: "SOC 2 Type II",
      description: "security and availability controls",
      status: "certified"
    },
    {
      name: "ISO 27001",
      description: "information security management",
      status: "certified"
    },
    {
      name: "FIPS 140-2",
      description: "cryptographic module validation",
      status: "certified"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "enhanced security",
      description: "military-grade encryption and security controls",
      details: [
        "aes-256 encryption at rest and in transit",
        "multi-factor authentication required",
        "continuous security monitoring",
        "regular penetration testing"
      ]
    },
    {
      icon: Lock,
      title: "data sovereignty",
      description: "complete control over data location and access",
      details: [
        "dedicated government cloud regions",
        "data never leaves specified boundaries",
        "citizen-only support staff",
        "government-only infrastructure"
      ]
    },
    {
      icon: Eye,
      title: "audit & compliance",
      description: "comprehensive audit trails and compliance reporting",
      details: [
        "detailed audit logs for all activities",
        "compliance reporting dashboards",
        "automated compliance checks",
        "regulatory change notifications"
      ]
    },
    {
      icon: FileText,
      title: "documentation",
      description: "complete documentation for security reviews",
      details: [
        "security architecture diagrams",
        "data flow documentation",
        "incident response procedures",
        "compliance matrices"
      ]
    }
  ]

  const useCases = [
    {
      title: "defense & intelligence",
      description: "secure data processing for national security applications",
      icon: Shield
    },
    {
      title: "healthcare",
      description: "hipaa-compliant data pipelines for government health agencies",
      icon: Users
    },
    {
      title: "financial services",
      description: "secure financial data processing for government institutions",
      icon: Building
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-8">
                  <div className="w-1 h-1 bg-black mr-2"></div>
                  fedramp moderate authorized
                </div>

                <h1 className="text-5xl md:text-6xl text-display mb-8 text-black leading-none">
                  varga.foundation
                  <br />
                  for government
                </h1>
                
                <p className="text-lg text-gray-600 text-body mb-8 font-mono">
                  secure, compliant, and dedicated data platform for government agencies. 
                  fedramp moderate authorized with enhanced security controls.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button className="btn-primary px-6 py-3 font-mono">
                    <Mail className="mr-2 h-4 w-4" />
                    request demo
                  </Button>
                  <Button className="btn-secondary px-6 py-3 font-mono">
                    <FileText className="mr-2 h-4 w-4" />
                    security docs
                  </Button>
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-2 gap-4">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="font-mono text-sm text-gray-700">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-50 border border-gray-200 p-8">
                  <h3 className="font-mono font-bold text-black mb-6">security highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-mono font-bold text-black text-sm">fedramp moderate</div>
                        <div className="text-gray-600 text-xs font-mono">authorized for federal use</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Lock className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-mono font-bold text-black text-sm">data sovereignty</div>
                        <div className="text-gray-600 text-xs font-mono">us-only infrastructure</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-mono font-bold text-black text-sm">audit trails</div>
                        <div className="text-gray-600 text-xs font-mono">comprehensive logging</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-mono font-bold text-black text-sm">citizen support</div>
                        <div className="text-gray-600 text-xs font-mono">us citizens only</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                government-grade security
              </h2>
              <p className="text-lg text-gray-600 font-mono max-w-2xl mx-auto">
                built specifically for government requirements and compliance standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-black">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 font-mono text-sm mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
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

      {/* Certifications Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                certifications & compliance
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-mono font-bold text-black">{cert.name}</h3>
                    <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 font-mono text-xs">
                      {cert.status}
                    </div>
                  </div>
                  <p className="text-gray-600 font-mono text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                government use cases
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mx-auto mb-6">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-mono font-bold mb-4 text-black">{useCase.title}</h3>
                  <p className="text-gray-600 font-mono text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
              ready to get started?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              contact our government team for a personalized demo and security briefing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                <Mail className="mr-2 h-4 w-4" />
                request demo
              </Button>
              <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                <Phone className="mr-2 h-4 w-4" />
                schedule call
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-400 font-mono text-sm">
                government sales: gov-sales@varga.foundation | +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}