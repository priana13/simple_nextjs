import React from "react"



async function getData(param:string){

  const res = fetch(`https://api.github.com/search/users?q=${param}`)

  return (await res).json();
}



export default async function DetailCari({params}: {params: {slug:string}}) {

  const data = await getData(params.slug);

  return (
    <div>
        Detail User : {params.slug}
        <div>
          {JSON.stringify(data)}
        </div>
    </div>
  )
}
