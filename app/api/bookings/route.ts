t async function POST(request: Request) {
   const res = await fetch('https://data.mongodb-api.com/...', {
     headers: {
       'Content-Type': 'application/json',
       'API-Key': process.env.DATA_API_KEY,
     },
   })
   const data = await res.json()
  
   return Response.json({ data })
 }