import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Database, Zap, BarChart, Shield, Globe, Terminal, Code, Cpu, Network, Lock } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Database,
      title: "universal connectors",
      description: "connect to any data source. sql, nosql, apis, files, streams.",
      code: "connector:\n  type: postgres\n  host: localhost\n  database: prod"
    },
    {
      icon: Zap,
      title: "auto-scaling",
      description: "elastic compute. scale from zero to millions of records per second.",
      code: "scaling:\n  min_instances: 0\n  max_instances: 100\n  target_cpu: 70%"
    },
    {
      icon: BarChart,
      title: "real-time monitoring",
      description: "built-in observability. metrics, logs, traces out of the box.",
      code: "monitoring:\n  metrics: prometheus\n  logs: elasticsearch\n  traces: jaeger"
    },
    {
      icon: Shield,
      title: "enterprise security",
      description: "encryption at rest and in transit. rbac, audit logs, compliance.",
      code: "security:\n  encryption: aes256\n  auth: oauth2\n  audit: enabled"
    },
    {
      icon: Globe,
      title: "multi-cloud",
      description: "deploy on aws, gcp, azure, or on-premises. no vendor lock-in.",
      code: "deployment:\n  provider: kubernetes\n  region: us-west-2\n  zones: 3"
    },
    {
      icon: Terminal,
      title: "cli & api",
      description: "command line interface and rest api. infrastructure as code.",
      code: "$ varga deploy pipeline.yaml\n$ varga status\n$ varga logs --follow"
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
              production ready
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              features
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              everything you need to build, deploy, and scale data pipelines.
              <br />
              zero configuration. infinite possibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono text-sm flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-xl font-mono font-bold mb-3 text-black">{feature.title}</h3>
                      <p className="text-gray-600 text-body font-mono text-sm mb-6">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 font-mono text-sm text-gray-800">
                    <pre className="whitespace-pre-wrap">{feature.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
              specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8">
                <h3 className="text-lg font-mono font-bold mb-6 text-black">performance</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">throughput</span>
                    <span className="text-black">1M+ records/sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">latency</span>
                    <span className="text-black">&lt; 10ms p99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">memory</span>
                    <span className="text-black">512MB minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">cpu</span>
                    <span className="text-black">1 core minimum</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-lg font-mono font-bold mb-6 text-black">compatibility</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">kubernetes</span>
                    <span className="text-black">1.20+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">docker</span>
                    <span className="text-black">20.10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">linux</span>
                    <span className="text-black">kernel 4.15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">architectures</span>
                    <span className="text-black">amd64, arm64</span>
                  </div>
                </div>
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
              ready to start?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              deploy your first pipeline in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  get started
                </Button>
              </a>
              <Link to="/guide">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}