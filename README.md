![Vue.js Badge](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat-square)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat-square)
![Openlayers Badge](https://img.shields.io/badge/Openlayers-1F6B75?logo=openlayers&logoColor=fff&style=flat-square)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)

# 🚀 Guide d'installation - Géothèque IGN

## ⬇️ Cloner le dépôt

```bash
git clone https://github.com/Vpech77/geotheque.git
cd geotheque
```

ou télécharger le zip et dézipper.

---

## ⚔️ Préparation environnement de dev ⚔️

### 📁 Récupérer le petit jeu de données de cartes/photos

- Remplacer le dossier montages

### 🐙 Lancement des services backend

- Aller à la racine du projet et lancer la commande suivante :

```
sudo docker compose up -d
```

## 🎉 Environnement de prod 🎉

- Vous êtes sur le réseau IGN, vous avez accès aux services backend IGN

---

## Lancement du programme
D'abord aller dans le sous-dossier app.

- 1. Installer les dépendances avec la commande suivante :
```
npm install
```

- 2. Pour lancer en mode pour développeur ou en mode production, il faut lancer la commande suivante :
```
npm run dev
```

ou 
```
npm run prod
```
