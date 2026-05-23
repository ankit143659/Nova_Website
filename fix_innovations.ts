import fs from 'fs';

const files = [
  './components/AboutContent.tsx',
  './components/CompanyHomePage.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/invashtions/g, 'innovations');
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed innovations');
