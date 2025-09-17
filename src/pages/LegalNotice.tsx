import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              legal information
            </div>

            <h1 className="text-5xl md:text-6xl text-display mb-12 text-black leading-none">
              legal notice
            </h1>
            
            <div className="prose prose-gray max-w-none font-mono text-sm">
              <p className="text-lg text-gray-600 mb-12">
                last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-mono font-bold mb-6 text-black">1. publisher</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  <strong className="text-black">company:</strong> varga.foundation sas<br />
                  <strong className="text-black">capital:</strong> €10,000<br />
                  <strong className="text-black">registration:</strong> paris b 123 456 789<br />
                  <strong className="text-black">address:</strong> 1 rue de rivoli, 75001 paris, france<br />
                  <strong className="text-black">director:</strong> alex chen<br />
                  <strong className="text-black">contact:</strong> legal@varga.foundation
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">2. hosting</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  <strong className="text-black">provider:</strong> ovh sas<br />
                  <strong className="text-black">address:</strong> 2 rue kellermann, 59100 roubaix, france<br />
                  <strong className="text-black">phone:</strong> +33 9 72 10 10 07
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">3. intellectual property</h2>
              <p className="text-gray-700 mb-8">
                varga.foundation is released under the apache 2.0 license. 
                the source code is available on github. 
                all documentation and website content is protected by copyright.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">4. data protection</h2>
              <p className="text-gray-700 mb-8">
                in accordance with gdpr and french data protection laws, 
                you have rights regarding your personal data. 
                contact our dpo at: dpo@varga.foundation
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">5. cookies</h2>
              <p className="text-gray-700 mb-8">
                this website uses minimal cookies for analytics and functionality. 
                by using this site, you consent to our cookie policy.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">6. liability</h2>
              <p className="text-gray-700 mb-8">
                varga.foundation is provided "as is" without warranty. 
                we are not liable for any damages arising from the use of our software.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">7. applicable law</h2>
              <p className="text-gray-700 mb-8">
                these terms are governed by french law. 
                any disputes will be resolved by french courts.
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