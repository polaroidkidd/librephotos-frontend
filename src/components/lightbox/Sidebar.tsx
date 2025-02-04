import { ActionIcon, Anchor, Avatar, Badge, Box, Button, Group, Stack, Text, Textarea, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-virtualized/styles.css";
import { push } from "redux-first-history";
// only needs to be imported once
import { Edit, File, FileInfo, Map2, Note, Photo, Tags, Users, X } from "tabler-icons-react";

import { generatePhotoIm2txtCaption } from "../../actions/photosActions";
import type { Photo as PhotoType } from "../../actions/photosActions.types";
import { searchPhotos } from "../../actions/searchActions";
import { serverAddress } from "../../api_client/apiClient";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { LocationMap } from "../LocationMap";
import { Tile } from "../Tile";
import { ModalPersonEdit } from "../modals/ModalPersonEdit";
import { FileInfoComponent } from "./FileInfoComponent";
import { TimestampItem } from "./TimestampItem";

type Props = {
  isPublic: boolean;
  photoDetail: PhotoType;
  closeSidepanel: () => void;
};

export function Sidebar(props: Props) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [personEditOpen, setPersonEditOpen] = useState(false);
  const [selectedFaces, setSelectedFaces] = useState<any[]>([]);
  const { generatingCaptionIm2txt } = useAppSelector(store => store.photos);
  const { photoDetail, isPublic, closeSidepanel } = props;
  const { width } = useViewportSize();
  const SCROLLBAR_WIDTH = 15;
  let LIGHTBOX_SIDEBAR_WIDTH = 320;
  if (width < 600) {
    LIGHTBOX_SIDEBAR_WIDTH = width - SCROLLBAR_WIDTH;
  }
  return (
    <Box
      sx={theme => ({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.sm,
      })}
      style={{
        right: 0,
        top: 0,
        float: "right",
        width: LIGHTBOX_SIDEBAR_WIDTH,
        height: window.innerHeight,
        whiteSpace: "normal",
        position: "fixed",
        overflowY: "scroll",
        overflowX: "hidden",
        zIndex: 250,
      }}
    >
      {photoDetail && (
        <Stack>
          <Group position="apart">
            <Title order={3}>Details</Title>
            <ActionIcon
              onClick={() => {
                closeSidepanel();
              }}
            >
              <X />
            </ActionIcon>
          </Group>
          {/* Start Item Time Taken */}
          <TimestampItem photoDetail={photoDetail} dispatch={dispatch} />
          {/* End Item Time Taken */}
          {/* Start Item File Path */}
          <Group>
            <File />
            <Title order={4}>{t("lightbox.sidebar.filepath")}</Title>
          </Group>
          <Anchor href={`${serverAddress}/media/photos/${photoDetail.image_hash}`} target="_blank">
            <Text size="sm">{photoDetail.image_path} </Text>
          </Anchor>

          {/* End Item File Path */}
          {/* Start Item Location */}

          {photoDetail.search_location && (
            <Stack>
              <Title order={4}>
                <Map2 /> {t("lightbox.sidebar.location")}
              </Title>
              <Text>{photoDetail.search_location}</Text>
            </Stack>
          )}

          <div
            style={{
              width: LIGHTBOX_SIDEBAR_WIDTH - 70,
              whiteSpace: "normal",
              lineHeight: "normal",
            }}
          >
            {photoDetail.exif_gps_lat && <LocationMap photos={[photoDetail]} />}
          </div>

          {/* End Item Location */}
          {/* Start Item People */}

          {photoDetail.people.length > 0 && (
            <Stack>
              <Group>
                <Users />
                <Title order={4}>{t("lightbox.sidebar.people")}</Title>
              </Group>
              {photoDetail.people.map(nc => (
                <Group position="center" spacing="xs">
                  <Button
                    variant="subtle"
                    leftIcon={<Avatar radius="xl" src={serverAddress + nc.face_url} />}
                    onClick={() => {
                      dispatch(searchPhotos(nc.name));
                      dispatch(push("/search"));
                    }}
                  >
                    <Text align="center" size="sm">
                      {nc.name}
                    </Text>
                  </Button>
                  <ActionIcon
                    onClick={() => {
                      setSelectedFaces([{ face_id: nc.face_id, face_url: nc.face_url }]);
                      setPersonEditOpen(true);
                    }}
                    variant="light"
                  >
                    <Edit size={17} />
                  </ActionIcon>
                </Group>
              ))}
            </Stack>
          )}

          {/* End Item People */}
          {/* Start Item Caption */}

          <Stack>
            <Group>
              <Note />
              <Title order={4}>{t("lightbox.sidebar.caption")}</Title>
            </Group>
            {false && photoDetail.captions_json.im2txt}
            <Stack>
              <Textarea
                value={photoDetail.captions_json.im2txt}
                disabled={isPublic}
                placeholder={photoDetail.captions_json.im2txt}
              />
              <Group>
                <Button disabled={isPublic} size="sm" color="green">
                  {t("lightbox.sidebar.submit")}
                </Button>
                <Button
                  loading={generatingCaptionIm2txt}
                  onClick={() => {
                    dispatch(generatePhotoIm2txtCaption(photoDetail.image_hash));
                  }}
                  disabled={isPublic || (generatingCaptionIm2txt != null && generatingCaptionIm2txt)}
                  size="sm"
                  color="blue"
                >
                  {t("lightbox.sidebar.generate")}
                </Button>
              </Group>
            </Stack>
          </Stack>

          {/* End Item Caption */}
          {/* Exif Data */}
          <Stack>
            <Group>
              <FileInfo />
              <Title order={4}>Info</Title>
            </Group>
            {
              // To-Do: Add locales for exif data
            }
            <FileInfoComponent description="Camera" info={photoDetail.camera?.toString()} />
            <FileInfoComponent description="Lens" info={photoDetail.lens?.toString()} />
            <FileInfoComponent description="Focal Length" info={`${Math.round(photoDetail.focal_length!)} mm`} />
            <FileInfoComponent description="Aperture" info={`ƒ / ${photoDetail.fstop}`} />
            <FileInfoComponent description="Exposure Time" info={`${photoDetail.shutter_speed} s`} />
            <FileInfoComponent description="ISO" info={photoDetail.iso?.toString()} />
            <FileInfoComponent description="Subject Distance" info={`${photoDetail.subjectDistance} m`} />
            <FileInfoComponent description="Digital Zoom Ratio" info={photoDetail.digitalZoomRatio?.toString()} />
            <FileInfoComponent
              description="Focal Length 35mm Equivalent"
              info={`${photoDetail.focalLength35Equivalent} mm`}
            />
            <FileInfoComponent description="Dimensions" info={`${photoDetail.height} x ${photoDetail.width}`} />
            <FileInfoComponent
              description="Size"
              info={`${Math.round((photoDetail.size / 1024 / 1024) * 100) / 100} MB`}
            />
          </Stack>

          {/* Start Item Scene */}
          {photoDetail.captions_json.places365 && (
            <Stack>
              <Group>
                <Tags />
                <Title order={4}>{t("lightbox.sidebar.scene")}</Title>
              </Group>
              <Text weight={700}>{t("lightbox.sidebar.attributes")}</Text>
              <Group>
                {photoDetail.captions_json.places365.attributes.map(nc => (
                  <Badge
                    key={`lightbox_attribute_label_${photoDetail.image_hash}_${nc}`}
                    color="blue"
                    onClick={() => {
                      dispatch(searchPhotos(nc));
                      dispatch(push("/search"));
                    }}
                  >
                    {nc}
                  </Badge>
                ))}
              </Group>

              <Text weight={700}>{t("lightbox.sidebar.categories")}</Text>
              <Group>
                {photoDetail.captions_json.places365.categories.map(nc => (
                  <Badge
                    key={`lightbox_category_label_${photoDetail.image_hash}_${nc}`}
                    color="teal"
                    onClick={() => {
                      dispatch(searchPhotos(nc));
                      dispatch(push("/search"));
                    }}
                  >
                    {nc}
                  </Badge>
                ))}
              </Group>
            </Stack>
          )}
          {/* End Item Scene */}
          {/* Start Item Similar Photos */}
          {photoDetail.similar_photos.length > 0 && (
            <div>
              <Group>
                <Photo />
                <Title order={4}>{t("lightbox.sidebar.similarphotos")}</Title>
              </Group>
              <Text>
                <Group spacing="xs">
                  {photoDetail.similar_photos.slice(0, 30).map(el => (
                    <Tile video={el.type.includes("video")} height={85} width={85} image_hash={el.image_hash} />
                  ))}
                </Group>
              </Text>
            </div>
          )}
          {/* End Item Similar Photos */}
        </Stack>
      )}
      <ModalPersonEdit
        isOpen={personEditOpen}
        onRequestClose={() => {
          setPersonEditOpen(false);
          setSelectedFaces([]);
        }}
        selectedFaces={selectedFaces}
      />
    </Box>
  );
}
