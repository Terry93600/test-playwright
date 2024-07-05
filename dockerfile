# Utilisation d'une image Node.js en tant que base
FROM node:18-alpine3.19

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le package.json et package-lock.json pour installer les dépendances
# COPY package*.json ./
COPY package.json .
COPY package-lock.json .

# Installer les dépendances
RUN npm install -g serve

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000 si votre application écoute sur ce port
EXPOSE 3000

# Commande par défaut pour lancer les tests avec Playwright
CMD ["serve", "-s", "dist", "-l", "3000"]
# CMD ["npm", "test"]
