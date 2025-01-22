import { memo } from "react"


function C1({veri, f1}) {
   
   
    return(
        <>
            <div>
                gelen veri: {veri}
                <hr/>
                <button onClick={()=>{f1("c1 den gelen uyarı")}}>Uyarıyı göster</button>
            </div>
        
        </>
    )
}

export default memo(C1)