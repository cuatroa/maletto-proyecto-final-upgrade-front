// import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
// import Navbar from "../../shared/components/Navbar/Navbar";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from "@reach/combobox";
// import "./SearchPage.scss";


// function Map() {
//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);
//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//   }, []);
//   return (
//     <div>
//       <Search panTo={panTo}></Search>
//       <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//         onLoad={onMapLoad}
//       ></GoogleMap>
//     </div>
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// export default function SearchPage() {
//   return (
//     <div>
//       {/* <Search */}
//       <div style={{ width: "100vw", height: "94vh" }}>
//         <WrappedMap
//           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `100%` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//       <Navbar />
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }




// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => -34.397, lng: () => 150.644 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Busca a tu guardián"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }