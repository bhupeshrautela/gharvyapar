async function getProperty(){
    let response=await fetch("http://localhost:3000/property")
    return response.json()

}
export default getProperty