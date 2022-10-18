
const BD = [
  {
    nombres: "Juan Jose",
    apellidos: "Oviedo Torres",
    edad: 25,
    cargo: "Director",
    RH:"A+",
    documento: 80127011,
    telefono: 25565656
      },
];

function validacion(){

    let documento = document.getElementById("documento").value

    for(let user of BD){
        if(documento === user.documento){

            let password = document.getElementById('documento').value

            if(password === user.password){
                return alert("Creado Correctamente")
            }

            return alert("Usuario ya creado")

        }
    }

    return alert("El usuario no existe")
}


function register(){

    let documento = document.getElementById("documento").value

    

    for(let user of BD){
        if(documento === user.documento){
            return alert("El usuario ya se encuentra registrado")
        }
    }

    let user = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        edad: document.getElementById("edad").value,
        cargo: document.getElementById("cargo").value,
        RH: document.getElementById("RH").value,
        documento: document.getElementById("documento").value,
        telefono: document.getElementById("telefono").value,

        
        }
    }

    
    save(user)
    console.log(user)
    return




   