# Commandes faction

## APERCU :

/f
>Gérer les commandes de base des factions.

/f?,h,help [page]
>Demande de l'aide, affiche la liste des commandes de la page X.

/f list [page]
>Affiche la liste des factions de la page X.

/f top <TopCategory*> [page]
>Affiche le classement des factions de la page X (sans le " * ").

/f f,faction [faction]
>Affiche les informations de votre faction ou de celle spécifiée.

/f player [player]
>Affiche les informations de votre compte ou de celui spécifié.

/f status [page] [faction] [sort]
>Affiche les statuts.

/f join <Nom de la faction>
>Rejoindre une faction.

/f leave
>Quitter votre faction.

/f map [on|off]
>Affiche la carte avec les territoires.



## CREATION FACTION :

/f create,new <nom> 
>Créer votre faction.

/f name <nouveau nom> [faction]
>Défini/remplace le nom fr votre faction.

/f description <desccription>
>Changer la description de votre faction.

/f motd
>Affiche le message de faction.

/f motd [new=read]
>Change le message de la faction.

/f sethome <nom du home>
>Place un "home" de faction avec le nom spécifié.

/f unsethome <nom du home>
>Supprimme un home de faction




## TERRITOIRE :

/f seeChunk,sc
>Affiche les bordures des chunks près de vous.

/f territorytitles,tt [on|off]
>Affiche les noms des territoires.

/f claim
>Déclare que les chunks sélectionnés appartiennent à votre faction.

/f claim one
>Déclare que le chunk sur lequel vous vous trouvez appartient à votre faction.

/f claim auto
>Déclare que les chunks sur lesquels vous passez appartiennent à votre faction.

/f claim fill
>Déclare que tous les chunks entre deux points sélectionnés appartiennent à votre faction.

/f claim square [côté]
>Déclare que tous les chunks dans un carré de X chunks de coté appartiennent à votre faction.

/f claim circle [rayon]
>Déclare que tous les chunks dans un cercle de X chunks de rayon appartiennent à votre faction.

/f unclaim
>Restaure les chunks sélectionnés.

/f unclaim one
>Restaure le chunk sur lequel vous êtes.

/f unclaim auto
>restaure les chunks sur lesquels vous passez.

/f unclaim fill
>Restaure les chunks entre deux points sélectionnés.

/f unclaim square [côté]
>Restaure les chunks dans un carré de X chunks de coté.

/f unclaim circle [rayon]
>Restaure les chunks dans un cercle de X chunks de rayon.

/f unclaim all
>Restaure tous les chunks de la faction. 

## GESTION DES MEMBRES :

/f invite
>Gère les invitations.

/f invite list [page]
>Affiche la liste des invitations envoyées.

/f invite add <pseudo> 
>Invite un joueur dans votre faction.

/f invite remove <player|all>
>Annule l'invitation envoyée à un joueur ou toutes les invitations.

/f kick <pseudo>
>Exclu un joueur de votre faction.

## GRADES :

/f rank
>Gérer les grades de votre faction.

/f rank set <pseudo> <grade>
>Attribuer un grade à un joueur (`Leader`: Chef, `Officer`: Officier, `Member`: Membre, `Recruit`: Recrue).

/f rank show <pseudo>
>Affiche le grade d'un joueur.

/f rank list [page]
>Affiche les grades des membres de votre faction.

## ARGENT

/f money
>Gérer l'argent de votre faction.

/f money balance
>Affiche l'argent de votre faction.

/f money deposit <montant>
>Déposer un montant de X€ dans la banque de votre faction.

/f money withdraw <montant>
>Retirer un montant de X€ de la banque de votre faction.

/f money ff <montant> <Nom_de_votre_faction> <Nom_de_l'autre_faction>
>Transfert un montant de X€ de votre faction à une autre faction.

/f money fp <montant> <Nom_de_votre_faction> <pseudo>
>Transfert d'un montant de X€ de votre faction à un joueur.


## RELATIONS :

/f relation
>Gérer les relations entre factions.

/f relation set <faction> <relation>
>Demande un statut de relation à entre votre faction et une autre. (Ally|Truce|Neutral|Enemy)

