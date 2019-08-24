var botao = document.getElementById('btn')
botao.addEventListener('click', calcular)

function calcular()
{
  var numero = document.getElementById('numero')
  var tabuada = document.getElementById('tabuada')
  var operacoes = document.getElementsByName('operacao')

  if(numero.value.length == 0)
  {
    alert('[Erro] Preencha os campos corretamente.')
  }
  else
  {
    var n = Number(numero.value)
    tabuada.innerHTML = ''
    
    if(operacoes[0].checked)
    {
      for(var c = 1; c <= 10; c++)
      {
        var item = document.createElement('option')
        item.innerHTML = `${n} + ${c} = ${n+c}`
        tabuada.appendChild(item)
      }
    }
    
    else if(operacoes[1].checked)
    {
      for(var c = n + 1; c <= n + 10; c++)
      {
        var item = document.createElement('option')
        item.innerHTML = `${c} - ${n} = ${c-n}`
        tabuada.appendChild(item)
      }
    }
    
    else if(operacoes[2].checked)
    {
      for(var c = 1; c <= 10; c++)
      {
        var item = document.createElement('option')
        item.innerHTML = `${n} x ${c} = ${n*c}`
        tabuada.appendChild(item)
      }
    }
    
    else
    {
      for(var c = 1 ; c <= 10; c++)
      {
        var item = document.createElement('option')
        item.innerHTML = `${n*c} / ${(n*c)/c} = ${(n*c)/((n*c)/c)}`
        tabuada.appendChild(item)
      }
    }
    numero.value = ''
    numero.focus()
  }

}