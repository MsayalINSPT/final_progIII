import swService from '../services/swapi'



export async function validarUsuario({ user }) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await swService.authUsuario(user);

      console.log(response.status)


      user.rol = response.user.role;
      user.token = response.token;
      resolve(user);
    } catch (error) {
      console.error('Error al obtener la respuesta:', error);
      reject(error);
    }
  });
}


