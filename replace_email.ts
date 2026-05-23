import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/novawroking/g, 'novawroking');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function processDirectory(dirPath: string) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
        const ignoreDirs = ['node_modules', '.git', 'migrated_prompt_history', 'dist', '.next'];
        if (!ignoreDirs.some(dir => fullPath.includes(dir))) {
            processDirectory(fullPath);
        }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html') || fullPath.endsWith('.json')) {
      replaceInFile(fullPath);
    }
  }
}

processDirectory('./');
