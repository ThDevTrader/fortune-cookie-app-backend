# API para geração de números e frases para bicoito da sorte.🥠
## Complemento da aplicação [Fortune Cookie App 🥠](https://github.com/ThDevTrader/fortune-cookie-app)

## 🎯 Objetivo

Este projeto foi desenvolvido como parte de processo seletivo para demonstrar:
- Conhecimentos básicos no desenvolvimento backend
- Estruturação de projeto backend
- Maior segurança na geração de números da sorte

## 🚀 Funcionalidades

- **Gerar frases do biscoito da sorte**: Entrega aleatoriamente uma frase motivacional de biscoito da sorte
- **Gerar 6 números da sorte**: Gera números únicos e seguros, com grau de criptografia que impede manipulação pelo Front End

## 🛠️ Tecnologias Utilizadas

- Node
- Express
- Crypto - Módulo nativo de NodeJS que fornece funções de criptografia para proteger dados e implementar segurança.

## 📋 Como executar

#### 1 - Clone este repositório 

HTTPS
```bash
https://github.com/ThDevTrader/fortune-cookie-app-backend.git
```

SSH
```bash
git@github.com:ThDevTrader/fortune-cookie-app-backend.git
```

#### 2 - Instale as dependências
```bash
npm install
```

#### 3 - Rode a aplicação
```bash
npm run dev
```

#### 4 - Abra a aplicação no seu browser e teste os retornos

##### 4.1 Rota padrão -> http://localhost:4001/
##### Retorno esperado
<img width="499" height="98" alt="1" src="https://github.com/user-attachments/assets/ae7d659a-16c2-4a55-8508-9a1e5ec2eff0" />


##### 4.2 Rota GET frases -> http://localhost:4001/api/fortune
##### Tipo de retorno esperado
<img width="729" height="22" alt="2 1" src="https://github.com/user-attachments/assets/c581c443-5fb3-4061-896b-085a2669a7ab" />


##### 4.3 Rota GET números da sorte -> http://localhost:4001/api/lucky-numbers
##### Tipo de retorno esperado
<img width="177" height="194" alt="3 1" src="https://github.com/user-attachments/assets/9811d4ef-2434-4b9a-aa1e-dec7a89761df" />

##### 4.4 Rota inexistente -> http://localhost:4001/rota-inexistente
##### Tipo de retorno esperado
<img width="279" height="25" alt="4 1" src="https://github.com/user-attachments/assets/23cd9923-a25c-4d0f-8ed7-c178af931050" />

### 🚀 Para testar a aplicação mantenha o backend rodando e siga as instruções de [Fortune Cookie App](https://github.com/ThDevTrader/fortune-cookie-app) para ver funcionando! 🚀

### Divirta-se!!!!!

## 👤 Desenvolvedor

Desenvolvido por Thiago Santos como projeto de demonstração de habilidades técnicas.

---
