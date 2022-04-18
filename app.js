fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    let todos = ''
    let dato1 = ''
    let dato2 = ''
    let dato3 = ''
    let label1= ''
    let label2= ''
    let label3= ''
    console.log(data)
    for (let i = 0; i < 10; i++) {
        todos += `<tr>
        <td> <img class="logo" src="${data[i].image}">  ${data[i].name}   </td>
              <td>  ${data[i].current_price} </td>
              <td>% ${data[i].price_change_percentage_24h} </td> 
              <td>${data[i].market_cap} </td> 
             </tr>`
    }
    document.getElementById('datos').innerHTML = todos

    for (let i = 0; i < data.length; i++) {
        if (data[i].market_cap_rank == 1) {
            label1 = data[i].name
            dato1 = data[i].current_price
            
            rango1 = `
        <h2>
        ${data[i].symbol}
        </h2>
        <p> ${data[i].current_price} </p> 
        <p>% ${data[i].price_change_percentage_24h} </p> 
        <img class="logorango" src="${data[i].image}">
        `
            document.getElementById('rango1').innerHTML = rango1
        }
        if (data[i].market_cap_rank == 2) {
            dato2 = data[i].current_price
            label2= data[i].name
            rango2 = `
        <h2>
        ${data[i].symbol}
        </h2>
        <p> ${data[i].current_price} </p> 
        <p>% ${data[i].price_change_percentage_24h} </p> 
        <img class="logorango" src="${data[i].image}">
        `
            document.getElementById('rango2').innerHTML = rango2
        }

        if (data[i].market_cap_rank == 3) {
            label3 = data[i].name
            dato3 = data[i].current_price
            rango3 = `
        <h2>
        ${data[i].symbol}
        </h2>
        <p> ${data[i].current_price} </p> 
        <p>% ${data[i].price_change_percentage_24h} </p> 
        <img class="logorango" src="${data[i].image}">
        `
            document.getElementById('rango3').innerHTML = rango3

        }

        let datagrafica = [dato1, dato2, dato3]
        let datalabel = [label1,label2,label3]
        let miCanvas = document.getElementById('Migrafica').getContext("2d")
        var chart = new Chart(miCanvas, {
            type: "bar",
            data: {
                
                labels: datalabel,
                
                datasets: [{
                    label: "Grafica de Cryptomonedas",
                    data: datagrafica,
                    backgroundColor: [
                        'rgba(209, 164, 252)',
                        'rgba(182, 252, 164)',
                        'rgba(252, 253, 183)',
                ],

                }]

                
            }
        })

    }
}



/*let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarData(datos))
    .catch(e => console.log(e))


let todos = ''

    for (let i = 0; i < 10; i++) {
        todos += `<tr><td class="symbol">  ${data[i].symbol}  </td><td>  ${data[i].price} </td></tr>`

    }
    document.getElementById('datos').innerHTML = todos

}


console.log(datagrafica)



*/