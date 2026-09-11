async function getProperty(){
    let response=await fetch("https://gharvyapar.onrender.com/property")
    return response.json()

}
export default getProperty