/f relation liste [page]
>Affiche la liste des relations (Ally|Truce|Neutral|Enemy) entre votre factions et les autres. 

/f relation wishes [page]
>Affiche les demandes de relation entre votre faction et les autres.


## WARPS :

/f warp go <Nom_du_warp>
>Téléporte à un warp.

/f warp list [page]
>Affiche la liste des warps de votre faction.

/f warp add,create <Nom_du_warp>
>Créer un nouveau warp de faction.

/f warp remove <Nom_du_warp>
>Supprime un warp de faction.


## ACCES :

/f access
>Gérer les accès.

/f access view
>Voir les accès.

/f access player <pseudo>
>Accorder un accès à un joueur.


## FLAGS :

*Les flags sont les propriétés de la faction. Par exemple, l'activation du pvp entre membres est un flag*

/f flag
>Gérer les flags de la faction.

/f flag list [page]
> Affiche la liste des flags.

/f flag show [page]
>Affiche la liste des flags de votre faction.

/f flag set <flag> <yes|no>
>Définir un flag de la faction.


## AUTRE :

/f unstuck
>Téléporte dans la zone déserte la plus proche.

/f disband <faction> [confirmation]
>Dissous une faction.
  
## EXPICATIONS PLUS DETAILLEES :

**La partie suivante à été traduite avec automatiquement et peut comporter des erreurs. En cas de doute, n'hésitez pas à contecter un administrateur.**

