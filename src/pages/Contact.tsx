import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Building, Code, Heart } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    type: "general"
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const contactTypes = [
    { value: "general", label: "general inquiry", icon: MessageSquare },
    { value: "support", label: "technical support", icon: Code },
    { value: "partnership", label: "partnership", icon: Users },
    { value: "careers", label: "careers", icon: Heart }
  ]

  const offices = [
    {
      city: "versailles",
      country: "france",
      address: "2 rue vauban\n78000 versailles, france",
      email: "contact@varga.foundation",
      timezone: "cet (utc+1)"
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        type: "general"
      })
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              get in touch
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              contact us
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              have questions about varga.foundation? need help getting started? 
              our team is here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-mono font-bold text-black mb-8">send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-gray-700 mb-2">
                        name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                        placeholder="john doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-gray-700 mb-2">
                        email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-mono text-gray-700 mb-2">
                        company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                        placeholder="acme corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-mono text-gray-700 mb-2">
                        inquiry type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                      >
                        {contactTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-mono text-gray-700 mb-2">
                      subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm"
                      placeholder="how can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-mono text-gray-700 mb-2">
                      message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono text-sm resize-vertical"
                      placeholder="tell us more about your needs..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full btn-primary py-3 text-base font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin mr-2"></div>
                        sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        send message
                      </>
                    )}
                  </Button>

                  {status === "success" && (
                    <div className="bg-green-50 border border-green-200 p-4">
                      <p className="text-green-800 font-mono text-sm">
                        ✓ message sent successfully. we'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 p-4">
                      <p className="text-red-800 font-mono text-sm">
                        ✗ failed to send message. please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-mono font-bold text-black mb-8">get in touch</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-600 mr-4 mt-1" />
                    <div>
                      <div className="font-mono font-bold text-black mb-1">email</div>
                      <div className="text-gray-600 font-mono text-sm">hello@varga.foundation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-600 mr-4 mt-1" />
                    <div>
                      <div className="font-mono font-bold text-black mb-1">phone</div>
                      <div className="text-gray-600 font-mono text-sm">+33 1 23 45 67 89</div>
                    </div>
                  </div>
                  
                </div>

                {/* Quick Contact Types */}
                <div className="bg-white border border-gray-200 p-6">
                  <h3 className="font-mono font-bold text-black mb-4">quick contacts</h3>
                  <div className="space-y-3">
                    {contactTypes.map((type) => (
                      <div key={type.value} className="flex items-center">
                        <type.icon className="w-4 h-4 text-gray-600 mr-3" />
                        <span className="font-mono text-sm text-gray-700">{type.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offices Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                our offices
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-gray-600 mr-3" />
                    <h3 className="font-mono font-bold text-black">{office.city}, {office.country}</h3>
                  </div>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">address:</div>
                      <div className="text-black whitespace-pre-line">{office.address}</div>
                    </div>
                    
                    {/*<div>*/}
                    {/*  <div className="text-gray-600 mb-1">phone:</div>*/}
                    {/*  <div className="text-black">{office.phone}</div>*/}
                    {/*</div>*/}
                    
                    <div>
                      <div className="text-gray-600 mb-1">email:</div>
                      <div className="text-black">{office.email}</div>
                    </div>
                    
                    <div>
                      <div className="text-gray-600 mb-1">timezone:</div>
                      <div className="text-black">{office.timezone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}