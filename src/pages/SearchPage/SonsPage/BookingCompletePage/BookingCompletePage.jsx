import React from 'react'
import { Link } from 'react-router-dom';
import './BookingCompletePage.scss';
import fenix from '../../../../assets/icons/fenix@3x.png'

export default function BookingCompletePage() {
    return (
        <div className='p-all'>
        <div>
        <h1 className='p-title'>Reserva Completada</h1>
        </div>
        <div className='padre'>
        <div class='p-cross'>
        <Link to="/home">
        <span class="icon-cross p-returnback"></span>
                </Link>

        </div>
        <img
            alt="fenix"
            src={fenix} 
            className='img hijo'></img>
        </div>

        <div className='p-free'>BE FREE!</div>
        <div className='p-text1'> Contacta ya con tu guardian y espera a que acepte la reserva.</div>          

           
        </div>
      );
}
