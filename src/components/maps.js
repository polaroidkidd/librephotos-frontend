import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader, Flag, Segment, Image, Header, Icon } from "semantic-ui-react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { fetchPhotos } from "../actions/photosActions";
import { fetchAutoAlbumsList, fetchPlaceAlbumsList } from "../store/albums/albumsActions";
import { fetchLocationClusters } from "../actions/utilActions";
import { serverAddress } from "../api_client/apiClient";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Grid, AutoSizer } from "react-virtualized";
import { countryNames } from "../util/countryNames";
import { Link } from "react-router-dom";
import { SecuredImageJWT } from "../components/SecuredImage";
import _ from "lodash";

export class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    let resizeDone = false;

    // attempt resize 8 times; mapRef.current might be undefined
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        if (!resizeDone) {
          if (this.mapRef.current) {
            const map = this.mapRef.current.leafletElement;
            map.invalidateSize(true);
            resizeDone = true;
          }
        }
      }, 1000 * (i + 1));
    }
  }

  onViewportChanged = (viewport) => {
    console.log("Viewport changed, mapping new photo location: ", viewport.center);
    this.setState({ viewport });

    const map = this.mapRef.current.leafletElement;
    map.invalidateSize(true);
  };

  render() {
    let photosWithGPS = this.props.photos.filter(function (photo) {
      if (photo.exif_gps_lon !== null && photo.exif_gps_lon) {
        return true;
      } else {
        return false;
      }
    });

    let sum_lat = 0;
    let sum_lon = 0;
    for (let i = 0; i < photosWithGPS.length; i++) {
      sum_lat += parseFloat(photosWithGPS[i].exif_gps_lat);
      sum_lon += parseFloat(photosWithGPS[i].exif_gps_lon);
    }
    let avg_lat = sum_lat / photosWithGPS.length;
    let avg_lon = sum_lon / photosWithGPS.length;

    let markers = photosWithGPS.map(function (photo) {
      return (
        <Marker key={photo.image_hash} position={[photo.exif_gps_lat, photo.exif_gps_lon]}>
          <Popup>
            <div>
              <Image src={photo.square_thumbnail} />
            </div>
          </Popup>
        </Marker>
      );
    });

    console.log(markers);

    if (photosWithGPS.length > 0) {
      let zoom = 2;
      if (this.props.zoom) {
        zoom = this.props.zoom;
      }
      return (
        <Segment style={{ zIndex: 2, height: this.props.height, padding: 0 }}>
          <Map ref={this.mapRef} style={{ height: this.props.height }} center={[avg_lat, avg_lon]} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {markers}
          </Map>
        </Segment>
      );
    } else {
      return (
        <Segment style={{ height: this.props.height }}>
          <Loader active>Map loading...</Loader>
        </Segment>
      );
    }
  }
}

export class EventMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.preprocess = this.preprocess.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchAutoAlbumsList());

    console.log("Map was just made visible.");

    let resizeDone = false;

    // attempt resize 8 times; mapRef.current might be undefined
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        if (!resizeDone) {
          if (this.mapRef.current) {
            const map = this.mapRef.current.leafletElement;
            map.invalidateSize(true);
            resizeDone = true;
            console.log("Map resized.");
          }
        }
      }, 1000 * (i + 1));
    }
  }

  onViewportChanged = (viewport) => {
    console.log("Viewport changed, mapping new photo location: ", viewport.center);
    this.setState({ viewport });

    const map = this.mapRef.current.leafletElement;
    map.invalidateSize(true);
  };

  preprocess() {
    let eventsWithGPS = this.props.albumsAutoList.filter(function (album) {
      if (album.gps_lat != null && album.gps_lon != null) {
        return true;
      } else {
        return false;
      }
    });

    let sum_lat = 0;
    let sum_lon = 0;
    for (let i = 0; i < eventsWithGPS.length; i++) {
      sum_lat += parseFloat(eventsWithGPS[i].gps_lat);
      sum_lon += parseFloat(eventsWithGPS[i].gps_lon);
    }
    let avg_lat = sum_lat / eventsWithGPS.length;
    let avg_lon = sum_lon / eventsWithGPS.length;

    let markers = eventsWithGPS.map(function (album) {
      return <Marker position={[album.gps_lat, album.gps_lon]} />;
    });
    return [avg_lat, avg_lon, markers];
  }

  render() {
    if (this.props.fetchedAlbumsAutoList) {
      let res = this.preprocess();
      let avg_lat = res[0];
      let avg_lon = res[1];
      let markers = res[2];

      return (
        <div>
          <Map ref={this.mapRef} center={[avg_lat, avg_lon]} zoom={2}>
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {markers}
          </Map>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

EventMap = connect((store) => {
  return {
    albumsAutoList: store.albums.albumsAutoList,
    fetchingAlbumsAutoList: store.albums.fetchingAlbumsAutoList,
    fetchedAlbumsAutoList: store.albums.fetchedAlbumsAutoList,
  };
})(EventMap);
