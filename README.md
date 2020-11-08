# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck

# Next Step
Technical Debt

# TODO

https://github.com/airbnb/javascript

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

The fast way to concat a string is with string template: `${res}${data[i]}`

FAZER AUTOMATIZED TEST
       Fez uma modificação no código faz um test
       Branch Refactor

browserify scope is local. Go nuts

---

Terminar o projeto quando as features abaixo estiverem prontas:

    Colocar a filter lands para pegar de COLORS_TO_FILTER_LAND_2 primeiro e depois de COLORS_TO_FILTER_LAND_1
      Fazer os testes

		Trocar as scrylands por checklands e battlelands no other lands

		Aualizar a parte de mana ramp e utility lands			
      Mana Ramp precisa ver se tem verde na cor
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
			Commander's Sphere			

		Colocar os exports direito
			sem require(...).function

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

    São Lands nos títulos

		MVC

		Refatorar o print printLandsNoTitle e printLandsWithTitle na main

		Ajeitar a ordem de basic no 4 color

		Mudar o design	- Careful to not make a mess
			THIS IS A VERY SIMPLE PAGE

		Voltar ao que era antes
			Pasta layout			
			https://www.figma.com/file/erS9eI6NftjUJNNDkKg8go/Commander-Fetchlands-2.0?node-id=0%3A1
			https://github.com/ThadeuJose/CommanderFetchLand/commit/2b65d477bfc6c1c5629d75d15f49459effad2b8e

			https://css-tricks.com/snippets/css/complete-guide-grid/

			Details tooltip do lado
			https://pt.stackoverflow.com/questions/101968/%C3%89-poss%C3%ADvel-fazer-um-tooltip-com-css-puro

			https://stackoverflow.com/questions/8566090/how-can-i-delay-a-hover-effect-in-css

			https://stackoverflow.com/questions/5210033/using-only-css-show-div-on-hover-over-a

		Usar o eslint do atom e go nuts
			How to make a lint for segmented js files
			eslint specifying global

		Ver se o nome do arquivo esta correto com airbnb
			Não está tem que ser igual o nome da função
			https://github.com/airbnb/javascript#naming--filename-matches-export

		Test and put the code in the master branch

# Technical Debt
	Update the technical debt
	Fix two index.html
	Upgrade the logic of Basic Land, Fetch


# Source
	Source for the new copy command
		https://stackoverflow.com/questions/55626559/document-execcommandcopy-not-working-on-all-browser
		https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
		https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
