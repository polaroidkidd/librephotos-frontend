import React, { Component } from "react";
import { Header, Divider, Loader, Breadcrumb, Label, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAlbumsAutoGalleries } from "../../store/albums/albumsActions";
import { Map, TileLayer, Marker } from "react-leaflet";
import { serverAddress } from "../../api_client/apiClient";
import { fetchPhotoDetail } from "../../actions/photosActions";
import * as moment from "moment";
import _ from "lodash";
import { SecuredImageJWT } from "../../components/SecuredImage";
import { LightBox } from "../../components/lightbox/LightBox";
import { Tile } from "../../components/Tile";
import { TOP_MENU_HEIGHT } from "../../ui-constants";
import { compose } from "redux";
import { withTranslation, Trans } from "react-i18next";

let SIDEBAR_WIDTH = 85;

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

export class AlbumLocationMap extends Component {
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

    let markers = photosWithGPS.map(function (photo, idx) {
      return <Marker key={"marker-" + photo.id + "-" + idx} position={[photo.exif_gps_lat, photo.exif_gps_lon]} />;
    });
    if (photosWithGPS.length > 0) {
      return (
        <div style={{ padding: 0 }}>
          <Map center={[avg_lat, avg_lon]} zoom={6}>
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

/*******************************************************************************
AUTO GENERATED EVENT ALBUM
*******************************************************************************/

export class AlbumAutoGalleryView extends Component {
  state = {
    lightboxImageIndex: 0,
    lightboxShow: false,
    headerHeight: 80,
    width: window.innerWidth,
    height: window.innerHeight,
    showMap: false,
    entrySquareSize: 200,
    gridHeight: window.innerHeight - TOP_MENU_HEIGHT - 60,
  };

  constructor(props) {
    super(props);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  componentDidMount() {
    this.calculateEntrySquareSize();
    window.addEventListener("resize", this.calculateEntrySquareSize.bind(this));
    fetchAlbumsAutoGalleries(this.props.dispatch, this.props.match.params.albumID);
  }

  calculateEntrySquareSize() {
    let numEntrySquaresPerRow = 10;
    if (window.innerWidth < 600) {
      numEntrySquaresPerRow = 2;
    } else if (window.innerWidth < 800) {
      numEntrySquaresPerRow = 4;
    } else if (window.innerWidth < 1000) {
      numEntrySquaresPerRow = 6;
    } else if (window.innerWidth < 1200) {
      numEntrySquaresPerRow = 8;
    }

    let columnWidth = window.innerWidth - SIDEBAR_WIDTH - 20;

    let entrySquareSize = columnWidth / numEntrySquaresPerRow;
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      entrySquareSize: entrySquareSize,
      numEntrySquaresPerRow: numEntrySquaresPerRow,
    });
  }

  onPhotoClick(image_hash) {
    this.setState({
      lightboxImageIndex: this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.indexOf(image_hash),
      lightboxShow: true,
    });
  }

  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    let photoIndex = rowIndex * this.state.numEntrySquaresPerRow + columnIndex;
    if (photoIndex < this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.length) {
      let video = this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[photoIndex].video;
      let image_hash = this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[photoIndex].image_hash;
      return (
        <div key={key} style={style}>
          <div
            onClick={() => {
              this.onPhotoClick(photoIndex);
            }}
          >
            <Tile
              video={video === true}
              height={this.state.entrySquareSize - 5}
              width={this.state.entrySquareSize - 5}
              image_hash={image_hash}
            ></Tile>
          </div>
        </div>
      );
    } else {
      return <div key={key} style={style} />;
    }
  };

  getPhotoDetails(image_hash) {
    this.props.dispatch(fetchPhotoDetail(image_hash));
  }

  render() {
    let albumID = this.props.match.params.albumID;
    if (this.props.albumsAutoGalleries.hasOwnProperty(albumID) && !this.props.fetchingAlbumsAutoGalleries) {
      let album = this.props.albumsAutoGalleries[this.props.match.params.albumID];
      let photos = _.sortBy(album.photos, "exif_timestamp").map((el, idx) => {
        return { ...el, idx: idx };
      });
      let byDate = _.groupBy(_.sortBy(photos, "exif_timestamp"), (photo) => photo.exif_timestamp.split("T")[0]);
      return (
        <div>
          <div style={{ paddingTop: 10, paddingRight: 5 }}>
            <Header as="h2">
              <Icon name="wizard" />
              <Header.Content>
                {album.title}
                <Header.Subheader>
                  <Icon name="photo" />
                  {this.props.t("numberofphotos", {
                    number: album.photos.length,
                  })}
                  <br />
                  <Icon name="calendar outline" />{" "}
                  <b>{moment(album.photos[0].exif_timestamp).format("MMMM Do YYYY")}</b> -
                  <b>{moment(album.photos[album.photos.length - 1].exif_timestamp).format(" MMMM Do YYYY")}</b>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </div>

          <div
            style={{
              position: "fixed",
              top: TOP_MENU_HEIGHT + 10,
              right: 10,
              float: "right",
              zIndex: 1000,
            }}
          >
            <Button
              active={this.state.showMap}
              color="blue"
              icon
              labelPosition="right"
              onClick={() => {
                this.setState({
                  showMap: !this.state.showMap,
                });
              }}
              floated="right"
            >
              <Icon name="map" inverted />
              {this.state.showMap ? this.props.t("autoalbumgallery.hidemap") : this.props.t("autoalbumgallery.showmap")}
            </Button>
          </div>

          <Divider hidden />

          <div>
            {album.people.length > 0 && (
              <div>
                <Header as="h3">
                  <Icon name="users" /> {this.props.t("people")}
                </Header>

                <Label.Group circular>
                  {album.people.map((person, idx) => (
                    <Label
                      key={person.id}
                      as={Link}
                      to={`/person/${person.id}`}
                      color={colors[idx % album.people.length]}
                    >
                      <SecuredImageJWT avatar spaced="right" src={serverAddress + person.face_url} />
                      <b>{person.name}</b>
                    </Label>
                  ))}
                </Label.Group>
              </div>
            )}

            <div>
              {_.toPairs(byDate).map((v, i) => {
                let locations = v[1]
                  .filter((photo) => (photo.geolocation_json.features ? true : false))
                  .map((photo) => {
                    if (photo.geolocation_json.features) {
                      return photo.geolocation_json.features[photo.geolocation_json.features.length - 3].text;
                    }
                    return "";
                  });
                return (
                  <div>
                    <Divider hidden />

                    <Header>
                      <Icon name="calendar outline" />
                      <Header.Content>
                        {`Day ${i + 1} - ` + moment(v[0]).format("MMMM Do YYYY")}
                        <Header.Subheader>
                          <Breadcrumb
                            divider={<Icon name="right chevron" />}
                            sections={_.uniq(locations).map((e) => {
                              return { key: e, content: e };
                            })}
                          />
                        </Header.Subheader>
                      </Header.Content>
                    </Header>

                    {locations.length > 0 && this.state.showMap && (
                      <div
                        style={{
                          margin: "auto",
                          paddingLeft: 3,
                          paddingRight: 2.5,
                          paddingTop: 10,
                          paddingBottom: 5,
                        }}
                      >
                        <AlbumLocationMap photos={v[1]} />
                      </div>
                    )}

                    {v[1].map((photo) => (
                      <div
                        onClick={() => {
                          let indexOf = this.props.albumsAutoGalleries[this.props.match.params.albumID].photos
                            .map((i) => i.image_hash)
                            .indexOf(photo.image_hash);
                          console.log(indexOf);
                          this.setState({
                            lightboxImageIndex: indexOf,
                            lightboxShow: true,
                          });
                        }}
                        style={{
                          display: "inline-block",
                          paddingTop: 2.5,
                          paddingBottom: 2.5,
                          paddingLeft: 2.5,
                          paddingRight: 2.5,
                        }}
                      >
                        <Tile
                          video={photo.video === true}
                          height={this.state.entrySquareSize}
                          width={this.state.entrySquareSize}
                          image_hash={photo.image_hash}
                        ></Tile>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {this.state.lightboxShow && (
            <LightBox
              idx2hash={this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.map((i) => i.image_hash)}
              lightboxImageIndex={this.state.lightboxImageIndex}
              lightboxImageId={
                this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[this.state.lightboxImageIndex]
                  .image_hash
              }
              onCloseRequest={() => this.setState({ lightboxShow: false })}
              onImageLoad={() => {
                this.getPhotoDetails(
                  this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[this.state.lightboxImageIndex]
                    .image_hash
                );
              }}
              onMovePrevRequest={() => {
                let nextIndex =
                  (this.state.lightboxImageIndex +
                    this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.length -
                    1) %
                  this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.length;
                this.setState({
                  lightboxImageIndex: nextIndex,
                });
                this.getPhotoDetails(
                  this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[nextIndex].image_hash
                );
              }}
              onMoveNextRequest={() => {
                let nextIndex =
                  (this.state.lightboxImageIndex +
                    this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.length +
                    1) %
                  this.props.albumsAutoGalleries[this.props.match.params.albumID].photos.length;
                this.setState({
                  lightboxImageIndex: nextIndex,
                });
                this.getPhotoDetails(
                  this.props.albumsAutoGalleries[this.props.match.params.albumID].photos[nextIndex].image_hash
                );
              }}
            />
          )}
        </div>
      );
    } else {
      return (
        <div style={{ height: 60, paddingTop: 10 }}>
          <Header as="h4">
            <Header.Content>
              {this.props.fetchingAlbumsAutoGalleries ? "Loading..." : "No images found"}
              <Loader inline active={this.props.fetchingAlbumsAutoGalleries} size="mini" />
            </Header.Content>
          </Header>
        </div>
      );
    }
  }
}

AlbumAutoGalleryView = compose(
  connect((store) => {
    return {
      fetchingAlbumsAutoGalleries: store.albums.fetchingAlbumsAutoGalleries,
      albumsAutoGalleries: store.albums.albumsAutoGalleries,
      photoDetails: store.photos.photoDetails,
    };
  }),
  withTranslation()
)(AlbumAutoGalleryView);
