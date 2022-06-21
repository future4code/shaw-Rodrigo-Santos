export type recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export type user = {
   id: string
   name: string
   email: string
   password: string
   recipes?: recipe[]
}

export type lanenuStaff = {
   id: number,
   name: string,
   email: string,
   type: string
}