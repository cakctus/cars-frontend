import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/profile" }),
  tagTypes: ["Profile"],
  endpoints: (build) => ({
    getCountries: build.query({
      query: () => `/countries`,
    }),
    updateUser: build.mutation({
      query: (userDto) => ({
        url: "/user-dto",
        method: "POST",
        body: userDto,
      }),
    }),
  }),
})

export const { useGetCountriesQuery, useUpdateUserMutation } = profileApi
