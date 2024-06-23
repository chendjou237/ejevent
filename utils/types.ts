export interface Service {
   id: string,
   name: string,
   description: string,
   price: number,
   image: string
}

export interface Decoration {
   id: string,
   name: string,
   description: string,
   price: number,
   image: string
}
export interface Item {
   id: string,
   name: string,
   description: string,
   price: number,
   image: string
}

export interface Booking {
   id: number | undefined,
   user_id: number,
   user_name: string,
   user_email: string,
   user_contact: string,
   item_id: number,
   item_name: string,
   item_image: string,
   start_at: Date,
   end_at: Date,
   status: string
}

