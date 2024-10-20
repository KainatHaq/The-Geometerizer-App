
function Calculate(){
         let radius = document.getElementById('radius').value;
        let result = document.getElementById('result');
        let circumference = 2 * 3.14 * radius;
        let area = 2 * 3.14 * (radius)^2;
         result.innerHTML = `The circumference is: <b>${circumference}</b><br/>
         The area is:<b> ${area}</b>`
    
     }