import React from "react"



async function getDataUser(param:string){

  const res = fetch(`https://api.github.com/search/users?q=${param}`)

  return (await res).json();
}


async function getDataRepos(param:string){

  const res = fetch(`https://api.github.com/search/users/${param}/repos`)

  await new Promise(r=> setTimeout(r, 2000))

  return (await res).json();
}



export default async function DetailCari({params}: {params: {slug:string}}) {

  const dataUser = getDataUser(params.slug);

  const dataRepos = getDataRepos(params.slug);

  const [user, repos] = await Promise.all([dataUser, dataRepos]);

  return (
    <div>
      <p>Detail User : {params.slug} </p>       
      <div>
        {JSON.stringify(user)}
      </div>

      <p>List Repository: </p>

      <div>{JSON.stringify(repos)}</div>

     
        
    </div>
  )
}
