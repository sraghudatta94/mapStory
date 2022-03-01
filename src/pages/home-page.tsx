import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Map, { MapRef, Marker, Popup } from "react-map-gl";

import { Layout, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import appConfig from "../config";
import { trips, user } from "../data";
import { Location } from "../types";
import { diffInDays, getTripDateLabel } from "../utils/date-utils";

import mapboxgl from "mapbox-gl"

// @ts-ignore
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default


const { Header, Content } = Layout;

type Params = {
  tripId: string;
  locationId: string;
};
// intial map zoom coordinates can be updated here! 
const initialViewStateDefault = {
  latitude: 38.481689,
  longitude: -100.5631208,
  zoom: 4,
  bearing: 0,
  pitch: 0,
};
interface HomeProps { }

const HomePage: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const params = useParams<Params>();
  const mapRef = useRef<MapRef>();

  // get trip as per params
  const trip = useMemo(() => {
    const tripId: string | undefined = params?.tripId;
    return trips.find((item) => item.id === tripId);
  }, [params]);

  // prepare selected location infos
  const selectedLocation = useMemo(() => {
    const locationId: string | undefined = params?.locationId;
    if (!trip) return undefined;
    const locationIndex = trip.locations.findIndex(
      (item) => item.id === locationId
    );
    return {
      locationIndex,
      location: trip.locations[locationIndex],
      nextLocation:
        locationIndex + 1 in trip.locations
          ? trip.locations[locationIndex + 1]
          : undefined,
      previousLocation:
        locationIndex - 1 in trip.locations
          ? trip.locations[locationIndex - 1]
          : undefined,
    };
  }, [params, trip]);

  // initially set map zoo, center 
  const initialViewState = useMemo(() => {

    // if there is location initially zoom to it
    if (selectedLocation?.location) {
      return {
        ...initialViewStateDefault,
        ...selectedLocation.location.coordinates,
        zoom: 9,
      };
    }
    return initialViewStateDefault;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // zoom to entire trip covering all the locations
  const zoomToTrip = useCallback(() => {
    if (trip?.locations) {
      const bounds = trip?.locations.reduce(
        (acc, nextVal) => {
          return {
            minLat: Math.min(acc.minLat, nextVal.coordinates.latitude),
            minLng: Math.min(acc.minLng, nextVal.coordinates.longitude),
            maxLat: Math.max(acc.maxLat, nextVal.coordinates.latitude),
            maxLng: Math.max(acc.maxLng, nextVal.coordinates.longitude),
          };
        },
        {
          minLat: 90,
          minLng: 90,
          maxLat: -90,
          maxLng: -90,
        }
      );

      mapRef.current?.fitBounds(
        [
          [bounds.minLng, bounds.minLat],
          [bounds.maxLng, bounds.maxLat],
        ],
        { padding: 100, duration: 2000 }
      );
    }
  }, [trip]);


  // on map load if we have anything to do
  const onMapLoad = () => {

    // if initially any trip is selected zoom to it
    if (!selectedLocation?.location && trip) {
      zoomToTrip();
    }
  };

  // check for trip and location change and zoom to it
  useEffect(() => {
    if (!selectedLocation?.location) {
      zoomToTrip();
    }
    else {
      const { coordinates } = selectedLocation.location;
      mapRef.current?.flyTo({
        center: [coordinates.longitude, coordinates.latitude],
        duration: 2000,
        zoom: 9,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trip, selectedLocation]);

  return (
    <Layout className="app-conatiner">
      <Header className="app-header">
        <Link to="/" className="logo">
          <div>
            <AntDesignOutlined style={{ fontSize: "32px", color: "#1990ff" }} />
          </div>
          <div>Trip Advice</div>
        </Link>
        <div className="login-details">
          <div>
            <div>Hi, {user.username}</div>
            <div>{user.email}</div>
          </div>
          <Avatar size={32} src={user.avatar} />
        </div>
      </Header>
      <Layout>
        <Content className="app-map">
          <Map
            // @ts-ignore
            ref={mapRef}
            onLoad={onMapLoad}
            mapboxAccessToken={appConfig.MAPBOX_TOKEN}
            initialViewState={initialViewState}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {(trip?.locations || []).map((location: Location) => (
              <Marker
                onClick={() => navigate(`/trip/${trip?.id}/${location.id}`)}
                key={`marker-${location.id}`}
                latitude={location.coordinates.latitude}
                longitude={location.coordinates.longitude}
                anchor="bottom"
              />
            ))}
            {selectedLocation?.location && (
              <Popup
                anchor="bottom"
                latitude={selectedLocation.location.coordinates.latitude}
                longitude={selectedLocation.location.coordinates.longitude}
                closeOnClick={false}
                closeButton={false}
                offset={60}
              >
                {selectedLocation.location.image && (
                  <img
                    style={{ maxWidth: "100%" }}
                    src={selectedLocation.location.image}
                    alt={selectedLocation.location.title}
                  />
                )}
                <div className="location-popup-content">
                  <strong>
                    {selectedLocation.location.title} -{" "}
                    {diffInDays(
                      selectedLocation.location.visitStartDate,
                      selectedLocation.location.visitEndDate
                    )}
                  </strong>
                  <div>{selectedLocation.location.description}</div>
                  <div>
                    Last Visited On:{" "}
                    <strong>
                      {getTripDateLabel(
                        selectedLocation.location.visitStartDate
                      )}
                    </strong>
                  </div>
                </div>
              </Popup>
            )}
          </Map>
        </Content>
        <Outlet context={{ trip, selectedLocation }} />
      </Layout>
    </Layout>
  );
}
export default HomePage;
