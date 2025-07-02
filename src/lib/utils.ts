import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes CSS usando clsx e tailwind-merge
 * 
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com as classes combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gera um placeholder de cor para imagens
 * 
 * @param seed - Seed para gerar a cor (normalmente o src da imagem)
 * @returns String com o código de cor em formato HSL
 */
export function generatePlaceholderColor(seed: string): string {
  // Gera um hash simples da string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Converte o hash para HSL com saturação e luminosidade suaves
  const h = Math.abs(hash) % 360;
  const s = 20 + (Math.abs(hash) % 30); // 20-50%
  const l = 85 + (Math.abs(hash) % 10); // 85-95%

  return `hsl(${h}, ${s}%, ${l}%)`;
} 