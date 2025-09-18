import { useEffect, useState } from 'react'

export function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients = [
    { name: "layer4", logo: "L4" },
    { name: "ackware", logo: "AW" },
    { name: "region acquitaine", logo: "RA" },
    { name: "CXarbon", logo: "CX" },
    { name: "université de rouen", logo: "UR" },
    { name: "hopitaux de paris", logo: "HP" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 4))
    }, 3000)

    return () => clearInterval(timer)
  }, [clients.length])

  const getVisibleClients = () => {
    const startIndex = currentIndex * 4
    return clients.slice(startIndex, startIndex + 4)
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 font-mono mb-6">trusted by teams at</p>
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center gap-8 transition-all duration-500">
          {getVisibleClients().map((client, index) => (
            <div 
              key={`${currentIndex}-${index}`}
              className="flex items-center space-x-3 text-gray-400 font-mono text-sm animate-fade-in"
            >
              <div className="w-8 h-8 bg-gray-200 flex items-center justify-center font-mono text-xs font-bold text-gray-600">
                {client.logo}
              </div>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 transition-colors ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}