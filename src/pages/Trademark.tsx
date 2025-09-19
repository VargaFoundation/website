import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, AlertTriangle, CheckCircle, FileText, Mail } from "lucide-react"
import {info} from "@/data/info.tsx";

export default function Trademark() {
  const trademarks = [
    {
      mark: "varga.foundation",
      type: "word mark",
      registration: "pending",
      classes: ["class 42: computer services", "class 9: computer software"],
      description: "our primary brand name and service mark"
    },
    {
      mark: "varga logo",
      type: "design mark",
      registration: "registered",
      classes: ["class 42: computer services", "class 9: computer software"],
      description: "our distinctive logo and visual identity"
    }
  ]

  const guidelines = [
    {
      title: "permitted uses",
      icon: CheckCircle,
      color: "text-green-600",
      items: [
        "referencing varga.foundation in news articles and blog posts",
        "using our name in academic research and publications",
        "mentioning varga.foundation in conference presentations",
        "including our logo in partner directories (with permission)",
        "using screenshots of our software for educational purposes"
      ]
    },
    {
      title: "prohibited uses",
      icon: AlertTriangle,
      color: "text-red-600",
      items: [
        "using varga.foundation trademarks in your company name",
        "creating confusingly similar logos or branding",
        "implying endorsement or partnership without agreement",
        "modifying our trademarks or creating derivative versions",
        "using our marks in domain names or social media handles",
        "selling products or services using our trademarks"
      ]
    }
  ]

  const usageRules = [
    {
      rule: "always use proper attribution",
      description: "include appropriate trademark symbols (™ or ®) when using our marks"
    },
    {
      rule: "maintain visual integrity",
      description: "don't alter, distort, or modify our trademarks in any way"
    },
    {
      rule: "use current versions",
      description: "always use the most current version of our logos and marks"
    },
    {
      rule: "respect context",
      description: "use our trademarks only in appropriate and professional contexts"
    },
    {
      rule: "seek permission for commercial use",
      description: "contact us before using our marks for commercial purposes"
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
              intellectual property
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              trademark
              <br />
              policy
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              guidelines for the proper use of varga.foundation trademarks, logos, 
              and other intellectual property.
            </p>
          </div>
        </div>
      </div>

      {/* Our Trademarks Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                our trademarks
              </h2>
            </div>
            
            <div className="space-y-6">
              {trademarks.map((trademark, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-mono font-bold text-black mb-2">{trademark.mark}</h3>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">type:</span>
                          <span className="text-black">{trademark.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">status:</span>
                          <span className={`font-bold ${
                            trademark.registration === 'registered' ? 'text-green-600' : 'text-yellow-600'
                          }`}>
                            {trademark.registration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-mono font-bold text-black mb-3">trademark classes</h4>
                      <ul className="space-y-1">
                        {trademark.classes.map((cls, classIndex) => (
                          <li key={classIndex} className="font-mono text-sm text-gray-700">
                            {cls}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-mono font-bold text-black mb-3">description</h4>
                      <p className="font-mono text-sm text-gray-700">{trademark.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                usage guidelines
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-8 h-8 bg-white border-2 ${
                      guideline.color === 'text-green-600' ? 'border-green-600' : 'border-red-600'
                    } flex items-center justify-center mr-4`}>
                      <guideline.icon className={`w-4 h-4 ${guideline.color}`} />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-black">{guideline.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-mono text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Usage Rules Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                usage rules
              </h2>
            </div>
            
            <div className="space-y-6">
              {usageRules.map((rule, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono text-sm flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-black mb-2">{rule.rule}</h3>
                      <p className="font-mono text-sm text-gray-700">{rule.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Assets Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                brand assets
              </h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-8 text-center">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-6" />
              <h3 className="font-mono font-bold text-black mb-4">download brand kit</h3>
              <p className="font-mono text-sm text-gray-700 mb-6">
                official logos, colors, and usage guidelines for approved use cases.
              </p>
              <Button className="btn-primary font-mono">
                <FileText className="mr-2 h-4 w-4" />
                download brand kit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                legal notice
              </h2>
            </div>
            
            <div className="bg-white border border-gray-200 p-8">
              <div className="prose prose-gray max-w-none font-mono text-sm">
                <p className="text-gray-700 mb-6">
                  varga.foundation and related marks are trademarks of varga.foundation sas. 
                  unauthorized use of our trademarks may violate trademark, copyright, 
                  and other laws.
                </p>
                
                <p className="text-gray-700 mb-6">
                  we actively monitor and enforce our trademark rights. if you become 
                  aware of any misuse of our trademarks, please report it to our legal team.
                </p>
                
                <p className="text-gray-700 mb-6">
                  this policy may be updated from time to time. continued use of our 
                  trademarks constitutes acceptance of any changes.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 p-6 mt-8">
                  <h4 className="font-mono font-bold text-black mb-4">reporting trademark misuse</h4>
                  <p className="text-gray-700 mb-4">
                    if you believe someone is misusing our trademarks, please contact:
                  </p>
                  <div className="font-mono text-sm">
                    <div className="mb-2">email: {info.mail.legal}</div>
                    <div>subject: trademark violation report</div>
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
              questions?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              need permission to use our trademarks or have questions about this policy?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                <Mail className="mr-2 h-4 w-4" />
                contact legal team
              </Button>
              <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                <FileText className="mr-2 h-4 w-4" />
                request permission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}