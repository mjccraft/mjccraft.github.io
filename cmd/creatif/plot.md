# Commandes des plots

**Cette page n'est pas définitive et sera réarrangée.**

## Contenu
###### CLAIMING
 - [/plot buy](#buy)    
 - [/plot claim](#claim)    
 - [/plot auto](#auto)    
 - [/plot delete](#delete)    
 - [/plot grant](#grant)    
 - [/plot setowner](#setowner)    

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
 - [/plot inbox](#inbox)    
 - [/plot comment](#comment)    
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
 - [/plot rate](#rate)    
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
`Buy the plot you are standing on`
#### Usage    
`/plot buy`    
#### Aliases
`[ buy ]`
#### Permissions
`plots.buy`    

***

## CONFIRM
#### Description
`Confirm an action`
#### Usage    
`/plot confirm`    
#### Aliases
`[ confirm ]`
#### Permissions
`plots.use`    

***

## CLAIM
  
#### Description
`Claim the current plot you're standing on.
If you activated the "specify_on_claim" option in the world.yml you can define a plot-schematic.`

#### Usage
##### Primary    
 - `/plot claim`
##### Other    
 - `/plot claim <schematic>`
#### Required callers
`PLAYER`
#### Aliases
`[ claim,c ]`

#### Permissions
##### Primary
 - `plots.claim`    
##### Other
 - `plots.plot.<#>`
 - `plots.claim." + schemati`
 - `plots.claim.<arg>`
 - `plots.admin.command.schematic`

***

## AUTO
#### Description
`Claim the nearest plot`
#### Usage    
`/plot auto [length,width]`    
#### Aliases
`[ auto,a ]`
#### Permissions
##### Primary
 - `plots.auto`    

##### Other
 - `plots.plot.<#>`
 - `plots.claim." + schemati`
 - `plots.auto.mega`
 - `plots.claim.<arg>`
 - `plots.admin.command.schematic`

***

## VISIT
#### Description
`Visit someones plot`
#### Usage    
##### Primary    
 - `/plot visit [player|alias|world|id] [#]`    

##### Other    
 - `/plot visit <world>;<id> [#]`    

#### Required callers
`PLAYER`
#### Aliases
`[ visit,v,tp,teleport,goto,home,h ]`
#### Permissions
##### Primary
 - `plots.visit`    

##### Other
 - `plots.visit.unowned`
 - `plots.home`
 - `plots.visit.owned`
 - `plots.visit.shared`
 - `plots.visit.other`

***

## SET
#### Description
`Set a plot value`
#### Usage    
`/plot set <biome|alias|home|flag> <value...>`    
#### Aliases
`[ set,s ]`
#### Permissions
##### Primary
 - `plots.set`    

##### Other
 - `plots.set." + componen`
 - `plots.set.<arg>`

***

## CLEAR
#### Description
`Clear a plot`
#### Usage    
`/plot clear`    
#### Aliases
`[ clear,reset ]`
#### Permissions
##### Primary
 - `plots.clear`    

##### Other
 - `plots.admin.command.clear`
 - `plots.continue`

***

## DELETE
#### Description
`Delete a plot`
#### Usage    
`/plot delete`    
#### Aliases
`[ delete,dispose,del,reset ]`
#### Permissions
##### Primary
 - `plots.delete`    

##### Other
 - `plots.admin.command.delete`

***

## TRUST
#### Description
`Allow a player to build in a plot`
#### Usage    
`/plot trust <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ trust,t ]`
#### Permissions
##### Primary
 - `plots.trust`    

##### Other
 - `plots.admin.command.trust`
 - `plots.trust.everyone`

***

## ADD
#### Description
`Allow a user to build while you are online`
#### Usage    
`/plot add <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ add ]`
#### Permissions
##### Primary
 - `plots.add`    

##### Other
 - `plots.admin.command.trust`
 - `plots.trust.everyone`

***

## DENY
#### Description
`Deny a user from a plot`
#### Usage    
`/plot deny <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ deny,d,ban ]`
#### Permissions
##### Primary
 - `plots.deny`    

##### Other
 - `plots.admin.command.deny`
 - `plots.deny.everyone`

***

## REMOVE
#### Description
`Remove a player from a plot`
#### Usage    
`/plot remove <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ remove,r,untrust,ut,undeny,ud,unban ]`
#### Permissions
##### Primary
 - `plots.remove`    

##### Other
 - `plots.admin.command.remove`

***

## INFO
#### Description
`Display plot info`
#### Usage    
`/plot info <id>`    
#### Aliases
`[ info,i ]`
#### Permissions
`plots.info`    
***

## LIST
#### Description
`List plots`
#### Usage    
##### Primary    
 - `/plot list <forsale|mine|shared|world|top|all|unowned|unknown|player|world|done|fuzzy <search...>> [#]`    

##### Other    
 - `/plot list fuzzy <search...> [#]`    

#### Aliases
`[ list,l,find,search ]`
#### Permissions
##### Primary
 - `plots.list`    

##### Other
 - `plots.list.world.<arg>`
 - `plots.list.top`
 - `plots.list.mine`
 - `plots.list.world`
 - `plots.list.done`
 - `plots.list.all`
 - `plots.list.shared`
 - `plots.list.expired`
 - `plots.list.unowned`
 - `plots.list.world." + worl`
 - `plots.list.player`
 - `plots.list.forsale`
 - `plots.list.world." + args[0`
 - `plots.list.unknown`
 - `plots.list.area`
 - `plots.list.fuzzy`

***

## MERGE
#### Description
`Merge the plot you are standing on, with another plot`
#### Usage    
##### Primary    
 - `/plot merge <all|n|e|s|w> [removeroads]`    

##### Other    
 - `/plot merge < <arg> | <arg> > [removeroads]`    

#### Required callers
`PLAYER`
#### Aliases
`[ merge,m ]`
#### Permissions
##### Primary
 - `plots.merge`    

##### Other
 - `plots.merge.<#>`
 - `plots.admin.command.merge`
 - `plots.merge.other`
 - `plots.merge.keeproad`

***

## UNLINK
#### Description
`Unlink a mega-plot`
#### Usage    
`/plot unlink`    
#### Aliases
`[ unlink,u,unmerge ]`
#### Permissions
##### Primary
 - `plots.unlink`    

##### Other
 - `plots.admin.command.unlink`

***

## KICK
#### Description
`Kick a player from your plot`
#### Usage    
`/plot kick <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ kick,k ]`
#### Permissions
##### Primary
 - `plots.kick`    

##### Other
 - `plots.admin.command.kick`

***

## RATE
#### Description
`Rate the plot`
#### Usage    
`/plot rate [#|next]`    
#### Aliases
`[ rate,rt ]`
#### Permissions
##### Primary
 - `plots.rate`    

##### Other
 - `plots.comment`

***

## INBOX
#### Description
`Review the comments for a plot`
#### Usage    
`/plot inbox [inbox] [delete <index>|clear|page]`    
#### Aliases
`[ inbox ]`
#### Permissions
`plots.inbox`    
***

## COMMENT
#### Description
`Comment on a plot`
#### Usage    
`/plot comment`    
#### Aliases
`[ comment,msg ]`
#### Permissions
`plots.comment`    
***

## SWAP
#### Description
`Swap two plots`
#### Usage    
##### Primary    
 - `/plot swap <X;Z>`    

##### Other    
 - `/plot copy <X;Z>`    

#### Aliases
`[ swap,switch ]`
#### Permissions
##### Primary
 - `plots.swap`    

##### Other
 - `plots.admin`
 - `.PERMISSION_ADMIN.s`

***

## MUSIC
#### Description
`Player music in a plot`
#### Usage    
`/plot music`    
#### Required callers
`PLAYER`
#### Aliases
`[ music ]`
#### Permissions
`plots.music`    
***

## TRUST
#### Description
`Allow a player to build in a plot`
#### Usage    
`/plot trust <player>`    
#### Required callers
`PLAYER`
#### Aliases
`[ trust,t ]`
#### Permissions
##### Primary
 - `plots.trust`    

##### Other
 - `plots.admin.command.trust`
 - `plots.trust.everyone`

***

## SETFLAG
#### Description
`Set plot flags`
##### Comments
``` java
plot flag set fly true
plot flag remove fly
plot flag remove use 1,3
plot flag add use 2,4
plot flag list
```
#### Usage    
##### Primary    
 - `/plot flag <set|remove|add|list|info> <flag> <value>`    

##### Other    
 - `/plot flag info <flag>`
 - `/plot flag <set|remove|add|list|info>`
 - `/plot flag add <flag> <values>`
 - `/plot flag list`
 - `/plot flag set <flag> <value>`
 - `/plot flag remove <flag> [values]`    

#### Required callers
`PLAYER`
#### Aliases
`[ setflag,f,flag,setf ]`
#### Permissions
##### Primary
 - `plots.flag`    

##### Other
 - `plots.set.flag`
 - `plots.flag.remove`
 - `plots.flag.add`
 - `plots.set.flag.other`
 - `plots.set.flag.<arg>`
 - `plots.flag.list`
 - `plots.set.flag." + args[1].toLowerCase`

***

## TARGET
#### Description
`Target a plot with your compass`
#### Usage    
`/plot target <<plot>|nearest>`    
#### Required callers
`PLAYER`
#### Aliases
`[ target ]`
#### Permissions
`plots.target`    
***

## MOVE
#### Description
`Move a plot`
#### Usage    
##### Primary    
 - `/plot move <X;Z>`    

##### Other    
 - `/plot copy <X;Z>`    

#### Aliases
`[ move,debugmove ]`
#### Permissions
##### Primary
 - `plots.move`    

##### Other
 - `plots.admin`
 - `.PERMISSION_ADMIN.s`


***

## COPY
#### Description
`Copy a plot`
#### Usage    
`/plot copy <X;Z>`    
#### Aliases
`[ copy,copypaste ]`
#### Permissions
##### Primary
 - `plots.copy`    

##### Other
 - `plots.admin`
 - `.PERMISSION_ADMIN.s`

***

## CHAT
#### Description
`Toggle plot chat on or off`
#### Usage    
`/plot chat [on|off]`    
#### Aliases
`[ chat ]`
#### Permissions
##### Primary
 - `plots.chat`    

##### Other
 - `plots.chat.color`
***

## DONE
#### Description
`Mark a plot as done`
#### Usage    
`/plot done`    
#### Required callers
`PLAYER`
#### Aliases
`[ done,submit ]`
#### Permissions
##### Primary
 - `plots.done`    

##### Other
 - `plots.admin.command.done`

***

## CONTINUE
#### Description
`Continue a plot that was previously marked as done`
#### Usage    
`/plot continue`    
#### Aliases
`[ continue ]`
#### Permissions
##### Primary
 - `plots.continue`    

##### Other
 - `plots.admin.command.continue`

***

## MIDDLE
#### Description
`Teleports you to the center of the current plot`
##### Comments
``` java
@author manuelgu, altered by Citymonstret
```
#### Usage    
`/plot middle`    
#### Required callers
`PLAYER`
#### Aliases
`[ middle,center ]`
#### Permissions
`plots.middle`    
***

## GRANT
#### Description
``
#### Usage    
`/plot grant <check|add> [player]`    
#### Aliases
`[ grant ]`
#### Permissions
##### Primary
 - `plots.grant`    

##### Other
 - `plots.grant." + arg`
 - `plots.grant.<arg>`

***

## SETOWNER
#### Description
`Set the plot owner`
#### Usage    
`/plot setowner <player>`    
#### Aliases
`[ setowner,owner,so,seto ]`
#### Permissions
##### Primary
 - `plots.set.owner`    

##### Other
 - `plots.admin.command.setowner`

***

## SETDESCRIPTION
#### Description
`Set the plot description`
#### Usage    
`/plot desc <description>`    
#### Aliases
`[ setdescription,desc,setdesc,setd,description ]`
#### Permissions
`plots.set.desc`    
***

## SETBIOME
#### Description
`Set the plot biome`
#### Usage    
`/plot biome [biome]`    
#### Aliases
`[ setbiome,biome,sb,setb,b ]`
#### Permissions
`plots.set.biome`    
***

## ALIAS
#### Description
`Set the plot name`
#### Usage    
`/plot alias set <alias>`    
`/plot alias remove <alias>`    
#### Aliases
`[ setalias,alias,sa,name,rename,setname,seta, nameplot ]`
#### Permissions
`plots.alias`    
NEW: `plots.alias.set` and `plots.alias.remove` (The old permission still work!)    
***

## SETHOME
#### Description
`Set the plot home`
#### Usage    
`/plot sethome [none]`    
#### Aliases
`[ sethome,sh,seth ]`
#### Permissions
`plots.set.home`    
***

## TOGGLE
#### Description
`Toggle per user settings`
#### Usage    
`/plot toggle [worldedit|chat|chatspy|titles|time]`    
#### Aliases
`[ toggle,attribute ]`
#### Permissions
`plots.use`    
***

## HELP
#### Description
`Get this help menu`
#### Usage    
`/plot help help [category|#]`    
#### Aliases
`[ help,he,? ]`
#### Permissions
`plots.use`    
***

## WEANYWHERE
#### Description
`Force bypass of WorldEdit`
#### Usage    
`/plot weanywhere`    
#### Aliases
`[ weanywhere,wea ]`
#### Permissions
`plots.worldedit.bypass`    
***
