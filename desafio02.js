/*Dado um ano, retorne o século em que ele se encontra. 
O primeiro século abrange do ano 1 até o ano 100 inclusive, o segundo - do ano 101 até o ano 200 inclusive, etc.
exemplo: Ano = 1905 Século = 20
Ano: 1700 Século = 17
Criar uma função que receba um ano e retorne o século daquele ano. */
function seculoAno(ano) {
    if (ano >= 1 && ano <= 101)return 1
    else if (ano >= 102 && ano <= 201)return 2
    else if (ano >= 202 && ano <= 301)return 3

    else if (ano >= 302 && ano <= 401)return 4
    else if (ano >= 402 && ano <= 501)return 5
    else if (ano >= 502 && ano <= 601)return 6
    else if (ano >= 602 && ano <= 701)return 7

    else if (ano >= 702 && ano <= 801)return 8
    else if (ano >= 802 && ano <= 901)return 9

    else if (ano >= 902 && ano <= 1001)return 10
    else if (ano >= 1002 && ano <= 1101)return 11
    else if (ano >= 1102 && ano <= 1201)return 12

    else if (ano >= 1202 && ano <= 1301)return 13
    else if (ano >= 1302 && ano <= 1401)return 14
    else if (ano >= 1402 && ano <= 1501)return 15
    else if (ano >= 1502 && ano <= 1601)return 16
    else if (ano >= 1602 && ano <= 1701)return 17
    else if (ano >= 1702 && ano <= 1801)return 18
    else if (ano >= 1802 && ano <= 1901)return 19
    else if (ano >= 1902 && ano <= 2001)return 20
    else if (ano >= 2002 && ano <= 2101)return 21
}
console.log(seculoAno(1905))
console.log(seculoAno(1700))