import React from "react"


export default function DetailCari({params}: {params: {slug:string}}) {

  return (
    <div>
        Detail User : {params.slug}
    </div>
  )
}
