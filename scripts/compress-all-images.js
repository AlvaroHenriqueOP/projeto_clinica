import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'compressed');

// Criar diretório de saída se não existir
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Função para comprimir imagem
async function compressImage(inputPath, outputPath, quality = 80, width = 1200) {
  try {
    // Verificar se o diretório de saída existe, se não, criar
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);
    
    console.log(`✅ ${path.relative(PUBLIC_DIR, inputPath)}: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${compressionRatio}% redução)`);
    
    return {
      original: inputStats.size,
      compressed: outputStats.size,
      ratio: compressionRatio
    };
  } catch (error) {
    console.error(`❌ Erro ao comprimir ${inputPath}:`, error);
    return null;
  }
}

// Função para percorrer diretórios recursivamente
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const relativePath = path.relative(PUBLIC_DIR, fullPath);
    const outputPath = path.join(OUTPUT_DIR, relativePath);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Se for um diretório, processar recursivamente
      if (file !== 'compressed') { // Evitar processar o diretório de saída
        await processDirectory(fullPath);
      }
    } else if (
      file.endsWith('.jpg') || 
      file.endsWith('.jpeg') || 
      file.endsWith('.png')
    ) {
      // Se for uma imagem, comprimir
      await compressImage(fullPath, outputPath);
    }
  }
}

async function main() {
  console.log('🔍 Procurando imagens para comprimir...');
  
  let startTime = Date.now();
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let processedImages = 0;
  
  try {
    await processDirectory(PUBLIC_DIR);
    
    // Calcular estatísticas
    function calculateStats(directory) {
      const files = fs.readdirSync(directory);
      
      for (const file of files) {
        const fullPath = path.join(directory, file);
        
        if (fs.statSync(fullPath).isDirectory()) {
          if (file !== 'compressed') {
            calculateStats(fullPath);
          }
        } else if (
          file.endsWith('.jpg') || 
          file.endsWith('.jpeg') || 
          file.endsWith('.png')
        ) {
          const relativePath = path.relative(PUBLIC_DIR, fullPath);
          const compressedPath = path.join(OUTPUT_DIR, relativePath);
          
          if (fs.existsSync(compressedPath)) {
            const originalSize = fs.statSync(fullPath).size;
            const compressedSize = fs.statSync(compressedPath).size;
            
            totalOriginalSize += originalSize;
            totalCompressedSize += compressedSize;
            processedImages++;
          }
        }
      }
    }
    
    calculateStats(PUBLIC_DIR);
    
    const totalSavings = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(2);
    const timeElapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log('\n📊 Resumo da compressão:');
    console.log(`   Total de imagens processadas: ${processedImages}`);
    console.log(`   Total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Total comprimido: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Economia total: ${totalSavings}%`);
    console.log(`   Tempo total: ${timeElapsed} segundos`);
    console.log('\n✨ Compressão concluída! As imagens comprimidas estão em /public/compressed');
    console.log('   Para substituir as originais, você pode usar o comando:');
    console.log('   node scripts/replace-with-compressed.js');
  } catch (error) {
    console.error('❌ Erro durante o processamento:', error);
  }
}

main().catch(console.error); 