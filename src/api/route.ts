export async function GET() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  })
  const movies = await res.json()
 
  return Response.json({ movies })
}
