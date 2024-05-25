import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url:string) => fetch(url).then(res => res.json())


interface Props{
  query: string
}


export default function SectionResult({query}: Props) { 
  
  
  const {data , error} = useSWR(`https://api.github.com/search/users?q=${query}` , fetcher);


  console.log(query);

  return (
    <div > 
      <p>Hasil Pencarian : </p>

      {data && data.items.map((user:any, index:number) => {

        return <ul className='my-2'>
            <li > <Link href={`/cari/${user.login}` } >{user.login}</Link></li>
            <li > <Link href={user.repos_url}>{user.repos_url}</Link> </li>
          </ul>

      })}
   

      
    </div>
  )
}
