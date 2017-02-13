sed
---

**-i** : in-place edit input file  
**-e** : sequence edit  
**s|** : substitute delimiter can be any symbol / character (single byte)  
**$** : for escaped 'single quote'  
**\\|**pattern**|** : (left one only) escaped line search delimiter other than '/'  
**\\|**1st pattern**|,|**last pattern**|** : line range search  
**a\\** : append line  
**i\\** : insert(prepend) line  
**d** : delete line  
**^** : start  
**$** : end  
**^**... : start with ...  
...**$** : end with ...  
...**\\** : ... escaped newline  
**$.\*[\\]^** : escape character to be literal  

**Example**
```sh
### Edit ###
sed -i -e 's|<title>RuneAudio - RuneUI</title>|<title>RuneAudio - RuneUIe</title>|
' -e $'\|runeui.css| a\
    <link rel="stylesheet" href="<?=$this->asset(\'/css/pnotify.css\')?>">\
    <link rel="stylesheet" href="<?=$this->asset(\'/css/custom.css\')?>">\
    <?php if (preg_match(\'/mixer_type[\\\s]+"disabled"/\', file_get_contents(\'/etc/mpd.conf\'))): ?>\
        <link rel="stylesheet" href="<?=$this->asset(\'/css/customvoloff.css\')?>">\
    <?php endif ?>\
    <?php if ($this->coverart == 0): ?>\
        <link rel="stylesheet" href="<?=$this->asset(\'/css/customcoveroff.css\')?>">\
    <?php endif ?> <!-- enhancement -->
' -e '\|menu-top| i\
<div id="barleft"></div>\
<div id="barright"></div>\
<div id="lyricfade" class="hide"></div>
' -e $'\|menu-top| a\
    <img class="logo" src="<?=$this->asset(\'/img/runelogo.svg\')?>" alt="RuneAudio" href="/">
' -e 's|MENU <i class="fa fa-bars dx">|<i class="fa fa-gear">|
' -e '\|dropdown-menu| a\
            <li id="dropdownbg"></li> <!-- box-shadow -->
' -e 's|<a id="menu-settings" class="dropdown-toggle"|<button id="menu-settings" class="btn-default dropdown-toggle"|
' -e 's|href="#"><i class="fa fa-gear"></i></a>|href="#"><i class="fa fa-gear"></i></button>|
' -e '\|href="/"><i class="fa fa-play"| s|^|<?php /\*|; \|href="/"><i class="fa fa-play"| s|$|\*/?>|
' -e $'\|poweroff-modal| i\
            <li class="<?=$this->uri(1, \'dev\', \'active\')?>"><a href="/dev/"><i class="fa fa-code"></i> Development</a></li>
' -e '\|logo.png| s|^|<?php /\*|; \|logo.png| s|$|\*/?>|
' -e 's|"fa fa-music"></i> Library|"fa fa-folder-open"></i>|
' -e $'s|"tab"\')?>><i class="fa fa-play"></i> Playback|"tab"\')?>><i class="fa fa-play"></i>|
' -e 's|"fa fa-list"></i> Queue|"fa fa-list"></i>|
' /srv/http/app/templates/header.php

### restore ###
sed -i -e 's/<title>RuneAudio - RuneUIe<\/title>/<title>RuneAudio - RuneUI<\/title>/
' -e '/pnotify.css/,/<!-- enhancement -->/d
' -e '/barleft/,/lyricfade/d
' -e '/runelogo.svg/d
' -e 's/<i class="fa fa-gear">/MENU <i class="fa fa-bars dx">/
' -e '/dropdownbg/d
' -e 's|<button id="menu-settings" class="btn-default dropdown-toggle"|<a id="menu-settings" class="dropdown-toggle"|
' -e 's|href="#"><i class="fa fa-gear"></i></button>|href="#"><i class="fa fa-gear"></i></a>|
' -e '\|href="/"><i class="fa fa-play"| s|^<?php /\*||; \|href="/"><i class="fa fa-play"| s|\*/?>$||
' -e '/"fa fa-code"><\/i> Development<\/a>/d
' -e '\|logo.png| s|^<?php /\*||; \|logo.png| s|\*/?>$||
' -e $'s|"tab"\')?>><i class="fa fa-folder-open"></i></a>|"tab"\')?>><i class="fa fa-music"></i> Library</a>|
' -e $'s|"tab"\')?>><i class="fa fa-play"></i>|"tab"\')?>><i class="fa fa-play"></i> Playback|
' -e 's|"fa fa-list"></i></a>|"fa fa-list"></i> Queue</a>|
' /srv/http/app/templates/header.php
```
