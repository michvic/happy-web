import React from 'react'

import mapMakerImg from '../image/map-maker.svg'

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
    </div>
  )
}

export default OrphanagesMap