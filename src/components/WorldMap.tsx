import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"

export function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mapping des codes ISO des pays aux données de contribution
  const countryData: { [key: string]: any } = {
    'FRA': {
      name: 'France',
      continent: 'Europe',
      contributors: 12,
      projects: 5,
      level: 'high',
      organizations: 11
    },
    // 'DEU': {
    //   name: 'Germany',
    //   continent: 'Europe',
    //   contributors: 800,
    //   projects: 12,
    //   level: 'high',
    //   organizations: 32
    // },
    // 'CAN': {
    //   name: 'Canada',
    //   continent: 'North America',
    //   contributors: 650,
    //   projects: 8,
    //   level: 'medium',
    //   organizations: 28
    // },
    // 'ESP': {
    //   name: 'Spain',
    //   continent: 'Europe',
    //   contributors: 500,
    //   projects: 6,
    //   level: 'medium',
    //   organizations: 22
    // },
    // 'ITA': {
    //   name: 'Italy',
    //   continent: 'Europe',
    //   contributors: 400,
    //   projects: 5,
    //   level: 'medium',
    //   organizations: 18
    // },
    // 'NLD': {
    //   name: 'Netherlands',
    //   continent: 'Europe',
    //   contributors: 350,
    //   projects: 4,
    //   level: 'low',
    //   organizations: 15
    // },
    // 'BEL': {
    //   name: 'Belgium',
    //   continent: 'Europe',
    //   contributors: 280,
    //   projects: 3,
    //   level: 'low',
    //   organizations: 12
    // },
    // 'CHE': {
    //   name: 'Switzerland',
    //   continent: 'Europe',
    //   contributors: 220,
    //   projects: 3,
    //   level: 'low',
    //   organizations: 10
    // },
    // 'USA': {
    //   name: 'United States',
    //   continent: 'North America',
    //   contributors: 450,
    //   projects: 7,
    //   level: 'medium',
    //   organizations: 25
    // },
    // 'BRA': {
    //   name: 'Brazil',
    //   continent: 'South America',
    //   contributors: 180,
    //   projects: 2,
    //   level: 'low',
    //   organizations: 8
    // },
    // 'JPN': {
    //   name: 'Japan',
    //   continent: 'Asia',
    //   contributors: 320,
    //   projects: 4,
    //   level: 'low',
    //   organizations: 14
    // },
    // 'AUS': {
    //   name: 'Australia',
    //   continent: 'Oceania',
    //   contributors: 150,
    //   projects: 2,
    //   level: 'low',
    //   organizations: 6
    // },
    // 'IND': {
    //   name: 'India',
    //   continent: 'Asia',
    //   contributors: 380,
    //   projects: 5,
    //   level: 'medium',
    //   organizations: 20
    // },
    // 'GBR': {
    //   name: 'United Kingdom',
    //   continent: 'Europe',
    //   contributors: 420,
    //   projects: 6,
    //   level: 'medium',
    //   organizations: 24
    // },
    // 'SWE': {
    //   name: 'Sweden',
    //   continent: 'Europe',
    //   contributors: 190,
    //   projects: 2,
    //   level: 'low',
    //   organizations: 9
    // },
    // 'NOR': {
    //   name: 'Norway',
    //   continent: 'Europe',
    //   contributors: 160,
    //   projects: 2,
    //   level: 'low',
    //   organizations: 7
    // }
  }

  const totalContributors = Object.values(countryData).reduce(
      (sum, data) => sum + data.contributors,
      0
  ); // Compte tous les contributeurs

  const totalCountries = Object.keys(countryData).length; // Compte le nombre de pays
  const activeProjects = Object.values(countryData).reduce(
      (sum, data) => sum + data.projects,
      0
  ); // Compte tous les projets actifs

  const totalOrganizations = Object.values(countryData).reduce(
      (sum, data) => sum + data.organizations,
      0
  ); // Compte toutes les organisations

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high': return '#000000'
      case 'medium': return '#525252'
      case 'low': return '#a3a3a3'
      default: return '#f5f5f5'
    }
  }

  const getCountryFill = (geo: any) => {
    const countryCode = geo.id
    const data = countryData[countryCode]
    
    // console.log(geo) // Debug
    // console.log('Country:', geo.properties.name, 'Code:', countryCode, 'Data:', data) // Debug

    if (data) {
      return getLevelColor(data.level)
    }
    return '#f5f5f5' // Couleur par défaut pour les pays sans données
  }

  const handleCountryHover = (geo: any, event: React.MouseEvent) => {
    console.log(geo) // Debug
    const countryCode = geo.id
    const data = countryData[countryCode]
    
    if (data) {
      setHoveredCountry(data)
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleCountryLeave = () => {
    setHoveredCountry(null)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredCountry) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
  }

  return (
    <div className="w-full max-w-none">
      {/* World Map - Full Width */}
      <div className="relative bg-white border-t border-b border-gray-200 p-8 mb-8">
        <div className="relative w-full h-[600px] mb-8" onMouseMove={handleMouseMove}>
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{
              scale: 200,
              center: [0, 0]
            }}
            width={1200}
            height={600}
            className="w-full h-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryCode = geo.id
                  const data = countryData[countryCode]

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryFill(geo)}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      className={data ? "cursor-pointer transition-all duration-200 hover:brightness-110" : ""}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "#34495e" },
                        pressed: { outline: "none" }
                      }}
                      onMouseEnter={(e) => data && handleCountryHover(geo, e)}
                      onMouseLeave={handleCountryLeave}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Tooltip */}
          {hoveredCountry && (
            <div
              className="fixed z-50 bg-black text-white p-4 font-mono text-sm pointer-events-none"
              style={{
                left: mousePosition.x + 10,
                top: mousePosition.y - 10,
                transform: 'translateY(-100%)'
              }}
            >
              <div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pays:</span>
                  <span className="text-white font-bold">{hoveredCountry.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Contributeurs:</span>
                  <span className="text-white">{hoveredCountry.contributors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Projets:</span>
                  <span className="text-white">{hoveredCountry.projects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Organisations:</span>
                  <span className="text-white">{hoveredCountry.organizations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Niveau:</span>
                  <span className="text-green-400 font-bold">{hoveredCountry.level}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {['high', 'medium', 'low'].map(level => (
            <div key={level} className="flex items-center">
              <div 
                className="w-4 h-4 mr-2 shadow-sm"
                style={{ backgroundColor: getLevelColor(level) }}
              ></div>
              <span className="font-mono text-sm text-gray-700">contribution {level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Stats */}
      <div className="container mx-auto container-padding">
        <div className="mt-8 bg-gray-50 border border-gray-200 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-mono font-bold text-black mb-2">{totalCountries}
              </div>
              <div className="text-gray-600 font-mono text-sm">pays contributeurs</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-black mb-2">{totalContributors}
              </div>
              <div className="text-gray-600 font-mono text-sm">contributeurs totaux</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-black mb-2"> {activeProjects}
              </div>
              <div className="text-gray-600 font-mono text-sm">projets actifs</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-black mb-2"> {totalOrganizations}
              </div>
              <div className="text-gray-600 font-mono text-sm">organisations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}