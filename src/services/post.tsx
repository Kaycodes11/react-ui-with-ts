import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Post {
    id: number
    name: string
}

type PostsResponse = Post[];

export const post = createApi({
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        // getPosts: build.query<PostsResponse, void>({
        //     query: () => 'posts',
        //     providesTags: (result) =>
        //         result
        //             ? [
        //                 ...result.map(({id}) => ({type: 'Posts' as const, id})),
        //                 {type: 'Posts', id: 'LIST'},
        //             ]
        //             : [{type: 'Posts', id: 'LIST'}],
        //
        // }),
        //              ResultType  QueryArg
        //                    v       v
        getPost: build.query<Post, number>({
            // inferred as `number` from the `QueryArg` type
            //       v
            query: (id) => `post/${id}`,
            // An explicit type must be provided to the raw result that the query returns
            // when using `transformResponse`
            //                             v
            transformResponse: (rawResult: { result: { post: Post } }, meta) => {
                //                                                        ^
                // The optional `meta` property is available based on the type for the `baseQuery` used

                // The return value for `transformResponse` must match `ResultType`
                return rawResult.result.post
            },
        }),
        // getPost: build.query<Post, number>({
        //     // inferred as `number` from the `QueryArg` type
        //     //       v
        //     queryFn: (arg, queryApi, extraOptions, baseQuery) => {
        //         if (arg <= 0) {
        //             return {
        //                 error: {
        //                     status: 500,
        //                     statusText: 'Internal Server Error',
        //                     data: 'Invalid ID provided.',
        //                 },
        //             }
        //         }
        //         const post: Post = {
        //             id: arg,
        //             name: `random_name`,
        //         }
        //         // For the success case, the return type for the `data` property
        //         // must match `ResultType`
        //         //              v
        //         return {data: post};
        //     },
        // }),
    }),
});

export const { useGetPostQuery } = post;
