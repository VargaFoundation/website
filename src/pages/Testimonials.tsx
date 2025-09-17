import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Star, Github } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "alex.chen",
      role: "cto",
      company: "dataflow.inc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "saved us months of infrastructure work. deploy anywhere without complexity. game changer for our data team.",
      rating: 5,
      useCase: "real-time analytics"
    },
    {
      name: "sarah.johnson",
      role: "data engineer",
      company: "cloudtech.io",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content: "no vendor lock-in. complete control over data infrastructure. exactly what we needed for compliance.",
      rating: 5,
      useCase: "data governance"
    },
    {
      name: "marie.dubois",
      role: "head of data",
      company: "fintech.ai",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "scales from zero to millions of records seamlessly. monitoring built-in. production ready from day one.",
      rating: 5,
      useCase: "financial data processing"
    },
    {
      name: "thomas.martin",
      role: "platform engineer",
      company: "retail.corp",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "kubernetes native. fits perfectly in our existing infrastructure. zero configuration required.",
      rating: 5,
      useCase: "e-commerce analytics"
    },
    {
      name: "lisa.wang",
      role: "data scientist",
      company: "ml.startup",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "perfect for ml pipelines. handles batch and streaming workloads. open source means no surprises.",
      rating: 5,
      useCase: "machine learning"
    },
    {
      name: "david.kim",
      role: "devops lead",
      company: "media.tech",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content: "deployment is trivial. monitoring works out of the box. our team loves the simplicity.",
      rating: 5,
      useCase: "content processing"
    }
  ]

  const stats = [
    { label: "companies", value: "50+" },
    { label: "developers", value: "1000+" },
    { label: "pipelines", value: "10k+" },
    { label: "uptime", value: "99.9%" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              production stories
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              testimonials
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              real companies. real results.
              <br />
              see how teams use varga.foundation in production.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-mono text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mr-4 font-mono text-sm">
                      {testimonial.name.split('.')[0][0].toUpperCase()}{testimonial.name.split('.')[1][0].toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-black text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 font-mono text-xs">{testimonial.role}</p>
                      <p className="text-gray-600 font-mono text-xs">{testimonial.company}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 font-mono text-xs text-gray-600">
                        {testimonial.useCase}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 font-mono text-sm mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-black mr-1"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
              use cases
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  01
                </div>
                <h3 className="text-lg font-mono font-bold mb-4 text-black">real-time analytics</h3>
                <p className="text-gray-600 font-mono text-sm">
                  process streaming data. sub-second latency. infinite scale.
                </p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  02
                </div>
                <h3 className="text-lg font-mono font-bold mb-4 text-black">data migration</h3>
                <p className="text-gray-600 font-mono text-sm">
                  move data between systems. any source to any destination.
                </p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center mx-auto mb-6 font-mono text-sm">
                  03
                </div>
                <h3 className="text-lg font-mono font-bold mb-4 text-black">ml pipelines</h3>
                <p className="text-gray-600 font-mono text-sm">
                  feature engineering. model training. inference at scale.
                </p>
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
              your turn
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              join 1000+ developers building data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  get started
                </Button>
              </a>
              <Link to="/features">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}