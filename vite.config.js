import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/Users/yurivf/Documents/Projetos Pessoal/drarobertamoura'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap']
        }
      }
    },
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      // Permite o acesso ao arquivo .env na raiz do projeto
      allow: ['.']
    }
  },
  optimizeDeps: {
    include: ['gsap']
  },
  // Configurações para variáveis de ambiente
  define: {
    'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN || '')
  }
})