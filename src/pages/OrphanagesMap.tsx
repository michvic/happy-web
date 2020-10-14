import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import mapMakerImg from '../image/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Pará</strong>
          <span>Marabá</span>
        </footer>
      </aside>

      <div></div>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>
  )
}

export default OrphanagesMap