import Link from 'next/link';
import React,{useState, useEffect, memo} from 'react'
import { IoIosCreate } from 'react-icons/io';

const userName = "admin"
const passWord = "admin"


const LegalStatsTable = ({ data }) => {
    let storage
    if (typeof window !== 'undefined') {
        storage = JSON.parse(localStorage.getItem("loggedIn"))
    }

    const [loggedIn, setLoggedIn] = useState(false)
    const [alreadyLogged, setAlreadyLogged] = useState(storage)
    const [myUser, setMyUser] = useState("")
    const [myPassword, setMyPassword] = useState("")

    useEffect(()=> {
        if(loggedIn){
            setAlreadyLogged(true);
            localStorage.setItem("loggedIn", JSON.stringify(loggedIn))
        }
    },[loggedIn])
    
    const [childs, setChild] = useState([]);
    const [filteredData, setFilteredData] = useState(childs);

    useEffect(() => {
        setChild(data)
        setFilteredData(data)
    }, [data])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value)
        result = childs.filter((data) => {
            return data.surname.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });

        setFilteredData(result);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (myUser === userName && myPassword === passWord) {
            setLoggedIn(true)
            
        } else {
            setLoggedIn(false)
        }
    }

  return (
    <div className='container border border-gray-500 rounded mx-auto mt-32'>
        {
            !alreadyLogged ? (
                <form onSubmit={handleSubmit} className="max-w-full shadow-md rounded py-2 px-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0">
                            <label htmlFor="userName">UserName</label>
                            <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="userName" autoComplete='off' onChange={(e) => setMyUser(e.target.value)} />
                        </div>
                        <div className="w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="inputPassword" autoComplete='off' onChange={(e) => setMyPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer">
                                Confirm identity
                            </button>
                    </div>
                </form>
            ) : 
            alreadyLogged ?
            (
            <>
            <div className="container rounded mx-auto mt-5">
                <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                    <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        placeholder='Search By Name'
                        type='text'
                        onChange={(event) => handleSearch(event)}
                    />
                </div>
            </div>
            <div className='w-full mb-12 relative'>
                <div className='w-full h-2/3 ml-0 overflow-x-auto sm:rounded-lg'>
                    <table
                        className='min-w-full table-auto overflow-x-auto text-left'
                    >
                        <thead className='text-md text-gray-700 sticky top-0'>
                            <tr className='bg-gray-800'>
                                <th scope="col" className='px-6 py-4 text-gray-200'>#</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Surname</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Name</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Child Date Of Birth</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Street & box Nbr</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Postal Code</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Town</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Child SSN</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Presence</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Balance</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'>Total Amount</th>
                                <th scope="col" className='px-6 py-4 text-gray-200'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((child, index) => {
                                return (
                                    <tr className='border-b border-gray-500' key={index}>
                                        <td className="px-6 py-4">{index}</td>
                                        <td className="px-6 py-4">{child.surname}</td>
                                        <td className="px-6 py-4">{child.name}</td>
                                        <td className="px-6 py-4">{child.dateOfBirth}</td>

                                        <td className="px-6 py-4" style={{
                                            background: child.street === '' ? '#dddf00' : '',
                                        }}>{child.street}</td>
                                        <td className="px-6 py-4" style={{
                                            background: child.PostalCode === '' ? '#dddf00' : '',
                                        }}>{child.postalCode}</td>
                                        <td className="px-6 py-4" style={{
                                            background: child.city === '' ? '#dddf00' : '',
                                        }}>{child.city}</td>
                                        <td className="px-6 py-4" style={{
                                            background: child.childSSN === '' ? '#dddf00' : '',
                                        }}>{child.childSSN}</td>
                                        <td className="px-6 py-4">{child.presence}</td>
                                        <td className="px-6 py-4"
                                            style={{
                                                color: `${child.balance <= 0 ? 'white' : 'black'}`,
                                                backgroundColor: `${child.balance < 0
                                                    ? 'red'
                                                    : child.balance <= 4
                                                        ? 'orange'
                                                        : 'white'
                                                    }`,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {child.balance} €
                                        </td>
                                        <td className="px-6 py-4">{child.totalAmount}</td>
                                        <td className="px-6 py-4">
                                            <Link href={'/LegalStats/' + child._id}>
                                                {' '}
                                                <IoIosCreate className='text-green-600 text-3xl hover:text-green-400 cursor-pointer' />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            ) :(
            null
            )
        }
        
    </div>
  )
}

export default memo(LegalStatsTable)

export async function getServerSideProps(context) {

    //const response = await fetch('http://localhost:3000/api/children')
    const response = await fetch('https://myspeelplein.netlify.app/api/children')
    const data = await response.json()
  
    return {
      props: {
        data: data
      }
    }
  }