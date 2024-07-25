export interface ISeat {
  title: string
  status: boolean
}

export interface ITheater {
  title: string
  active?: boolean
  seats: ISeat[][]
}

export interface ITheaterResponse {
  title: string
  seats: ISeat[]
}
