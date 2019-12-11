
# Commandes des plots

**Cette page n'est pas définitive et sera réarragée**

## Contenu
###### CLAIMING
 - [/plot buy](#buy)    
 - [/plot claim](#claim)    
 - [/plot auto](#auto)    
 - [/plot delete](#delete)    
 - [/plot grant](#grant)    
 - [/plot setowner](#setowner)  
 - [/plot download](#download)

###### TELEPORTATION
 - [/plot visit](#visit)    
 - [/plot kick](#kick)    
 - [/plot middle](#middle)    

###### PARAMÈTRES
 - [/plot trust](#trust)    
 - [/plot add](#add)    
 - [/plot deny](#deny)    
 - [/plot remove](#remove)    
 - [/plot merge](#merge)    
 - [/plot unlink](#unlink)    
 - [/plot trust](#trust)    
 - [/plot setflag](#setflag)    
 - [/plot done](#done)    
 - [/plot continue](#continue)    
 - [/plot setdescription](#setdescription)    
 - [/plot alias](#alias)    
 - [/plot sethome](#sethome)    
 - [/plot toggle](#toggle)    

###### CHAT
 - [/plot chat](#chat-1)    

###### APPARANCE
 - [/plot set](#set)    
 - [/plot clear](#clear)    
 - [/plot music](#music)    
 - [/plot setbiome](#setbiome)    

###### INFO
 - [/plot confirm](#confirm)    
 - [/plot info](#info-1)    
 - [/plot list](#list)    
 - [/plot like](#like)
 - [/plot unlike](#unlike)    
 - [/plot target](#target)    
 - [/plot help](#help)    

###### ADMINISTRATION
 - [/plot copy](#copy) 
 - [/plot move](#move)       
 - [/plot swap](#swap)
 - [/plot weanywhere](#weanywhere)

# Commands

## BUY

#### Description
Achète le plot sur lequel vous vous trouvez (si il est à vendre).
Pour mettre un plot en vente il faut [définir le flag price](#setflag).
#### Syntaxe    
`/plot buy`    
#### Alias
`[ buy ]`

***

## CONFIRM

#### Description
Confirme une action lorsqu'une confirmation est demandée.
#### Syntaxe    
`/plot confirm`    
#### Alias
`[ confirm ]`

***

## CLAIM
  
#### Description
Revendique le plot sur lequel vous êtes si il n'a pas de propriétaire.
Lorsque vous revendiquez un plot, il vous appartient et personne ne peut construire dessus à part vous et ceux que vous autorisez *(voir [/plot add](#add) et [/plot trust](#trust))*

#### Syntaxe
 `/plot claim`
#### Alias
`[ claim,c ]`

***

## AUTO
#### Description
Revendique automatiquement le plot le plus proche du spawn.
Il est possible de spécifier une taille pour revendiquer plusieurs plots si besoin.
#### Syntaxe    
`/plot auto [longeur,largeur]`    
#### Alias
`[ auto,a ]`

***

## VISIT
#### Description
Permet de visiter un plot. On peux donner le pseudo d'un joueur, le nom d'un plot *(alias)* ou son id.
#### Syntaxe    
`/plot visit [joueur|alias|id] [#]`    
#### Alias
`[ visit,v,tp,teleport,goto,home,h ]`

***

## SET
#### Description
Défini une valeur d'un plot.
Permet de définir le biome, le nom et les flags.
#### Syntaxe    
`/plot set <biome|alias|home|flag> <valeur...>`    
#### Alias
`[ set,s ]`

***

## CLEAR
#### Description
Réinitialise le plot et le remet à son état de départ.
**Cette action est irréversible.**
*Cette commande demande une [confirmation](#confirm).*
#### Syntaxe    
`/plot clear`    
#### Alias
`[ clear,reset ]`

***

## DELETE
#### Description
Supprime le plot et le rend de nouveau revendiquable (vous n'en serez plus le propriétaire).
**Cette action est irréversible.**
*Cette commande demande une [confirmation](#confirm).*
#### Syntaxe    
`/plot delete`    
#### Alias
`[ delete,dispose,del,reset ]`

***

## TRUST
#### Description
Autorise un joueur à construire dans un plot même si le propriétaire n'est pas en ligne.
#### Syntaxe    
`/plot trust <joueur>`    
#### Alias
`[ trust,t ]`

***

## ADD
#### Description
Autorise un joueur à construire sur le plot uniquement lorsque le propriétaire est en ligne.
#### Syntaxe    
`/plot add <joueur>`    
#### Alias
`[ add ]`

***

## DENY
#### Description
Banni un utilisateur d'un plot. Il ne pourras plus y accéder tant que vous ne le débannissez pas avec la commande [/plot remove](#remove).
#### Syntaxe    
`/plot deny <joueur>`    
#### Alias
`[ deny,d,ban ]`

***

## REMOVE
#### Description
Retire un joueur du plot. Si c'est un joueur autorisé à construire, il ne sera plus autorisé à construire, et si c'est un joueur banni, il sera débanni.
#### Syntaxe    
`/plot remove <joueur>`    
#### Alias
`[ remove,r,untrust,ut,undeny,ud,unban ]`

***

## INFO
#### Description
Affiche des informations sur le plot sur lequel vous vous trouvez.
#### Syntaxe    
`/plot info <id>`    
#### Alias
`[ info,i ]`

***

## LIST
#### Description
Liste les plots. Vous pouvez utiliser différents arguments :
- `forsale` : Plots à vendre.
- `mine` : Plots que vous possédez.
- `shared` : Plots sur lesquels vous êtes autorisé à construire.
- `top` : Plots les plus votés.
- `all` : Tous les plots.
- `joueur` : Tous les plots d'un joueur.
- `done` : Plots terminés.
#### Syntaxe    
 - `/plot list <forsale|mine|shared|top|all|joueur|done> [#]`    

#### Alias
`[ list,l,find,search ]`

***

## MERGE
#### Description
Combine le plot sur lequel vous vous trouvez avec un plot adjacent. Vous devez posséder l'autre plot pour pouvoir faire ceci.
Vous pouvez spécifier une direction (`n`,`e`,`w`,`s` ou `all`) et spécifier si vous souhaitez retirer la route en ajoutant `true` ou `false`.
#### Syntaxe    
 - `/plot merge [all|n|e|s|w] [removeroads]`    
#### Alias
`[ merge,m ]`

***

## UNLINK
#### Description
Sépare des plots qui ont été combinés.
#### Syntaxe    
`/plot unlink`    
#### Alias
`[ unlink,u,unmerge ]`

***

## KICK
#### Description
Ejecte un joueur du plot.
#### Syntaxe    
`/plot kick <joueur>`    
#### Alias
`[ kick,k ]`

***

## LIKE
#### Description
Met un like au plot sur lequel vous vous trouvez.
#### Syntaxe    
`/plot like` 
#### Alias
`[ like ]`

***

## UNLIKE
#### Description
Retire votre like d'un plot.
#### Syntaxe    
`/plot unlike` 
#### Alias
`[ unlike ]`

***

## SWAP
#### Description
Echange deux plots de place.
#### Syntaxe    
 - `/plot swap <X;Z>`    
#### Alias
`[ swap,switch ]`

***

## MUSIC
#### Description
Permet de choisir une musique qui sera jouée sur le plot.
#### Syntaxe    
`/plot music`    
#### Alias
`[ music ]`

***

## SETFLAG
#### Description
Défini les flags d'un plot. Pour avoir une liste d'un flag, utilisez `/plot flag list`. Pour plus d'information sur les flags, voir [Flags](https://mjccraft.github.io/monde/creatif#flags).
##### Exemples
``` java
/plot flag set fly true
/plot flag remove fly
/plot flag set pvp true
/plot set gamemode spectator
/plot flag add use stone_button
/plot flag list
```
#### Syntaxes    
 - `/plot flag info <flag>`
 - `/plot flag <set|remove|add|list|info>`
 - `/plot flag add <flag> <valeurs>`
 - `/plot flag list`
 - `/plot flag set <flag> <valeur>`
 - `/plot flag remove <flag> [valeurs]`    
 - 
#### Alias
`[ setflag,f,flag,setf ]`

***

## TARGET
#### Description
Vise un plot avec votre compas.
#### Syntaxe    
`/plot target <plot>`    
#### Alias
`[ target ]` 

***

## MOVE
#### Description
Déplace un plot aux coordonnées précisées.
#### Syntaxe    
- `/plot move <X;Z>`    
#### Alias
`[ move,debugmove ]`

***

## COPY
#### Description
Copie un plot aux coordonnées précisées.
#### Syntaxe    
`/plot copy <X;Z>`    
#### Alias
`[ copy,copypaste ]`

***

## CHAT
#### Description
Actove/désactive le chat de plot (chat visible uniquement sur le plot).
#### Syntaxe    
`/plot chat [on|off]`    
#### Alias
`[ chat ]`

***

## DONE
#### Description
Marque un plot comme terminé.
#### Syntaxe    
`/plot done`    
#### Alias
`[ done,submit ]`

***

## Download
#### Description
Crée un fichier .schematic de votre plot (utilisable par WorldEdit, MCEdit, etc) et génère un lien pour le télécharger.
#### Syntaxe
`/plot download`
#### Alias
`[ download,dl ]`

***

## CONTINUE
#### Description
Permet de continuer un plot qui était marqué comme terminé.
#### Syntaxe    
`/plot continue`    
#### Alias
`[ continue ]`

***

## MIDDLE
#### Description
Vous téléporte au milieu du plot actuel
#### Syntaxe    
`/plot middle`    
#### Alias
`[ middle,center ]`

***

## SETOWNER
#### Description
Change le propriétaire du plot.
#### Syntaxe    
`/plot setowner <joueur>`    
#### Alias
`[ setowner,owner,so,seto ]`

***

## SETDESCRIPTION
#### Description
Défini la description du plot.
#### Syntaxe    
`/plot desc <description>`    
#### Alias
`[ setdescription,desc,setdesc,setd,description ]` 

***

## SETBIOME
#### Description
:warning: **Commande pour utilisateur avancé. Utilisez plutôt le menu si vous n'êtes pas sûr de vous.**
Défini le biome du plot. La liste des biomes est disponible [ici](https://minecraft-fr.gamepedia.com/Biome#ID_des_biomes) (utiliser la colonne *ID nominal*)
#### Syntaxe    
`/plot biome [biome]`    
#### Alias
`[ setbiome,biome,sb,setb,b ]`
#### Permissions
`plots.set.biome`   

***

## ALIAS
#### Description
`Set the plot name`
#### Syntaxe    
`/plot alias set <alias>`    
`/plot alias remove <alias>`    
#### Alias
`[ setalias,alias,sa,name,rename,setname,seta, nameplot ]`
#### Permissions
`plots.alias`    
NEW: `plots.alias.set` and `plots.alias.remove` (The old permission still work!)    
***

## SETHOME
#### Description
`Set the plot home`
#### Syntaxe    
`/plot sethome [none]`    
#### Alias
`[ sethome,sh,seth ]`
#### Permissions
`plots.set.home`    
***

## TOGGLE
#### Description
`Toggle per user settings`
#### Syntaxe    
`/plot toggle [worldedit|chat|chatspy|titles|time]`    
#### Alias
`[ toggle,attribute ]`
#### Permissions
`plots.use`    
***

## HELP
#### Description
`Get this help menu`
#### Syntaxe    
`/plot help help [category|#]`    
#### Alias
`[ help,he,? ]`
#### Permissions
`plots.use`    
***
 
## WEANYWHERE
#### Description
`Force bypass of WorldEdit`
#### Syntaxe    
`/plot weanywhere`    
#### Alias
`[ weanywhere,wea ]`
#### Permissions
`plots.worldedit.bypass`    
***



