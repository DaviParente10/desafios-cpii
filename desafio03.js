/* Verifique se a string é um Palíndromo
 
Palíndromo
é uma palavra, frase ou número que permanece igual quando lida de trás para frente e frente para trás.
Por exemplo: 
CIVIC
OVO
ARARA 
Ou seja para todos ai acima a função deve retornar true. Exemplo: 
function checkPalindromo("civic") : Resultado = true
function checkPalindromo("abac") : Resultado = false   */
function checkPalindromo(texto){
    const palindromo = texto.toLowerCase()
    const fraseSemEspaco = palindromo.replace(/\s/g,'')
    const fraseArray = fraseSemEspaco.split('')
    const inverterFrase = fraseArray.reverse()
    const juntarPalavra = inverterFrase.join('')
    if(juntarPalavra === fraseSemEspaco){
        console.log('TRUE')
    }else{
        console.log('FALSE')
    }
}
console.log(checkPalindromo('arara'));