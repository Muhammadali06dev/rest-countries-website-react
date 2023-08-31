import { useState, useEffect } from "react"


function useFetch(url) {
   const [data, setData] = useState(null)
   const [isPending, setIsPending] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {

      const fetchData = async () => {
         setIsPending(true)
         try {
            const req = await fetch(url)
            if (!req.ok) {
               throw new Error(req.statusText)
            }
            const data = await req.json()
            setIsPending(false)
            setData(data)
         } catch (err) {
            setError(err.message)
            setIsPending(false)
         }
      }
      fetchData()
   }, [url])

   return { data, isPending, error }
}

export default useFetch