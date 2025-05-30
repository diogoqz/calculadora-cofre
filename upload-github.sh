#!/bin/bash

echo "🚀 Upload da Calculadora Cofre para GitHub"
echo "=========================================="

# Verificar se o GitHub CLI está instalado
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI não encontrado. Instalando..."
    brew install gh
fi

# Login no GitHub (se necessário)
echo "🔐 Verificando login GitHub..."
if ! gh auth status &> /dev/null; then
    echo "📝 Faça login no GitHub:"
    gh auth login
fi

# Criar repositório no GitHub
echo "📁 Criando repositório no GitHub..."
REPO_NAME="calculadora-cofre"

# Tentar criar o repositório
gh repo create $REPO_NAME --public --description "Calculadora que funciona como cofre secreto - App Android"

# Adicionar remote origin
git remote add origin https://github.com/$(gh api user --jq .login)/$REPO_NAME.git

# Push para o GitHub
echo "⬆️ Fazendo upload do código..."
git push -u origin main

echo ""
echo "✅ Projeto enviado para GitHub com sucesso!"
echo "🔗 URL: https://github.com/$(gh api user --jq .login)/$REPO_NAME"
echo ""
echo "🏗️ O GitHub Actions vai automaticamente:"
echo "   • Fazer build do APK"
echo "   • Disponibilizar o APK para download"
echo "   • Processo leva cerca de 5-10 minutos"
echo ""
echo "📱 Para baixar o APK depois:"
echo "   1. Vá para a aba 'Actions' no GitHub"
echo "   2. Clique no build mais recente"
echo "   3. Baixe o artifact 'app-release'" 