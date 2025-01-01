'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Metadata } from 'next'

// Note: Metadata export is removed as it's not supported in Client Components

export default function DomainSalePage() {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100 dark:bg-gray-900">
      <main className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-100">
          이 도메인을 판매중입니다.
        </h1>
        <p className="max-w-[600px] text-xl text-gray-600 dark:text-gray-400">
          구매에 관심이 있으신가요? 자세한 정보를 원하시면 연락 주세요.
        </p>
        <Button 
          className="text-lg" 
          size="lg"
          onClick={() => setShowEmail(true)}
        >
          연락하기
        </Button>
        {showEmail && (
          <p className="text-xl text-gray-800 dark:text-gray-200">
            이메일: ad@asd.ad
          </p>
        )}
      </main>
    </div>
  )
}