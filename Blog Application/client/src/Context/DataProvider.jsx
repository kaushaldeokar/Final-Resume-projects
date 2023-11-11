
import { createContext,useState } from "react"

export const DataContext=createContext(null);



const DataProvider=(props)=>{

    const {children}=props;

    const [account,setAcc]=useState({FullName:"",Email:""});
    //ab jaha bhi in states ko use krna h data provider ko wah wrap krege//

    return (
        <DataContext.Provider value={{
            account,setAcc
        }}>
            {children}

        </DataContext.Provider>
    )
}

export default DataProvider;