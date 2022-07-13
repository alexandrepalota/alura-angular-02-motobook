export interface Bike {
  id: number,
  postDate: Date,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  comments: number,
  userId: number
}

export type Bikes = Array<Bike>
