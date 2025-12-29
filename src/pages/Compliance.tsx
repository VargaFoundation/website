import { useTranslation } from 'react-i18next'

export default function Compliance() {
    const { t } = useTranslation()
    const certifications = [
        {
            key: 'fedramp',
            status: 'planned'
        },
        {
            key: 'soc2',
            status: 'pending'
        },
        {
            key: 'iso27001',
            status: 'pending'
        },
        {
            key: 'fips1402',
            status: 'planned'
        }
    ] as const

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="section-padding bg-white">
                <div className="container mx-auto container-padding">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
                            <div className="w-1 h-1 bg-black mr-2"></div>
                            {t('pages.compliance.badge')}
                        </div>

                        <h1 className="text-6xl md:text-7xl text-display mb-12 text-black leading-none">
                            {t('pages.compliance.title')}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 text-body mb-16 max-w-3xl mx-auto">
                            {t('pages.compliance.intro')}
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
                                        <h3 className="font-mono font-bold text-black">{t(`pages.compliance.certs.${cert.key}.name`)}</h3>
                                        <div
                                            className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 font-mono text-xs">
                                            {t(`common.status.${cert.status}`)}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-mono text-sm">{t(`pages.compliance.certs.${cert.key}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}