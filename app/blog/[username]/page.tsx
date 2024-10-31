
 async function getBlog(username: string) {
  const res = await fetch(`https://api.vercel.app/blog/${username}`)
  return res.json()
}
 
async function getAuthors(username: string) {
  const res = await fetch(`https://api.vercel.app/blog/${username}/albums`)
  return res.json()
}
 
export default async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  const artistData = getBlog(username)
  const albumsData = getAuthors(username)
 
  // Initiate both requests in parallel
  const [artist, albums] = await Promise.all([artistData, albumsData])
  console.log(albums);
  
 
  return (
    <div className="p-5">
      <h1>{artist.name}</h1>
    </div>
  )
}