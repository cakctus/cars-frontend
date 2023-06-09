import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const chatApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/chat" }),
  tagTypes: ["Chats"],
  endpoints: (build) => ({
    getChats: build.query({
      query: (myId) => `/my-chat/${myId.myId}/${myId.userId}`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }: { id: any }) => ({
                type: "Chats" as const,
                id,
              })),
              "Chats",
            ]
          : ["Chats"],
    }),
    createMessage: build.mutation({
      query: (payload) => ({
        url: "/addmsg",
        method: "POST",
        body: { ...payload },
      }),
    }),
    getMessage: build.mutation({
      query: (payload) => ({
        url: "/getmsg",
        method: "POST",
        body: { ...payload },
      }),
    }),
  }),
})

export const {
  useGetChatsQuery,
  useCreateMessageMutation,
  useGetMessageMutation,
} = chatApi
