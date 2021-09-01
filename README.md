# Description

Test technique d'intégration pour PrismaMedia. Le lien est [ici](https://starwars-test-one.vercel.app/).

# Installation

Pour l'installation suivre les instructions ci-dessous.

```bash
git clone git@github.com:srimko/starwars-test.git
```

```bash
cd starwars-test
```

```bash
npm install -g parcel-bundler && npm install
```

### Exécution en développement

Pour lancer le mode développement du projet avec [parcel](https://parceljs.org/) lancer la commande ci-dessous. Le projet sera compiler dans le répertoire `dist`.

```
npm run
```

### Compilation pour la production

Pour lancer la commande de production lancer la commande ci-dessous. Le projet sera compiler dans le répertoire `build`.

```
npm run build
```

## Déploiement

Uniquement pour les personnes lié à l'équipe du projet.

```bash
  vercel --prod
```

Une version du site est accécisble via ce lien https://starwars-test-one.vercel.app/

## Stack technique

**Client:** HTML, SASS (BEM), Javascript

**Server:** Vercel

## Remarques

1/ J'ai constaté que les icones SVG étaientt plus lourdes que les PNG. De ce fait j'ai intégré les png pour avoir une page plus légère. C'est un peu dommage parce qu'il sera donc impossible de faire des transitions "propre" comme les changements de couleurs au hover, changements de tailles et le plus gros problème est un perte qualité lorsqu'on voudra étirer l'image.

2/ J'ai ajouté également un favicon qui n'était pas sur la maquette.

3/ Je n'ai pas totalement compris cette demande sur le texte quel texte il fallait faire l'animation.

```html
Réaliser un script de parallaxe (en utilisant l'état de l'art actuel en matière
de Javascript) et l'appliquer à la première section (le logo, le fond et le
contenu texte qui suit défilent à des vitesses différentes). Appliquer cet effet
de parallaxe sur une autre des sections de la page pour tester que le plugin
fonctionne sur plusieurs instances.
```

J'ai donc intégré un parallax réglable de 1.0 à 2 sur l'image de Kylo Ren. Il faut changer le data attribut `data-scale="1"`au niveau du code HTML.

Comme l'exemple ci-dessous

```html
<section
  class="article__bandeau article__bandeau-kyloren js-parallax"
  data-scale="1.4"
></section>
```

## Auteur

Alexandre Cédrick <alexandre.cedrick@gmail.com>
[Twitter](https://twitter.com/Srimko)
[Github](https://github.com/srimko)
