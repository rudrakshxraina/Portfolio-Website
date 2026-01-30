import fs from 'fs';
const path = "C:\\Users\\rudra\\Desktop\\Resume\\Rudraksh_Raina_Resume_.pdf";
try {
  const b = fs.readFileSync(path);
  const s = b.toString('latin1');
  // find URLs
  const urlRegex = /https?:\/\/[^\s"<>]{8,}/g;
  const matches = s.match(urlRegex) || [];
  // print unique
  const uniq = Array.from(new Set(matches));
  console.log(JSON.stringify({ urls: uniq }, null, 2));
} catch (e) {
  console.error('ERROR', e.message);
  process.exit(1);
}
