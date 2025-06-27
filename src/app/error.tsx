'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Algo deu errado
          </h1>
          <p className="text-gray-600 mb-6">
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-[#866D36] hover:bg-[#9d824b] text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
          >
            Tentar Novamente
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-md font-medium transition-colors duration-300"
          >
            Voltar ao Início
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Se o problema persistir, entre em contato conosco:
          </p>
          <a 
            href="tel:+551134567890" 
            className="text-[#866D36] hover:text-[#9d824b] font-medium"
          >
            (11) 3456-7890
          </a>
        </div>
      </div>
    </div>
  );
} 