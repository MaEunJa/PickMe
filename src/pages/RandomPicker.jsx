import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const base = import.meta.env.BASE_URL
const ITEMS = [
  { name: '해바라기-중', image: `${base}images/0.jpg` },
  { name: '해바라기-소', image: `${base}images/1.jpg` },
  { name: '해바라기-초소+컵받침', image: `${base}images/2.jpg` },
  { name: '거북이', image: `${base}images/3.jpg` },
]

function getRandomItem() {
  return ITEMS[Math.floor(Math.random() * ITEMS.length)]
}

export default function RandomPicker() {
  const [result, setResult] = useState(null)

  function handleStart() {
    setResult(getRandomItem())
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:px-8 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8 text-foreground">
        랜덤 뽑기
      </h1>
      <Button
        size="lg"
        onClick={handleStart}
        className="min-h-[48px] min-w-[140px] text-lg sm:text-xl rounded-full bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white border-0 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 hover:scale-105 active:scale-[0.98] touch-manipulation select-none"
      >
        시작
      </Button>

      {result !== null && (
        <Card
          key={result.name}
          className="mt-6 sm:mt-8 w-[min(20rem,90vw)] border-amber-500/40 bg-card/95 backdrop-blur animate-pop shadow-xl shadow-amber-500/10"
        >
          <CardContent className="pt-6 pb-6">
            <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-4 break-keep px-2">
              {result.name}
            </p>
            <img
              src={result.image}
              alt={result.name}
              className="w-[min(16rem,85vw)] h-[min(16rem,85vw)] sm:w-64 sm:h-64 mx-auto object-cover rounded-xl border-2 border-amber-500/30 shadow-xl"
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
