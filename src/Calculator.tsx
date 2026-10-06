import { useState } from 'react'

// interface screenProps{} demasiado para una 

const Screen = ({ written }: { written:string})=>{
    return(
        <div className="screen">
            <p style={{fontFamily:"Press Start 2P"}}>{written}</p>
        </div>
    );
}

export default function Calculator(){

    const [written, setWritten] = useState("");

    const button_names = ["<-","AC","=","/",7,8,9,"X",4,5,6,"-",1,2,3,"+",0]
    let buttons = [];

    return(
        <div className="calculator">
            <Screen written={written}></Screen>
            <div className='btn-container'>
                {
                    button_names.map( name => {
                        let btn = <button id={`${name}`} onClick={()=>
                            {
                                if(name != "<-" && name != "AC" && name != "="){
                                    if(name == "X") setWritten(written+"*");
                                    else setWritten(written+name);
                                }
                                switch(name){
                                    case "AC":
                                         setWritten("");
                                         break;
                                    case "=":
                                        setWritten(eval(written))
                                        break;
                                    case "<-":
                                        setWritten(written.slice(0,-1))
                                        break;
                                    default:
                                         console.log(`${name}`)
                                         break;
                                }
                            }
                        }>{name}</button>;
                        buttons.push(btn)
                        return btn;
                    })
                }
            </div>
        </div>
    );
}