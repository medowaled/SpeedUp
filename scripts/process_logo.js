import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = 'C:/Users/ok/.gemini/antigravity-ide/brain/efcad741-1581-4b42-8ac4-903c9a7853a1/.user_uploaded/media_1791362628729.png';

async function main() {
  const { data, info } = await sharp(inputImagePath).raw().toBuffer({ resolveWithObject: true });
  console.log('Original image info:', info);

  // 1. Create transparent RGBA buffer
  const transData = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    
    // Check distance from white (255, 255, 255)
    const diffR = 255 - r;
    const diffG = 255 - g;
    const diffB = 255 - b;
    const maxDiff = Math.max(diffR, diffG, diffB);
    
    if (maxDiff <= 10) {
      transData[i * 4] = 255;
      transData[i * 4 + 1] = 255;
      transData[i * 4 + 2] = 255;
      transData[i * 4 + 3] = 0;
    } else {
      const alpha = Math.min(255, Math.round((maxDiff / 240) * 255));
      const aNorm = alpha / 255;
      const trueR = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - aNorm)) / aNorm)));
      const trueG = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - aNorm)) / aNorm)));
      const trueB = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - aNorm)) / aNorm)));
      
      transData[i * 4] = trueR;
      transData[i * 4 + 1] = trueG;
      transData[i * 4 + 2] = trueB;
      transData[i * 4 + 3] = alpha;
    }
  }

  // Find tight bounding box of full content
  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 4;
      if (transData[idx + 3] > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Bounding box: x=${minX}..${maxX}, y=${minY}..${maxY}`);
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  // 2. Generate tight cropped logo.webp (Light theme / Header)
  await sharp(transData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .webp({ quality: 95, effort: 6 })
    .toFile('d:/sowft ware/SpeedUp/src/assets/logo.webp');
  console.log('Generated src/assets/logo.webp');

  // Copy to public as well for direct web access
  await sharp('d:/sowft ware/SpeedUp/src/assets/logo.webp')
    .toFile('d:/sowft ware/SpeedUp/public/logo.webp');

  // 3. Generate dark theme logo (logo-light.webp) for footer
  // Convert dark navy blue letters ("Speed" + "Fast Code...") into crisp white/light silver while preserving vibrant orange
  const darkThemeData = Buffer.from(transData);
  for (let i = 0; i < info.width * info.height; i++) {
    const a = darkThemeData[i * 4 + 3];
    if (a > 10) {
      const r = darkThemeData[i * 4];
      const g = darkThemeData[i * 4 + 1];
      const b = darkThemeData[i * 4 + 2];
      
      // Is this pixel orange or blue/dark?
      // Orange has high red (r > 180), medium green (g ~ 80..130), low blue (b < 60)
      const isOrange = (r > 150 && r > b * 2 && r > g * 1.2);
      
      // If it's not orange, and y is in the text area (y >= 210), turn navy/black into white/light slate
      const y = Math.floor(i / info.width);
      if (!isOrange && y >= 210) {
        // Turn text into crisp white
        darkThemeData[i * 4] = 255;
        darkThemeData[i * 4 + 1] = 255;
        darkThemeData[i * 4 + 2] = 255;
      }
    }
  }

  await sharp(darkThemeData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .webp({ quality: 95, effort: 6 })
    .toFile('d:/sowft ware/SpeedUp/src/assets/logo-light.webp');
  console.log('Generated src/assets/logo-light.webp (for dark backgrounds)');

  // 4. Generate Favicon:
  // Extract icon mark only (minX: 91, minY: 5, maxX: 359, maxY: 196)
  const iconW = 359 - 91 + 1;
  const iconH = 196 - 5 + 1;

  const iconCroppedPng = await sharp(transData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left: 91, top: 5, width: iconW, height: iconH })
    .png()
    .toBuffer();

  // Create square favicon with padding (size 256x256)
  // Icon has aspect ratio 269 / 192 = 1.4:1
  // Scale icon to max 224x224
  const scaledIcon = await sharp(iconCroppedPng)
    .resize(224, 224, { fit: 'inside' })
    .png()
    .toBuffer();

  const favicon256 = await sharp({
    create: {
      width: 256,
      height: 256,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{ input: scaledIcon, gravity: 'center' }])
  .png()
  .toBuffer();

  // Save to public and src
  await sharp(favicon256).png().toFile('d:/sowft ware/SpeedUp/public/favicon.png');
  await sharp(favicon256).webp({ quality: 95 }).toFile('d:/sowft ware/SpeedUp/public/favicon.webp');
  await sharp(favicon256).webp({ quality: 95 }).toFile('d:/sowft ware/SpeedUp/src/assets/favicon.webp');
  
  // Also 32x32 and 16x16 standard favicons
  await sharp(favicon256).resize(32, 32).png().toFile('d:/sowft ware/SpeedUp/public/favicon-32x32.png');
  await sharp(favicon256).resize(16, 16).png().toFile('d:/sowft ware/SpeedUp/public/favicon-16x16.png');
  
  // Apple touch icon (180x180)
  await sharp(favicon256).resize(180, 180).png().toFile('d:/sowft ware/SpeedUp/public/apple-touch-icon.png');

  console.log('Favicons generated successfully in all formats!');
}

main().catch(console.error);
