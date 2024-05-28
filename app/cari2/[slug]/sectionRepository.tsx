async function getDataRepos(param:string){

  const res = fetch(`https://api.github.com/users/${param}/repos`)


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

  export default RepoList