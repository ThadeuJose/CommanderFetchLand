# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck

# Next Step
Technical Debt

# TODO

https://github.com/airbnb/javascript

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

The fast way to concat a string is with string template: `${res}${data[i]}`

Make Automatized test

Still use Browserify ?

---

Terminar o projeto quando as features abaixo estiverem prontas:

	Atualizar a parte de mana ramp e utility lands			
	hasGreen
	isMonoXXX - example isMonoRed
		Dar uma olhada
		https://tappedout.net/mtg-decks/new-edh-ramp-full-list/?cb=1579173035

		Sol Ring					
		Wayfarer's Bauble					
		Arcane Signet 					
		Fellwar Stone					

		Green 			
		Nature's Lore					
		Three Visits			                        	
		Sakura-Tribe Elder				                	
		Cultivate					
		Rampant Growth					
		Kodama's Reach					

		Farseek	- Special Case

		Mind Stone 	- Everything less green

		Red
		Dockside Extortionist				

		White
		Keeper of the Accord
		Verge Ranger
		Smothering Tithe
		Land Tax
		Kor Cartographer

		Talisman					
		Signets

# Technical Debt

Colocar os exports direito

  sem require(...).function

  São Lands nos títulos

  MVC

  Refatorar a main

  Refatorar o landsRepository
  - Tirar aquele getAllLands2
  - Refatorar essa interação no main
  - addDictLands(dict)    
  - getDictLands()

Refatorar o print printLandsNoTitle e printLandsWithTitle na main

Ajeitar a ordem de basic no 4 color

Refatorar o *colorManager.getAllColorPairs()[0];*


Refatorar o test

	Teste - Title
		Color em Ordem Crescente
		1 Color
		2 Color
		3 Color
		Resto
		Capitalize title
				Is removing correct

	Colocar a parte de lands em uma pasta
	Usar before
		https://mochajs.org/#hooks
	Colocar landsRepository e ColorManager no commons.js
	Um assert por teste

	Testar as lands que tem um algoritmo estranho

		Testar
			any-color-land
				Testar City of Brass
			filter land
				testar unknown shores
				testar 4 cores
				testar 3 cores
				testar 2 cores
			tri-lands
				Testar
			Pain
				testar 4 cores
				testar 3 cores
				testar 2 cores
			ManaRamp
					Só testar depois de refazer
			Utility Lands
					Só testar depois de refazer

  Testar as lands para ver se estão vindo corretas

    Colocar as 3 fetchlands sendo todas contento pelo menos duas cores: RGB -> RG GB BR ver se isso esta acontecendo nas outras lands				


Ver se o nome do arquivo esta correto com airbnb
- Não está, tem que ser igual o nome da função
- https://github.com/airbnb/javascript#naming--filename-matches-export

Test and put the code in the master branch

Upgrade the logic of Basic Land, Fetch


# Source

## Source for the new copy command
- https://stackoverflow.com/questions/55626559/document-execcommandcopy-not-working-on-all-browser
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
- https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API