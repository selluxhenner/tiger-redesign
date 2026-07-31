const fs = require('fs');
const path = require('path');

const files = ['tiger-wil.html', 'events.html', 'impressum.html'];
const outDir = path.join(__dirname, 'extracted-images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const extFor = (mime) => {
  if (mime.includes('png')) return 'png';
  if (mime.includes('jpeg') || mime.includes('jpg')) return 'jpg';
  if (mime.includes('webp')) return 'webp';
  if (mime.includes('svg')) return 'svg';
  if (mime.includes('gif')) return 'gif';
  return 'bin';
};

for (const file of files) {
  const full = path.join(__dirname, file);
  let content = fs.readFileSync(full, 'utf8');
  const base = path.basename(file, '.html');
  let counter = 0;
  const manifest = [];

  // Match data:image/...;base64,....  up to the closing quote
  const regex = /data:image\/([a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=]+)/g;
  content = content.replace(regex, (match, mime, data) => {
    counter++;
    const ext = extFor(mime.toLowerCase());
    const name = `${base}-img-${counter}.${ext}`;
    const outPath = path.join(outDir, name);
    fs.writeFileSync(outPath, Buffer.from(data, 'base64'));
    manifest.push({ index: counter, name, mime, bytes: data.length, approxKB: Math.round(data.length * 0.75 / 1024) });
    return `/images/${name}`;
  });

  fs.writeFileSync(path.join(__dirname, `${base}.clean.html`), content, 'utf8');
  fs.writeFileSync(path.join(outDir, `${base}-manifest.json`), JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`${file}: extracted ${counter} images, clean file size ${(content.length/1024).toFixed(1)} KB`);
}
