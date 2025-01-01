'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

const content = {
  ko: {
    title: "도메인을 판매합니다.",
    description: "구매에 관심이 있으신가요? 자세한 정보를 원하시면 연락 주세요.",
    contactButton: "연락하기",
    email: "이메일:",
    languageToggle: "English"
  },
  en: {
    title: "This domain is for sale.",
    description: "Interested in purchasing? Get in touch for more information.",
    contactButton: "Contact Me",
    email: "Email:",
    languageToggle: "한국어"
  }
}

export default function DomainSalePage() {
  const [showEmail, setShowEmail] = useState(false)
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100 dark:bg-gray-900">
      <Button 
        onClick={toggleLanguage} 
        variant="outline" 
        className="absolute top-4 right-4"
      >
        {content[language].languageToggle}
      </Button>
      <main className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-100">
          {content[language].title}
        </h1>
        <p className="max-w-[600px] text-xl text-gray-600 dark:text-gray-400">
          {content[language].description}
        </p>
        <Button 
          className="text-lg" 
          size="lg"
          onClick={() => setShowEmail(true)}
        >
          {content[language].contactButton}
        </Button>
        {showEmail && (
          <p className="text-xl text-gray-800 dark:text-gray-200">
            {content[language].email} ad@asd.ad
          </p>
        )}
      </main>
    </div>
  )
}

