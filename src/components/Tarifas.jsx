import React from 'react';
import LeadMagnet from './../images/LeadMagnet.png';
import "./Tarifas.css"


const Tarifas = () => {
    return <div className="TarifasBase">
        <h className="TarifasTitulo"> <a> Tarifas</a> </h>
        <div className='TarifasPaquetesContenedor'>
        <div className="TarifasTextoContenedor"><h className="TarifasTexto"> <p> Ofrecemos los siguientes paquetes:</p> </h></div>
            <div className='TarifasPaquetesFila'>
                <div className='TarifasPaquetesCuadro'>
                    <div className='PaqueteTitulo'>
                        <a >PAQUETE PLATINIUM </a>
                        <a className='PaqueteTituloTachado'> 120€</a>
                        <a> 100€</a>
                    </div>
                    <a className='PaqueteTexto'>¿Qué incluye?</a>
                    <ul className='PaqueteLista'>
                        <li className='PaqueteListaItem'>Visitas ilimitadas*</li>
                        <li className='PaqueteListaItem' >Seguimiento por WhatsApp ilimitado**</li>
                    </ul>
                    <div className='PaqueteCondicionesContainer'>
                    <h className='PaqueteCondiciones' >*con un máximo de una visita semanal</h>
                    <h className='PaqueteCondiciones' >**respuestas en un máximo de 48h hábiles</h>
                    </div>
                </div>
                <img className='TarifasPaquetesFoto' src={LeadMagnet} alt="LeadMagnet" />
            </div>
            <div className='TarifasPaquetesFila'>
                <img className='TarifasPaquetesFoto' src={LeadMagnet} alt="LeadMagnet" />
                <div className='TarifasPaquetesCuadro'>
                    <a className='PaqueteTitulo'>
                        <a> PAQUETE GOLD </a>
                        <a className='PaqueteTituloTachado'> 75€</a>
                        <a> 60€</a>
                    </a>
                    <a className='PaqueteTexto'>¿Qué incluye?</a>
                    <ul className='PaqueteLista'>
                        <li className='PaqueteListaItem'>Una visita mensual</li>
                        <li className='PaqueteListaItem' >Seguimiento por WhatsApp ilimitado**</li>
                    </ul>
                    <div className='PaqueteCondicionesContainer'>
                    <a className='PaqueteCondiciones' >*respuestas en un máximo de 48h hábiles</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Tarifas;