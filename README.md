# DIA 5 - Python for Data Analysis : Final Project 

## Drug Consumption Dataset - Analysis & Predictions
### Cyprien NICOLAY - Timothé VITAL - Anna ZENOU

https://archive.ics.uci.edu/ml/datasets/Drug+consumption+%28quantified%29#

Pour ce projet, nous avons étudié un dataset sur les consommations de drogues. Nous avons choisi de travaillé sur un problème de classification binaire pour classer les individus dans le classe "a déjà testé" (valeur 1) ou "n'a jamais testé" (valeur 0). Ce problème peut s'appliquer à chacune des drogues.

Nous avons réalisé un code Python sur Jupyter dans lequel nous avons effectuer plusieurs tâches : 
  * Data pre-processing: encoding, normalization, imputation…
  * Data visualization (avec matplotlib, seaborn ...): pour visualiser l'ensemble des informations du dataset et montrer des éventuels liens entre les variables et la cible.
  * Modeling: application de plusieurs algorithmes de Machine Learning (avec la librairie scikit-learn) pour prédire des résultats sur certaines drogues (nous avons choisi de nous concentrer sur le cannabis, l'ecstasy, les champignons hallucinogènes et le LSD).

Nous avons aussi expliqué les différents aspects du problèmes ainsi que les différentes étapes que nous avons suivi à l'aide d'une présentation PowerPoint (surtout utile pour illustrer nos propos lors de notre présentation orale).

Enfin, nous avons transformé notre modèle en API pour obtenir une meilleur interface.

### Conclusions
En comparant les résultats des différents algorithmes utilisés, on remarque que c'est l'algorithme de Random Forest qui nous donne les meilleurs prédictions.
Nous pouvons donc prédire à près de 80% si une personne a déjà consommé du cannabis, du LSD, de l'ecstasie ou des champignons hallucinogènes en fonction des données sur sa personnalité et ses caractéristiques démographiques.




### /!\ N.B. /!\

Un de nos graphique ne s'affiche pas sur github mais il se trouve dans la slide 10 de la présentation et ci-dessous :
![Capture d'écran_20221206_223810](https://user-images.githubusercontent.com/119936688/206028680-774a2ddd-2b2f-4c6e-84b2-a53b5348336b.png)

