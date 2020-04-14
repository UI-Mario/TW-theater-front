import { myAxios } from './config'

// const apikey = '0df993c66c0c636e29ecbb5344252a4a'
// const apikey = '0b2bdeda43b5688921839c8ecb20399b'
// 正在热映
export function getNowMovieByCount (start, count) {
  // const url = `/v2/movie/in_theaters?apikey=${apikey}&start=${start}&count=${count}`
  const url = `/v2/movie/in_theaters&start=${start}&count=${count}`
  return myAxios({
    url,
    methods: 'get'
  })
}

// 正在热映
export function getAllNowMovie () {
  // const url = `/v2/movie/in_theaters?apikey=${apikey}`
  const url = `http://localhost:8080/movie/in_theaters`
  return myAxios({
    url,
    methods: 'get'
  })
}

// 最近热门电影
export function getNewMovies () {
  // const url = `/v2/movie/new_movies?apikey=${apikey}`
  const url = `http://localhost:8080/movie/new_movies`
  return myAxios({
    url,
    methods: 'get'
  })
}

export function getNewMoviesByCount (start, count) {
  // const url = `/v2/movie/new_movies?apikey=${apikey}&start=${start}&count=${count}`
  const url = `http://localhost:8080/movie/new_movies/start=${start}&count=${count}`
  return myAxios({
    url,
    methods: 'get'
  })
}

// 口碑榜
export function getWeekMovies () {
  // const url = `/v2/movie/weekly?apikey=${apikey}`
  const url = `/v2/movie/weekly`
  return myAxios({
    url,
    methods: 'get'
  })
}

export function testsearch () {
  const url = `/v2/movie/top250&start=1&count=40`
  return myAxios({
    url,
    methods: 'get'
  })
}

// 电影详情页
export function getMovieById (id) {
  // const url = `/v2/movie/subject?apikey=${apikey}/${id}`
  const url = `http://localhost:8080/movie/detail/${id}`
  return myAxios({
    url,
    methods: 'get'
  })
}

// top250
export function getTop250ByCount (start, count) {
  // const url = `/v2/movie/top250&start=${start}&count=${count}`
  const url = `http://localhost:8080/movie/top250/start=${start}&count=${count}`
  return myAxios({
    url,
    methods: 'get'
  })
}
