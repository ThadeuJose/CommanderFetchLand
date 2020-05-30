# CommanderFetchLand
A personal project to write a template of a mana base to a Commander Deck
Use Font Awesome

# Next Step
Split battle from fast because 4 color only need fast

# TODO
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a


Separar a classe que cria a lista de land da classe que imprime
Criar um metodo printBasicNoTitle e printBasicTitle que chama printBasic(bFlagTitle)
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

	Split battle from fast because 4 color only need fast

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

		Colocar checklands em vez de scrylands no other lands

		Ajeitar a ordem de basic no 4 color 

		Tirar do text area e colocar em divs

		Mudar o design para ficar mais horizontal		

		Testar as lands para ver se estão vindo corretas
			Colocar as 3 fetchlands sendo todas contento pelo menos duas cores: RGB -> RG GB BR ver se isso esta acontecendo nas outras lands

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



Garbage css

.input_box {
  margin: auto;
  width: 50%;
  padding: 1rem;
  text-align: center;
}

.input_title{
  padding-bottom: .9rem;
}

.label{
  padding-right: .9rem;
  padding-top: 1rem;
}

.output_box {
  margin: auto;
  width: 50%;
  padding: 1rem;
}

.output {
  font: inherit;
  cursor: pointer;
  user-select: none;
  border: 0;
  border-top: 1px solid black;
  border-left: 1px solid black;
  resize: none;
  width: 100%;
  padding: 3rem 3rem 0 3rem;
}

input[type=checkbox] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: none;
}

input[type=checkbox] + label {
  position: relative;
  cursor: pointer;
  padding-left: 25px;
}

input[type=checkbox] + label::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  bottom: 0;
  background-color: lightgray;
  vertical-align: bottom;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

input[type=checkbox]:checked + label::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  bottom: 0;
  border-radius: 100%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

#white:checked + label::after {
  background-color: rgb(248,231,185);
}

#blue:checked + label::after {
  background-color: rgb(14,104,171);
}

#green:checked + label::after {
  background-color: rgb(0,115,62);
}

#black:checked + label::after {
  background-color: rgb(21,11,0);
}

#red:checked + label::after {
  background-color: rgb(211,32,42);
}
