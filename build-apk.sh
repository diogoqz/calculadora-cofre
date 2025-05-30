#!/bin/bash

echo "🔧 Preparando para gerar APK da Calculadora Cofre..."

# Verificar se o Java está instalado
if ! command -v java &> /dev/null; then
    echo "❌ Java não encontrado. Por favor, instale Java JDK 11 ou superior."
    echo "   Baixe em: https://adoptium.net/"
    exit 1
fi

echo "✅ Java encontrado: $(java -version 2>&1 | head -n 1)"

# Verificar se o ANDROID_HOME está configurado
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME não configurado."
    echo "   Para gerar o APK, você precisa:"
    echo "   1. Instalar Android Studio"
    echo "   2. Configurar ANDROID_HOME"
    echo ""
    echo "   Instruções rápidas:"
    echo "   • Baixe Android Studio: https://developer.android.com/studio"
    echo "   • Após instalar, adicione ao seu ~/.zshrc ou ~/.bash_profile:"
    echo "     export ANDROID_HOME=\$HOME/Library/Android/sdk"
    echo "     export PATH=\$PATH:\$ANDROID_HOME/emulator"
    echo "     export PATH=\$PATH:\$ANDROID_HOME/tools"
    echo "     export PATH=\$PATH:\$ANDROID_HOME/tools/bin"
    echo "     export PATH=\$PATH:\$ANDROID_HOME/platform-tools"
    echo ""
    echo "   Depois execute: source ~/.zshrc"
    echo ""
    read -p "Deseja tentar gerar o APK mesmo assim? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Navegar para o diretório android
cd android

echo "🏗️  Iniciando build do APK..."

# Tentar gerar o APK
if ./gradlew assembleRelease; then
    echo ""
    echo "🎉 APK gerado com sucesso!"
    echo ""
    echo "📱 Localização do APK:"
    echo "   app/build/outputs/apk/release/app-release.apk"
    echo ""
    echo "📋 Próximos passos:"
    echo "   1. Copie o APK para seu dispositivo Android"
    echo "   2. Habilite 'Fontes desconhecidas' nas configurações"
    echo "   3. Instale o APK"
    echo ""
    echo "🔑 Lembre-se:"
    echo "   • Senha padrão: 2580"
    echo "   • Para personalizar, edite App.tsx"
    echo ""
    
    # Verificar se o APK foi realmente criado
    if [ -f "app/build/outputs/apk/release/app-release.apk" ]; then
        APK_SIZE=$(du -h app/build/outputs/apk/release/app-release.apk | cut -f1)
        echo "   📏 Tamanho do APK: $APK_SIZE"
        
        # Criar cópia na raiz do projeto para facilitar acesso
        cp app/build/outputs/apk/release/app-release.apk ../calculadora-cofre.apk
        echo "   📄 Cópia criada: calculadora-cofre.apk"
    fi
else
    echo ""
    echo "❌ Erro ao gerar APK."
    echo ""
    echo "🛠️  Soluções possíveis:"
    echo "   1. Instale Android Studio completo"
    echo "   2. Configure ANDROID_HOME corretamente"
    echo "   3. Instale Android SDK Tools"
    echo ""
    echo "   Para configuração automática, execute:"
    echo "   brew install --cask android-studio"
    echo ""
    exit 1
fi 