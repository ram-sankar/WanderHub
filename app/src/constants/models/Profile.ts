export interface Post {
  id: number,
  image: any,
  name: string,
  place: string
}

export interface City {
  id: number,
  name: string,
  state: string,
  date: string
}

export interface Profile extends City, Post {
  id: number,
  name: string,
  citiesCount: number,
  postsCount: number,
  location: string,
}