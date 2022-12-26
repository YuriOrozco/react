import axios from 'axios'

export class EstudianteService{
    //establecemos la url de donde hará la petición
    baseURL="http://localhost:8080/api/estudiante/all"
    //metodo para extraer todos los estudiantes, hace una petición
    getAll(){
        return axios.get(this.baseURL).then(res => res.data)
    }
}