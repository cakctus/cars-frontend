import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const carAdApi = createApi({
  reducerPath: "carAdApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.100.14:5000/api" }),
  tagTypes: ["CarAd"],
  endpoints: (build) => ({
    getCarBrands: build.query({
      query: () => "/get-all-brands",
    }),
    getCarModels: build.query({
      query: (id) => `/get-all-models/${id}`,
    }),
    getCarGeneration: build.query({
      query: (id) => `/get-all-generation/${id}`,
    }),
    getCarModification: build.query({
      query: (id) => `/cars-modifications/${id}`,
    }),
    getCarModificationDetail: build.query({
      query: (id) => `/cars-modifications-detail/${id}`,
    }),
    createMessage: build.mutation({
      query: (payload) => ({
        url: "/addmsg",
        method: "POST",
        body: { ...payload },
      }),
    }),
  }),
})

export const {
  useGetCarBrandsQuery,
  useGetCarModelsQuery,
  useGetCarGenerationQuery,
  useGetCarModificationQuery,
  useGetCarModificationDetailQuery,
  useCreateMessageMutation,
} = carAdApi
