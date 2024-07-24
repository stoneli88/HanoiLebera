export interface ISeat {
  title: string
  price?: number
  isSold?: boolean
  selected?: Array<ISeat>
}

export interface ITheater {
  title: string
  seat?: Array<ISeat>
}
