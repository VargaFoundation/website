import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {info} from "@/data/info.tsx";

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
                  <strong className="text-black">association:</strong> Varga Foundation<br />
                  <strong className="text-black">forme:</strong> Association déclarée<br />
                  <strong className="text-black">waldec:</strong> W784011864<br />
                  <strong className="text-black">address:</strong> 2 rue Vauban, 78000 Versailles, France<br />
                  <strong className="text-black">président:</strong> Vincent Devillers<br />
                  <strong className="text-black">contact:</strong> {info.mail.contact}
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">2. hosting</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  <strong className="text-black">provider:</strong> GitHub Pages<br />
                  <strong className="text-black">address:</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States<br />
                  <strong className="text-black">website:</strong> <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://pages.github.com</a>
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">3. intellectual property</h2>
              <p className="text-gray-700 mb-8">
                Varga Foundation assures that all website content is protected by copyright.
                Source code may be available under the Apache 2.0 license if specified.
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">4. data protection</h2>
              <p className="text-gray-700 mb-8">
                in accordance with gdpr and french data protection laws, 
                you have rights regarding your personal data. 
                contact our dpo at: {info.mail.dpo}
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