import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Terminal, Code, Database, Settings, BarChart, Github, ExternalLink } from "lucide-react"

export default function UserGuide() {
  const sections = [
    {
      icon: Terminal,
      title: "installation",
      description: "get varga.foundation running in minutes",
      steps: [
        "clone the repository",
        "run docker-compose up",
        "access web ui at localhost:8080",
        "create your first pipeline"
      ],
      code: `# clone repository
git clone https://github.com/vargafoundation/varga
cd varga

# start with docker
docker-compose up -d

# verify installation
curl http://localhost:8080/health`
    },
    {
      icon: Code,
      title: "configuration",
      description: "define your data pipelines",
      steps: [
        "create pipeline.yaml",
        "define sources and sinks",
        "configure transformations",
        "set scaling parameters"
      ],
      code: `# pipeline.yaml
name: user-events
sources:
  - type: kafka
    topic: events
    bootstrap_servers: localhost:9092
transforms:
  - type: filter
    condition: event_type == 'click'
sinks:
  - type: postgres
    table: user_clicks
    connection: postgres://localhost/db`
    },
    {
      icon: Database,
      title: "connectors",
      description: "connect to any data source",
      steps: [
        "choose from 50+ connectors",
        "configure connection parameters",
        "test connectivity",
        "start data flow"
      ],
      code: `# supported connectors
sources:
  - kafka, kinesis, pubsub
  - postgres, mysql, mongodb
  - s3, gcs, azure blob
  - rest apis, webhooks
  
sinks:
  - all source types
  - elasticsearch, clickhouse
  - snowflake, bigquery
  - custom http endpoints`
    },
    {
      icon: Settings,
      title: "deployment",
      description: "deploy anywhere with kubernetes",
      steps: [
        "prepare kubernetes cluster",
        "apply varga manifests",
        "configure ingress",
        "monitor with prometheus"
      ],
      code: `# kubernetes deployment
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/varga.foundation.yaml

# check status
kubectl get pods -n varga.foundation

# access dashboard
kubectl port-forward svc/varga-ui 8080:80`
    },
    {
      icon: BarChart,
      title: "monitoring",
      description: "observe your data pipelines",
      steps: [
        "built-in prometheus metrics",
        "grafana dashboards",
        "alerting rules",
        "distributed tracing"
      ],
      code: `# key metrics
varga_pipeline_throughput_total
varga_pipeline_latency_seconds
varga_pipeline_errors_total
varga_connector_status

# alerts
- alert: PipelineDown
  expr: varga_pipeline_status == 0
  for: 5m`
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
              complete documentation
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              user guide
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              everything you need to deploy and operate varga.foundation.
              <br />
              from zero to production in 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/vargafoundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary font-mono">
                  <Github className="mr-2 h-4 w-4" />
                  github
                </Button>
              </a>
              <a href="https://docs.varga.foundation" target="_blank" rel="noopener noreferrer">
                <Button className="btn-secondary font-mono">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  full docs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Sections */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4 font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-2xl font-mono font-bold text-black">{section.title}</h2>
                    </div>
                    <p className="text-gray-600 font-mono text-sm mb-8">
                      {section.description}
                    </p>
                    <div className="space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center text-gray-700 font-mono text-sm">
                          <div className="w-4 h-4 border border-gray-400 mr-3 flex-shrink-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-black"></div>
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200">
                    <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
                      <span className="font-mono text-xs text-gray-600">terminal</span>
                    </div>
                    <div className="p-4">
                      <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap overflow-x-auto">
                        {section.code}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-display text-center mb-16 text-black">
              quick reference
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8">
                <h3 className="text-lg font-mono font-bold mb-6 text-black">cli commands</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">varga deploy</span>
                    <span className="text-black">deploy pipeline</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">varga status</span>
                    <span className="text-black">check status</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">varga logs</span>
                    <span className="text-black">view logs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">varga stop</span>
                    <span className="text-black">stop pipeline</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8">
                <h3 className="text-lg font-mono font-bold mb-6 text-black">api endpoints</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">GET /health</span>
                    <span className="text-black">health check</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">POST /pipelines</span>
                    <span className="text-black">create pipeline</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GET /metrics</span>
                    <span className="text-black">prometheus metrics</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GET /status</span>
                    <span className="text-black">system status</span>
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
              need help?
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-mono">
              join our community or get enterprise support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/varga.foundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-mono">
                  discord community
                </Button>
              </a>
              <a href="mailto:support@varga.foundation">
                <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black px-6 py-3 font-mono">
                  enterprise support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}