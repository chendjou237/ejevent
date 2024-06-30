import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from "@/server/db"
import {  decorations } from "@/server/db/schema"
import { Decoration } from "@/utils/types"

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   const data = await db.select().from(decorations);

  res.status(200).json({  data})
}