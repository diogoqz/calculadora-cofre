# Calculadora Cofre 🔐

Um aplicativo Android que funciona como uma calculadora normal, mas possui uma funcionalidade secreta de cofre que abre um WebView personalizado quando uma senha específica é digitada.

## 🚀 Funcionalidades

- **Calculadora Funcional**: Interface de calculadora padrão com todas as operações básicas
- **Cofre Secreto**: Acesso a um WebView personalizado através de senha
- **Design Nativo**: Interface similar à calculadora do iOS
- **Segurança**: Disfarçado como um aplicativo comum de calculadora

## 🔑 Como Usar

1. Use o aplicativo normalmente como uma calculadora
2. Digite a senha secreta: `2580`
3. O aplicativo irá automaticamente abrir o WebView com sua URL personalizada
4. Use o botão voltar do Android para retornar à calculadora

## ⚙️ Configuração

### Personalizar a Senha
Edite o arquivo `App.tsx` e altere a constante:
```typescript
const SENHA_COFRE = '2580'; // Sua nova senha aqui
```

### Personalizar a URL
Edite o arquivo `App.tsx` e altere a constante:
```typescript
const URL_COFRE = 'https://sua-url-aqui.com'; // Sua URL personalizada
```

## 🛠️ Instalação e Build

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Android Studio
- Java JDK 11 ou superior
- Android SDK

### Passos para Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar ambiente Android:**
```bash
npx react-native doctor
```

3. **Rodar em modo de desenvolvimento:**
```bash
# Iniciar Metro bundler
npm start

# Em outro terminal, rodar no Android
npm run android
```

4. **Gerar APK de produção:**
```bash
# Gerar APK de release
cd android
./gradlew assembleRelease
```

O APK será gerado em: `android/app/build/outputs/apk/release/app-release.apk`

### Build Alternativo com React Native CLI
```bash
npx react-native build-android --mode=release
```

## 📱 Estrutura do Projeto

```
calculadora/
├── App.tsx                 # Componente principal
├── package.json            # Dependências do projeto
├── android/                # Configurações Android
│   ├── app/
│   │   ├── build.gradle    # Config de build do app
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/calculadoracofre/
│   │       └── res/
│   ├── build.gradle        # Config global do build
│   └── gradle.properties   # Propriedades do Gradle
└── README.md
```

## 🔐 Segurança

- A senha é verificada localmente no dispositivo
- Não há comunicação externa para verificação de senha
- O aplicativo aparenta ser uma calculadora comum
- A funcionalidade de cofre só é ativada com a senha correta

## 🎨 Personalização

### Alterar Aparência
Edite os estilos no arquivo `App.tsx` na seção `StyleSheet.create()` para personalizar:
- Cores dos botões
- Tamanho da fonte
- Layout da calculadora

### Adicionar Funcionalidades
- Adicione mais URLs com senhas diferentes
- Implemente autenticação biométrica
- Adicione histórico de cálculos
- Crie diferentes "modos" de cofre

## 📋 Dependências Principais

- React Native 0.72.6
- React Native WebView
- React Native Vector Icons

## 🐛 Solução de Problemas

### Erro de Build do Android
```bash
cd android
./gradlew clean
cd ..
npm start --reset-cache
```

### Problema com WebView
Certifique-se de que as permissões de internet estão no AndroidManifest.xml

### APK não instala
Verifique se o dispositivo permite instalação de fontes desconhecidas

## 📄 Licença

Este projeto é apenas para fins educacionais. Use com responsabilidade. 