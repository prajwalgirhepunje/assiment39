import './HelloUser.css'
 const MorningCSS={
    backgroundColor:"blue",
    color:"black",
    margin:"10px 0px",
 }


function HelloUser(props){
     return(
        <div className='first-container'>
            Hello {props.name}
        </div>
     )
}
export default HelloUser


function GoodMoring(props){
    return(
        <div style={MorningCSS}>
            GoodMoring {props.name}
        </div>
    )
}
function GoodEvening(props){
    return(
        <div style={{
            backgroundColor:"black",
            color:"white",
        }}>
            GoodEvening {props.name}
        </div>
    )
}
export {GoodEvening,GoodMoring}