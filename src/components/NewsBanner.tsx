import { useState, useEffect } from 'react'
import { X, ArrowRight, ExternalLink } from 'lucide-react'

export function NewsBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const newsItems = [
    // {
    //   text: "nouveau projet mlops v3.0 disponible avec support kubernetes natif",
    //   link: "/blog",
    //   type: "release"
    // },
    {
      text: "nouvelles fonctionnalités : outils avancés de gouvernance des données",
      link: "/projects",
      type: "feature"
    },
    {
      text: "rejoignez-nous au salon open source 2025 - stand #42",
      link: "#",
      type: "event"
    },
    {
      text: "programme de financement pour associations et ong - candidatures ouvertes",
      link: "/donate",
      type: "offer"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [newsItems.length])

  if (!isVisible) return null

  const currentNews = newsItems[currentIndex]

  return (
    <div className="bg-black text-white py-2 px-4 relative overflow-hidden z-[60]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className={`px-2 py-1 text-xs font-mono font-bold ${
            currentNews.type === 'release' ? 'bg-blue-600' :
            currentNews.type === 'feature' ? 'bg-green-600' :
            currentNews.type === 'event' ? 'bg-purple-600' :
            'bg-orange-600'
          }`}>
            {currentNews.type}
          </div>
          
          <a 
            href={currentNews.link}
            className="flex items-center space-x-2 text-sm font-mono hover:text-gray-300 transition-colors flex-1"
          >
            <span className="truncate">{currentNews.text}</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </a>
        </div>

        {/* Indicators */}
        <div className="hidden md:flex items-center space-x-2 mx-4">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors ml-4"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}