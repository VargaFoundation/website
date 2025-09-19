import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, AlertTriangle, Mail, Clock, Award, CheckCircle, FileText } from "lucide-react"
import {info} from "@/data/info.tsx";

export default function Vulnerabilities() {
  const reportingProcess = [
    {
      step: "1",
      title: "report submission",
      description: "submit vulnerability details through our secure channel",
      timeframe: "immediate"
    },
    {
      step: "2",
      title: "initial response",
      description: "acknowledgment and initial assessment of the report",
      timeframe: "within 24 hours"
    },
    {
      step: "3",
      title: "investigation",
      description: "detailed analysis and reproduction of the vulnerability",
      timeframe: "1-5 business days"
    },
    {
      step: "4",
      title: "resolution",
      description: "development and deployment of security fix",
      timeframe: "varies by severity"
    },
    {
      step: "5",
      title: "disclosure",
      description: "coordinated disclosure and public acknowledgment",
      timeframe: "after fix deployment"
    }
  ]

  const severityLevels = [
    {
      level: "critical",
      color: "bg-red-600",
      description: "vulnerabilities that could lead to complete system compromise",
      response: "immediate",
      examples: ["remote code execution", "authentication bypass", "data breach"]
    },
    {
      level: "high",
      color: "bg-orange-600",
      description: "significant security impact with potential for data exposure",
      response: "within 24 hours",
      examples: ["privilege escalation", "sql injection", "xss with data access"]
    },
    {
      level: "medium",
      color: "bg-yellow-600",
      description: "moderate security impact with limited scope",
      response: "within 72 hours",
      examples: ["information disclosure", "csrf", "weak encryption"]
    },
    {
      level: "low",
      color: "bg-blue-600",
      description: "minimal security impact or theoretical vulnerabilities",
      response: "within 1 week",
      examples: ["security misconfigurations", "minor information leaks"]
    }
  ]

  const guidelines = [
    {
      title: "scope",
      items: [
        "varga.foundation cloud platform and services",
        "official varga.foundation applications and websites",
        "varga.foundation open source repositories",
        "third-party integrations we maintain"
      ]
    },
    {
      title: "out of scope",
      items: [
        "social engineering attacks",
        "physical security issues",
        "denial of service attacks",
        "issues in third-party dependencies (report to respective maintainers)"
      ]
    },
    {
      title: "responsible disclosure",
      items: [
        "do not access or modify user data",
        "do not perform destructive testing",
        "do not publicly disclose until we've had time to fix",
        "provide sufficient detail for reproduction"
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
              responsible disclosure
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              vulnerability
              <br />
              disclosure policy
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              we take security seriously and appreciate the security research community's 
              efforts to help us maintain the security of our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-6 py-3 font-mono">
                <Mail className="mr-2 h-4 w-4" />
                report vulnerability
              </Button>
              <Button className="btn-secondary px-6 py-3 font-mono">
                <FileText className="mr-2 h-4 w-4" />
                pgp key
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reporting Process Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                reporting process
              </h2>
            </div>
            
            <div className="space-y-8">
              {reportingProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-6 font-mono font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="bg-white border border-gray-200 p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-mono font-bold text-black">{process.title}</h3>
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 font-mono text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {process.timeframe}
                      </div>
                    </div>
                    <p className="text-gray-600 font-mono text-sm">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Severity Levels Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                severity levels
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {severityLevels.map((severity, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${severity.color} mr-3`}></div>
                    <h3 className="font-mono font-bold text-black uppercase">{severity.level}</h3>
                    <div className="ml-auto text-xs text-gray-500 font-mono">
                      response: {severity.response}
                    </div>
                  </div>
                  <p className="text-gray-600 font-mono text-sm mb-4">{severity.description}</p>
                  <div>
                    <h4 className="font-mono font-bold text-black text-sm mb-2">examples:</h4>
                    <ul className="space-y-1">
                      {severity.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-600 font-mono text-xs flex items-center">
                          <div className="w-1 h-1 bg-gray-400 mr-2"></div>
                          {example}
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

      {/* Guidelines Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                guidelines
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-4">{guideline.title}</h3>
                  <ul className="space-y-2">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700 font-mono text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                contact information
              </h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono font-bold text-black mb-4">security team</h3>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-600 mr-3" />
                      <span className="text-gray-700">{info.mail.security}</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-gray-600 mr-3" />
                      <span className="text-gray-700">pgp key: {info.security.pgp}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-black mb-4">response times</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">critical:</span>
                      <span className="text-black">immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">high:</span>
                      <span className="text-black">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">medium:</span>
                      <span className="text-black">72 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">low:</span>
                      <span className="text-black">1 week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-display mb-8 text-white">
              recognition
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              we believe in recognizing security researchers who help us improve our platform.
            </p>
            <div className="bg-gray-900 border border-gray-700 p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <div className="text-white font-mono font-bold mb-2">hall of fame</div>
                  <div className="text-gray-400 font-mono text-sm">public recognition</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-white font-mono font-bold mb-2">direct communication</div>
                  <div className="text-gray-400 font-mono text-sm">with security team</div>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <div className="text-white font-mono font-bold mb-2">coordinated disclosure</div>
                  <div className="text-gray-400 font-mono text-sm">responsible timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}