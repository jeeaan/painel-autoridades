# Use uma imagem base Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta em que a aplicação está rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "node", "index.js" ]
