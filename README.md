# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck

# Next Step
Colocar o novo feature de trocar entre lands detalhadas(tipo scrylands mostrado) pelo modo que eu copio agora(Lands,basic,utility) sendo que o modo atual deve vir como default e contar as lands

# TODO
https://github.com/airbnb/javascript

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

The fast way to concat a string is with string template: `${res}${data[i]}`

Separar a classe que cria a lista de land da classe que imprime
Criar um metodo printBasicNoTitle e printBasicTitle que chama printBasic(bFlagTitle)
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

	Colocar o novo feature de trocar entre lands detalhadas(tipo scrylands mostrado) pelo modo que eu copio agora(Lands,basic,utility) sendo que o modo atual deve vir como default e contar as lands

			Retirar a parte velha
				utility-functions

			Commitar sem mexer na utility e mana ramp

			Ver o numero de lands certinho 	- Acho que 2,3 e 4 estão erradas


			Manter a interface do man land principal getManLand
				Lentamente criar as classes que imprime
				O objeto que classe que imprime recebe tipo {name:'ManLand',elements:{Land 1:1,Land 3:2,,...]}
				Dar um sufixo tipo NEW para os novos metodos e classes que eu criar
				Colocar tudo com testes

			Separar a classe que cria a lista de land da classe que imprime

			Criar um metodo printBasicNoTitle e printBasicTitle que chama printBasic(bFlagTitle)

			Contar as lands

			Existe duas maneiras de imprimir as lands agora
				De maneira detalhada que é atual
				Nova maneira
					Not Basic Lands
					Lands
					Utility Lands
					Mana Ramp

			TODAS AS FUNÇÕES TEM QUE TER RETURN ''

			Add option of print lands without format:
				Lands: 3..(All the others lands)

				Basic Lands:
					3 swamps
					3 Islands

				Utility Lands
					Put Strip Mine, Dust Bowl ...

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



	Testar as lands que tem um algoritmo estranho

	Testar
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

	test and put the code in the master branch

	Proxima Versão 	

		Ver se o nome do arquivo esta correto com airbnb
			Não está tem que ser igual o nome da função
			https://github.com/airbnb/javascript#naming--filename-matches-export

		Decidir se vai ser Lands or Land nos títulos

		Refatorar o test
			Definir a ordem de color Crescente ou Descrescente
			Colocar a parte de lands em uma pasta
			Test many input combinations using Property-based testing
			Usar before
				https://mochajs.org/#hooks
			Colocar landsRepository e ColorManager no commons.js




		MVC

		Refatorar o print printLandsNoTitle e printLandsWithTitle na main

		Colocar checklands em vez de scrylands no other lands

		Ajeitar a ordem de basic no 4 color

		Tirar do text area e colocar em divs

		Mudar o design	- Careful to not make a mess
			This is a very simple page

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
