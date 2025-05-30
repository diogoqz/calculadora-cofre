import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
  SafeAreaView,
} from 'react-native';

const SENHA_COFRE = '2580';

const App: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [operacao, setOperacao] = useState<string | null>(null);
  const [valorAnterior, setValorAnterior] = useState<string | null>(null);
  const [aguardandoOperando, setAguardandoOperando] = useState(false);

  const verificarSenhaCofre = (valor: string) => {
    if (valor === SENHA_COFRE) {
      Alert.alert(
        '🔐 Cofre Ativado!',
        'Senha correta! Aqui estaria seu conteúdo secreto.\n\nEm uma versão completa, isso abriria um navegador web ou área secreta.',
        [
          {
            text: 'OK',
            onPress: () => {
              setDisplay('0');
              setOperacao(null);
              setValorAnterior(null);
              setAguardandoOperando(false);
            }
          }
        ]
      );
      return true;
    }
    return false;
  };

  const inputDigito = (digito: string) => {
    const novoDisplay = aguardandoOperando ? digito : display === '0' ? digito : display + digito;
    setDisplay(novoDisplay);
    setAguardandoOperando(false);
    
    // Verificar senha do cofre
    verificarSenhaCofre(novoDisplay);
  };

  const inputOperacao = (proximaOperacao: string) => {
    const valorEntrada = parseFloat(display);

    if (valorAnterior === null) {
      setValorAnterior(display);
    } else if (operacao) {
      const valorAnteriorFloat = parseFloat(valorAnterior);
      const resultado = calcular(valorAnteriorFloat, valorEntrada, operacao);

      setDisplay(String(resultado));
      setValorAnterior(String(resultado));
    }

    setAguardandoOperando(true);
    setOperacao(proximaOperacao);
  };

  const calcular = (primeiro: number, segundo: number, operacao: string): number => {
    switch (operacao) {
      case '+':
        return primeiro + segundo;
      case '-':
        return primeiro - segundo;
      case '×':
        return primeiro * segundo;
      case '÷':
        return segundo !== 0 ? primeiro / segundo : 0;
      case '%':
        return primeiro % segundo;
      default:
        return segundo;
    }
  };

  const executarCalculo = () => {
    if (operacao && valorAnterior !== null) {
      const valorEntrada = parseFloat(display);
      const valorAnteriorFloat = parseFloat(valorAnterior);
      const resultado = calcular(valorAnteriorFloat, valorEntrada, operacao);

      setDisplay(String(resultado));
      setOperacao(null);
      setValorAnterior(null);
      setAguardandoOperando(true);
    }
  };

  const limpar = () => {
    setDisplay('0');
    setOperacao(null);
    setValorAnterior(null);
    setAguardandoOperando(false);
  };

  const apagarUltimo = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const renderBotao = (texto: string, onPress: () => void, estilo?: any) => (
    <TouchableOpacity style={[styles.botao, estilo]} onPress={onPress}>
      <Text style={[styles.textoBotao, estilo?.color && { color: estilo.color }]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.display}>
        <Text style={styles.textoDisplay}>{display}</Text>
      </View>

      <View style={styles.botoes}>
        <View style={styles.linha}>
          {renderBotao('C', limpar, styles.botaoFuncao)}
          {renderBotao('⌫', apagarUltimo, styles.botaoFuncao)}
          {renderBotao('%', () => inputOperacao('%'), styles.botaoOperacao)}
          {renderBotao('÷', () => inputOperacao('÷'), styles.botaoOperacao)}
        </View>

        <View style={styles.linha}>
          {renderBotao('7', () => inputDigito('7'))}
          {renderBotao('8', () => inputDigito('8'))}
          {renderBotao('9', () => inputDigito('9'))}
          {renderBotao('×', () => inputOperacao('×'), styles.botaoOperacao)}
        </View>

        <View style={styles.linha}>
          {renderBotao('4', () => inputDigito('4'))}
          {renderBotao('5', () => inputDigito('5'))}
          {renderBotao('6', () => inputDigito('6'))}
          {renderBotao('-', () => inputOperacao('-'), styles.botaoOperacao)}
        </View>

        <View style={styles.linha}>
          {renderBotao('1', () => inputDigito('1'))}
          {renderBotao('2', () => inputDigito('2'))}
          {renderBotao('3', () => inputDigito('3'))}
          {renderBotao('+', () => inputOperacao('+'), styles.botaoOperacao)}
        </View>

        <View style={styles.linha}>
          {renderBotao('0', () => inputDigito('0'), styles.botaoZero)}
          {renderBotao('.', () => inputDigito('.'))}
          {renderBotao('=', executarCalculo, styles.botaoIgual)}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#000',
  },
  textoDisplay: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '300',
  },
  botoes: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '400',
  },
  botaoFuncao: {
    backgroundColor: '#a6a6a6',
    color: '#000',
  },
  botaoOperacao: {
    backgroundColor: '#ff9500',
  },
  botaoIgual: {
    backgroundColor: '#ff9500',
  },
  botaoZero: {
    width: 150,
  },
});

export default App; 