'use client'

import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import React from 'react'

export default function Themap () {
  return (
    <section className='map_section pb-10'>
      <div className='map_container w-full h-[688px] sm:h-[300px] md:h-[450px] lg:h-[550px] xl:h-[688px]'>
        <YMaps>
          <Map
            defaultState={{
              center: [41.311081, 69.240562],
              zoom: 12
            }}
            style={{
              height: '100%',
              width: '100%'
            }}
          >
            <Placemark geometry={[41.311081, 69.240562]} />
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </section>
  )
}
