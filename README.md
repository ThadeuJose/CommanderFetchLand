# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck
# Next Step
	Colocar tudo funcionando como estava antes

# TODO

Put Test in place

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

Refazer o build
Testar para ver se funciona sem localhost
Arrow Head Anti Pattern
			http://wiki.c2.com/?ArrowAntiPattern
Se usar o lint
			eslint specifying global

FAZER AUTOMATIZED TEST
       Fez uma modificação no código faz um test
       Branch Refactor
       Tirar aquela coisa de checklist?

-------+++----+++++++++-----+
Novas trilands colocadas

Terminar o projeto quando as features abaixo estiverem prontos

	Fazer um objeto color manager que cuida da parte das cores

	Falta:
		const getBasicLands = require('./lands-code/fetch-lands');
		const getFetchLands = require('./lands-code/fetch-lands');
		const getShockLands = require('./lands-code/fetch-lands');
		const getPainLands = require('./lands-code/fetch-lands');
		const getFilterLands = require('./lands-code/fetch-lands');
		const getOtherLands = require('./lands-code/fetch-lands');
		const getTriLands = require('./lands-code/fetch-lands');
		const getScryLands = require('./lands-code/fetch-lands');
		const getBattleLands = require('./lands-code/fetch-lands');
		const getCheckLands = require('./lands-code/fetch-lands');
		const getBounceLands = require('./lands-code/fetch-lands');
		const getAnyColorLand = require('./lands-code/fetch-lands');
		const getUtilityLand = require('./lands-code/fetch-lands');
		const getManaRamp = require('./lands-code/fetch-lands');

	Colocar as modern lands em vez da city of brass

	Colocar as constantes de land na classe de lands quando possivel. Tipo fetchlands na class de fetch lands.

	Split battle from fast because 4 color only need fast

  Testar as lands para ver se estão vindo corretas
	Colocar as 3 fetchlands sendo todas contento pelo menos duas cores: RGB -> RG GB BR ver se isso esta acontecendo nas outras lands

	Colocar o novo feature de trocar entre lands detalhadas(tipo scrylands mostrado) pelo modo que eu copio agora(Lands,basic,utility) sendo que o modo atual deve vir como default

		So tirar a primeira e a ultima linha

		Add option of print lands without format:
			Lands: 3..(All the others lands)

			Basic Lands:
				3 swamps
				3 Islands

			Utility Lands
				Put the basic lands + Strip Mine and Wasteland

			...

	Atualizar a parte de mana ramp

	Colocar a lista de monocolor do manabase ratios
			Make the 1 color mana base with is Manabase Ratios

	Colocar um warningzinho quando o usuario tiver copiado a lista
		Refactor the visual
			Project before with Figma

	How to make a lint for segmented js files

	After the lint, test and put the code in the master branch

# Technical Debt
	Upgrade the logic of Basic Land, Fetch

# Source
	Source for the new copy command
		https://stackoverflow.com/questions/55626559/document-execcommandcopy-not-working-on-all-browser
		https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
		https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API
