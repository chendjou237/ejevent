import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// import fs from "fs";
// import path from "path";
import config from '@/lib/config.json'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function updateConfigJson(newData:{}){
//   try {
//     const filePath = path.join(process.cwd(), "lib/config.json");
//     const data = {
//        config, ...newData
//     }
//     fs.writeFileSync(filePath, JSON.stringify(newData, null, 2)); // Pretty-print JSON

//   } catch (error) {
//    const message = `error while storing the new site config, ${error}`
//    console.error(message)
//    throw Error(message)
//   }
// }
