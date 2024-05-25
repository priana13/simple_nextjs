"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';


export default function Calculator() {

  const [angka1, setAngka1] = useState(0);
  const [angka2 , setAngka2]= useState(0);

  const [hasil, sethasil] = useState(0);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     
        <h2>Calculator</h2>
        <form action="">

          <input type="number" className="mr-2 shadow rounded-sm mb-2" placeholder='angka 1'
            onChange={(e) => setAngka1(Number(e.target.value))}

          />
          <input type="number" className="mr-2 shadow rounded-sm" placeholder='angka 2'
            onChange={(e) => setAngka2(Number(e.target.value))}
          />

          <br />

          <h2 className='mt-2'>Hasil: {hasil}</h2>

          <br />

          <button className='bg-blue-800 text-white rounded p-2' type="button"
            onClick={() => sethasil(angka1 + angka2)}
          >Hitung</button>

        </form>

        </div>
    </main>
  )
}
