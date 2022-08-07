import React, {useState} from 'react';
import Botones from '../componentes/Botones';
import '../componentes-css/Botones.css';

const PaginaPrincipal = () => {

    // Usando estado useState() de React.js
    const [numero, setNumero] = useState(0);

    const Aumentar = () => {
        setNumero(numero + 1);
    }
    const Disminuir = () => {
        if(numero <= 0){
            setNumero(0)
        }else{
            setNumero(numero - 1);
        }
    }
    const Inicializar = () => {
        setNumero(0);
    }
    return (
        <div className='container contenedor'>
            <p className='fs-4'>Contador de Clicks con React.js</p>
            <div className='shadow-lg caja-elementos'>
                <div className='caja-numero shadow-lg'>
                    {numero}
                </div>
                <Botones 
                    texto= 'Aumentar'
                    clase='btn-primary'
                    funcion={Aumentar}
                />
                <Botones 
                    texto= 'Disminuir'
                    clase='btn-danger'
                    funcion={Disminuir}
                />
                <Botones 
                    texto= 'Inicialiar'
                    clase='btn-success'
                    funcion={Inicializar}
                />

            </div>
        </div>

    );
};


export default PaginaPrincipal;