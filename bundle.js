var button = document.querySelector('#landing .input button')
var parent = document.querySelector('#landing .input')
var poisonOnCopy = poisonClick.bind(null, 1)
button.addEventListener('click', poisonClick, false)
document.addEventListener('copy', poisonOnCopy, false)

function poisonClick (e) {
  button.removeEventListener('click', poisonClick, false)
  document.removeEventListener('copy', poisonOnCopy, false)
  
  var input = document.querySelector('#landing .input input')
  if (!input || !input.value.length) return
  
  input.value = poisoner(input.value)
  input.setSelectionRange(0, input.value.length)
  if (e !== 1) {
    document.execCommand('copy')
  }
  
  var ready = document.createElement('div')
  ready.className = 'ui tag label green'
  ready.textContent = 'Ready and copied'
  parent.replaceChild(ready, button)
}

function poisoner (input) {
  var chars = 'ABEKMHOΠPCTXaeĸopcyxIiJjSs'+'АВЕКМНОПРСТХаекорсухІіЈјЅѕ'
  var middle = chars.length / 2
  var poison = ''

  for(var i = 0; i < input.length; i++) {
    var index = chars.indexOf(input.charAt(i))
    if(index === -1) {
      poison += input.charAt(i)
    } else if(index >= middle) {
      poison += chars.charAt(index - middle)
    } else {
      poison += chars.charAt(index + middle)
    }
  }
  return poison
}