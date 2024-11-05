class Paiement{
    constructor(fullname, phone, devise, amount, code){
        this.fullname = fullname,
        this.phone = phone,
        this.devise = devise,
        this.amount = amount,
        this.code = code
    }
}

const btnSave = document.querySelector('#save')


btnSave.addEventListener('click', () => {
    const fullname = document.querySelector('#name').value
    const phone = document.querySelector('#phone').value
    const devise = document.querySelector('#currency').value
    const amount = document.querySelector('#amount').value
    const code = document.querySelector('#security-code').value
    
    if(fullname == ""){
        alert('Veuillez renseigner votre nom')
    }else if(phone == ""){
        alert('Veuillez renseigner votre numéro')
    }else if(code.length < 4 || code.length > 4){
        alert('Le code de sécurité est de 4 chiffres')
    }else{

        const pay = new Paiement(fullname, phone, devise, amount, code);
        // console.log(pay.amount)
        fetch('http://localhost:5000/paiement', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pay)
        })
        .then((data) => data.json())
        .then((res) => window.location.href = './valider.html')
        .catch(err => console.error(err))
    }
})

// const savePay = async () => {
//     const q = await fetch('http://localhost:5000/paiement', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(pay)
//     })

//     const res = await q.json()
//     console
// }