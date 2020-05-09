# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck
# Next Step
Refactor the visual

# TODO

Put Test in place

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

Arrow Head Anti Pattern
			http://wiki.c2.com/?ArrowAntiPattern
Se usar o lint
			eslint specifying global

FAZER AUTOMATIZED TEST
       Fez uma modificação no código faz um test
       Branch Refactor
       Tirar aquela coisa de checklist?

-------+++----+++++++++-----+

Terminar o projeto quando as features abaixo estiverem prontos

	Refactor the visual
		Put a breadcrumb when the user copy the list
		Put a option to show without title
		Change the title to 'Commander Fetchlands'
		Change the options to show in the color like Red toogle with color of Red
		Remove the color
		Project before with Figma


	Split battle from fast because 4 color only need fast

	Testar as lands para ver se estão vindo corretas
	Colocar as 3 fetchlands sendo todas contento pelo menos duas cores: RGB -> RG GB BR ver se isso esta acontecendo nas outras lands

	Colocar o novo feature de trocar entre lands detalhadas(tipo scrylands mostrado) pelo modo que eu copio agora(Lands,basic,utility) sendo que o modo atual deve vir como default e contar as lands

		So tirar a primeira e a ultima linha

		Add option of print lands without format:
			Lands: 3..(All the others lands)

			Basic Lands:
				3 swamps
				3 Islands

			Utility Lands
				Put the basic lands + Strip Mine and Wasteland

			...

	Fazer um objeto color manager que cuida da parte das cores
			ValidPair 		
			GetColorPair

	Atualizar a parte de mana ramp e utility lands
		Colocar a parte de 1 manabase ramp




	How to make a lint for segmented js files

	After the lint, test and put the code in the master branch

# Technical Debt
	Upgrade the logic of Basic Land, Fetch
	Separate Mocha test in files

# Source
	Source for the new copy command
		https://stackoverflow.com/questions/55626559/document-execcommandcopy-not-working-on-all-browser
		https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
		https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
