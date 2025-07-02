const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const COMPRESSED_DIR = path.join(process.cwd(), 'public', 'compressed');
const BACKUP_DIR = path.join(process.cwd(), 'public', 'images_backup');

// Criar diretório de backup se não existir
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Função para copiar arquivo
function copyFile(source, destination) {
  try {
    // Verificar se o diretório de destino existe, se não, criar
    const destDir = path.dirname(destination);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.copyFileSync(source, destination);
    return true;
  } catch (error) {
    console.error(`❌ Erro ao copiar ${source} para ${destination}:`, error);
    return false;
  }
}

// Função para percorrer diretórios recursivamente
function processDirectory(directory, baseOutputDir) {
  const files = fs.readdirSync(directory);
  let replacedFiles = 0;
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Se for um diretório, processar recursivamente
      if (file !== 'compressed' && file !== 'images_backup') {
        replacedFiles += processDirectory(fullPath, baseOutputDir);
      }
    } else if (
      file.endsWith('.jpg') || 
      file.endsWith('.jpeg') || 
      file.endsWith('.png')
    ) {
      // Se for uma imagem, verificar se existe versão comprimida
      const relativePath = path.relative(PUBLIC_DIR, fullPath);
      const compressedPath = path.join(COMPRESSED_DIR, relativePath);
      const backupPath = path.join(BACKUP_DIR, relativePath);
      
      if (fs.existsSync(compressedPath)) {
        // Fazer backup da imagem original
        if (copyFile(fullPath, backupPath)) {
          // Substituir pela versão comprimida
          if (copyFile(compressedPath, fullPath)) {
            console.log(`✅ Substituída: ${relativePath}`);
            replacedFiles++;
          }
        }
      }
    }
  }
  
  return replacedFiles;
}

function main() {
  console.log('🔄 Iniciando substituição de imagens...');
  console.log('📦 Fazendo backup das imagens originais em /public/images_backup');
  
  try {
    const replacedFiles = processDirectory(PUBLIC_DIR, COMPRESSED_DIR);
    
    console.log(`\n✨ Processo concluído! ${replacedFiles} imagens foram substituídas.`);
    console.log('📋 As imagens originais foram salvas em /public/images_backup');
    console.log('🗑️ Se tudo estiver funcionando corretamente, você pode remover o diretório /public/compressed');
  } catch (error) {
    console.error('❌ Erro durante a substituição:', error);
  }
}

main(); 