function iniciar() {
   var valor = document.getElementById("value").value
   calcular(valor,0,0,0,0,0,0,0)
}

function calcular(valor,n1,n2,n5,n10,n20,n50,n100) {
   while (valor >=100) {
      valor -=100
      n100 ++   
   }
   while (valor >=50) {
      valor -=50
      n50 ++
   }
   while (valor >=20) {
      valor -=20
      n20 ++ 
   }
   while (valor >=10) {
      valor -=10
      n10 ++  
   }
   while (valor >=5) {
      valor -=5
      n5 ++
   }
   while (valor >=2) {
      valor -=2
      n2 ++ 
   }
   while (valor >=1) {
      valor -=1
      n1 ++
   }
   if (valor ==0)
      console.log(n100,n50,n20,n10,n5,n2,n1)
      const para = document.createElement("p");
      const node = document.createTextNode(`são necessárias ${n100} notas de cem ${n50} notas de cinquenta ${n20} notas de vinte ${n10} notas de dez ${n5} notas cinco ${n2} notas de dois ${n1} notas de um `);
      para.appendChild(node);  
      document.getElementById("div1").appendChild(para)
}
