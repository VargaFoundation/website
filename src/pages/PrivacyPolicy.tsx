import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              privacy policy
            </div>

            <h1 className="text-5xl md:text-6xl text-display mb-12 text-black leading-none">
              privacy policy
            </h1>
            
            <div className="prose prose-gray max-w-none font-mono text-sm">
              <p className="text-lg text-gray-600 mb-12">
                last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-mono font-bold mb-6 text-black">1. data collection</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  we collect minimal data:<br />
                  - email addresses for newsletters<br />
                  - usage analytics (anonymized)<br />
                  - error logs for debugging<br />
                  - no personal data in open source version
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">2. data usage</h2>
              <p className="text-gray-700 mb-8">
                your data is used to:<br />
                - improve our software<br />
                - send product updates (opt-in only)<br />
                - provide technical support<br />
                - ensure system security
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">3. data sharing</h2>
              <p className="text-gray-700 mb-8">
                we never sell your data. we may share with:<br />
                - service providers (hosting, analytics)<br />
                - legal authorities (if required by law)<br />
                - business partners (with your consent)
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">4. data retention</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  <strong className="text-black">analytics:</strong> 24 months<br />
                  <strong className="text-black">logs:</strong> 90 days<br />
                  <strong className="text-black">emails:</strong> until unsubscribe<br />
                  <strong className="text-black">support:</strong> 3 years
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">5. your rights</h2>
              <p className="text-gray-700 mb-8">
                under gdpr, you have the right to:<br />
                - access your data<br />
                - correct inaccuracies<br />
                - delete your data<br />
                - data portability<br />
                - object to processing
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">6. security</h2>
              <p className="text-gray-700 mb-8">
                we implement industry-standard security measures:<br />
                - encryption in transit and at rest<br />
                - regular security audits<br />
                - access controls and monitoring<br />
                - incident response procedures
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">7. cookies</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  <strong className="text-black">essential:</strong> session management<br />
                  <strong className="text-black">analytics:</strong> google analytics (anonymized)<br />
                  <strong className="text-black">preferences:</strong> ui settings<br />
                  <strong className="text-black">marketing:</strong> none
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">8. contact</h2>
              <p className="text-gray-700 mb-8">
                for privacy questions, contact our dpo:<br />
                email: dpo@varga.foundation<br />
                address: 1 rue de rivoli, 75001 paris, france
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