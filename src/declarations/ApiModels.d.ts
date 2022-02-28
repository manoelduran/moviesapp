interface User {
    id: string;
    name: string;
    avatar: string;
};

interface Movie {
    id: number;
    title: string;
    adult: boolean;
    popularity: number;
    overview: string;
    poster_path: string;
};

interface MovieParams {
    id: string;
};
