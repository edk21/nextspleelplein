import XMLExport from '@/utils/xmlExport'
import { useRouter } from 'next/router'
import React, {memo, useEffect, useState} from 'react'

const LegalStats = ({ data }) => {
    const router = useRouter()
  
  const [certificationAutorisation, setCertificationAutorisation ] = useState("")
  const [beginDate1, setBeginDate1] = useState("")
  const [endDate1, setEndDate1] = useState("")
  const [totalControl, setTotalControl] = useState("")
  const [amount1, setAmount1] = useState("")
  const [amount2, setAmount2] = useState("")
  const [amount3, setAmount3] = useState("")
  const [amount4, setAmount4] = useState("")
  const [totalAmount, setTotalAmount] = useState("")
  const [beginDate2, setBeginDate2] = useState("")
  const [certifyPostalCode, setCertifyPostalCode] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [childName, setChildName] = useState("")
  const [childFirstName, setChildFirstName] = useState("")
  const [BCENumber, setBCENumber] = useState("")
  const [numberOfDay1, setNumberOfDay1] = useState("")
  const [dailyTarif1, setDailyTarif1] = useState("")
  const [numberOfDay2, setNumberOfDay2] = useState("")
  const [dailyTarif2, setDailyTarif2] = useState("")
  const [numberOfDay3, setNumberOfDay3] = useState("")
  const [dailyTarif3, setDailyTarif3] = useState("")
  const [numberOfDay4, setNumberOfDay4] = useState("")
  const [dailyTarif4, setDailyTarif4] = useState("")
  const [childPostalCode, setChildPostalCode] = useState("")
  const [childMunicipality, setChildMunicipality] = useState("")
  const [endDate2, setEndDate2] = useState("")
  const [nnChild, setNnChild] = useState("")
  const [certifierMunicipality, setCertifierMunicipality] = useState("")
  const [certifierName, setCertifierName] = useState("")
  const [certifierAddress, setCertifierAddress] = useState("")
  const [beginDate3, setBeginDate3] = useState("")
  const [endDate3, setEndDate3] = useState("")
  const [beginDate4, setBeginDate4] = useState("")
  const [endDate4, setEndDate4] = useState("")
  const [childBirthDate, setChildBirthDate] = useState("")
  const [beginValidatyCertification, setBeginValidatyCertification] = useState("")
  const [endValidatyCertification, setEndValidatyCertification] = useState("")

  useEffect(() => {
    setChildFirstName(data.surname);
    setChildName(data.name);
    setChildBirthDate(data.dateOfBirth);
    setAddress(data.street);
    setChildPostalCode(data.postalCode);
    setChildMunicipality(data.city);
    setNnChild(data.childSSN);
  }, [data]);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/')
  }

  const dataToXml = [
    {
      f86_2031_certificationautorisation: certificationAutorisation,
      f86_2055_begindate1: beginDate1,
      f86_2056_enddate1: endDate1,
      f86_2059_totaalcontrol: totalControl,
      f86_2060_amount1: amount1,
      f86_2061_amount2: amount2,
      f86_2062_amount3: amount3,
      f86_2063_amount4: amount4,
      f86_2064_totalamount: totalAmount,
      f86_2093_begindate2: beginDate2,
      f86_2100_certifierpostnr: certifyPostalCode,
      f86_2101_childcountry: country,
      f86_2102_childaddress: address,
      f86_2106_childname: childName,
      f86_2107_childfirstname: childFirstName,
      f86_2109_certifiermunicipality: BCENumber,
      f86_2110_numberofday1: numberOfDay1,
      f86_2111_dailytarif1: dailyTarif1,
      f86_2113_numberofday2: numberOfDay2,
      f86_2115_dailytarif2: dailyTarif2,
      f86_2116_numberofday3: numberOfDay3,
      f86_2117_dailytarif3: dailyTarif3,
      f86_2119_numberofday4: numberOfDay4,
      f86_2120_dailytarif4: dailyTarif4,
      f86_2139_childpostnr: childPostalCode,
      f86_2140_childmunicipality: childMunicipality,
      f86_2144_enddate2: endDate2,
      f86_2153_nnchild: nnChild,
      f86_2154_certifiermunicipality: certifierMunicipality,
      f86_2155_certifiername: certifierName,
      f86_2156_certifieradres: certifierAddress,
      f86_2157_begindate3: beginDate3,
      f86_2158_enddate3: endDate3,
      f86_2161_begindate4: beginDate4,
      f86_2162_enddate4: endDate4,
      f86_2163_childbirthdate: childBirthDate,
      f86_2164_beginvalidatycertification: beginValidatyCertification,
      f86_2171_endvalidatycertification: endValidatyCertification,
    },
  ]

    dataToXml.map(item => (
      console.log("Items: ", item)
    ))
  const fieldsAsObjects = {
    f86_2031_certificationautorisation: "f86_2031_certificationautorisation",
    f86_2055_begindate1: "f86_2055_begindate1",
    f86_2056_enddate1: "f86_2056_enddate1",
    f86_2059_totaalcontrol: "f86_2059_totaalcontrol",
    f86_2060_amount1: "f86_2060_amount1",
    f86_2061_amount2: "f86_2061_amount2",
    f86_2062_amount3: "f86_2062_amount3",
    f86_2063_amount4: "f86_2063_amount4",
    f86_2064_totalamount: "f86_2064_totalamount",
    f86_2093_begindate2: "f86_2093_begindate2",
    f86_2100_certifierpostnr: "f86_2100_certifierpostnr",
    f86_2101_childcountry: "f86_2101_childcountry",
    f86_2102_childaddress: "f86_2102_childaddress",
    f86_2106_childname: "f86_2106_childname",
    f86_2107_childfirstname: "f86_2107_childfirstname",
    f86_2109_certifiermunicipality: "f86_2109_certifiermunicipality",
    f86_2110_numberofday1: "f86_2110_numberofday1",
    f86_2111_dailytarif1: "f86_2111_dailytarif1",
    f86_2113_numberofday2: "f86_2113_numberofday2",
    f86_2115_dailytarif2: "f86_2115_dailytarif2",
    f86_2116_numberofday3: "f86_2116_numberofday3",
    f86_2117_dailytarif3: "f86_2117_dailytarif3",
    f86_2119_numberofday4: "f86_2119_numberofday4",
    f86_2120_dailytarif4: "f86_2120_dailytarif4",
    f86_2139_childpostnr: "f86_2139_childpostnr",
    f86_2140_childmunicipality: "f86_2140_childmunicipality",
    f86_2144_enddate2: "f86_2144_enddate2",
    f86_2153_nnchild: "f86_2153_nnchild",
    f86_2154_certifiermunicipality: "f86_2154_certifiermunicipality",
    f86_2155_certifiername: "f86_2155_certifiername",
    f86_2156_certifieradres: "f86_2156_certifieradres",
    f86_2157_begindate3: "f86_2157_begindate3",
    f86_2158_enddate3: "f86_2158_enddate3",
    f86_2161_begindate4: "f86_2161_begindate4",
    f86_2162_enddate4: "f86_2162_enddate4",
    f86_2163_childbirthdate: "f86_2163_childbirthdate",
    f86_2164_beginvalidatycertification: "f86_2164_beginvalidatycertification",
    f86_2171_endvalidatycertification: "f86_2171_endvalidatycertification",
  }


  return (
    <div className='container border border-gray-500 rounded mx-auto mt-32'>
      
        <h3 className='text-xl laptop:text-5xl font-bold underline text-center py-10'>Children Statistics</h3>
        <div className='flex justify-end p-5'>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer' onClick={()=> handleLogout()}>LogOut</button>
        </div>
        <div className='w-full mb-12 relative p-5'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='certificationAutorisation'>Certification Autorisation</label>
                <select
                  id='certificationAutorisation'
                  type='text'
                  onChange={(event) => setCertificationAutorisation(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    Select an option
                  </option>
                  <option value='0'>0</option>
                  <option value='2'>1</option>
                  <option value='1'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'></option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label  htmlFor='beginDate1'>Begin Date week 1</label>
                <input
                  id='beginDate1'
                  type='date'
                  onChange={(event) => setBeginDate1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='endDate1'>End Date week 1</label>
                <input
                  id='endDate1'
                  type='date'
                  onChange={(event) => setEndDate1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='totalControl'>Total Control</label>
                <input
                  id='totalControl'
                  type='text'
                  onChange={(event) => setTotalControl(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='amount1'>Amount 1</label>
                <input
                  id='amount1'
                  type='text'
                  onChange={(event) => setAmount1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='amount2'>Amount 2</label>
                <input
                  id='amount2'
                  type='text'
                  onChange={(event) => setAmount2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='amount3'>Amount 3 </label>
                <input
                  id='amount3'
                  type='text'
                  onChange={(event) => setAmount3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='amount4'>Amount 4</label>
                <input
                  id='amount4'
                  type='text'
                  onChange={(event) => setAmount4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='totalAmount'>Total Amount</label>
                <input
                  id='totalAmount'
                  type='text'
                  onChange={(event) => setTotalAmount(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='beginDate2'>Begin Date week 2</label>
                <input
                  id='beginDate2'
                  type='date'
                  onChange={(event) => setBeginDate2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='certifyPostalCode'>Certifier Post Nb</label>
                <input
                  id='certifyPostalCode'
                  type='text'
                  onChange={(event) => setCertifyPostalCode(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='country'>Country </label>
                <input
                  id='country'
                  type='text'
                  onChange={(event) => setCountry(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='address'>Address</label>
                <input
                  id='address'
                  type='text'
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='name'>Child Name</label>
                <input
                  id='name'
                  type='text'
                  value={childName}
                  onChange={(event) => setChildName(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='firstName'>Child First Name </label>
                <input
                  id='firstName'
                  type='text'
                  value={childFirstName}
                  onChange={(event) => setChildFirstName(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='bcenumber'>BCE Number</label>
                <input
                  id='bcenumber'
                  type='text'
                  onChange={(event) => setBCENumber(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='numberOfDay1'>Number Of Days week 1</label>
                <input
                  id='numberOfDay1'
                  type='text'
                  onChange={(event) => setNumberOfDay1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='dailyTarif1'>Daily Tarif 1</label>
                <select
                  id='dailyTarif1'
                  type='text'
                  onChange={(event) => setDailyTarif1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    Select an option
                  </option>
                  <option value='2€'>2€</option>
                  <option value='4€'>4€</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='numberOfDay2'>Number Of Days week 2</label>
                <input
                  id='numberOfDay2'
                  type='text'
                  onChange={(event) => setNumberOfDay2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='dailyTarif2'>Daily Tarif 2</label>
                <select
                  id='dailyTarif2'
                  type='text'
                  onChange={(event) => setDailyTarif2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    Select an option
                  </option>
                  <option value='2€'>2€</option>
                  <option value='4€'>4€</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='numberOfDay3'>Number Of Days week 3</label>
                <input
                  id='numberOfDay3'
                  type='text'
                  onChange={(event) => setNumberOfDay3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='dailyTarif3'>Daily Tarif 3</label>
                <select
                  id='dailyTarif3'
                  type='text'
                  onChange={(event) => setDailyTarif3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    Select an option
                  </option>
                  <option value='2€'>2€</option>
                  <option value='4€'>4€</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='numberOfDay4'>Number Of Days 4</label>
                <input
                  id='numberOfDay4'
                  type='text'
                  onChange={(event) => setDailyTarif4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='dailyTarif4'>Daily Tarif 4</label>
                <select
                  id='dailyTarif4'
                  type='text'
                  onChange={(event) => setNumberOfDay4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    Select an option
                  </option>
                  <option value='2€'>2€</option>
                  <option value='4€'>4€</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='childPostalCode'>Child Postal Code</label>
                <input
                  id='childPostalCode'
                  type='text'
                  value={childPostalCode}
                  onChange={(event) => setChildPostalCode(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='childMunicipality'>Child Municipality</label>
                <input
                  id='childMunicipality'
                  type='text'
                  value={childMunicipality}
                  onChange={(event) => setChildMunicipality(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='endDate2'>End Date week 2</label>
                <input
                  id='endDate2'
                  type='date'
                  onChange={(event) => setEndDate2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='childNNnumber'>Child NN Number</label>
                <input
                  id='childNNnumber'
                  type='text'
                  value={nnChild}
                  onChange={(event) => setNnChild(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='cMunicipality'>Certifier Municipality</label>
                <input
                  id='cMunicipality'
                  type='text'
                  onChange={(event) => setCertifierMunicipality(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='certifierName'>Certifier Name</label>
                <input
                  id='certifierName'
                  type='text'
                  onChange={(event) => setCertifierName(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='certifierAddress'>Certifier Address</label>
                <input
                  id='certifierAddress'
                  type='text'
                  onChange={(event) => setCertifierAddress(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='beginDate3'>Begin Date week 3</label>
                <input
                  id='beginDate3'
                  type='date'
                  onChange={(event) => setBeginDate3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='endDate3'>End Date week 3</label>
                <input
                  id='endDate3'
                  type='date'
                  onChange={(event) => setEndDate3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='beginDate4'>Begin Date week 4</label>
                <input
                  id='beginDate4'
                  type='date'
                  onChange={(event) => setBeginDate4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='endDate4'>End Date week 4</label>
                <input
                  id='endDate4'
                  type='date'
                  onChange={(event) => setEndDate4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='childBirthDate'>Child Birth Date</label>
                <input
                  id='childBirthDate'
                  type='date'
                  value={childBirthDate}
                  onChange={(event) => setChildBirthDate(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='bcertif'>Begin Validaty Certification</label>
                <input
                  id='bcertif'
                  type='date'
                  onChange={(event) => setBeginValidatyCertification(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='endValidCertif'>End Validaty Certification</label>
                <input
                  id='endValidCertif'
                  type='date'
                  onChange={(event) => setEndValidatyCertification(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <XMLExport data={dataToXml} fields={fieldsAsObjects} />
        </div> 
      
    </div>
  )
}

export default memo(LegalStats)

export async function getServerSideProps({ query: {id} }) {

  //const response = await fetch(`http://localhost:3000/api/children/${id}`)
  const response = await fetch(`https://nextspleelplein.vercel.app/api/children/${id}`)

  if(response.status === 200) {
    const data = await response.json()

    return {
      props: {
        data
      }
    }
  }

  return {
    props: {
      error: {
        statusCode: response.status,
        statusText: "Invalid ID"
      }
    }
  }
}