interface Movie {
    id: number;
    title: string;
    adult: boolean;
    popularity: number;
    overview: string;
    poster_path: string;
    original_language: string;
    release_date: string;
};

interface MovieParams {
    id: string;
};
