

export default function Anchor({children}) {
    var id = ""
    try{
        id = children.toLowerCase().trim().replace(/ /g, "-")
    }catch(e){
        console.log(e)
    }
    return (
        <h2 id = {id}>
            {children}
        </h2>
    )
}
