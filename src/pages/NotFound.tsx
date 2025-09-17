import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Home, ArrowLeft, Github, Terminal } from "lucide-react"
import { useEffect } from "react"

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page not found | varga.foundation"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to varga.foundation homepage to discover our universal data platform.')
    }

    return () => {
      document.title = "varga.foundation - Plateforme opensource de données universelle"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto container-padding text-center">
        <div className="max-w-2xl mx-auto">
          {/* Error badge */}
          <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
            <div className="w-1 h-1 bg-black mr-2"></div>
            http error
          </div>

          {/* 404 Number */}
          <div className="mb-12">
            <h1 className="text-9xl md:text-[12rem] font-mono font-bold text-black leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl text-display mb-6 text-black">
              page not found
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-mono">
              the requested resource does not exist.
            </p>
            <p className="text-gray-500 font-mono text-sm">
              check the url or navigate back to safety.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/">
              <Button className="btn-primary px-6 py-3 font-mono">
                <Home className="mr-2 h-4 w-4" />
                home
              </Button>
            </Link>
            
            <Button 
              onClick={() => window.history.back()}
              className="btn-secondary px-6 py-3 font-mono"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <h3 className="text-lg font-mono font-bold text-black mb-6">
              popular pages
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                to="/features" 
                className="flex items-center p-4 bg-white border border-gray-200 hover:border-black transition-colors"
              >
                <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                  01
                </div>
                <div className="text-left">
                  <div className="font-mono font-bold text-black text-sm">features</div>
                  <div className="text-xs text-gray-600 font-mono">platform capabilities</div>
                </div>
              </Link>

              <Link 
                to="/guide" 
                className="flex items-center p-4 bg-white border border-gray-200 hover:border-black transition-colors"
              >
                <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                  02
                </div>
                <div className="text-left">
                  <div className="font-mono font-bold text-black text-sm">documentation</div>
                  <div className="text-xs text-gray-600 font-mono">complete guides</div>
                </div>
              </Link>

              {/*<Link */}
              {/*  to="/testimonials" */}
              {/*  className="flex items-center p-4 bg-white border border-gray-200 hover:border-black transition-colors"*/}
              {/*>*/}
              {/*  <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">*/}
              {/*    03*/}
              {/*  </div>*/}
              {/*  <div className="text-left">*/}
              {/*    <div className="font-mono font-bold text-black text-sm">testimonials</div>*/}
              {/*    <div className="text-xs text-gray-600 font-mono">user stories</div>*/}
              {/*  </div>*/}
              {/*</Link>*/}

              <a
                href="https://github.com/vargafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white border border-gray-200 hover:border-black transition-colors"
              >
                <div className="w-6 h-6 bg-gray-200 flex items-center justify-center mr-3 font-mono text-xs">
                  04
                </div>
                <div className="text-left">
                  <div className="font-mono font-bold text-black text-sm">github</div>
                  <div className="text-xs text-gray-600 font-mono">source code</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4 font-mono text-sm">
              still lost? our team can help.
            </p>
            <a 
              href="mailto:support@varga.foundation"
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-mono text-sm"
            >
              <Terminal className="h-4 w-4 mr-2" />
              support@varga.foundation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}