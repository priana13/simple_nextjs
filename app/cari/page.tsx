"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';


export default function Cari() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     
        <h2>Cari</h2>
        <form action="">

          <input type="text" className="mr-2 shadow rounded-sm mb-2" placeholder='Cari User github'            

          />
          

          <br />

          <h2 className='mt-2'>Hasil: </h2>

          <br />

          <button className='bg-blue-800 text-white rounded p-2' type="button"
            
          >Cari Horang</button>

        </form>

        </div>
    </main>
  )
}
