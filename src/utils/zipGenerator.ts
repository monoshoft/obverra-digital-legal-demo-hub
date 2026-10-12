import JSZip from 'jszip';

export async function generateProjectZip(): Promise<void> {
  // First attempt: try direct static zip download from public directory
  try {
    const response = await fetch('/obverra-law-firm-demo-hub.zip', { method: 'HEAD' });
    if (response.ok) {
      const anchor = document.createElement('a');
      anchor.href = '/obverra-law-firm-demo-hub.zip';
      anchor.download = 'obverra-law-firm-demo-hub.zip';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      return;
    }
  } catch (err) {
    // If fetch fails, proceed with client-side JSZip packaging
    console.warn('Falling back to client-side JSZip packaging:', err);
  }

  const zip = new JSZip();

  // Root files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'obverra-law-firm-demo-hub',
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite --port=3000 --host=0.0.0.0',
          build: 'vite build',
          preview: 'vite preview',
        },
        dependencies: {
          '@tailwindcss/vite': '^4.3.3',
          '@vitejs/plugin-react': '^6.1.1',
          'lucide-react': '^0.546.0',
          react: '^19.0.1',
          'react-dom': '^19.0.1',
          three: '^0.174.0',
          jszip: '^3.10.1',
          vite: '^8.3.0',
        },
        devDependencies: {
          '@types/node': '^22.14.0',
          '@types/react': '^19.3.0',
          '@types/react-dom': '^19.3.0',
          '@types/three': '^0.174.0',
          tailwindcss: '^4.3.3',
          typescript: '^7.0.2',
        },
      },
      null,
      2
    )
  );

  zip.file(
    'tsconfig.json',
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          experimentalDecorators: true,
          useDefineForClassFields: false,
          module: 'ESNext',
          types: ['vite/client'],
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          skipLibCheck: true,
          moduleResolution: 'bundler',
          isolatedModules: true,
          moduleDetection: 'force',
          allowJs: true,
          jsx: 'react-jsx',
          paths: { '@/*': ['./*'] },
          noEmit: true,
        },
      },
      null,
      2
    )
  );

  zip.file(
    'vite.config.ts',
    `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
  },
});
`
  );

  zip.file(
    '.env.example',
    `# OBVERRA DIGITAL Demo Hub Environment Config
VITE_AGENCY_NAME="OBVERRA DIGITAL"
VITE_WHATSAPP_NUMBER="+919876543210"
VITE_CONTACT_EMAIL="advisory@obverra.digital"
`
  );

  zip.file(
    'README.md',
    `# OBVERRA DIGITAL — Premium Law Firm Website Demo Hub

A production-grade, multi-theme demonstration portal showcasing FOUR distinct premium website designs for Indian advocates, chambers, corporate law firms, and legal consultants.

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000)

## Features Included
1. Design A — The Heritage Chambers (/design-a)
2. Design B — The Modern Legal Authority (/design-b)
3. Design C — The Noir Luxury Law Firm (/design-c)
4. Design D — The Immersive Legal Experience (/design-d)
5. Interactive Design Hub with direct route switching
6. Real consultation booking forms with client-side validation
7. Configurable WhatsApp and direct telephony CTAs
8. Bar Council of India compliant information disclaimer
`
  );

  // Generate the zip blob
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'obverra-law-firm-demo-hub.zip';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
