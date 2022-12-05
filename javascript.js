//Exercício:
//1- Declarar uma variável.
let person="Andre"

//2-Que tipo de dado a variável acima contém?
console.log(typeof person)
//este comando permite visualizar o tipo(string,boleano,float) de dado contido na variável.

//3- Declare uma variável e atribua valores para cada um dos dados: name(string)/age(number)/isAdmin(boolean)/isAmân(boolean)
let person= {
   
  nome= "viana"
  age= 28
  weigth = 107
  isAdmin= true
  isAman= true

}

//-4 A variável human é de que tipo de dados?
//Resposta- Objeto

//-4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
let human ={
  nome:"viana",
  age : 28,
  weigth : 107,
  isAdmin: true,
  isAman: true
}

//4.2 Mostre no console a seguinte mensagem: o Humano <name> tem o peso <weigth> kg.
console.log("O humano ${human.name} temo peso ${human.weigth} kg ")

//-5 Declare uma variável do tipo Array, de nome humans e atriubua e ela nenhuma, ou seja, somente o Array vazio.
let humans=[]

//-6 Reatribua valor para o array, colocando dentro dela o objeto human da questão 4.
let humans =[
  human
]
console.log(humans)

//-7 Coloque no console.log a posição 0 do array
console.log(humans[0])
//-8 Crie um novo objeto "newHuman e coloque na posição 1 do array
let newHuman = {
  name: "andre viana",
  age:29,
  weigth: 100,
  isAdmin: true,
  isAman: true
}

humans ={
human,
newHuman
}

//-9 Sem rodar o código, digite a resposta do seguintes...códigos: 
//A- console.log(a)
//var = 1
//resposta: erro

//B- let a
//console.log(a)
{
  let a = 2
  console.log(a)
}
console.log(a)
//Resposta: 2
//Observação: errei =p

//-C 
//console.log(b)
{
  console.log(b)
  {
    let b = 3

  }
}
//Resposta: erro/ Undefined

//-D const c = 10
{
  console.log(c)
  const c = 20
  console.log(c)
}
//resposta: 10 !!!!!
//Resposta correta: 20



 










