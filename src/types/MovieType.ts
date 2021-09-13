export enum MovieQuery {
  'popular',
  'trending',
  'upcoming',
}

export interface MovieQueryType {
  type: MovieQuery;
}
