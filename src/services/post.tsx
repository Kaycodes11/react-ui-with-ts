import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// ## setting default headers on requests like bearer token


// fetchBaseQuery({
//     baseUrl: '/',
//     prepareHeaders: (headers, { getState }) => {
//         const token = (getState() as RootState).auth.token
//
//         // If we have a token set in state, let's assume that we should be passing it.
//         if (token) {
//             headers.set('authorization', `Bearer ${token}`)
//         }
//
//         return headers
//     },
// })

export interface Post {
    id: number
    name: string;
    title?: string;
    body: string;
}

type PostsResponse = Post[]

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        getPosts: build.query<PostsResponse, void>({
            query: () => 'posts',
            // Provides a list of `Posts` by `id`.
            // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
            // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
            providesTags: (result) =>
                // is result available?
                result
                    ? // successful query
                    [
                        ...result.map(({id}) => ({type: 'Posts', id} as const)),
                        {type: 'Posts', id: 'LIST'},
                    ]
                    : // an error occurred, but we still want to re-fetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
                    [{type: 'Posts', id: 'LIST'}],
        }),
        addPost: build.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body,
            }),
            // Invalidates all Post-type queries providing the `LIST` id - after all, depending on the sort order,
            // that newly created post could show up in any lists.
            invalidatesTags: [{type: 'Posts', id: 'LIST'}],
        }),
        getPost: build.query<Post, number>({
            query: (id) => `post/${id}`,
            // optimistic update : https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates#overview

            // async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
            //     const patchResult = dispatch(
            //         api.util.updateQueryData('getPost', id, (draft) => {
            //             Object.assign(draft, patch)
            //         })
            //     )
            //     try {
            //         await queryFulfilled
            //     } catch {
            //         patchResult.undo()
            //
            //         /**
            //          * Alternatively, on failure you can invalidate the corresponding cache tags
            //          * to trigger a re-fetch:
            //          * dispatch(api.util.invalidateTags(['Post']))
            //          */
            //     }
            // },

            // async onQueryStarted(id, {dispatch, queryFulfilled}) {
            //     // `onStart` side-effect
            //     // dispatch(messageCreated('Fetching post...'))
            //     // try {
            //     //     const {data} = await queryFulfilled;
            //     //     // `onSuccess` side-effect
            //     //     dispatch(messageCreated('Post received!'))
            //     // } catch (err) {
            //     //     // `onError` side-effect
            //     //     dispatch(messageCreated('Error fetching post!'))
            //     // }
            // },
            providesTags: (result, error, id) => [{type: 'Posts', id}],
        }),
        updatePost: build.mutation<Post, Partial<Post>>({
            query(data) {
                const {id, ...body} = data
                return {
                    url: `post/${id}`,
                    method: 'PUT',
                    body,
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
            invalidatesTags: (result, error, {id}) => [{type: 'Posts', id}],
        }),
        deletePost: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `post/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: (result, error, id) => [{type: 'Posts', id}],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useGetPostQuery,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi


// export const customApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
//     endpoints: (builder) => ({
//         getUsers: builder.query({
//             query: () => ({
//                 url: `users`,
// validateStatus: (response, result) =>
//     response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
//                 responseHandler: (response) => response.text(), // This is the same as passing 'text'
//             }),
//         }),
//     }),
// })
