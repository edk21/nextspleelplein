import { IoIosTrash, IoIosCreate } from 'react-icons/io';
import { useEffect, useState, useRef } from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { thead } from "./TheadData";
import Link from "next/link";
import { useRouter } from 'next/router';
import Spinner from '../Spinner/Spinner';

const Table = ({ data }) => {
    const tableRef = useRef(null);
    const router = useRouter()
    const [query, setQuery] = useState("")

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Weet je zeker dat je wilt verwijderen?')){
               // await fetch(`http://localhost:3000/api/children/${id}`, {
                await fetch(`https://myspeelplein.netlify.app/api/children/${id}`, {
                    method: "DELETE"
                })
            }
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Children table',
        sheet: 'Children'
    })

    if(data.length === 0){
        return <Spinner />
    }
  return (
    <div className='w-full'>
       <div className="w-full relative">
            <h3 className='text-xl laptop:text-5xl font-bold underline text-center py-10'>Ingeschreven Kinderen</h3>
            <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full md:w-2/3 px-3 mb-6 md:mb-0 relative'>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 mb-2 ml-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                        className='appearance-none block w-80 bg-gray-200 text-gray-700 border border-indigo-500 rounded pl-10 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='zoeken op naam of achternaam'
                        type='text'
                        onChange={(e)=> setQuery(e.target.value)}
                    />
                </div>

                <div className='to-excel w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer' onClick={onDownload}> Export to excel </button>
                </div>
            </div>
            <div className="w-full mb-12 p-2 sticky top-0">
            <div className="w-full ml-0 overflow-x-auto sm:rounded-lg max-h-[900px]">
            <table ref={tableRef} id='emp-table' className='min-w-full h-auto table-auto overflow-x-auto text-left'>
                <thead className="text-md text-gray-700 sticky top-0">
                    <tr className='bg-gray-800'>
                        {thead.map((item, index) => (
                            <th scope="col" className='px-6 py-4' key={index}>
                                <span className='text-gray-200'>{item}</span>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody className='bg-gray-200'>
                {data.filter((child)=> (child.name?.toLowerCase().includes(query.toLowerCase())) || (child.surname.toLowerCase().includes(query.toLowerCase()))).map((child, index) => {
                    return (
                        <tr className='border-b border-gray-500 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600' key={index}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                        <td className="px-6 py-4">
                            <Link href={`/EditData/${child._id}`}>
                            {' '}
                            <IoIosCreate className='text-green-600 text-3xl hover:text-green-400 cursor-pointer' />

                            </Link>
                        </td>
                        
                        <td className="px-6 whitespace-nowrap">{child.surname}</td>
                        <td className="px-auto whitespace-nowrap">{child.name}</td>
                        <td
                        className='whitespace-nowrap'
                            style={{
                            color: `${child.balance <= 0 ? 'white' : 'black'}`,
                            backgroundColor: `${child.balance < 0
                                ? 'red'
                                : child.balance <= 4
                                ? 'orange'
                                : 'white'
                                }`,
                            fontWeight: 700,
                            margin: 50,
                            paddingInline: 50
                            }}
                            //contenteditable="true"
                        >
                            {child.balance} €
                        </td>
                        <td className='px-3 py-4 whitespace-nowrap'>{child.social}</td>
                        <td
                            className='px-3 whitespace-nowrap text-center'
                            style={{
                            background: child.dateOfBirth === '' ? '#dddf00' : child.dateOfBirth === null ? '#dddf00' : '',
                        }}>{child.dateOfBirth}</td>
                        <td className='px-3 whitespace-nowrap text-center' style={{
                            background: child.school === '' ? '#dddf00' : '',
                        }}>{child.school}</td>
                        <td className='px-3 whitespace-nowrap text-center' style={{
                            background: child.level === '' ? '#dddf00' : '',
                        }}>{child.level}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.street === '' ? '#dddf00' : child.street === null ? '#dddf00' : '',
                        }}>{child.street}</td>
                        <td className='px-3 whitespace-nowrap text-center' style={{
                            background: child.postalCode === null ? '#dddf00' : child.postalCode === '' ? "#dddf00" : '',
                        }}>{child.postalCode}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.city === null ? '#dddf00' : child.city === "" ? '#dddf00' : "",
                        }}>{child.city}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.contact1 === null ? '#dddf00' : child.contact1 === "" ? '#dddf00' : "",
                        }}>{child.contact1}</td>
                        <td className='px-3 whitespace-nowrap text-center' style={{
                            background: child.tel1 === '' ? '#dddf00' : '',
                        }}>{child.tel1}</td>
                        <td className='px-3 whitespace-nowrap'>{child.contact2}</td>
                        <td className='px-3 whitespace-nowrap text-center'>{child.tel2}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.parentSSN === '' ? '#dddf00' : '',
                        }}>{child.parentSSN}</td>
                        <td className='px-3 whitespace-nowrap text-center' style={{
                            background: child.parentDOB === '' ? '#dddf00' : '',
                        }}>{child.parentDOB}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.childSSN === '' ? '#dddf00' : '',
                        }}>{child.childSSN}</td>
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.email === '' ? '#dddf00' : '',
                        }}>{child.email}</td>
                        
                        <td className='px-3 whitespace-nowrap' style={{
                            background: child.allergies === '' ? '#dddf00' : '',
                        }}>{child.allergies}</td>
                        <td className='px-3 whitespace-nowrap'>{child.parentRemarks}</td>
                        <td className='px-3 whitespace-nowrap'>{child.teamRemarks}</td>
                        <td className='px-3 whitespace-nowrap'>
                            <input
                                className='appearance-none block w-7xl checked:bg-blue-500 bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                type="checkbox"
                                name="medical"
                                readOnly
                                disabled="disabled"
                                checked={child.medicals === "checked" ? "checked" : ""}
                            />
                        </td>

                        <td className='px-3 whitespace-nowrap' style={{ textTransform: "uppercase", color: "#f5f5f5", fontWeight: "600", backgroundColor: child.week1 === null ? "red" : child.week1 === "" ? "red" : child.week1 === "afwezig" ? "red" : "#8ac926" }}>{child.week1 === null ? "afwezig" : child.week1 === "" ? "afwezig" : child.week1}</td>

                        <td className='px-3 whitespace-nowrap' style={{ textTransform: "uppercase", color: "#f5f5f5", fontWeight: "600", backgroundColor: child.week2 === null ? "red" : child.week2 === "" ? "red" : child.week2 === "afwezig" ? "red" : "#8ac926" }}>{child.week2 === null ? "afwezig" : child.week2 === "" ? "afwezig" : child.week2}</td>

                        <td className='px-3 whitespace-nowrap' style={{ textTransform: "uppercase", color: "#f5f5f5", fontWeight: "600", backgroundColor: child.week3 === null ? "red" : child.week3 === "" ? "red" : child.week3 === "afwezig" ? "red" : "#8ac926" }}>{child.week3 === null ? "afwezig" : child.week3 === "" ? "afwezig" : child.week3}</td>

                        <td className='px-3 whitespace-nowrap' style={{ textTransform: "uppercase", color: "#f5f5f5", fontWeight: "600", backgroundColor: child.week4 === null ? "red" : child.week4 === "" ? "red" : child.week4 === "afwezig" ? "red" : "#8ac926" }}>{child.week4 === null ? "afwezig" : child.week4 === "" ? "afwezig" : child.week4}</td>
                        
                        <td className='px-3 whitespace-nowrap'>
                            <span
                                onClick={() => handleDelete(child._id)}
                            >
                                <IoIosTrash className='text-red-600 text-3xl hover:text-red-400 cursor-pointer' />
                            </span>
                        </td>
                        </tr>
                    );
                })}
                </tbody>    
            </table>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Table