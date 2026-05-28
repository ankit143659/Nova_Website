import fs from 'fs';
let content = fs.readFileSync('index.html', 'utf-8');
content = content.replace(/VASH AI Technologies Pvt Ltd/gi, 'VASH AI Technologies Private Limited');
content = content.replace(/vash ai technologies pvt ltd/gi, 'vash ai technologies private limited');
fs.writeFileSync('index.html', content);
