### Introduction

Parse the ".txt" files of Diablo 2 to create a well-structured database that can be used for a Grail Tracker.

### Usage

1. Extract & Convert String Tables (.tbl) files into .txt files. They can be found in:
  * d2data.mpq -> string.tbl
  * d2exp.mpq -> expansionstring.tbl and patchstring.tbl
  * pd2data.mpq -> patchstring.tbl (PD2 Specific)

2. Extract the "Excel" files that are present in 
  * pd2data.mpq -> Armor.txt, Weapons.txt, UniqueItems.txt, SetItems.txt, Runes.txt 

3. Once you have these files in .txt format, put them under the "assets" folder.
4. If you wish to use it for non PD2 files, there is a boolean variable called "useForPD2" in "main.js" that you can switch.
5. "npm run start" will parse the files under assets to create "database.txt".
