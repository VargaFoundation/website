export default function Compliance() {
    const certifications = [
        {
            name: "FedRAMP Moderate",
            description: "authorized for federal government use",
            status: "planned"
        },
        {
            name: "SOC 2 Type II",
            description: "security and availability controls",
            status: "pending"
        },
        {
            name: "ISO 27001",
            description: "information security management",
            status: "pending"
        },
        {
            name: "FIPS 140-2",
            description: "cryptographic module validation",
            status: "planned"
        }
    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
                            <div className="w-1 h-1 bg-black mr-2"></div>
                            certifications & compliance
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            certifications & compliance
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            démocratiser l'accès aux technologies data et intelligence artificielle
                            pour créer un monde plus équitable et innovant.
                        </p>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="section-padding bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto">

                        <div className="grid md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-mono font-bold text-black">{cert.name}</h3>
                                        <div
                                            className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 font-mono text-xs">
                                            {cert.status}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-mono text-sm">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}