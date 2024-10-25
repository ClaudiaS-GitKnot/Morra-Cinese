document.addEventListener('DOMContentLoaded', function () {
  const inizia = document.querySelector('#inizia');
  const mostraScelte = document.querySelector('#scelta');
  const foglia = document.querySelector('#you');
  const cpuImage = document.querySelector('#cpu');
  const forbice = document.querySelector('#you');
  const sasso = document.querySelector('#you');

  //Variabili punteggio
  let puntiYou = 0;
  const punteggioYou = document.querySelector('#punteggioYou');
  let puntiCPU = 0;
  const punteggioCPU = document.querySelector('#punteggioCpu');

  //Variabili messaggi
  let vinto = document.querySelector('#risultato');
  let perso = document.querySelector('#risultato');
  let patta = document.querySelector('#risultato');
  let mostraMessaggio = document.querySelector('#risultato');

  //Qui inizia il gioco
  document.querySelector('#inizia').addEventListener('click', function () {
    inizia.style.visibility = 'hidden'; //Il bottone sparisce
    mostraScelte.style.display = 'block'; //Compaiono le scelte
    foglia.style.backgroundImage = ''; //Scompare la foglia da you
    cpuImage.style.backgroundImage = ''; //Scompare l'immagine da cpu
    mostraMessaggio.style.display = 'none'; //Scompare messaggio
  });

  //Qui scelgo foglia
  document.querySelector('#foglia').addEventListener('click', function () {
    mostraScelte.style.display = 'none'; //Le scelte scompaiono
    foglia.style.backgroundImage = 'url(immagini/foglia.png)'; //Compare foglia

    let numRand = Math.floor(Math.random() * 3) + 1; //Genero un numero randomico
    console.log(numRand);

    if (numRand == 1) {
      //Qui è patta
      cpuImage.style.backgroundImage = 'url(immagini/foglia.png)';
      mostraMessaggio.style.display = 'block'; //Appare messaggio
      patta.innerHTML = "<span class='patta'>E' patta!</span>";
    } else {
      if (numRand == 2) {
        //Qui ho perso
        cpuImage.style.backgroundImage = 'url(immagini/forbice.png)';
        puntiCPU++;
        console.log(puntiCPU);
        punteggioCPU.innerHTML = puntiCPU;
        mostraMessaggio.style.display = 'block'; //Appare messaggio
        perso.innerHTML = "<span class='persa'>Mi dispiace, hai perso!</span>";
      } else {
        //Qui ho vinto
        cpuImage.style.backgroundImage = 'url(immagini/sasso.png)';
        puntiYou++;
        console.log(puntiYou);
        punteggioYou.innerHTML = puntiYou;
        mostraMessaggio.style.display = 'block'; //Appare messaggio
        vinto.innerHTML = "<span class='vinta'>Hai vinto!</span>";
      }
    }

    inizia.style.visibility = 'visible'; //Il bottone riappare
  });

  //Qui scelgo forbice
  document.querySelector('#forbice').addEventListener('click', function () {
    mostraScelte.style.display = 'none'; //Le scelte scompaiono
    forbice.style.backgroundImage = 'url(immagini/forbice.png)'; //Compare forbici

    let numRand = Math.floor(Math.random() * 3) + 1;
    console.log(numRand);

    if (numRand == 1) {
      //Qui ho vinto
      cpuImage.style.backgroundImage = 'url(immagini/foglia.png)';
      puntiYou++;
      console.log(puntiYou);
      punteggioYou.innerHTML = puntiYou;
      mostraMessaggio.style.display = 'block'; //Appare messaggio
      vinto.innerHTML = "<span class='vinta'>Hai vinto!</span>";
    } else {
      if (numRand == 2) {
        //Qui è patta
        cpuImage.style.backgroundImage = 'url(immagini/forbice.png)';
        mostraMessaggio.style.display = 'block'; //Appara messaggio
        patta.innerHTML = "<span class='patta'>E' patta!</span>";
      } else {
        //Qui ho perso
        cpuImage.style.backgroundImage = 'url(immagini/sasso.png)';
        puntiCPU++;
        console.log(puntiCPU);
        punteggioCPU.innerHTML = puntiCPU;
        mostraMessaggio.style.display = 'block'; //Appare messaggio
        perso.innerHTML = "<span class='persa'>Mi dispiace, hai perso!</span>";
      }
    }

    inizia.style.visibility = 'visible'; //Il bottone riappare
  });

  //Qui scelgo sasso
  document.querySelector('#sasso').addEventListener('click', function () {
    mostraScelte.style.display = 'none'; //Le scelte scompaiono
    sasso.style.backgroundImage = 'url(immagini/sasso.png)'; //Compare sasso

    let numRand = Math.floor(Math.random() * 3) + 1; //Genero un numero randomico
    console.log(numRand);

    if (numRand == 1) {
      //Qui ho perso
      cpuImage.style.backgroundImage = 'url(immagini/foglia.png)';
      puntiCPU++;
      console.log(puntiCPU);
      punteggioCPU.innerHTML = puntiCPU;
      mostraMessaggio.style.display = 'block'; //Appare messaggio
      perso.innerHTML = "<span class='persa'>Mi dispiace, hai perso!</span>";
    } else {
      if (numRand == 2) {
        //Qui ho vinto
        cpuImage.style.backgroundImage = 'url(immagini/forbice.png)';
        puntiYou++;
        console.log(puntiYou);
        punteggioYou.innerHTML = puntiYou;
        mostraMessaggio.style.display = 'block'; //Appare messaggio
        vinto.innerHTML = "<span class='vinta'>Hai vinto!</span>";
      } else {
        //Qui è patta
        cpuImage.style.backgroundImage = 'url(immagini/sasso.png)';
        mostraMessaggio.style.display = 'block'; //Appare messaggio
        patta.innerHTML = "<span class='patta'>E' patta!</span>";
      }
    }

    inizia.style.visibility = 'visible'; //Il bottone riappare
  });
}); //DOMContentLoaded
