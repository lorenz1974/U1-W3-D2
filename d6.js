console.log(document)
let exercise = 1

/* ESERCIZIO 1
     Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
  */
console.log('Exercise:', exercise++)
const changeTitle = (newTitle) => {
  const title = document.getElementsByTagName('h1')[0]
  title.innerText = newTitle
}
changeTitle('Questo è il nuovo titolo - Esercizio 1')

/* ESERCIZIO 2
     Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
  */
console.log('Exercise:', exercise++)
const addClassToTitle = () => {
  const title = document.getElementsByTagName('h1')[0]
  title.classList.add('myHeading')
}
addClassToTitle()

/* ESERCIZIO 3
     Scrivi una funzione che cambi il testo dei p figli di un div
    */
console.log('Exercise:', exercise++)
const changePcontent = (newText) => {
  const pCollection = document.querySelectorAll('div p')
  for (let i = 0; i < pCollection.length; i++) {
    pCollection[i].innerText = 'p[' + i + '] ' + newText
  }
}
changePcontent('Cambia il testo dei paragrafi')

/* ESERCIZIO 4
     Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
    */
console.log('Exercise:', exercise++)
const changeUrls = (destination) => {
  const aCollection = document.querySelectorAll('a:not(footer a)')
  for (let i = 0; i < aCollection.length; i++) {
    aCollection[i].setAttribute('href', destination)
  }
}
changeUrls('https://www.google.com')

/* ESERCIZIO 5
     Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
  */
console.log('Exercise:', exercise++)
const addToTheSecond = () => {
  const elementText = "Questo è il testo aggiunto all'ultimo LI"
  const elementCreated = document.createElement('li')
  elementCreated.innerHTML = elementText
  document.getElementsByTagName('ul')[1].appendChild(elementCreated)
}
addToTheSecond()

/* ESERCIZIO 6
     Scrivi una funzione che aggiunga un paragrafo al primo div
  */
console.log('Exercise:', exercise++)
const addParagraph = () => {
  const elementText = 'Questo è il testo del P aggiunto al primio DIV'
  const elementCreated = document.createElement('p')
  elementCreated.innerHTML = elementText
  document.getElementsByTagName('div')[0].appendChild(elementCreated)
}
addParagraph()

/* ESERCIZIO 7
     Scrivi una funzione che faccia scomparire la prima lista non ordinata
  */
console.log('Exercise:', exercise++)
const hideFirstUl = () =>
  (document.getElementsByTagName('ul')[0].style.display = 'none')
hideFirstUl()

/* ESERCIZIO 8
     Scrivi una funzione che renda verde il background di ogni lista non ordinata
    */
console.log('Exercise:', exercise++)
const paintItGreen = () => {
  ulElements = document.getElementsByTagName('ul')
  for (let i = 0; i < ulElements.length; i++) {
    ulElements[i].style.backgroundColor = 'green'
  }
}
paintItGreen()

/* ESERCIZIO 9
     Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
    */

console.log('Exercise:', exercise++)
const makeItClickable = () => {
  const h1 = document.getElementsByTagName('h1')[0]
  // preso da https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  // h1.onclick = (event) => {
  //   h1.innerText = h1.innerText.slice(0, -1)
  //   console.log(h1.innerText)
  // }

  // Versione PRO!!!!
  h1.onclick = () => (h1.innerText = h1.innerText.slice(0, -1))
  // Figata galattica!!!
}
makeItClickable()

/* ESERCIZIO 10
     Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
    */
console.log('Exercise:', exercise++)
const revealFooterLink = () => {
  // const footer = document.getElementsByTagName('footer')[0]
  // const alertText = document.querySelectorAll('footer a')[0].getAttribute('href')
  // footer.onclick = () => alert('Il link è: ' + alertText)
  // Versione PRO!!!!
  document.getElementsByTagName('footer')[0].onclick = () =>
    alert(
      'Il link è: ' +
        document.querySelectorAll('footer a')[0].getAttribute('href')
    )
}
revealFooterLink()

/* ESERCIZIO 11
     Crea una funzione che crei una tabella nell'elemento con id "tableArea".
     La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
  */
console.log('Exercise:', exercise++)
const generateTable = () => {
  const table = document.createElement('table')
  table.setAttribute('id', 'productsTable')
  const tableHeaderHTML =
    '<tr><td>Immagine</td><td>Nome Prodotto</td><td>Quantit&agrave;</td><td>Prezzo</td></tr>'
  table.innerHTML = tableHeaderHTML
  table.style.border = '1px'
  document.getElementById('tableArea').appendChild(table)
}
generateTable()

/* ESERCIZIO 12
     Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
  */
console.log('Exercise:', exercise++)
const addRow = (rowValues) => {
  const table = document.getElementById('productsTable')
  const newRow = document.createElement('tr')
  const rowHTML =
    '<td><img src="' +
    rowValues.immagine +
    '"></td><td>' +
    rowValues.nomeProdotto +
    '</td><td>' +
    rowValues.qta +
    '</td><td>' +
    rowValues.prezzo +
    '</td>'
  newRow.innerHTML = rowHTML
  table.appendChild(newRow)
}
let rowValues = {
  immagine: 'https://placecats.com/neo_2/100/75',
  nomeProdotto: 'Corso per gatti',
  qta: 2,
  prezzo: 250,
}
addRow(rowValues)
rowValues = {
  immagine: 'https://placedog.net/100/75',
  nomeProdotto: 'Corso per cani',
  qta: 1,
  prezzo: 275,
}
addRow(rowValues)

/* ESERCIZIO 14
    Crea una funzione che nasconda le immagini della tabella quando eseguita
  */
console.log('Exercise:', exercise++)
const hideAllImages = () => {
  const tableImgs = document.querySelectorAll('#productsTable img')
  tableImgs.forEach((img) => (img.style.display = 'none'))
}
hideAllImages()

/* EXTRA ESERCIZIO 15
    Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
  */
console.log('Exercise:', exercise++)
const changeColorWithRandom = () => {
  const colorNames = [
    'Aqua',
    'Aquamarine',
    'Chartreuse',
    'Cyan',
    'DeepPink',
    'Fuchsia',
    'HotPink',
    'LawnGreen',
    'Lime',
    'SpringGreen',
  ]

  const h2 = document.getElementsByTagName('h2')[0]
  // Versione PRO!!!!
  h2.onclick = () =>
    (h2.style.color = colorNames[Math.floor(Math.random() * colorNames.length)])
}
changeColorWithRandom()
