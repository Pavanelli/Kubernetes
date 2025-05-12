# Usa uma imagem base
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de código para o container
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
