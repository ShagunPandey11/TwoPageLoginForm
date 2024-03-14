import PersonalInfo from "./PersonalInformationForm";
import { Route, Routes } from "react-router-dom";
import AdditionalInformation from "./AdditionalInformation";
import Confirmation from "./Confirmation";

const App=()=>{
    return(
        <>
            <Routes> 
             <Route path="/" element={<PersonalInfo/>}></Route>
             <Route path="/numbers-and-email" element={<AdditionalInformation/>}></Route>
             <Route path="/success" element={<Confirmation/>}></Route>
         </Routes>
        </>
    )
}

export default App;
