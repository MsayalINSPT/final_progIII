import swService from '../services/swapi'



export async function validarUsuario({ user }) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await swService.authUsuario(user);
      user.rol = response.user.role;
      user.token = response.token;
      resolve(user);
    } catch (error) {
      console.error('Error al obtener la respuesta:', error);
      reject(error);
    }
  });
}







/* export function validarUsuario({ user }) {
  
  const fetchData = async () => {
    const response = await swService.authUsuario(user)
    //console.log(response)
    user.rol = response.user.role
    user.token = response.token
  }
  fetchData()

  /*     if (user.email === 'recepcion@test.com') {
      user.rol = 'recepcion'
      user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiLCJyb2xlIjoidmV0ZXJpbmFyaW8iLCJpYXQiOjE2OTk0OTY4NDgsImlzcyI6ImJhc2UtYXBpLWV4cHJlc3MtZ2VuZXJhdG9yIiwic3ViIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIn0.25IWYCQbW964qzXzKGCWZelkLKhwkYk0NW52d3UXFjw"
    }

    if (user.email === 'veterinario@test.com') {
      user.rol = 'veterinario'
      user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiLCJyb2xlIjoidmV0ZXJpbmFyaW8iLCJpYXQiOjE2OTk0OTY4NDgsImlzcyI6ImJhc2UtYXBpLWV4cHJlc3MtZ2VuZXJhdG9yIiwic3ViIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIn0.25IWYCQbW964qzXzKGCWZelkLKhwkYk0NW52d3UXFjw"
  
    } 
}
 */