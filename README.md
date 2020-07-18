# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck

# Next Step
Colocar o novo feature de trocar entre lands detalhadas(tipo scrylands mostrado) pelo modo que eu copio agora(Lands,basic,utility) sendo que o modo atual deve vir como default e contar as lands

# TODO

https://github.com/airbnb/javascript

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

The fast way to concat a string is with string template: `${res}${data[i]}`

Arrow Head Anti Pattern
	http://wiki.c2.com/?ArrowAntiPattern
	https://blog.codinghorror.com/flattening-arrow-code/
Se usar o lint
	eslint specifying global

FAZER AUTOMATIZED TEST
       Fez uma modificação no código faz um test
       Branch Refactor
       Tirar aquela coisa de checklist?

browserify scope is local. Go nuts

-------+++----+++++++++-----+

Terminar o projeto quando as features abaixo estiverem prontos

	Ver o numero de lands certinho 	- 2 e 4 estão erradas				

	Atualizar a parte de mana ramp e utility lands
		Colocar a parte de 1 manabase ramp
		Signets and Talisman
		Sol Ring
		Cultivate
		Grow from the Ashes
		Kodama's Reach
		Commander's Sphere
		Smothering Tithe
		Wayfarer's Bauble
		Sakura-Tribe Elder
		Land Tax
		Farseek
		Rampant Growth
		Nature's Lore
		Three Visits
		Untamed Wilds

	test and put the code in the master branch



	Proxima Versão 	

		Colocar o index.html do app sendo exportado para o dist

		Colocar os exports direito
			sem require(...).function

		Ver se o nome do arquivo esta correto com airbnb
			Não está tem que ser igual o nome da função
			https://github.com/airbnb/javascript#naming--filename-matches-export

		Decidir se vai ser Lands or Land nos títulos

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

		MVC

		Refatorar o print printLandsNoTitle e printLandsWithTitle na main

		Colocar checklands em vez de scrylands no other lands

		Ajeitar a ordem de basic no 4 color

		Mudar o design	- Careful to not make a mess
			THIS IS A VERY SIMPLE PAGE
			Colocar as cores bem no canto fixas
      Colocar o botão de detalhe embaixo sem border radios
      Colocar o titulo com fundo preto na esquerda e parecido com um banner
      Colocar a lista em uma parte grande no outro canto

		Testar as lands para ver se estão vindo corretas
			Colocar as 3 fetchlands sendo todas contento pelo menos duas cores: RGB -> RG GB BR ver se isso esta acontecendo nas outras lands

		How to make a lint for segmented js files

		After the lint, test and put the code in the master branch

# Technical Debt
	Update the technical debt
	Fix two index.html
	Upgrade the logic of Basic Land, Fetch
	Separate Mocha test in files

# Source
	Source for the new copy command
		https://stackoverflow.com/questions/55626559/document-execcommandcopy-not-working-on-all-browser
		https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
		https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
