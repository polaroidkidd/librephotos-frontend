import { z } from "zod";

export const Face = z.object({
  id: z.number(),
  image: z.string().nullable(),
  photo: z.string().nullable(),
  person: z.number(),
  person_label_probability: z.number(),
  person_name: z.string(),
});

export const FaceList = z.array(Face);

export const SetFacesLabelResponse = z.object({
  status: z.boolean(),
  results: FaceList,
  updated: FaceList,
  not_updated: FaceList,
});

// To-Do: Should be siilar to SetFacesLabelResponse
export const DeleteFacesResponse = z.object({
  status: z.boolean(),
  results: z.array(z.number()),
  deleted: z.array(z.number()),
  not_deleted: z.array(z.number()),
});

export const TrainFacesResponse = z.object({
  status: z.boolean(),
  // To-Do: Why is it not a number?!?!
  job_id: z.string().optional(),
});

export const ScanFacesResponse = z.object({
  status: z.boolean(),
  // To-Do: Why is it not a number?!?!
  job_id: z.string().optional(),
});

export const DataPoint = z.object({
  x: z.number(),
  y: z.number(),
  size: z.number(),
});

export const ClusterFaceDatapoint = z.object({
  person_id: z.number(),
  person_name: z.string(),
  // To-Do: Why ?
  person_label_is_inferred: z.boolean().nullable(),
  color: z.string(),
  face_url: z.string(),
  value: DataPoint,
});

export const ClusterFaces = z.array(ClusterFaceDatapoint);

export const InferredFaces = FaceList;

export const LabeledFaceSchema = z.object({
  id: z.number(),
  image: z.string(),
  face_url: z.string(),
  photo: z.string(),
  person: z.number(),
  person_name: z.string(),
  person_label_probability: z.number(),
});

export type ILabeledFace = z.infer<typeof LabeledFaceSchema>;

export type IFacesState = {
  faces: [];
  labeledFaces: [];
  inferredFaces: [];
  facesList: [];
  labeledFacesList: [];
  inferredFacesList: [];
  facesVis: [];
  training: boolean;
  trained: boolean;
  clustering: boolean;
  clustered: boolean;
  error: unknown;
};
