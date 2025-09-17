import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              terms of service
            </div>

            <h1 className="text-5xl md:text-6xl text-display mb-12 text-black leading-none">
              terms of service
            </h1>
            
            <div className="prose prose-gray max-w-none font-mono text-sm">
              <p className="text-lg text-gray-600 mb-12">
                last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-mono font-bold mb-6 text-black">1. acceptance</h2>
              <p className="text-gray-700 mb-8">
                by using varga.foundation, you agree to these terms. 
                if you disagree, do not use our software or services.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">2. license</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  varga.foundation is licensed under apache 2.0:<br />
                  - use for any purpose<br />
                  - modify and distribute<br />
                  - include in proprietary software<br />
                  - no warranty or liability
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">3. acceptable use</h2>
              <p className="text-gray-700 mb-8">
                you may not use varga.foundation to:<br />
                - violate laws or regulations<br />
                - infringe intellectual property<br />
                - harm our infrastructure<br />
                - distribute malware or spam
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">4. disclaimer</h2>
              <p className="text-gray-700 mb-8">
                varga.foundation is provided "as is" without warranty. 
                we disclaim all warranties, express or implied, 
                including merchantability and fitness for purpose.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">5. limitation of liability</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  we are not liable for:<br />
                  - data loss or corruption<br />
                  - business interruption<br />
                  - indirect or consequential damages<br />
                  - third-party actions
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">6. indemnification</h2>
              <p className="text-gray-700 mb-8">
                you agree to indemnify us against claims arising from 
                your use of varga.foundation or violation of these terms.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">7. termination</h2>
              <p className="text-gray-700 mb-8">
                we may terminate your access for violations. 
                you may stop using varga.foundation at any time. 
                termination does not affect the open source license.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">8. changes</h2>
              <p className="text-gray-700 mb-8">
                we may update these terms. continued use constitutes 
                acceptance of changes. check this page regularly.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">9. governing law</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  these terms are governed by french law. 
                  disputes will be resolved in paris courts.
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">10. contact</h2>
              <p className="text-gray-700 mb-8">
                questions about these terms?<br />
                email: legal@varga.foundation<br />
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