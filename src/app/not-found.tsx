import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-[#866D36]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#866D36]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-[#866D36] mb-2">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
          >
            Voltar ao Início
          </Link>
          
          <Link
            href="/tratamentos"
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-md font-medium transition-colors duration-300"
          >
            Ver Tratamentos
          </Link>
          
          <Link
            href="/contato"
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-md font-medium transition-colors duration-300"
          >
            Entre em Contato
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            Precisa de ajuda? Entre em contato:
          </p>
          <div className="space-y-1">
            <a 
              href="tel:+551134567890" 
              className="block text-[#866D36] hover:text-[#9d824b] font-medium text-sm"
            >
              📞 (11) 3456-7890
            </a>
            <a 
              href="mailto:contato@dentalblanc.com.br" 
              className="block text-[#866D36] hover:text-[#9d824b] font-medium text-sm"
            >
              ✉️ contato@dentalblanc.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 