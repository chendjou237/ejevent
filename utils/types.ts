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

export interface CartItem{
   name: string,
   description:string,
   price: number,
   id: string, 
   quantity: number,
   start_at: Date,
   end_at: Date,
image: string
}

export interface Booking {
   id: number | undefined | null,
   user_id: string | undefined | null,
   user_name: string,
   user_email: string,
   user_contact: string | undefined | null,
   item_id: number,
   item_name: string,
   item_image: string,
   start_at: Date | undefined | null,
   end_at: Date | undefined | null,
   status: string
}



