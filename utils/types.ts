export interface Service {
   id: string,
   name: string,
   description: string,
   price: number,
   image: string
}



export interface Decoration {
   id: number,
   name: {[key:string]:string} | null,
   description: {[key:string]:string} | null,
   image: string,
   type: string,
   status: string  | undefined | null,
   slug: string,
   images: string[] | null
}

export interface CartItem{
   name: string,
   description:string,
   price: number,
   id: number,
   quantity: number,
   start_at: Date,
   end_at: Date,
image: string,
   type: string,
}

export interface Booking {
   id: number  ,
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


enum Status {
   pending = 'Pending',
   completed = 'Completed',
   cancelled = 'Cancelled'
}

export interface GalleryItemInterface{
   title: {[key:string]:string},
   description: {[key:string]:string},
   image: string,
   id: number,
}
