# 🚀 Como Gerar o APK - Guia Rápido

## ⚡ Opção 1: Build Online (Mais Fácil)

1. **Criar conta no GitHub** (se não tiver)

2. **Fazer upload do projeto:**
   ```bash
   git init
   git add .
   git commit -m "Calculadora Cofre inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/calculadora-cofre.git
   git push -u origin main
   ```

3. **Gerar APK automaticamente:**
   - Vá para seu repositório no GitHub
   - Clique em **Actions** → **Build Android APK**
   - Clique em **Run workflow**
   - Aguarde ~5 minutos
   - Baixe o APK na seção **Artifacts**

## 🔧 Opção 2: Build Local

### 1. Instalar Android Studio
```bash
brew install --cask android-studio
```

### 2. Configurar SDK
- Abra Android Studio
- Instale Android SDK 34
- Configure ANDROID_HOME

### 3. Gerar APK
```bash
./build-apk.sh
```

## 📱 Instalar no Celular

1. **Ativar fontes desconhecidas**
2. **Transferir APK** para o dispositivo
3. **Instalar** clicando no arquivo
4. **Testar:** Digite `2580` na calculadora

## 🔐 Personalizar

Antes de gerar, edite `App.tsx`:
```typescript
const SENHA_COFRE = '1234'; // Sua senha
const URL_COFRE = 'https://sua-url.com'; // Sua URL
```

---

**✅ Resultado:** APK funcional da calculadora com cofre secreto! 