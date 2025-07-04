import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://api.github.com/users/MayurChaudhary198')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //   }, [])
    
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github



export const githubInfoLoader = async () => {
    const res = await fetch('http://api.github.com/users/MayurChaudhary198')
    return res.json()
}