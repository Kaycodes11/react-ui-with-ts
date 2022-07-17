import {BaseQueryFn, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ThunkDispatch} from "@reduxjs/toolkit";


// interface Pokemon {
//     id: number;
//     name: string;
//     order: number;
//     abilities: any[];
//     stats: Array<any>;
//     base_experience: number;
//     height: number;
//     held_items: any[];
//     moves: Array<object>;
//     species: { name: string; url: string; };
//     sprites: {
//         back_default: string;
//         back_female: string;
//         back_shiny: string;
//         back_shiny_female: string;
//         front_default: string;
//         front_female: string;
//         front_shiny_female: string;
//         other: Record<string, any>;
//         versions: Record<string, any>
//     }
// }
//
// type Poke = Partial<Pokemon>;

export interface BaseQueryApi {
    signal: AbortSignal
    dispatch: ThunkDispatch<any, any, any>
    getState: () => unknown
}

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
    | {
    error: E
    data?: undefined
    meta?: M
}
    | {
    error?: undefined
    data: T
    meta?: M
};

// making a custom baseQuery with `BaseQuery<argsType, resultType, errorType, extraOptionsType, metaType>

// BaseQuery fn type implementation
// export type BaseQueryFn1<Args = any,
//     Result = unknown,
//     Error = unknown,
//     DefinitionExtraOptions = {},
//     Meta = {}> = (
//     args: Args,
//     api: BaseQueryApi,
//     extraOptions: DefinitionExtraOptions
// ) => MaybePromise<QueryReturnValue<Result, Error, Meta>>

// const simpleBaseQuery: BaseQueryFn<string, unknown, { reason: string }, { shout?: boolean }, { timestamp: number }> = (arg, api: BaseQueryApi, extraOptions) => {
//     const meta = {timestamp: Date.now()};
//     if (arg === 'forceFail') {
//         return {
//             error: {
//                 reason: 'Intentionally requested to fail!',
//                 meta,
//             },
//         }
//     }
//
//     if (extraOptions.shout) {
//         return {data: "CONGRATULATIONS", meta};
//     }
//     return {data: 'congratulations', meta};
// }

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    tagTypes: [],
    endpoints: (builder) => ({
        // builder.query<ReturnType data, argument datatype>
        getPokemonByName: builder.query({
            query: (name: string) => `pokemon/${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, i.e. auto-generated based on endpoint method name
export const {useGetPokemonByNameQuery} = pokemonApi
