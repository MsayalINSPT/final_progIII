

export function validarUsuario(user) {

    let rol = ''
    
    if(user[0].usuario == "pedro"){
        rol = 'rece'

    }

    if(user[0].usuario  == "juan"){
        rol = 'vete'
   
    }
  
  
    return rol

}
