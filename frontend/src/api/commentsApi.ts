// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Comment  {
  id?: string;
  publicationId: string;
  user: string;
  comment: string;
  hasRating: boolean;
  rating?: number;
  hasAttachment: boolean;
  attachment?: string;
};

// Define a service using a base URL and expected endpoints
export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${import.meta.env.VITE_API_URL}`
    /**
     * here you can add headers to requests
     */
}),
  tagTypes: ["Comments"] as const, 
  endpoints: (builder) => ({
    getCommentsByPublicationId: builder.query<Comment[], string>({
      query: (publicationId) => ({
        url: `comments/${publicationId}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: "Comments", id }],
    }),
     postCommentInPublication: builder.mutation<Comment, Partial<Comment>>({
      query: (body) => ({
        url: `/comments`,
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        // Optimistically update cache
        const patchResult = dispatch(
          commentsApi.util.updateQueryData(
            "getCommentsByPublicationId",
            arg.publicationId!,
            (draft) => {
              draft.push({
                ...arg,
                id: "temp-" + Math.random().toString(36).slice(2), // fake ID
              } as Comment);
            }
          )
        );

        try {
          await queryFulfilled; // wait for server
        } catch {
          patchResult.undo(); // rollback if failed
        }
      },
      invalidatesTags: (result, error, arg) => [
        { type: "Comments", id: arg.publicationId },
      ],
    }),
  }),

  })


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCommentsByPublicationIdQuery,
    usePostCommentInPublicationMutation
} = commentsApi