import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function UseOfData() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              data usage policy
            </div>

            <h1 className="text-5xl md:text-6xl text-display mb-12 text-black leading-none">
              data usage
            </h1>
            
            <div className="prose prose-gray max-w-none font-mono text-sm">
              <p className="text-lg text-gray-600 mb-12">
                last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-mono font-bold mb-6 text-black">1. data types</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  we process these data types:<br />
                  - technical logs and metrics<br />
                  - user account information<br />
                  - pipeline configurations<br />
                  - performance analytics
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">2. processing purposes</h2>
              <p className="text-gray-700 mb-8">
                your data is processed for:<br />
                - service provision and operation<br />
                - performance monitoring and optimization<br />
                - security and fraud prevention<br />
                - product improvement and development<br />
                - customer support and communication
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">3. legal basis</h2>
              <p className="text-gray-700 mb-8">
                processing is based on:<br />
                - contract performance (service delivery)<br />
                - legitimate interests (security, improvement)<br />
                - consent (marketing communications)<br />
                - legal obligations (compliance)
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">4. data minimization</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  we follow data minimization principles:<br />
                  - collect only necessary data<br />
                  - anonymize when possible<br />
                  - delete when no longer needed<br />
                  - encrypt sensitive information
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">5. retention periods</h2>
              <p className="text-gray-700 mb-8">
                data retention periods:<br />
                - operational logs: 90 days<br />
                - analytics data: 24 months<br />
                - account data: until deletion request<br />
                - support tickets: 3 years<br />
                - legal compliance: as required by law
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">6. data transfers</h2>
              <p className="text-gray-700 mb-8">
                data may be transferred to:<br />
                - eu/eea countries (adequate protection)<br />
                - third countries with adequacy decisions<br />
                - service providers with appropriate safeguards<br />
                - legal authorities when required
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">7. automated processing</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  we use automated processing for:<br />
                  - anomaly detection and alerting<br />
                  - performance optimization<br />
                  - security threat detection<br />
                  - no automated decision-making affecting users
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">8. your control</h2>
              <p className="text-gray-700 mb-8">
                you can control your data:<br />
                - access and download your data<br />
                - correct inaccurate information<br />
                - delete your account and data<br />
                - object to certain processing<br />
                - withdraw consent at any time
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">9. contact dpo</h2>
              <p className="text-gray-700 mb-8">
                data protection officer:<br />
                email: dpo@varga.foundation<br />
                address: 1 rue de rivoli, 75001 paris, france<br />
                response time: 30 days maximum
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/">
                <Button className="btn-secondary font-mono">
                  back to home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}