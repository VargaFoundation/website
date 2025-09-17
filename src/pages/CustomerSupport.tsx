import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Shield, Users, Clock, Star, CheckCircle, Phone, Mail, MessageSquare, Award, Zap, Globe } from "lucide-react"

export default function CustomerSupport() {
  const supportTiers = [
    {
      name: "enterprise advanced support",
      description: "comprehensive support for all enterprise subscriptions",
      icon: Shield,
      features: [
        "24/7 expert support access",
        "proactive issue resolution",
        "new feature previews",
        "growth planning assistance",
        "priority bug fixes",
        "dedicated slack channel",
        "quarterly business reviews",
        "custom training sessions"
      ],
      responseTime: "1 hour",
      availability: "24/7",
      included: "all enterprise plans"
    },
    {
      name: "named technical services engineer",
      description: "dedicated support contact for personalized service",
      icon: Users,
      features: [
        "dedicated support engineer",
        "regular cadence meetings",
        "environment familiarity",
        "roadmap planning assistance",
        "architecture reviews",
        "best practices guidance",
        "escalation management",
        "direct communication channel"
      ],
      responseTime: "30 minutes",
      availability: "business hours",
      included: "premium add-on"
    },
    {
      name: "extended lifecycle support",
      description: "ongoing support for end-of-life versions",
      icon: Clock,
      features: [
        "eol version support",
        "security patches",
        "critical bug fixes",
        "upgrade planning",
        "migration assistance",
        "flexible timeline",
        "peace of mind",
        "custom support terms"
      ],
      responseTime: "4 hours",
      availability: "business hours",
      included: "custom pricing"
    }
  ]

  const supportChannels = [
    {
      name: "phone support",
      icon: Phone,
      description: "direct phone access to our support team",
      availability: "24/7 for enterprise",
      contact: "+1 (555) 123-4567"
    },
    {
      name: "email support",
      icon: Mail,
      description: "comprehensive email support with detailed responses",
      availability: "24/7 response",
      contact: "support@varga.foundation"
    },
    {
      name: "live chat",
      icon: MessageSquare,
      description: "real-time chat support during business hours",
      availability: "9am-6pm cet",
      contact: "available in dashboard"
    },
    {
      name: "dedicated slack",
      icon: MessageSquare,
      description: "private slack channel for enterprise customers",
      availability: "24/7 monitoring",
      contact: "enterprise only"
    }
  ]

  const supportStats = [
    { label: "average response time", value: "< 1 hour", icon: Clock },
    { label: "customer satisfaction", value: "98%", icon: Star },
    { label: "first contact resolution", value: "85%", icon: CheckCircle },
    { label: "support engineers", value: "50+", icon: Users }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              enterprise support
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              customer
              <br />
              support
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              world-class support to help you succeed with varga.foundation. 
              from implementation to optimization, we're here for you.
            </p>

            {/* Support Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {supportStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl md:text-3xl font-mono font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-mono text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Tiers Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                support options
              </h2>
              <p className="text-lg text-gray-600 font-mono">
                choose the level of support that fits your needs
              </p>
            </div>
            
            <div className="space-y-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                          <tier.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-mono font-bold text-black">{tier.name}</h3>
                      </div>
                      <p className="text-gray-600 font-mono text-sm mb-6">{tier.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-600 mr-3" />
                          <div>
                            <div className="font-mono text-sm text-black font-bold">response time</div>
                            <div className="font-mono text-xs text-gray-600">{tier.responseTime}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 text-gray-600 mr-3" />
                          <div>
                            <div className="font-mono text-sm text-black font-bold">availability</div>
                            <div className="font-mono text-xs text-gray-600">{tier.availability}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-gray-600 mr-3" />
                          <div>
                            <div className="font-mono text-sm text-black font-bold">included in</div>
                            <div className="font-mono text-xs text-gray-600">{tier.included}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-mono font-bold text-black mb-4">features included</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="font-mono text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                support channels
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                      <channel.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono font-bold text-black">{channel.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 font-mono text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">availability:</span>
                      <span className="text-black">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">contact:</span>
                      <span className="text-black">{channel.contact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                success stories
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                    TC
                  </div>
                  <div>
                    <div className="font-mono font-bold text-black">techcorp.io</div>
                    <div className="text-gray-600 font-mono text-sm">enterprise customer</div>
                  </div>
                </div>
                <p className="text-gray-700 font-mono text-sm italic mb-4">
                  "our named technical services engineer helped us optimize our data pipelines, 
                  resulting in 40% performance improvement. the proactive support and regular 
                  check-ins have been invaluable."
                </p>
                <div className="text-gray-500 font-mono text-xs">
                  - sarah johnson, cto
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                    DF
                  </div>
                  <div>
                    <div className="font-mono font-bold text-black">dataflow.inc</div>
                    <div className="text-gray-600 font-mono text-sm">enterprise customer</div>
                  </div>
                </div>
                <p className="text-gray-700 font-mono text-sm italic mb-4">
                  "extended lifecycle support gave us the flexibility to upgrade at our own pace 
                  while maintaining security and stability. the peace of mind is worth every penny."
                </p>
                <div className="text-gray-500 font-mono text-xs">
                  - alex chen, head of infrastructure
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
              need help?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              our support team is ready to help you succeed with varga.foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  <Mail className="mr-2 h-4 w-4" />
                  contact support
                </Button>
              </Link>
              <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                <Phone className="mr-2 h-4 w-4" />
                schedule call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}