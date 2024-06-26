import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./store/userData"
export default function AddContact() {

  const [msg, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [addr, setAdd] = useState()

  var namebox = useRef()
  var emailbox = useRef()
  var phonebox = useRef()
  var addbox = useRef()
  const idInsert = useSelector(state => state.data.value)
  const dispatch = useDispatch()
  var save = (event) => {
    var ob = {
      id: idInsert[idInsert.length - 1].id + 1,
      name: namebox.current.value,
      mobile: phonebox.current.value,
      email: emailbox.current.value,
      address: addbox.current.value,
    }
    // console.log(ob);
    dispatch(addUser(ob))
    event.preventDefault()
    event.target.reset();
  }

  var reset = (e) => {
    setName(" ")
    setEmail(" ")
    setPhone(" ")
    setAdd(" ")
  }
  return <>
    <div className=" border-2 border-purple-700 text-center w-[32rem] mx-auto my-5 rounded-lg">
      <div className="font-bold text-2xl text-purple-700 border-b-2 border-purple-700 align-middle py-2">
        <h1>Add Contact</h1>
      </div>
      <hr />
      <form onSubmit={save}>
        <div className="space-y-2 my-5 ">
          <div className="flex space-x-14 justify-center font-bold">
            <div className=" w-36 text-right py-1">Name :</div>
            <div className="w-52 text-left py-1"> <input type="text" ref={namebox} value={msg} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className=" border-purple-600 border-b-2 text-center" required /></div>
          </div>
          <div className="flex justify-center space-x-14 font-bold" >
            <div className=" w-36 text-right py-1">Email :</div>
            <div className="w-52 text-left py-1"> <input type="text" ref={emailbox} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="border-b-2 border-purple-600 text-center" required /></div>
          </div>
          <div className="flex justify-center space-x-14 font-bold">
            <div className=" w-36 text-right py-1">Phone :</div>
            <div className="w-52 text-left py-1">  <input type="text" ref={phonebox} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Phone" className="border-b-2 border-purple-600 text-center" required min={10} /></div>
          </div>
          <div className="flex justify-center space-x-14 font-bold">
            <div className=" w-36 text-right py-1">Address :</div>
            <div className="w-52 text-left py-1"> <input type="text" ref={addbox} value={addr} onChange={(e) => setAdd(e.target.value)} placeholder="Enter Your Address" className="border-b-2 border-purple-600 text-center" required /></div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="bg-purple-600 text-white font-bold rounded px-2 py-1 mx-2">Submit</button>
          <button type="button" onClick={reset} className="bg-purple-600 text-white font-bold rounded px-2 py-1 mx-2">Reset</button>
        </div>
      </form >
    </div >
  </>
}