import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Comment } from './commentsApi';

export interface Details {
  id: string;
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  tags?: string[];
  category?: string;
}

export interface Publication  {
  id: string;
  userId: string;
  authorName: string;
  publicationType: 'post' | 'article' | 'photo' | 'news' | 'update' | 'story' | 'blog';
  imageUrl?: string;
  thumbnail?: string;
  description: string;
  createdAt: string;
  replies?: Comment[];
}

// Define a service using a base URL and expected endpoints
export const publicationsApi = createApi({
  reducerPath: 'publicationsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${import.meta.env.VITE_API_URL}`
    /**
     * here you can add headers to requests
     */
}),
  tagTypes: ["Publications"] as const, 
  endpoints: (builder) => ({
    getPublicationsByCategory: builder.query<Publication[], string>({
      query: (category) => ({
        url: `publications/${category}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: "Publications", id }],
    }),
  })

  })


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPublicationsByCategoryQuery
} = publicationsApi