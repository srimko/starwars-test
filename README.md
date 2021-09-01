# Description

Test technique d'intégration pour PrismaMedia. Le lien est [ici](https://starwars-test-one.vercel.app/).

# Installation

Pour l'installation suivre les instructions ci-dessous.

`git clone git@github.com:srimko/starwars-test.git`

`cd starwars-test`

`npm install -g parcel-bundler && npm install`

### Exécution en développement

Pour éditer le projet avec (parcel)[https://parceljs.org/] lancer la commande ci-dessous.

`npm run`

### Compilation pour la production

`npm run build`

## Deployment

Uniquement pour les personnes lié à l'équipe du projet.

```bash
  vercel --prod
```

## Stack technique

**Client:** HTML, SASS (BEM), Javascript

**Server:** Vercel

## Remarques

J'ai constaté que les icones SVG était plus lourdes que les png. De ce fait j'ai intégré les png. C'est un peu dommage parce qu'il sera donc impossible de faire des transitions "propre" comme changement de couleur au hover, changement de taille et le plus gros problème est la qualité.

J'ai ajouté un favicon qui n'était pas sur la maquette.

## Auteur

Alexandre Cédrick <alexandre.cedrick@gmail.com>
[Twitter](https://twitter.com/Srimko)
[Github](https://github.com/srimko)
