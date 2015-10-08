# Exercice 1 — To-watch list
Le but de cet exercice est de réaliser une liste de films à voir interactive. 

Sur cette liste, l'utilisateur pourra :

- **Ajouter un item** : à l'aide d'un `form` contenant un `input` et un `button`
- **Supprimer un item** : au click sur un `x` à droite de l'item
- **Check un item** : provoque un `line-through` au click


Afin que vous ne vous lanciez pas la tête la première dans toutes les features qui composent cette application, l'exercice sera découpé en questions que vous trouverez ci-après :


### 1. Créer et afficher la liste

**1.1 Dans le `HomeCtrl`, créez un array contenant différents produits (Usual Suspects, Prisonners, La revanche d'une blonde...).**  
*La variable contenant cet array doit être `$scope.groceries`*

**1.2 Dans la vue `home.html`, affichez le contenu de `$scope.movies` dans une liste html :**    
*Pour cette question vous aurez besoin d'utiliser `ng-repeat`*
````
<ul>
  <li>Usual Suspects</li>
  <li>Prisonners</li>
  <li>La revanche d'une blonde</li>
  ...
</ul>
````  

### 2. Ajouter des éléments

>Pour cette partie vous aurez besoin d'ajouter un formulaire avant votre liste. Vous trouverez le code de ce formulaire ci-dessous

````
<form>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Ajouter un film...">
    <span class="input-group-btn">
      <button class="btn btn-default" type="submit">Go!</button>
    </span>
  </div>
</form>
````

**2.1 Dans le `HomeCtrl`, créez la fonction `$scope.addItems()`. Cette fonction prend un `item` en paramètre, et l'affiche via un `console.log()`**  
*Testez cette fonction et verifiez que l'item entré en paramètre s'affiche dans la console chrome*

**2.2 Dans la vue `home.html`, La soumission du formulaire doit déclencher `$scope.addItem(itemToAdd)`, `itemToAdd` étant la valeur saisie dans l'`input text`**  
*Pour cette question, vous aurez besoin d'utiliser `ng-model` et `ng-submit`. Afin de tester si votre code fonctionne, vérifiez que la valeur entrée dans votre input text et soumise via votre formulaire est la même que celle présente dans votre console.*

*Passons au choses sérieuses...*

**2.3 Modifiez la fonction `$scope.addItem()` pour que celle-ci ajoute l'item dans l'array `$scope.movies`**  
*Pour cette question, vous aurez besoin d'utiliser `array.push`. Si tout fonctionne, vous devriez voir s'afficher des nouveaux éléments dans votre liste.*


**2.4 Un peu de vérifications : Votre formulaire fonctionne, mais il ajoute n'importe quelle valeur à votre array, même les champs vide ! Ajoutez une vérification dans la fonction `$scope.addItem()` et faites en sorte qu'elle n'ajoute que les items non vides.**  
*Pour cette question, vous aurez besoin d'utiliser `array.length` et `trim`. Si tout fonctionne, vous devriez pouvoir cliquer autant que vous le voulez sur submit avec l'input vide sans que rien ne se produise.*

**2.5 Ajoutez une alert d'erreur et/ou de success sous votre formulaire après l'ajout réussi - ou non - d'un item. Cette alert disparait au bout de `3s`.**  
*Pour cette question, vous aurez besoin d'utiliser `ng-show` ainsi que `$timeout` et de créer une variable `$scope.displaySuccessAdd` et `$scope.displayErrorAdd`*

````
<div class="alert alert-success">
  <b>Bravo</b> un film a été ajouté à votre liste
</div>
<div class="alert alert-error">
  <b>Oops</b> Il semblerait que vous essayez d'ajouter un film sans titre...
</div>
````

### 3. Supprimer des éléments

> Afin de commencer cette 3ème partie, nous allons tout d'abbord styliser un peu notre > liste. Remplacez les `<li>` par les éléments ci dessous :

````
<li>
  <input type="checkbox" />
  {{movie}}
  <button class="btn btn-danger btn-xs">x</button>
</li>
````


**3.1 Dans le `HomeCtrl`, créez la fonction `$scope.removeItem()`. Cette fonction prend un `index` (integer) en paramètre, et l'affiche via un `console.log()`**  
*Testez cette fonction et verifiez que l'item entré en paramètre s'affiche dans la console chrome*

**3.2 Dans la vue `home.html`, Le click sur le bouton `x` doit déclencher `$scope.removeItem($index)`, avec `$index` l'index de l'élément sélectionné.**  
*Pour cette question, vous aurez besoin d'utiliser `ng-click` et `track by $index` de `ng-repeat`. Afin de tester si votre code fonctionne, vérifiez que la valeur qui s'affiche dans votre console correspond à l'index de l'élément sélectionné (rappel : un array commence à l'index 0)*

**3.3 Modifiez la fonction `$scope.removeItem()` pour que celle-ci retire l'item de l'array `$scope.movies`**  
*Pour cette question, vous aurez besoin d'utiliser `array.splice`. Si tout fonctionne, vous devriez voir disparaitre l'élément au click.*

**3.4 Ajoutez une alert de success sous votre formulaire après la supression réussie de l'item. Cette alert disparait au bout de `3s`.**  
*Pour cette question, vous aurez besoin d'utiliser `ng-show` ainsi que `$timeout` et de créer une variable `$scope.displaySuccessRemove`*

````
<div class="alert alert-success">
  <b>Bye bye</b> un film a été retiré de votre liste
</div>
````

### 4. Check un élément

**4.1 Modifiez `$scope.movies` afin d'en faire un tableau associatif : Chaque élément du tableau aura alors une clé `title` (dont la valeur sera - par exemple - Usual Suspects) et une clé `seen` de type `bool` par défault à `false`.**  
*Le fait de modifier votre tableau à pour effet de casser l'affichage de vos éléments , mais pas de panique : Modifiez le `ng-repeat` en accord avec le nouveau tableau et modifiez la fonction `$scope.addItem()` et tout rentrera dans l'ordre*

**4.2 Dans la vue `home.html`, bind chaque checkbox au model `movie.seen` associé (se référer à la documentation de `ng-model` concernant les checkbox).**  
*Pour cette question, afin de tester si votre code fonctionne, vous pouvez afficher la valeur `{{movie.seen}}` à côté du nom de l'élément (exemple : Usual Suspect false). Si la valeur change au click sur la checkbox, c'est que tout fonctionne*

**4.3 Dans la vue `home.html`, ajoutez la class `.line-through` aux éléments dont `seen` est à `true`**  
*Pour cette question, vous aurez besoin d'utiliser `ng-class`*

# Exercice 2 — The Movie Database

Nous allons maintenant connecter notre application à une vraie base de donnée de films. Notre formulaire ne servira plus à ajouter des films mais à **rechercher dans la bdd de TMDb**

Comme pour l'exercice 1, cet exercice est découpé en plusieurs étapes :

- **Afficher les films populaires** : Connexion à l'API TMDb et requête sur `/discover/movie?sort_by=popularity.desc`
- **Rechercher un film** : Via le formulaire créé pendant l'exercice 1 et une requête sur `/search/movie`

>Pour cet exercice vous aurez besoin de la clé d'API suivante : `2ab523578f2edd5c0fb434eabd66830e`

### 1. Afficher les films populaires

**1.1 Dans le fichier `TmdbService.js`, créez une variable `baseUrl` qui a pour valeur `http://api.themoviedb.org/3` et une variable `apiKey` qui prend pour valeur la clé d'API ci-dessus**

**1.2 Dans la fonction `getPopular` de `TmdbService`, effectuez une requête `GET` sur `/discover/movie?sort_by=popularity.desc` et affichez les `data` obtenues dans un `console.log()`**  
*Pour cette question, vous aurez besoin de comprendre comment fonctionne la fonction [`$http`](https://docs.angularjs.org/api/ng/service/$http), mais aussi de passer en `params` l'`api_key` dont la valeur a été définie plus haut.*

````
$http(
  ...
  params : {
    api_key : apiKey
  }
  ...
).then...
````

**1.3 Analysez la structure de l'array `json` renvoyé et créez une variable `movies` (toujours dans le resulate de votre appel `$http`) contenant uniquement les films (`results`) récupérés.**  


**1.4 Utilisation de [`$q`](https://docs.angularjs.org/api/ng/service/$q) : dans la fonction `getPopular`, faites en sorte qu'au `success` (si l'appel s'est déroulé sans problème), `q.resolve` les `movies` récupérées. En cas d'erreur, utilisez `q.reject`**  
*Faites moi signe si vous en êtes arrivés à cette question, et nous vérifierons ensemble si votre code fonctionne. Lisez impérativement la doc de $q pour réussir cette question*

**1.5 dans le `HomeCtrl` injectez `TmdbService`. Appelez ensuite `TmdbService.getPopular()`. Faites passer les data obtenues (`movies`) dans une variable `$scope.popularMovies`**  
*Pour cette question, vous aurez besoin d'utiliser la structure :*
````
...
  .then(function(movies) {
    <!-- Success -->
  });
````

**1.6 Grâce à un `ng-repeat` affichez alors dans `home.html` les titres des différents films contenus dans `$scope.popularMovies`**  
*Note: les titres ne s'appelent pas `title` mais `original_title` dans l'array récupéré depuis TMDb*



