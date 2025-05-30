#!/bin/bash

echo "🔐 Configurando Calculadora Cofre..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale npm primeiro."
    exit 1
fi

echo "✅ Node.js e npm encontrados."

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Verificar se React Native CLI está instalado globalmente
if ! command -v npx &> /dev/null; then
    echo "❌ npx não encontrado."
    exit 1
fi

echo "✅ Dependências instaladas com sucesso."

# Verificar ambiente React Native
echo "🔍 Verificando ambiente React Native..."
npx react-native doctor

echo "🚀 Setup concluído!"
echo ""
echo "Para rodar o projeto:"
echo "1. npm start (para iniciar o Metro bundler)"
echo "2. npm run android (para rodar no Android)"
echo ""
echo "Para gerar APK:"
echo "cd android && ./gradlew assembleRelease"
echo ""
echo "⚙️ Para personalizar:"
echo "- Senha: Edite SENHA_COFRE no App.tsx"
echo "- URL: Edite URL_COFRE no App.tsx" 