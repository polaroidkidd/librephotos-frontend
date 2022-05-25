import { createSlice } from "@reduxjs/toolkit";

import type { IFacesState } from "./faces.zod";

const initialState: IFacesState = {
  faces: [],
  labeledFaces: [],
  inferredFaces: [],
  facesList: [],
  labeledFacesList: [],
  inferredFacesList: [],
  facesVis: [],
  training: false,
  trained: false,
  clustering: false,
  clustered: false,
  error: undefined,
};

const facesSlice = createSlice({
  name: "faces",
  initialState: initialState,
  reducers: {},
});

export const { reducer: facesReducer, actions: facesActions } = facesSlice;
