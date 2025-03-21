import 'bootstrap/dist/css/bootstrap.min.css'
import CrudTable from './table'
import Popup from './popup'
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(false);
  let [status,setStatus] = useState(false);
  const [tempData,setTempData]=useState({})
  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      console.log(rowData,"rowdata")
      setTempData(rowData)
    }
    else{
      setTempData({
        name:null,
        emailid:null,
        phoneNo:null,
        location:null,
        qualification:null
      })
    }
    setShow(true);
  }

  return (
    <>
    <div className="p-4">
      <Popup ref={status} setRef={setStatus} boxShow={show} boxClose={handleClose} fieldData={tempData} setFieldData={setTempData}/>
      <CrudTable boxClick={handleShow} update={status} setUpdate={setStatus}/>
    </div>
    </>
  )
}

export default App
