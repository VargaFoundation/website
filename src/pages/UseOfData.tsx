import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {info} from "@/data/info.tsx";
import { useTranslation } from 'react-i18next'

export default function UseOfData() {
  const { t } = useTranslation()
  const sections = t('pages.useOfData.sections', { returnObjects: true }) as any
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 text-sm font-mono mb-12">
              <div className="w-1 h-1 bg-black mr-2"></div>
              {t('pages.useOfData.badge')}
            </div>

            <h1 className="text-5xl md:text-6xl text-display mb-12 text-black leading-none">
              {t('pages.useOfData.title')}
            </h1>
            
            <div className="prose prose-gray max-w-none font-mono text-sm">
              <p className="text-lg text-gray-600 mb-12">
                {t('pages.useOfData.lastUpdated')}: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.types.title}</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  {sections.types.lines.map((line: string, idx: number) => (
                    <span key={idx}>
                      {line}<br />
                    </span>
                  ))}
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.purposes.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.purposes.lines.map((line: string, idx: number) => (
                  <span key={idx}>
                    {line}<br />
                  </span>
                ))}
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.legalBasis.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.legalBasis.lines.map((line: string, idx: number) => (
                  <span key={idx}>
                    {line}<br />
                  </span>
                ))}
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.minimization.title}</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  {sections.minimization.lines.map((line: string, idx: number) => (
                    <span key={idx}>
                      {line}<br />
                    </span>
                  ))}
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.retention.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.retention.lines.map((line: string, idx: number) => (
                  <span key={idx}>
                    {line}<br />
                  </span>
                ))}
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.transfers.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.transfers.lines.map((line: string, idx: number) => (
                  <span key={idx}>
                    {line}<br />
                  </span>
                ))}
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.automation.title}</h2>
              <div className="bg-gray-50 p-6 mb-8">
                <p className="text-gray-700 mb-4">
                  {sections.automation.lines.map((line: string, idx: number) => (
                    <span key={idx}>
                      {line}<br />
                    </span>
                  ))}
                </p>
              </div>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.control.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.control.lines.map((line: string, idx: number) => (
                  <span key={idx}>
                    {line}<br />
                  </span>
                ))}
              </p>

              <h2 className="text-2xl font-mono font-bold mb-6 text-black">{sections.contact.title}</h2>
              <p className="text-gray-700 mb-8">
                {sections.contact.lines[0]}<br />
                {sections.contact.emailLabel}: {info.mail.dpo}<br />
                {sections.contact.lines[1]}<br />
                {sections.contact.lines[2]}
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/">
                <Button className="btn-secondary font-mono">
                  {t('common.actions.backToHome')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}