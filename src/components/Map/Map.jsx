import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons/LocationOnOutlined'
// import LocationOutlinedIcon from '@material-ui/icons/LocationOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzZM7hxGmDkpDe3sMbdlrBMok12mTbldg' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
