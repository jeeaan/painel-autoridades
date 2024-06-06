# Estágio de compilação
FROM node as build

WORKDIR /usr/src/app

# Limpar o cache do npm
RUN npm cache clean --force

# Instalação do Angular CLI
RUN npm install -g @angular/cli

# Copiar o arquivo package.json e instalar as dependências
COPY package*.json ./
RUN npm install

# Copiar os arquivos do projeto
COPY . .

# Construir a aplicação
RUN ng build --configuration=production --output-path=dist

# Estágio de produção
FROM nginx:alpine

# Copiar os arquivos de construção do estágio de compilação
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Comando de inicialização do servidor nginx
CMD ["nginx", "-g", "daemon off;"]
