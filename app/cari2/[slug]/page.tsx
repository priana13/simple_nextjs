import React from "react"

import { Suspense } from "react";

async function getDataUser(param:string){

  const res = fetch(`https://api.github.com/search/users?q=${param}`)

  return (await res).json();
}


async function getDataRepos(param:string){

  const res = fetch(`https://api.github.com/search/users/${param}/repos`)

  await new Promise(r=> setTimeout(r, 2000))

  return (await res).json();
}

const RepoList = async({slug}:any ) => {

  const dataRepos = await getDataRepos(slug);

  return <>
    <p>Repo List</p>

    <div>
      {JSON.stringify(dataRepos)}
    </div>
  </>
}



export default async function DetailCari({params}: {params: {slug:string}}) {

  const dataUser = await getDataUser(params.slug); 

  // const [user, repos] = await Promise.all([dataUser, dataRepos]);

  return (
    <div>

      <p>Detail User : {params.slug} </p>       
      <div>
        {JSON.stringify(dataUser)}
      </div>   


      <Suspense fallback={<div>Sedang menambil repository</div>} >  
        {/* @ts-ignore */}
        <RepoList slug={params.slug} />

      </Suspense>
        
    </div>
  )
}
