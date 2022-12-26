import React, { useState, useEffect } from 'react'
//importamos el controlador para traer los estudiantes
import {EstudianteService} from './../../controller/middleware'
//importamos la tabla
import {DataTable, Datatable} from 'primereact/datatable'
//importamos la columna
import {Column} from 'primereact/column'
import {Panel} from 'primereact/panel'
import {ProgressSpinner} from 'primereact/progressspinner'
export default function LoggedUser(){
//creamos las variables para establecerles el estaado inicial
    const [studentService] = useState(new EstudianteService())
    const [students, setStudents] = useState();
    const [studentSelected, setStudentSelected] = useState();
    
    useEffect(()=>{
        //mandamos llamar el metodo de obtener todos los estudiantes y se lo mandamos a la variable "setStudents"
        studentService.getAll().then(res => setStudents(res))
    }, [])
    
    //retornamos la tabla con los valores extraidos
       return(
        <div>
            <p>Bienvenido</p>
            { students ?
            <DataTable value={students}
            paginator={true}
            rows ="4"
            selectionMode='single'
            selection={studentSelected}
            
            >
                <Column field='matricula' header="Matricula"></Column>
                <Column field='carrera' header="Carrera"></Column>
                <Column field='semestre' header="Semestre"></Column>
                
            </DataTable>
            : null
}
        </div>
    )
}