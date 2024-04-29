import { Link, Route, Routes } from "react-router-dom";
import ShowContact from "./ShowContact";
import EditContact from "./EditContact";
import AddContact from "./addContact";
import { useDispatch, useSelector } from "react-redux";
import { addVal, finddata, removeUser } from "./store/userData";
import { useState } from "react";
export default function App() {
  var data = useSelector(state => state.data.value)
  var dispatch = useDispatch()
  var rmvUser = useDispatch()
  var findData = useDispatch()
  var find = (e) => {
    findData(finddata(e.target.value))
  }
  return <>
    <div className="">
      <div className=" bg-purple-700 text-white text-4xl font-bold flex justify-center py-4 tracking-wider">
        <span>CRUD APPLICATION</span>
      </div>
      <div className=" mx-20 my-5 flex justify-between px-20">
        <div className="flex mx-14 space-x-10 py-3 ">
          <Link to="/add"><button onClick={() => setmodals(false)} className=" hover:text-purple-700 hover:bg-white border-2 border-purple-700 transition inline-flex items-center rounded-md bg-purple-700 px-4 py-2 text-white text-lg font-medium ring-1 ring-inset ring-purple-700/10 ">Add new</button></Link>
        </div>

        <div className="text-center flex mx-14 space-x-10 py-3 ">
          <input type="text" placeholder="Search..." onChange={find} className="border-2 border-purple-700 rounded px-4 py-2" />
        </div>
      </div>

      <div className="relative overflow-x-auto font-bold mx-20 px-20">

        <table className="w-full text-sm text-left table-auto ">
          <thead className="text-m uppercase bg-white border-2 border-purple-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                {/* ProLogo */}
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          {
            <tbody>
              {data.map((val) => <tr className=" border-purple-400 border-b-2 rounded">
                <td className="px-6 py-4">
                  {/* <img src="../acc_logo.png" height={20} width={20} className="rounded" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </td>
                <td scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                  {val.id}
                </td>
                <td className="px-6 py-4">
                  {val.name}
                </td>
                <td className="px-6 py-4">
                  {val.email}
                </td>
                <td className="px-6 py-4">
                  <Link to="show"> <td><button onClick={() => dispatch(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  </button></td></Link>
                </td>
                <td className="px-6 py-4">
                  <td><button onClick={() => rmvUser(removeUser(val.id))} className="text-black underline px-2 py-1 rounded "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button></td>
                </td>
                <td className="px-6 py-4">
                  <Link to="/edit"><td><button onClick={() => rmvUser(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  </button></td></Link>
                </td>
              </tr>)}
            </tbody>
          }
        </table>
      </div>
    </div>
    <Routes>
      <Route path="/add" element={<AddContact />} />
      <Route path="/show" element={<ShowContact />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  </>
}


{/* <tbody>
            {data.map((val) => <tr className=" border-b ">
              <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap">
                {val.id}
              </th>
              <td className="px-6 py-4">
                <img src="../acc_logo.png" height={20} width={20} className="rounded" />
              </td>
              <td className="px-6 py-4">
                {val.name}
              </td>
              <td className="px-6 py-4">
                {val.mobile}
              </td>
              <td className="px-6 py-4">
                <Link to="show"> <td><button onClick={() => dispatch(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../eye_logo.png" height={30} width={30} className="rounded" /></button></td></Link>
              </td>
              <td className="px-6 py-4">
                <td><button onClick={() => rmvUser(removeUser(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../del.png" height={30} width={30} className="rounded" /></button></td>
              </td>
              <td className="px-6 py-4">
                <Link to="/edit"><td><button onClick={() => rmvUser(addVal(val.id))} className="text-black underline px-2 py-1 rounded "><img src="../edit.png" height={30} width={30} className="rounded" /></button></td></Link>
              </td>
            </tr>)}
          </tbody> */}