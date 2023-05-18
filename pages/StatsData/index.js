import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import { IoIosTrash, IoIosCreate } from 'react-icons/io';
import { useDownloadExcel } from 'react-export-table-to-excel';

const StatsData = ({ data }) => {
  const tableRef = useRef(null);
    const [childs, setChild] = useState([]);
    const [filteredData, setFilteredData] = useState(childs);

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Weet je zeker dat je wilt verwijderen?')){
                await fetch(`http://localhost:3000/api/stats/${id}`, {
                    method: "DELETE"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteAll = async () => {
        try {
            if (window.confirm('Weet je zeker dat je wilt verwijderen?')){
                await fetch(`http://localhost:3000/api/stats`, {
                    method: "DELETE"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearchName = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = data.filter((res) => {
          return res.name?.toLowerCase().includes(value.toLowerCase());
        });
        
        setFilteredData(result);
      }
    
      const handleSearchDate = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = data.filter((res) => {
          return res.date.indexOf(value) !== -1;
        });
        
        setFilteredData(result);
      };

      const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Children StatData',
        sheet: 'Children Stat'
    })

    useEffect(() => {
        setChild(data);
        setFilteredData(data);
    }, [data])
  return (
    <div className='relative py-5 mt-32 mx-24'>
    <div className='w-full relative'>
      <h3 className='text-xl laptop:text-5xl font-bold underline text-center py-10'>Dagelijkse Registraties</h3>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0 relative'>
          <input
            className='appearance-none block w-80 bg-gray-200 text-gray-700 border border-indigo-500 rounded pl-10 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='zoek op naam'
            type='text'
            onChange={(event) => handleSearchName(event)}
          />
        </div>
        <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0 relative'>
          <input
            className='appearance-none block w-80 bg-gray-200 text-gray-700 border border-indigo-500 rounded pl-10 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            placeholder='zoeken op datum'
            type='text'
            onChange={(event) => handleSearchDate(event)}
          />
        </div>
        <div className='to-excel w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer' onClick={onDownload}> Export to excel </button>
        </div>
      </div>

      <div className="w-full mb-12 relative">
      <div className='w-full h-2/3 ml-0 overflow-x-auto sm:rounded-lg'>
        <table
          className='min-w-full table-auto overflow-x-auto text-left'
          id='emp-table'
        >
          <thead className='text-md text-gray-700 sticky top-0'>
            <tr className='bg-gray-800'>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>#</span></th>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>Achetenaam</span></th>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>Voornaam</span></th>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>Saldo</span></th>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>Sociaal</span></th>
              <th scope="col" className='px-6 py-4'><span className='text-gray-200'>Datum</span></th>
              <th scope="col" className='px-6 py-4'>
                <Link href="/">
                    <IoIosTrash className='icon-two cursor-pointer' onClick={() => handleDeleteAll()} />
                </Link>
            </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((child, index) => {
              return (
                <tr className='border-b border-gray-500' key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{child.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{child.surname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{child.balance} €</td>
                  <td className="px-6 py-4 whitespace-nowrap">{child.social}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{child.date}</td>
                  <td className="px-6 py-4">
                    <Link
                      href={'/StatsData'}
                      onClick={() => handleDelete(child._id)}
                    >
                      <IoIosTrash className='text-red-600 text-3xl hover:text-red-400 cursor-pointer' />
                    </Link>
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

export default StatsData

export async function getServerSideProps(context) {

    const response = await fetch('http://localhost:3000/api/stats')
    const data = await response.json()
  
    return {
      props: {
        data: data
      }
    }
  }