function calcular() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tab')
    if (num.value.length == 0) {
        alert('Digite um número')
        
    }
    else {
        var n = Number(num.value)
let c = 1
tab.innerHTML = ''
while(c <= 10) {
    var item = document.createElement('option') //criar a barrinha do resultado
    item.text = `${n} x ${c} = ${n*c}` 
    tab.appendChild(item) //adicionar elemento filho
    c++
}
    }
}
