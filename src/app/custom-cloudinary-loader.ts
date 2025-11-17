import { ImageLoaderConfig } from '@angular/common';

export function customCloudinaryLoader(config: ImageLoaderConfig): string {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com/drsikfbql';
  
  // For placeholder images, use lower quality
  const quality = config.isPlaceholder ? 'q_auto:low' : 'q_auto';
  
  // Force AVIF format
  const format = 'f_avif';
  
  let params = `${quality},${format}`;
  
  if (config.width) {
    params += `,w_${config.width}`;
  }
  
  // Return the Cloudinary URL with AVIF format
  return `${cloudinaryBaseUrl}/image/upload/${params}/${config.src}`;
}

