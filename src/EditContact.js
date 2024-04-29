import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "./store/userData"
export default function EditContact() {
  const [msg, setName] = useState()
  const [phone, setPhone] = useState()
  const [addr, setAdd] = useState()
  var namebox = useRef()
  var phonebox = useRef()
  var addbox = useRef()
  var emailbox;
  const newdata = useSelector(state => state.data.value)
  const idInsert = useSelector(state => state.data.userId)
  const dispatch = useDispatch()
  var update = (event) => {
    emailForEdit();
    var ob = {
      id: idInsert[0],
      name: namebox.current.value,
      mobile: phonebox.current.value,
      email: emailbox,
      address: addbox.current.value,
    }
    console.log(ob);
    dispatch(updateUser(ob))
    event.preventDefault();
    // event.target.reset();
  }
  let emailForEdit = () => {
    newdata.filter((val) => {
      console.log(val.id == idInsert);
      return val.id == idInsert ? emailbox = val.email : " ";
    })
  }
  var reset = () => {
    setName(" ")
    setPhone(" ")
    setAdd(" ")
    console.log(updateUser());
  }
  return <>
    <div className=" border-2 border-purple-600 rounded-md text-center mx-20 w-[32rem] mx-auto mt-5">
      <div className="font-bold text-2xl text-purple-700 border-b-2 py-2 border-purple-600">
        <h1>Edit Contact</h1>
      </div>
      <form onSubmit={update} className="font-bold">
        <div className="space-y-2 my-5">
          <div className="flex space-x-14 justify-center">
            <div className=" w-36 text-right py-1">User Email  :</div>
            <div className="w-52 text-left py-1">{newdata.filter(uid => uid.id == idInsert).map(val => <input placeholder={val.email} disabled className="placeholder-black mx-auto" />)}</div>
          </div>

          <div className="space-y-2 my-5  ">
            <div className="flex space-x-14 justify-center">
              <div className=" w-36 text-right py-1">Name :</div>
              <div className="w-52 text-left py-1"> <input type="text" ref={namebox} value={msg} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className=" border-purple-500 border-b-2 text-center" required /></div>
            </div>
            <div className="flex justify-center space-x-14">
              <div className=" w-36 text-right py-1">Phone :</div>
              <div className="w-52 text-left py-1">  <input type="text" ref={phonebox} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone" className="border-b-2 border-purple-500 text-center" required min={10} />     </div>
            </div>
            <div className="flex justify-center space-x-14">
              <div className=" w-36 text-right py-1">Address :</div>
              <div className="w-52 text-left py-1"> <input type="text" ref={addbox} value={addr} onChange={(e) => setAdd(e.target.value)} placeholder="Enter Your Address" className="border-b-2 border-purple-500 text-center" required />     </div>
            </div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="bg-purple-700 text-white font-bold rounded px-2 py-1 mx-2">Update</button>
          <button type="button" onClick={reset} className="bg-purple-700  text-white font-bold rounded px-2 py-1 mx-2">Reset</button>
        </div>
      </form>
    </div>
  </>
}