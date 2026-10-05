const fs = require('fs');
const files = fs.readdirSync('d:/bday/HBD/public/gallery').filter(f => f.endsWith('.mp4'));
let newArrayStr = '  videoMemories: [\n';
files.forEach((f, idx) => {
  newArrayStr += `    { id: "vid_${idx}", url: "/gallery/${f}", caption: "Caught on Camera ${idx + 1}", date: "Special Moment" }${idx === files.length - 1 ? '' : ','}\n`;
});
newArrayStr += '  ],';

const contentPath = 'd:/bday/HBD/src/data/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');
content = content.replace(/videoMemories:\s*\[[\s\S]*?\],/, newArrayStr);
fs.writeFileSync(contentPath, content);
console.log("Updated successfully!");
