// Configurações da Calculadora Cofre
// Edite este arquivo para personalizar o comportamento do app

export const CONFIG = {
  // Senha para acessar o cofre (apenas números)
  SENHA_COFRE: '2580',
  
  // URL que será aberta no WebView
  URL_COFRE: 'https://www.google.com',
  
  // Configurações de aparência
  TEMA: {
    // Cores da calculadora
    corFundo: '#1e1e1e',
    corDisplay: '#ffffff',
    corBotaoNumero: '#333333',
    corTextoNumero: '#ffffff',
    corBotaoFuncao: '#a6a6a6',
    corTextoBotaoFuncao: '#000000',
    corBotaoOperacao: '#ff9500',
    corTextoBotaoOperacao: '#ffffff',
    
    // Tamanhos de fonte
    tamanhoFonteDisplay: 48,
    tamanhoFonteBotao: 32,
  },
  
  // Configurações de segurança
  SEGURANCA: {
    // Tempo em milissegundos para abrir o WebView após digitar a senha
    delayAbertura: 300,
    
    // Se deve limpar o display após abrir o cofre
    limparDisplayAposCofre: true,
    
    // Se deve mostrar alguma animação ao abrir
    mostrarAnimacao: false,
  },
  
  // Configurações do WebView
  WEBVIEW: {
    // Se deve habilitar JavaScript
    javaScriptEnabled: true,
    
    // Se deve habilitar armazenamento DOM
    domStorageEnabled: true,
    
    // Se deve mostrar indicador de carregamento
    startInLoadingState: true,
    
    // User Agent personalizado (opcional)
    userAgent: null,
  }
};

// Função para validar configurações
export const validarConfig = () => {
  if (!CONFIG.SENHA_COFRE || CONFIG.SENHA_COFRE.length === 0) {
    console.warn('⚠️ AVISO: Senha do cofre não definida!');
    return false;
  }
  
  if (!CONFIG.URL_COFRE || CONFIG.URL_COFRE.length === 0) {
    console.warn('⚠️ AVISO: URL do cofre não definida!');
    return false;
  }
  
  // Verificar se a URL é válida
  try {
    new URL(CONFIG.URL_COFRE);
  } catch (e) {
    console.warn('⚠️ AVISO: URL do cofre inválida!');
    return false;
  }
  
  return true;
};

export default CONFIG; 