Le plugin permet aux joueurs de se regrouper dans des factions, qui revendiquent des territoires et construisent leurs bases.
Ce plugin possède un système d'[antigriefing](https://mjccraft.github.io/lexique#griefing) qui empêche les joueurs n'appartenant pas à une faction de construire dans leur territoire. 
Les [grades](https://mjccraft.github.io/cmd/survie/faction#grades) permettent de gérer les permissions des membres d'une faction.

La commande `/f` permet d'afficher la liste de toutes les commandes liées aux factions. Entrez `/f ? 2` pour afficher la seconde page.
La commande `/f list` affiche la liste des faction sur plusieurs pages. Si vous voulez  avoir un classement plus détaillé, entrez la commande `/f top` qui affichera le classement des factions dans des catégories. Pour obtenir plus d'informations sur votre faction entrez `/f f`, mais si vous voulez plus d'informations sur une autre faction entrez `/f f [Nom_de_la_faction]`. 

Egalement, la commande `/f player` affichera les informations de votre compte. Si vous voulez les informations sur le compte d'un autre joueur entrez `/f palyer [Nom_du_joueur]`. Si vous voulez les informations quant aux joueurs présents dans votre faction, entrez `/f status [page]`, la liste s'affichera sur plusieurs pages donc choisissez la page que vous voulez observer. 

Une faction peut posséder des [warps](https://mjccraft.github.io/lexique#warps). Pour voir les warps de votre faction entrez `/warp list`. Pour vous téléporter à un warp entrez `/f warp go <Nom_du_warp>`. Si vous possédez la permission, vous pouvez créer/retirer des warps avec l'aide des commandes `/f warp add` et `/f warp remove`. Il y a un maximum de warps par faction défini par les administrateurs (renseigner plus tard).

Pour changer la description publique de votre faction entrez `/f desc <Description_de_la_faction>`. Vous pouvez voir le message journalier de votre faction en entrant `/f motd` et vous pouvez en créer un nouveau en entrant `/f motd <Nouveau_motd>`. Vous pouvez utiliser des couleurs dans vos messages journaliers.
Vous pouvez placer un [home](https://mjccraft.github.io/lexique#home) de faction en entrant `/f sethome Nom_du_home` alors le home se placera à votre position. Vous pouvez placer un nouveau home en entrant ainsi la même commande **/f sethome Nom_du_home** ou vous pouvez en supprimer un ancien en utilisant la commande **/f unsethome Nom_du_home**.
Afin d'inviter un joueur dans votre faction entrez **/f invite add <Nom_du_joueur>**, ainsi vous ajoutez une invitation à la liste d'invitation. Lorsque vous désirez savoir la liste des personnes que vous avez invitées entrez **/f invite list**. Donc si vous voulez gérer les invitations envoyées de cette liste vous pouvez en retirer avec la commande **/f invite remove <Nom_du_joueur>** ou si vous voulez toutes les supprimées untilisez la commande **/f invite remove all**.
Entrez la commande **/f kick <Nom_du_joueur>** afin d'exclure un joueur de votre faction.
Vous pouvez attribuer des titres au membres de votre faction en entrant la commande **/f title <Nom_du_joueur> [Nom_du_titre]** mais si vous voulez supprimer le titre d'un joueur utiliser la commande **/f title <Nom_du_joueur>**. Vous pouvez utiliser des couleurs pour les titres.
Toutes les factions ont a disposition un système de grade. Vous commencer avec Chef (400), Officier (300), Membre (200) and Recrue (100), mais vous pouvez en ajouter/enlever à votre guise. Les grades peuvent avoir des préfixes qui seront présents devant le pseudo des joueurs (les préfixes peuvent avoir différentes couleurs). Tout les grades possèdent des priorités montrées entre parenthèses. Le grade avec la plus grande priorité correspond au chef (peut être renommé) mais qu'une seule personne peut prétendre à ce grade. Quand un nouveau joueur rejoins une faction, il se verra attribué le plus petit grade. Les priorités détermines les permissions des joueurs.
Pour déterminer quels grades sont disponibles dans différentes factions entrez **/f rank list [page] [Nom_de_la_faction]** qui vous affichera par défaut la page 1. Afin d'attribuer un grade à un joueur utilisez la commande **/f rank set <Nom_du_joueur> <Nom_du_grade>**. Si vous voulez afficher le grade d'un joueur entrez **/f rank show <Nom_du_joueur>**.
Afin de créer un nouveau grade entrez **/f rank edit create <Nom_du_grade> <La_priorité> [prefix]**. Cette commande ne peut être utilisée que par le chef de faction. Le nom du grade et la priorité sont obligatoires et doivent être unique dans la faction, le préfixe est optionnel et ne doit pas forcément être unique. Vous pouvez modifier indépendamment le nom/priorité/préfixe avec les commandes **/f rank edit name <Nom_du_grade> <Nouveau_nom>**, **/f rank dit priority <Nom_du_garde> <Nouvelle_priorité>** et **/f frank edit prefix <Nom_du_grade> <Nouveau_préfixe>**. Enfin vous pouvez supprimer un grade entrez **/f rank delete <Nom_du_grade>**. 
Entrez la commande **/f money balance [faction=you]** afin d'afficher le montant du compte de votre faction. Afin de déposer de l'argent sur le compte de votr faction entrez **/f money deposite <La_quantité> [faction=you]**. Pour retirer de l'argent du compte de votre faction entrez **/f money withdraw <Montant_du_retrait> [faction=you]**. Afin de transférer de l'argent d'une faction à un joueur utiliser la commande **/f money fp <Montant_du_transfert> <Nom_de_la_faction> <Nom_du_joueur>**. Pour transférer de l'argent du faction à une autre utilisez la commande **/f money ff <Montant_du_transfert> <Nom_de_la_faction1> <Nom_de_la_faction2>**. Pour transférer de l'argent d'un joueur à une faction utiliser la commande **/f money pf <Montant_du_transfert> <Nom_du_joueur> <Nom_de_la_faction>**.
Les territoires de faction sont basés sur un système de [chunks](https://github.com/mjccraft/mjccraft.github.io/edit/master/Définitions) qui peuvent êtres revendiqués par une faction. Vous pouvez voir les bordures de vos chunks en utilisant la commande **/f sc**. Utilisez la même commande afin d'arrêter. Entrez **/f claim one** pour revendiquer le chunk sur lequel vous vous trouvez. Maintenant, si vous voulez revendiquer tout les chunks sur lesquels vous passez, utilisez la commande **/f claim auto**, puis pour arrêter entrez de nouveau la commande. Si, une fois avoir revendiqué vos territoires sous la forme d'un cercle, vous vous rendez compte qu'il vous en manque à l'intérieur du cercle, utilisez la commande **/f claim fill**. Si vous voulez revendiquez un territoire sous forme de cercle ou de carré, au lieu de marcher, utilisez la commande **/f claim circle [rayon]** ou **/f claim square [rayon]**. Cette commande revendiquera tout les chunks sur un rayon de X chunks depuis votre position (le chunk sur lequel vous vous trouvez). Vous ne pouvez plus revendiquer de territoires lorsque vous n'avez plus de pouvoir. Donc si vous voulez revendiquer un nouveau territoire mais que vous n'avez plus de pouvoir, vous devez abandonnez d'anciens territoires. Pour faire cela simplement, rendez vous sur le chunk dont vous voulez vous débarrasser et effectuer **/f unclaim**.
Lorsque vous désirez autoriser l'accès à quelqu'un sur certains chunks au lieu de le rendre public à toute votre faction, entrez sur le chunk en question **/f access player <Nom_du_joueur> yes**. De la même manière, si vous voulez refuser l'accès à un joueur sur certains chunks, utilisez la commande **/f access player <Nom_du_joueur> no**sur le chunk en question. Vous pouvez effectuer la même chose mais cette fois ci avec l'entièreté d'une faction. Par exemple, si vous êtes allié avec une faction et que vous désirez autoriser ses membres à pénétrer sur certains de vos chunks, entrez **/f access faction <Nom_de_la_faction> yes**, et de même si vous voulez lui interdire de pénétrer sur certains de vos chunks, entrez **/f access faction <Nom_de_la_faction> no**. Attention, ces commandes autorisent/interdisent l'accès uniquement sur le chunk sur lequel vous vous trouvez. Pour voir la liste des autorisations et des interdictions d'accès sur le chunk où vous vous trouvez, entrez **/f access view**.
Deux factions peuvent avoir des relations. Par défaut, deux faction ont une relation neutre, mais elle peut être changer par ennemie, allié ou trêve. La relation définie pour deux factions correspond à la demande la plus basse. Par exemple, si la faction 1 demande à être alliée alors que la faction 2 demande à être ennemie, la relation définie sera ennemie. Afin de faire une requête de relation à une faction, entrez **/f relation set <Nom_de_la_faction> <Nom_de_la_relation>**. Si vous désirez voir la liste de vos relations, entrez **/f relation list**, pour afficher la page suivante, entrez **/f relation list 2**. Afin de voir la liste des relations précises, entrez **/f relation list <Nom_de_la_relation>** ou pour voir la relation que vous avez défini avec une autre faction, entrez **/f relation list <Nom_de_la_faction>**. 
Les factions possèdent un système de permissions qui défini qui peut faire quoi au sein de celle-ci. Les permissions peuvent être attribuées à un grade, un joueur, une relation ou à un joueur/grade dans une autre faction. Pour afficher pour la liste des permissions  entrez **/f perm list**. Pour afficher qui possède une permission, entrez **/f perm list <Nom_de_la_permission>**. Si vous voulez savoir quelles permissions ont été attribuées à un joueur, entrez **/f perm viewall <Nom_du_joueur>**. De même, si vous voulez savoir quelles permissions possède un grade, entrez **/f perm view <Nom_du_grade>**. Si vous désirez savoir quelles permissions sont attribuées à un grade dans une autre faction, entrez **/f perm view Nom_de_la_faction-Nom_du_grade**. Pour donner/retirer une permission à quelque chose, entrez la commande **/f perm set <Nom_de_la_permission> <Nom_de_l'objet_à_qui_vous_attribuer_la_permission><Oui/non>**.
Afin d'afficher la liste des bannières, entrez **/f flag list**. Si jamais la bannière d'une faction ne s'affiche pas, entrez **/f flag show <Nom_de_la_faction>**. Pour mettre votre bannière de faction, entrez **/f flag set <Nom_de_votre_bannière> <Yes/no>**.


## SOURCE : 

Plugin faction : Faction 3
[Lien original](https://muj.dk/factions/)
