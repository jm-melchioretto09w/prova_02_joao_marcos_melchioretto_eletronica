function descobrirResist(){

    let qtdF = document.getElementById("qtdF");
    qtdF = qtdF.value;

    let d1 = document.getElementById("d1");
    d1 = d1.value;

    let d2 = document.getElementById("d2");
    d2 = d2.value;

    let d3 = document.getElementById("d3");

    let m = document.getElementById("m");
    m = m.value;

    let t = document.getElementById("t");
    t = t.value;

    valueResist = '';

    if(qtdF == 5){

        d3.disable = false;
        d3 = d3.value;

        valueResist = d1 + d2 + d3;

    }else{

        d3.disable = true;

        valueResist = d1 + d2;

    }

    valueResist = Number(valueResist) * (10 ** m);

    let resResist = document.getElementById("resist");
    let resTolera = document.getElementById("tolera");

    resResist.innerText = "Resistência: " + valueResist.toFixed(2) + "Ω"
    resTolera.innerText = 
}