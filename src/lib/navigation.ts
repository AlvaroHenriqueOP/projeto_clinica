/**
 * Navega suavemente para uma seção específica da página
 * @param sectionId ID da seção para navegar
 * @param offset Offset opcional em pixels para ajustar a posição final (útil para compensar headers fixos)
 */
export function scrollToSection(sectionId: string, offset: number = 0): void {
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return;
  
  // Encontrar o elemento pelo ID
  const element = document.getElementById(sectionId);
  
  if (element) {
    // Calcular a posição do elemento
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Realizar a rolagem suave
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Navega suavemente para o topo da página
 */
export function scrollToTop(): void {
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Pré-carrega um componente para reduzir o tempo de carregamento
 * @param importFunc Função de importação do componente (lazy)
 */
export function preloadComponent(importFunc: () => Promise<any>): void {
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return;
  
  // Iniciar o carregamento do componente sem renderizá-lo
  importFunc().catch(() => {
    // Silenciar erros de carregamento
  });
}

/**
 * Pré-carrega uma página para reduzir o tempo de carregamento
 * @param path Caminho da página a ser pré-carregada
 */
export function preloadPage(path: string): void {
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  document.head.appendChild(link);
} 