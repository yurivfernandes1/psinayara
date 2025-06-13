#!/bin/bash

# Script de build customizado para contornar problemas com o dotenv
echo "Iniciando build personalizado..."

# Garantir que não há importações problemáticas
echo "Verificando configurações do Vite..."
cat > temp-vite.config.js << EOF
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
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
  optimizeDeps: {
    include: ['gsap']
  },
  define: {
    'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN || '')
  }
})
EOF

# Executar o build com o arquivo temporário
echo "Executando build com configuração simplificada..."
vite build --config temp-vite.config.js

# Limpar arquivo temporário
rm temp-vite.config.js

echo "Build concluído!"