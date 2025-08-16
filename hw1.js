// File Organizer and Archiver for Local Storage

const fs = require('fs');
console.log(fs);
// const path = require('path');
// const crypto = require('crypto');
// const util = require('util');
// const stream = require('stream');
// const pipeline = util.promisify(stream.pipeline);
// const readdir = util.promisify(fs.readdir);
// const stat = util.promisify(fs.stat);
// const mkdir = util.promisify(fs.mkdir);
// const rename = util.promisify(fs.rename);
// const exists = util.promisify(fs.exists);

// const BASE_DIR = 'C:\users\downloads\messy_folder';
// const ARCHIVE_AGE_MS = 2 * 30 * 24 * 60 * 60 * 1000; // 2 months
// const BATCH_SIZE = 100;
// const typeMap = {
//   images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'],
//   documents: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.md'],
//   videos: ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv'],
// };
// async function makeDir(dir) {
//   if (!await exists(dir)) {
//     await mkdir(dir, { recursive: true });
//   }
// }
// async function fileChecksum(filePath) {
//   return new Promise((res, rej) => {
//     const hash = crypto.createHash('sha1');
//     const input = fs.createReadStream(filePath);
//     input.on('error', rej);
//     hash.once('readable', () => {
//       res(hash.read().toString('hex'));
//     });
//     input.pipe(hash);
//   });
// }
// function categorize(ext) {
//   ext = ext.toLowerCase();
//   for (const [cat, exts] of Object.entries(typeMap)) {
//     if (exts.includes(ext)) return cat;
//   }
//   return 'others';
// }
// async function processBatch(files, stats) {
//   for (const file of files) {
//     const fullPath = path.join(BASE_DIR, file);
//     const info = stats[file] || await stat(fullPath);
//     if (info.isDirectory()) continue;
//     const ext = path.extname(file);
//     const category = categorize(ext);
//     const categoryDir = path.join(BASE_DIR, category.charAt(0).toUpperCase() + category.slice(1));
//     await makeDir(categoryDir);
//     const checksum = await fileChecksum(fullPath);
//     const destName = `${checksum}_${path.basename(file)}`;
//     const destPath = path.join(categoryDir, destName);
//     if (await exists(destPath)) {
//       stats.summary.duplicates++;
//       continue;
//     }
//     const modified = info.mtimeMs;
//     if (Date.now() - modified > ARCHIVE_AGE_MS) {
//       const date = new Date(info.mtimeMs);
//       const archiveDir = path.join(
//         categoryDir,
//         'Archives',
//         String(date.getFullYear()),
//         String(date.getMonth() + 1).padStart(2, '0')
//       );
//       await makeDir(archiveDir);
//       const archiveDest = path.join(archiveDir, destName);
//       await rename(fullPath, archiveDest);
//       stats.summary.archived++;
//     } else {
//       await rename(fullPath, destPath);
//       stats.summary.moved++;
//     }
//   }
// }
// async function main() {
//   const summary = { moved: 0, archived: 0, duplicates: 0 };
//   const all = await readdir(BASE_DIR);
//   const stats = { summary };

//   for (let i = 0; i < all.length; i += BATCH_SIZE) {
//     const batch = all.slice(i, i + BATCH_SIZE);
//     await processBatch(batch, stats);
//   }

//   console.log('--- Summary Report ---');
//   console.log(`Files moved:     ${summary.moved}`);
//   console.log(`Old files archived: ${summary.archived}`);
//   console.log(`Duplicates skipped: ${summary.duplicates}`);
// }
// main().catch(err => console.error(err));
