import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/'

const rapidApiKey = import.meta.env.VITE_RAPPID_API_ARTICLE_KEY
  

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // const rapidApiKey = await rapidApiKeyPromise;
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
            // query: (params) => `/summarize?url=https://www.plesk.com/blog/various/403-forbidden-error-what-is-it-how-to-fix-it&length=3`
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;