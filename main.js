// tady je místo pro náš program

let nadpis = document.querySelector('h1');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;

function priNajetiNaCtverec() {
    console.log('test' + pocitadlo);
    //pocitadlo = pocitadlo +1;
    pocitadlo++;
}

function zmenStyl() {
    nadpis.classList.toggle('zeleny');
}