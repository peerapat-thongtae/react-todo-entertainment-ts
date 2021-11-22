export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MediaDetail {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface Media {
  id: number;
  mediaName: string;
  mediaType: string;
  createdAt: Date;
  updatedAt: Date;
  mediaDetail: MediaDetail;
}

export interface Todo {
  id: string;
  mediaId: number;
  userId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  media: Media;
}

export interface CreatedBy2 {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre2 {
  id: number;
  name: string;
}

export interface LastEpisodeToAir2 {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network2 {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCompany2 {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry2 {
  iso_3166_1: string;
  name: string;
}

export interface Season2 {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage2 {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Result {
  backdrop_path: string;
  created_by: CreatedBy2[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre2[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir2;
  name: string;
  next_episode_to_air?: any;
  networks: Network2[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany2[];
  production_countries: ProductionCountry2[];
  seasons: Season2[];
  spoken_languages: SpokenLanguage2[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface TodoInterface {
  statusCode: number;
  success: boolean;
  message: string;
  todos: Todo[];
  results: Result[];
  count: number;
  page: string;
}
