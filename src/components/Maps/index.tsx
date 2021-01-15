import React, { ReactElement, useState } from "react";
import { GoogleMap, GroundOverlay, HeatmapLayer, InfoWindow, Marker, MarkerClusterer, StandaloneSearchBox, useLoadScript } from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";

import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";

declare var google: any;
const divStyle = {
  background: 'white',
  border: '1px solid #ccc',
  padding: 15
};
const containerStyle = {
  width: "800px",
  height: "400px",
};
const centerInit = {
  lat: 15.3812992,
  lng: 75.1173632,
};
const clusterStyles = [
  {
    textColor: 'white',
    url: 'https://www.pngkey.com/png/full/48-480452_google-blue-map-marker.png',
    height: 50,
    width: 50
  },
 {
    textColor: 'white',
    url: 'https://www.pngkey.com/png/full/48-480452_google-blue-map-marker.png',
    height: 50,
    width: 50
  },
 {
    textColor: 'white',
    url: 'https://www.pngkey.com/png/full/48-480452_google-blue-map-marker.png',
    height: 50,
    width: 50
  }
];
//libraries required for map to implement respective functionality
const libraries:Libraries=["places","visualization"]

// initial markers to populate on map
const markerInfo=[
  {
    "position": {
      "lat": 15.363214,
      "lng": 75.126593
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Doughpaze",
    "viewport": {
      "south": 15.36184337010728,
      "west": 75.12520077010728,
      "north": 15.36454302989272,
      "east": 75.12790042989273
    },
    "place_id": "ChIJY9ZVozbXuDsR8LKqGqnz_Pg",
    "formatted_address": "Opp HDMC Garden, Near, Old Income Tax Office Road, Hubli - Dharwad Hwy, Vidya Nagar, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.3764837,
      "lng": 75.1330768
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Pizza 63",
    "viewport": {
      "south": 15.37512627010728,
      "west": 75.13173017010726,
      "north": 15.37782592989272,
      "east": 75.13442982989271
    },
    "place_id": "ChIJ7TPvJ6PRuDsR_ayxAF0qNrY",
    "formatted_address": "Shakti colony, opp. to Hanuman temple, Hubli, Karnataka 580032, India"
  },
  {
    "position": {
      "lat": 15.3578324,
      "lng": 75.1467526
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Oyalo Pizza",
    "viewport": {
      "south": 15.35644052010728,
      "west": 75.14540217010727,
      "north": 15.35914017989272,
      "east": 75.14810182989272
    },
    "place_id": "ChIJD5wz_BHXuDsR5ldmyjXm6A8",
    "formatted_address": "Keshwapur, Bhavani Nagar, Keshwapur, Hubli, Karnataka 580023, India"
  },
  {
    "position": {
      "lat": 15.3667674,
      "lng": 75.1332437
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Sandwich and Pizza",
    "viewport": {
      "south": 15.36543542010728,
      "west": 75.13194297010727,
      "north": 15.36813507989272,
      "east": 75.13464262989271
    },
    "place_id": "ChIJNZ4VyLzXuDsRGBJfVvlJbMM",
    "formatted_address": "Rajnagar, Vidya Nagar, Hubli, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.3655739,
      "lng": 75.1539157
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Doughpaze (Keshwapur)",
    "viewport": {
      "south": 15.36417517010728,
      "west": 75.15257542010728,
      "north": 15.36687482989272,
      "east": 75.15527507989272
    },
    "place_id": "ChIJsWIgEUDXuDsRDda2CcjvoFg",
    "formatted_address": "No 36, Shop No1,2,3 , Badami nagar, Keshwapur, Karnataka 580031, India"
  },
  {
    "position": {
      "lat": 15.3672804,
      "lng": 75.1211228
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Domino's Pizza Hubli 580031",
    "viewport": {
      "south": 15.36586502010728,
      "west": 75.11978862010729,
      "north": 15.36856467989272,
      "east": 75.12248827989274
    },
    "place_id": "ChIJ94DGkjLXuDsRH3DFHdRFZVs",
    "formatted_address": "Shop No.1, Upper Ground floor TIMES SQUARE, CTS No. 3700/A,Ward Extension, Prashant Colony, Vidya Nagar, Hubli, Karnataka 580031, India"
  },
  {
    "position": {
      "lat": 15.3680552,
      "lng": 75.1205738
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Doughpaze Pizzeria",
    "viewport": {
      "south": 15.36672877010728,
      "west": 75.11925357010729,
      "north": 15.36942842989272,
      "east": 75.12195322989272
    },
    "place_id": "ChIJYXKT4CrXuDsRauIihsrQTtA",
    "formatted_address": "Prashant Colony, Vidya Nagar, Hubli, Karnataka 580031, India"
  },
  {
    "position": {
      "lat": 15.349965,
      "lng": 75.111278
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Domino's Pizza Hubali-Dharwad 580030",
    "viewport": {
      "south": 15.34884192010728,
      "west": 75.1099401701073,
      "north": 15.35154157989273,
      "east": 75.11263982989273
    },
    "place_id": "ChIJEwDIGCHXuDsRo-g5wOpTVjo",
    "formatted_address": "CTC No. 4784 B, Urban Oasis Mall, Airport Road, Chaitanya Nagar, Rajendra Nagar, Karnataka 580030, India"
  },
  {
    "position": {
      "lat": 15.359031,
      "lng": 75.14656149999999
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Smokin' Joe's Pizza",
    "viewport": {
      "south": 15.35767937010728,
      "west": 75.14528627010728,
      "north": 15.36037902989272,
      "east": 75.14798592989273
    },
    "place_id": "ChIJJdX1ZVrXuDsR1H0j5dh-Opo",
    "formatted_address": "Shop No. 9, ground floor, 3rd Enky Complex, Keshwapur Rd, Hubli, Karnataka 580023, India"
  },
  {
    "position": {
      "lat": 15.3620902,
      "lng": 75.1185197
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
    "name": "KoKo Chi Cafe",
    "viewport": {
      "south": 15.36075642010728,
      "west": 75.11721442010726,
      "north": 15.36345607989272,
      "east": 75.11991407989271
    },
    "place_id": "ChIJ6fY6ivfXuDsRJ5YaG8JvNYM",
    "formatted_address": "Main Road, Shirur Park, 2nd Stage, Vidya Nagar, Hubli, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.34931,
      "lng": 75.14181599999999
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Olive Garden",
    "viewport": {
      "south": 15.34796797010728,
      "west": 75.14049757010729,
      "north": 15.35066762989272,
      "east": 75.14319722989273
    },
    "place_id": "ChIJOXNax0LXuDsR0XrJg3HJu2E",
    "formatted_address": "Metropolis, Koppikar Rd, Dajiban Peth, New Hubli, Hubli, Karnataka 580020, India"
  },
  {
    "position": {
      "lat": 15.3627728,
      "lng": 75.12207219999999
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Diyva Pizza Point & Sathi Colddrinks",
    "viewport": {
      "south": 15.36139887010728,
      "west": 75.12067587010728,
      "north": 15.36409852989272,
      "east": 75.12337552989273
    },
    "place_id": "ChIJNwZ6yynXuDsRjhATB-sJBks",
    "formatted_address": "Prabhat Colony, Vidya Nagar, Hubli, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.3491448,
      "lng": 75.110012
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "O!Yalo PIZZA",
    "viewport": {
      "south": 15.34783377010728,
      "west": 75.10873542010728,
      "north": 15.35053342989272,
      "east": 75.11143507989271
    },
    "place_id": "ChIJ2xetoMbXuDsRsULmdQCoiT4",
    "formatted_address": "7, Gokul Rd, Akshay Park, Chaitanya Nagar, Industrial Estate, Hubli, Karnataka 580030, India"
  },
  {
    "position": {
      "lat": 15.3631626,
      "lng": 75.1415729
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Oyalo Pizza",
    "viewport": {
      "south": 15.36180497010728,
      "west": 75.14022387010726,
      "north": 15.36450462989272,
      "east": 75.14292352989271
    },
    "place_id": "ChIJUz5QLYHXuDsRCN_yO9YSnp8",
    "formatted_address": "CTS NO: 400 / 2A, MATRU CHAYA, ROAD, opp. OM RESTAURANT, Keshwapur, Hubli, Karnataka 580023, India"
  },
  {
    "position": {
      "lat": 15.3621145,
      "lng": 75.1185252
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Indian Sandwich Center",
    "viewport": {
      "south": 15.36077837010727,
      "west": 75.1172133701073,
      "north": 15.36347802989272,
      "east": 75.11991302989273
    },
    "place_id": "ChIJk325-jHXuDsRnusncls11Ko",
    "formatted_address": "Netravati Square, Shirur Park Road, Vidya Nagar, Hubli, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.3679264,
      "lng": 75.12021949999999
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Vilayatee Tadaka",
    "viewport": {
      "south": 15.36662317010728,
      "west": 75.11884792010727,
      "north": 15.36932282989272,
      "east": 75.12154757989272
    },
    "place_id": "ChIJKxUxvDLXuDsRP0H-be5JCsk",
    "formatted_address": "1st Floor, Sushil Complex, opposite BVB college, Prashant Colony, Vidya Nagar, Hubli, Karnataka 580031, India"
  },
  {
    "position": {
      "lat": 15.3649055,
      "lng": 75.1243642
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Foodz Dawat Restaurant",
    "viewport": {
      "south": 15.36349762010728,
      "west": 75.12295682010729,
      "north": 15.36619727989272,
      "east": 75.12565647989274
    },
    "place_id": "ChIJK5A6shLXuDsRzf-Yhqtrzdc",
    "formatted_address": "SKD Heights, PB Road, Vidya Nagar, Hubli, Karnataka 580031, India"
  },
  {
    "position": {
      "lat": 15.3785962,
      "lng": 75.1337144
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
    "name": "Café Lemontree",
    "viewport": {
      "south": 15.37724462010727,
      "west": 75.13240297010728,
      "north": 15.37994427989272,
      "east": 75.13510262989273
    },
    "place_id": "ChIJCT-NTbbQuDsRKI3J92cIeSo",
    "formatted_address": "Rajnagar, Vidya Nagar, Hubli, Karnataka 580032, India"
  },
  {
    "position": {
      "lat": 15.3639145,
      "lng": 75.1287878
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
    "name": "Seven Beans",
    "viewport": {
      "south": 15.36252037010728,
      "west": 75.12745912010728,
      "north": 15.36522002989272,
      "east": 75.13015877989271
    },
    "place_id": "ChIJzWEBfjHXuDsRaEk-XKNyGO8",
    "formatted_address": "63, Old Income Tax Office Rd, Vidya Nagar, Hubli, Karnataka 580021, India"
  },
  {
    "position": {
      "lat": 15.3588859,
      "lng": 75.1169685
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "name": "Curry Weds Rice",
    "viewport": {
      "south": 15.35749362010728,
      "west": 75.11555317010726,
      "north": 15.36019327989272,
      "east": 75.11825282989271
    },
    "place_id": "ChIJyQuEWmPXuDsRNok59B7yhuI",
    "formatted_address": "Plot No 61 & 62 , Purshottam Nagar, Tatwadarsha Hospital, Road, opp. Kallur Petrol Bunk, Vidya Nagar, Hubli, Karnataka 580021, India"
  }
]

const mapKey="AIzaSyD6Ao1lDJkpPNJs0P_l8ukCzbN-Yc4n_sU";// old key

/**
 * Creates marker with infowindows
 * showAllInfo : will show all the info windows else only info windows of those clicked will show 
 *  i.e one info window only 
 * clusterer : this will map all markers to a clusterer if provided else wont cluster
 * @param param0 
 */
const MarketInfoComponent = ({markerInfo,clusterer,showAllInfo}:{
  markerInfo:{position:{lat:number,lng:number},content:string,icon?:string,name?:string}[],
  clusterer?:any,
  showAllInfo?:boolean,
  
}):ReactElement=>{
  const [selectedMarker ,setSelectedMarker]=useState({index:null} as {index:number|null});
  const closeInfo=()=>setSelectedMarker({index:null});
  const onClickMarker=(index:number)=>setSelectedMarker({index}); 
  const markers=markerInfo.map((marker,index)=>{
    const showInfo = showAllInfo||selectedMarker.index ===index;//decides whether to show all infos or only on marker click
    const {icon}= marker;
    const content=marker.content?marker.content:marker.name;
    
    const markerProps={
      position:marker.position,
      ...(clusterer&&{clusterer:clusterer}),
      ...(icon && {icon:{
        url:icon,
        scaledSize:new google.maps.Size(32,32),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0, 32)
      }}),
      
    }
    return (
    <Marker 
    {...markerProps}
    onClick={onClickMarker.bind(null,index)}
    key={index}
    >
      {showInfo && 
      <InfoWindow
        onCloseClick={closeInfo}
        
      >
        <div style={{color:"black", background:"white"}}>
          {content}
        </div>
      </InfoWindow>
      }
    </Marker>)
  })
  return(
    <div>
       {markers}
    </div>
  );
}



export  default function GoogleMapApi():ReactElement{
  const[map,setMap]=useState(null as any);//map instance to get and set info on map instance 
  const [ markers,addMarker]=useState(markerInfo as any[]);
  const [SearchBox,setSearchBox]=useState({} as any)
  const {isLoaded} = useLoadScript({
    googleMapsApiKey:mapKey,
    language:"hindi",
    libraries:libraries
  });
  const onLoad=React.useCallback((map:any)=>{
    setMap(map);
  },[]);
  const searchBoxLoad=React.useCallback((searchBox)=>{
    setSearchBox(searchBox);
  },[])
  /**
   * Get all the places that match the query in searchBox on user selection
   */
  const onPlacesChanged = ()=>{
    const places:any[]=SearchBox.getPlaces();
    const newMarkerState=[...markers];
    const bounds=map.getBounds();
    places.forEach((place,index)=>{
      newMarkerState.push({
        position:{lat : place.geometry.location.lat(),lng: place.geometry.location.lng()},
        icon:place.icon,
        name:place.name,
        url:place.url,
        viewport:place.geometry.viewport,
        place_id:place.place_id,
        formatted_address:place.formatted_address
      });
      bounds.extend(place.geometry.location);
    });
   // map.fitBounds(bounds)
    addMarker(newMarkerState);
  }
  // on click on the map will create a new marker
  const addMarkerToMap=(e:any):void=>{
    addMarker([...markers,{position:{lat:e.latLng.lat(),lng:e.latLng.lng()},content:"high traffic"}])
    const bounds=map.getBounds();
    markers.forEach(marker=>bounds.extend(new google.maps.LatLng(marker.position)));
  }
  const getData=()=>{
    return markers.map(marker=>new google.maps.LatLng(marker.position))
  }

  const renderMap:Function=()=>{
      return(
        <GoogleMap
        onLoad={onLoad}
        center={centerInit}
        zoom={5}
        options={{minZoom:2,maxZoom:15}}
        mapContainerStyle={containerStyle}
        clickableIcons={true}
        onClick={addMarkerToMap}
        >
          <HeatmapLayer 
            data={getData()}
            options={{radius:35}}
            
          />
      {// Clusters the markers
      }
        <MarkerClusterer
        >
          {
          (clusterer)=>(<MarketInfoComponent markerInfo={markers} clusterer={clusterer} />)
          }
        </MarkerClusterer>
        {
          // standalone searchBox with takes a input element and binds events to it
        }
         <StandaloneSearchBox
         onLoad={searchBoxLoad}
         onPlacesChanged={onPlacesChanged}
         >
           <input
           type="text"
           placeholder="type something to search"
           style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px"
          }}
           />
          </StandaloneSearchBox> 
          <GroundOverlay
            url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
            bounds={new google.maps.LatLngBounds(
              new google.maps.LatLng(40.712216, -74.22655),
              new google.maps.LatLng(40.773941, -74.12544)
            )}
          >

          </GroundOverlay>
        </GoogleMap>
      )
  }

  return(isLoaded?renderMap():<Spinner animation="border"/>)

}