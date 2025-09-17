import { Link } from "react-router-dom"
import { ExternalLink, Globe, Calendar, BarChart3 } from "lucide-react"

export default function Sitemap() {
  // Routes statiques principales
  const mainRoutes = [
    { path: '/', name: 'Home', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', name: 'About', priority: '0.9', changefreq: 'monthly' },
    { path: '/features', name: 'Features', priority: '0.8', changefreq: 'monthly' },
    { path: '/pricing', name: 'Pricing', priority: '0.8', changefreq: 'monthly' },
    { path: '/testimonials', name: 'Testimonials', priority: '0.7', changefreq: 'monthly' },
    { path: '/guide', name: 'User Guide', priority: '0.7', changefreq: 'monthly' }
  ]

  // Routes de plateforme
  const platformRoutes = [
    { path: '/serverless', name: 'Serverless', priority: '0.8', changefreq: 'monthly' },
    { path: '/government', name: 'Government', priority: '0.6', changefreq: 'monthly' }
  ]

  // Routes de contenu
  const contentRoutes = [
    { path: '/blog', name: 'Blog', priority: '0.7', changefreq: 'weekly' }
  ]

  // Routes de support
  const supportRoutes = [
    { path: '/contact', name: 'Contact', priority: '0.6', changefreq: 'monthly' },
    { path: '/status', name: 'Status', priority: '0.5', changefreq: 'daily' },
    { path: '/customer-support', name: 'Customer Support', priority: '0.6', changefreq: 'monthly' }
  ]

  // Routes de confiance et sécurité
  const trustRoutes = [
    { path: '/trust', name: 'Trust & Security', priority: '0.5', changefreq: 'monthly' },
    { path: '/vulnerabilities', name: 'Vulnerability Disclosure', priority: '0.4', changefreq: 'monthly' }
  ]

  // Routes légales
  const legalRoutes = [
    { path: '/terms-of-service', name: 'Terms of Service', priority: '0.3', changefreq: 'yearly' },
    { path: '/privacy-policy', name: 'Privacy Policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/legal-notice', name: 'Legal Notice', priority: '0.3', changefreq: 'yearly' },
    { path: '/use-of-data', name: 'Use of Data', priority: '0.3', changefreq: 'yearly' },
    { path: '/trademark', name: 'Trademark Policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/sla', name: 'Service Level Agreement', priority: '0.4', changefreq: 'yearly' }
  ]

  // Toutes les routes combinées
  const allRoutes = [
    ...mainRoutes,
    ...platformRoutes,
    ...contentRoutes,
    ...supportRoutes,
    ...trustRoutes,
    ...legalRoutes
  ]

  const routeSections = [
    { title: 'Main Pages', routes: mainRoutes, icon: Globe },
    { title: 'Platform', routes: platformRoutes, icon: BarChart3 },
    { title: 'Content', routes: contentRoutes, icon: ExternalLink },
    { title: 'Support', routes: supportRoutes, icon: ExternalLink },
    { title: 'Trust & Security', routes: trustRoutes, icon: ExternalLink },
    { title: 'Legal', routes: legalRoutes, icon: ExternalLink }
  ]

  const generateXMLSitemap = () => {
    const baseUrl = 'https://varga.foundation'
    const currentDate = new Date().toISOString().split('T')[0]
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
    
    allRoutes.forEach(route => {
      xml += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`
    })
    
    xml += `</urlset>`
    return xml
  }

  const downloadSitemap = () => {
    const xml = generateXMLSitemap()
    const blob = new Blob([xml], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sitemap.xml'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const copyXMLToClipboard = () => {
    const xml = generateXMLSitemap()
    navigator.clipboard.writeText(xml).then(() => {
      alert('XML sitemap copied to clipboard!')
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              site navigation
            </div>

            <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
              sitemap
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
              complete overview of all pages and sections on varga.foundation.
              <br />
              find what you're looking for quickly and easily.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                  {allRoutes.length}
                </div>
                <div className="text-gray-600 font-mono text-sm">total pages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                  {routeSections.length}
                </div>
                <div className="text-gray-600 font-mono text-sm">sections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                  3
                </div>
                <div className="text-gray-600 font-mono text-sm">languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-mono font-bold text-black mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-mono text-sm">updated</div>
              </div>
            </div>

            {/* XML Sitemap Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={downloadSitemap}
                className="btn-primary px-6 py-3 font-mono"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                download xml sitemap
              </button>
              <button
                onClick={copyXMLToClipboard}
                className="btn-secondary px-6 py-3 font-mono"
              >
                copy xml to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap Sections */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routeSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white border border-gray-200 p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center mr-4">
                      <section.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-mono font-bold text-black">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.routes.map((route, routeIndex) => (
                      <div key={routeIndex} className="group">
                        <Link
                          to={route.path}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                        >
                          <div>
                            <div className="font-mono font-bold text-black group-hover:text-blue-600 transition-colors text-sm">
                              {route.name}
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                              {route.path === '/' ? '/home' : route.path}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500 font-mono">
                              {route.changefreq}
                            </div>
                            <div className="text-xs text-gray-400 font-mono">
                              p:{route.priority}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* XML Preview */}
      <div className="section-padding bg-white border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                xml sitemap preview
              </h2>
              <p className="text-lg text-gray-600 font-mono">
                google-compatible xml sitemap format
              </p>
            </div>
            
            <div className="bg-black text-white font-mono text-sm overflow-x-auto">
              <div className="bg-gray-800 px-4 py-2 text-gray-300 text-xs border-b border-gray-700 flex items-center justify-between">
                <span>sitemap.xml</span>
                <button
                  onClick={copyXMLToClipboard}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  copy
                </button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-xs">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://varga.foundation/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://varga.foundation/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... ${allRoutes.length - 2} more URLs ... -->
</urlset>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Information */}
      <div className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
                seo information
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="font-mono font-bold text-black mb-4">submission urls</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div>
                    <div className="text-gray-600 mb-1">google search console:</div>
                    <div className="text-black break-all">https://varga.foundation/sitemap.xml</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">bing webmaster tools:</div>
                    <div className="text-black break-all">https://varga.foundation/sitemap.xml</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">robots.txt reference:</div>
                    <div className="text-black break-all">Sitemap: https://varga.foundation/sitemap.xml</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="font-mono font-bold text-black mb-4">update frequency</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">home page:</span>
                    <span className="text-black">weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">product pages:</span>
                    <span className="text-black">monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">blog:</span>
                    <span className="text-black">weekly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">status page:</span>
                    <span className="text-black">daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">legal pages:</span>
                    <span className="text-black">yearly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}