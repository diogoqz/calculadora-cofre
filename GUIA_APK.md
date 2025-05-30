# 📱 Guia Completo para Gerar APK da Calculadora Cofre

## 🎯 Opções para Gerar o APK

### 📋 Opção 1: Configurar Ambiente Local (Recomendado)

#### 1. Instalar Android Studio
```bash
# Via Homebrew (mais fácil)
brew install --cask android-studio

# Ou baixe diretamente: https://developer.android.com/studio
```

#### 2. Configurar SDK
1. Abra Android Studio
2. Vá em **Preferences** → **Appearance & Behavior** → **System Settings** → **Android SDK**
3. Instale as seguintes versões:
   - **Android 14 (API 34)** ← Principal
   - **Android 13 (API 33)**
   - **Build Tools 34.0.0**

#### 3. Configurar Variáveis de Ambiente
Adicione ao seu `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Depois execute:
```bash
source ~/.zshrc
```

#### 4. Gerar APK
```bash
# No diretório do projeto
./build-apk.sh
```

---

### 🌐 Opção 2: Build Online (Alternativa)

Se não quiser instalar Android Studio, você pode usar services online:

#### A. GitHub Actions (Gratuito)
1. Faça upload do projeto para GitHub
2. Configure GitHub Actions com Android build
3. O APK será gerado automaticamente

#### B. EAS Build (Expo)
```bash
npm install -g @expo/cli
npx create-expo --template blank-typescript
# Migre o código React Native para Expo
expo build:android
```

#### C. Codemagic (Freemium)
1. Conecte seu repositório GitHub
2. Configure build Android
3. APK gerado na nuvem

---

### ⚡ Opção 3: Build Simplificado (Experimental)

Se você tem algum conhecimento de Docker:

```bash
# Usar container Docker com Android SDK
docker run --rm -v $(pwd):/project mingc/android-build-box bash -c \
  "cd /project/android && ./gradlew assembleRelease"
```

---

## 🔧 Comandos Rápidos

### Verificar Configuração
```bash
# Verificar Java
java -version

# Verificar Android SDK
echo $ANDROID_HOME
adb version

# Verificar React Native
npx react-native doctor
```

### Build Manual
```bash
cd android
./gradlew clean
./gradlew assembleRelease
```

### Localizar APK
```bash
find . -name "*.apk" -type f
```

---

## 🐛 Solução de Problemas

### Erro: ANDROID_HOME não encontrado
```bash
# Encontrar SDK manualmente
find /Users -name "android-sdk" 2>/dev/null
find /Users -name "platform-tools" 2>/dev/null

# Configurar manualmente
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
```

### Erro: Build Tools não encontrado
```bash
# Listar build tools disponíveis
ls $ANDROID_HOME/build-tools/

# Usar versão específica no build.gradle
buildToolsVersion "34.0.0"
```

### Erro: Gradle Wrapper
```bash
cd android
gradle wrapper --gradle-version 8.0.1
chmod +x gradlew
```

---

## 📲 Instalação no Dispositivo

### 1. Preparar Dispositivo
- Vá em **Configurações** → **Sobre o telefone**
- Toque 7 vezes em **Número da versão**
- Volte e vá em **Opções do desenvolvedor**
- Ative **Fontes desconhecidas** ou **Instalar apps desconhecidos**

### 2. Transferir APK
```bash
# Via ADB (se dispositivo conectado)
adb install app-release.apk

# Via cabo/email/Drive
# Copie o arquivo calculadora-cofre.apk para o dispositivo
```

### 3. Instalar
- Abra o arquivo APK no dispositivo
- Confirme a instalação
- Ignore avisos de segurança (é seu app!)

---

## 🔐 Personalização Final

Antes de gerar o APK, personalize:

### Senha do Cofre
```typescript
// Em App.tsx, linha 14
const SENHA_COFRE = '1234'; // Sua senha aqui
```

### URL do WebView
```typescript
// Em App.tsx, linha 15
const URL_COFRE = 'https://sua-url-secreta.com';
```

### Nome do App
```xml
<!-- Em android/app/src/main/res/values/strings.xml -->
<string name="app_name">Calculadora Pro</string>
```

### Ícone do App
Substitua os arquivos em:
- `android/app/src/main/res/mipmap-*/ic_launcher.png`

---

## 🎉 Resultado Final

Após seguir os passos, você terá:
- ✅ **calculadora-cofre.apk** - Pronto para instalação
- ✅ **Disfarce perfeito** - Aparenta ser calculadora normal
- ✅ **Acesso secreto** - Digite a senha para abrir WebView
- ✅ **Funcional** - Calculadora totalmente operacional

---

## 📞 Suporte

Se encontrar problemas:

1. ✅ **Verificar Java**: `java -version`
2. ✅ **Verificar Android Studio**: Abrir e testar
3. ✅ **Limpar projeto**: `cd android && ./gradlew clean`
4. ✅ **Reinstalar dependências**: `npm install`
5. ✅ **Reset Metro**: `npm start -- --reset-cache`

**Boa sorte criando sua calculadora cofre! 🔐** 