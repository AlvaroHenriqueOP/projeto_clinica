import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images', 'blog', 'compressed');

// Criar diretório de saída se não existir
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function compressImage(inputPath, outputPath, quality = 80, width = 1200) {
  try {
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${compressionRatio}% redução)`);
    
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

async function main() {
  console.log('🔍 Procurando imagens do blog para comprimir...');
  
  const files = fs.readdirSync(BLOG_IMAGES_DIR)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
    .filter(file => !file.includes('compressed'));
  
  console.log(`🖼️ Encontradas ${files.length} imagens para compressão`);
  
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  
  for (const file of files) {
    const inputPath = path.join(BLOG_IMAGES_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    
    const result = await compressImage(inputPath, outputPath);
    
    if (result) {
      totalOriginalSize += result.original;
      totalCompressedSize += result.compressed;
    }
  }
  
  const totalSavings = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(2);
  console.log('\n📊 Resumo da compressão:');
  console.log(`   Total original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Total comprimido: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Economia total: ${totalSavings}%`);
  console.log('\n✨ Compressão concluída! As imagens comprimidas estão em /public/images/blog/compressed');
  console.log('   Para substituir as originais, copie os arquivos da pasta compressed para a pasta blog');
}

main().catch(console.error); 