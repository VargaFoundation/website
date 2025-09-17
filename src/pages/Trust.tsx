import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, Lock, Eye, FileText, Users, CheckCircle, Award, Globe, Server, Database, Activity } from "lucide-react"

export default function Trust() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "security, availability, and confidentiality controls",
      status: "certified",
      validUntil: "2024-12-31"
    },
    {
      name: "ISO 27001",
      description: "information security management system",
      status: "certified",
      validUntil: "2025-06-30"
    },
    {
      name: "GDPR",
      description: "general data protection regulation compliance",
      status: "compliant",
      validUntil: "ongoing"
    },
    {
      name: "FedRAMP Moderate",
      description: "federal risk and authorization management program",
      status: "authorized",
      validUntil: "2025-03-15"
    }
  ]

  const securityMeasures = [
    {
      icon: Shield,
      title: "data encryption",
      description: "all data encrypted at rest and in transit using aes-256",
      details: [
        "encryption at rest with aes-256",
        "tls 1.3 for data in transit",
        "key management with hsm",
        "regular key rotation"
      ]
    },
    {
      icon: Lock,
      title: "access controls",
      description: "multi-factor authentication and role-based access",
      details: [
        "mandatory 2fa for all users",
        "role-based access control (rbac)",
        "single sign-on (sso) support",
        "regular access reviews"
      ]
    },
    {
      icon: Eye,
      title: "monitoring & logging",
      description: "comprehensive security monitoring and audit trails",
      details: [
        "24/7 security monitoring",
        "comprehensive audit logs",
        "real-time threat detection",
        "incident response procedures"
      ]
    },
    {
      icon: Server,
      title: "infrastructure security",
      description: "secure cloud infrastructure with regular assessments",
      details: [
        "regular penetration testing",
        "vulnerability assessments",
        "secure development lifecycle",
        "infrastructure as code"
      ]
    }
  ]

  const privacyPrinciples = [
    {
      title: "data minimization",
      description: "we collect only the data necessary for our services"
    },
    {
      title: "purpose limitation",
      description: "data is used only for the purposes it was collected"
    },
    {
      title: "transparency",
      description: "clear information about data collection and processing"
    },
    {
      title: "user control",
      description: "users have control over their personal data"
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
              security & compliance
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              trust & security
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              your data security is our top priority. we implement industry-leading 
              security measures and maintain the highest compliance standards.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                certifications & compliance
              </h2>
              <p className="text-lg text-gray-600 font-mono">
                independently verified security and compliance standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-green-600 mr-3" />
                      <h3 className="font-mono font-bold text-black">{cert.name}</h3>
                    </div>
                    <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 font-mono text-xs">
                      {cert.status}
                    </div>
                  </div>
                  <p className="text-gray-600 font-mono text-sm mb-3">{cert.description}</p>
                  <div className="text-xs text-gray-500 font-mono">
                    valid until: {cert.validUntil}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Measures Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                security measures
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                      <measure.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-black">{measure.title}</h3>
                  </div>
                  <p className="text-gray-600 font-mono text-sm mb-6">
                    {measure.description}
                  </p>
                  <ul className="space-y-2">
                    {measure.details.map((detail, detailIndex) => (
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

      {/* Privacy Principles Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                privacy principles
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-3">{principle.title}</h3>
                  <p className="text-gray-600 font-mono text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                transparency reports
              </h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-mono font-bold text-black mb-2">0</div>
                  <div className="text-gray-600 font-mono text-sm">data breaches</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">last 12 months</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-black mb-2">99.99%</div>
                  <div className="text-gray-600 font-mono text-sm">uptime</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">last 12 months</div>
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-black mb-2">24h</div>
                  <div className="text-gray-600 font-mono text-sm">incident response</div>
                  <div className="text-xs text-gray-500 font-mono mt-1">average time</div>
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
              security questions?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              our security team is here to help with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                contact security team
              </Button>
              <Link to="/vulnerabilities">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  report vulnerability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}