import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import ReactGA from 'react-ga4'
import HCaptcha from '@hcaptcha/react-hcaptcha'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export function Newsletter() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const hcaptchaRef = useRef<HCaptcha>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
  }

  const handleCaptchaExpire = () => {
    setCaptchaToken(null)
  }

  const handleCaptchaError = (err: string) => {
    console.error('hCaptcha Error:', err)
    setCaptchaToken(null)
    setErrorMessage("security verification failed. please try again.")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    
    try {
      if (!formData.firstName.trim()) {
        throw new Error("first name required")
      }
      if (!formData.lastName.trim()) {
        throw new Error("last name required")
      }
      if (!formData.email.trim()) {
        throw new Error("email required")
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("invalid email format")
      }

      if (!captchaToken) {
        throw new Error("complete security verification")
      }

      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        captchaToken,
        source: 'newsletter_homepage'
      }

      console.log('newsletter signup:', payload)
      
      await new Promise(resolve => setTimeout(resolve, 1500))

      ReactGA.event({
        category: 'Newsletter',
        action: 'Subscribe',
        label: 'Homepage Form'
      })

      setStatus("success")
      setFormData({ firstName: "", lastName: "", email: "" })
      setCaptchaToken(null)
      
      if (hcaptchaRef.current) {
        hcaptchaRef.current.resetCaptcha()
      }

    } catch (error) {
      console.error('Error:', error)
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "an error occurred. please try again.")
    }
  }

  return (
    <div className="section-padding bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto container-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-display mb-8 text-black">
            stay updated
          </h2>
          <p className="text-gray-600 mb-12 text-lg font-mono">
            get the latest updates, tutorials, and announcements.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-mono text-gray-700 mb-2 text-left">
                  first name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="john"
                  className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-mono text-gray-700 mb-2 text-left">
                  last name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="doe"
                  className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-700 mb-2 text-left">
                email address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-black transition-colors font-mono"
                required
              />
            </div>

            <div className="flex justify-center">
              <HCaptcha
                ref={hcaptchaRef}
                sitekey="VOTRE_HCAPTCHA_SITE_KEY"
                onVerify={handleCaptchaVerify}
                onExpire={handleCaptchaExpire}
                onError={handleCaptchaError}
                theme="light"
                size="normal"
              />
            </div>

            <Button 
              type="submit"
              disabled={status === "loading" || !captchaToken}
              className="w-full md:w-auto btn-primary py-3 text-base font-mono disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin mr-2"></div>
                  subscribing...
                </div>
              ) : (
                "subscribe"
              )}
            </Button>

            {status === "success" && (
              <div className="bg-white border border-gray-300 p-4">
                <p className="text-black font-mono text-sm">
                  ✓ subscribed successfully. check your email.
                </p>
              </div>
            )}
            
            {status === "error" && (
              <div className="bg-white border border-gray-300 p-4">
                <p className="text-black font-mono text-sm">
                  ✗ {errorMessage}
                </p>
              </div>
            )}

            <p className="text-sm text-gray-500 font-mono">
              by subscribing, you agree to receive our emails. 
              unsubscribe anytime. 
              <a href="/privacy" className="text-black hover:text-gray-600 underline ml-1">
                privacy policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}