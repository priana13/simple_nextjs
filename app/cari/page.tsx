"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import SectionResult from './[slug]/sectionResult';


export default function Cari() {

    const [query, setQuery] = useState('')

    const onSearch = (e:any) => {
        e.preventDefault();

        const inputQuery = e.target[0].value;

        setQuery(inputQuery); 

    }


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     
        <h2>Cari</h2>
        <form action="" onSubmit={onSearch}>

          <input type="text" className="mr-2 shadow rounded-sm mb-2" placeholder='Cari User github'            

          />         


          <br />

          <button className='bg-blue-800 text-white rounded p-2' type="submit"
            
          >Cari Orang</button> 

          <br />

        </form>

        {"Mencari : " + query}

        { query && <SectionResult query={query} />}

        

        </div>
    </main>
  )
}
