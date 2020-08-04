import * as React from "react";

export interface MoviesInt {
    res: object;
}

export interface ResponseInt {
    genres: Array<string>
}

export interface PayloadInt {
    id: string;
    error?: boolean | string;
    flag?: boolean;
}

export interface ActionInt {
    payload: PayloadInt
}

export interface ButtonInt {
    type: "button" | "submit" | "reset";
    additionalClassName: string;
    onClickCallback: (e: React.MouseEvent) => void;
    name: string;
}

export interface FetchResultInt {
    loading: Object;
    error: Object;
    handlerId: string;
    children: React.ReactElement;
}

export interface ErrorBoundaryPropsInt {
    children: React.ReactNode;
}

export interface ErrorBoundaryStateInt {
    hasError: boolean;
}

export interface FilmsGalleryInt {
    films: Array<any>;
}

export interface CommonPropsInt {
    common: {
        loading: string,
        error: string
    };
}

export interface MovieInt {
    data: Array<any>;
    total: number;
}

export interface FilmDescriptionInt {
    id: number;
    title: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    release_date: string;
    poster_path: string;
    overview?: string;
    budget?: number;
    revenue?: number;
    genres: string[];
    runtime?: number;
}

export interface RouterParamsInt {
    id: string
}

export interface MoviesPropsInt {
    movies: {
        moviesData?: MovieInt;
        movieData?: FilmDescriptionInt;
    }
}

export interface SearchOptionsConfigOptionsPropsInt {
    radioBtnName: string;
    name: string;
    value: string;
}

export interface FilmSearchComponentPropsInt {
    searchOptionsConfig: Array<SearchOptionsConfigOptionsPropsInt>;
    searchState: string;
    getAndSetSearchState: (e: React.ChangeEvent) => void;
    searchByState: string;
    findMoviesByButton: (e: React.MouseEvent) => void;
    getAndSetSearchByState: (e: React.ChangeEvent) => void;
    title: string;
    chooserTitle: string;
}

export interface HeaderInt {
    headerChildren: any;
    upperChild?: React.ReactNode;
    middleChild?: React.ReactNode;
}

export interface OptionChooserInt {
    optionsConfig: Array<any>;
    defaultValue: string;
    onChangeCallback: (e: React.ChangeEvent) => void;
}

export interface TextInputPropsInt {
    type: string;
    defaultValue: string;
    placeholder: string;
    onChangeCallback: (e: React.ChangeEvent) => void;
}

export interface SortControlPanelInt {
    title: string;
    filterTitle?: string;
    children?: React.ReactNode;
}

export interface SearchQueryInt {
    searchQuery: string;
}
