export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Spinner principal */}
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#866D36] rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Ícone dentário no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#866D36]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.91 1.47 2.2 2.81 3.77 3.96.78.57 1.63 1.03 2.52 1.37.89.34 1.82.52 2.77.55.95-.03 1.88-.21 2.77-.55.89-.34 1.74-.8 2.52-1.37 1.57-1.15 2.86-2.49 3.77-3.96C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Carregando...
        </h2>
        <p className="text-gray-600">
          Preparando sua experiência odontológica
        </p>
      </div>
    </div>
  );
} 