import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(98%_0.01_80deg)] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-[oklch(40%_0.02_80deg)] mb-4">Post não encontrado</h2>
        <p className="text-[oklch(50%_0.02_80deg)] mb-6">
          O artigo que você está procurando não foi encontrado ou pode ter sido removido.
        </p>
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#866D36] hover:text-[#9d824b] text-sm font-medium"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Voltar ao blog
        </Link>
      </div>
    </div>
  )
} 