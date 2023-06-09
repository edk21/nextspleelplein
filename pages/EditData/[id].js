import Spinner from '@/components/Spinner/Spinner';
import { getRecord } from '@/lib/helper';
import axios from 'axios';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export default function EditData({ data, error }) {
  const {query, push} = useRouter()

  const myDate = new Date();
  const year = myDate.getFullYear();
  const month = myDate.getMonth() + 1;
  const day = myDate.getDate();

  const date = day + ' / ' + month + ' / ' + year;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [school, setSchool] = useState("");
  const [level, setLevel] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [contact1, setContact1] = useState("");
  const [tel1, setTel1] = useState("");
  const [contact2, setContact2] = useState("");
  const [tel2, setTel2] = useState("");
  const [parentSSN, setParentSSN] = useState("");
  const [parentDOB, setParentDOB] = useState("");
  const [childSSN, setChildSSN] = useState("");
  const [email, setEmail] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medicals, setMedical] = useState("");
  const [parentRemarks, setParentRemarks] = useState("");
  const [teamRemarks, setTeamRemarks] = useState("");
  const [week1, setWeek1] = useState('');
  const [week2, setWeek2] = useState('');
  const [week3, setWeek3] = useState('');
  const [week4, setWeek4] = useState('');
  const [presence, setPresence] = useState("");
  const [balance, setBalance] = useState(0);
  const [social, setSocial] = useState("");
  const [addBalance, setAddBalance] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [enable, setEnable]= useState(true)

  //console.log(data)

  const handleChecked = (e) => {
    if (e.target.checked) {
      setMedical("checked")
      setIsChecked(!isChecked)
    } else {
      setMedical("not-checked")
      setIsChecked(!isChecked)
    }
  }

    useEffect(() => {
      setUsername(data.surname);
      setName(data.name);
      setDateOfBirth(data.dateOfBirth);

      if(data.totalAmount === null){
        setTotalAmount(0)
      }else{
        setTotalAmount(data.totalAmount)
      }

      if(data.school === null){
        setSchool("")
      }else {
        setSchool(data.school);
      }
      
      if (data.level === null) {
        setLevel("")
      } else {
        setLevel(data.school);
      }
      setStreet(data.street);
      setPostalCode(data.postalCode);
      setCity(data.city);

      if (data.contact1 === null) {
        setContact1("")
      } else {
        setContact1(data.contact1);
      }

      setTel1(data.tel1);

      if (data.contact2 === null) {
        setContact2("")
      } else {
        setContact2(data.contact2);
      }

      if (data.tel2 === null) {
        setTel2("")
      } else {
        setTel2(data.tel2);
      }

      if (data.parentSSN === null) {
        setParentSSN("")
      } else {
        setParentSSN(data.parentSSN);
      }

      if (data.parentDOB === null) {
        setParentDOB("")
      } else {
        setParentDOB(data.parentDOB);
      }

      if (data.childSSN === null) {
        setChildSSN("")
      } else {
        setChildSSN(data.childSSN);
      }

      setEmail(data.email);

      if (data.allergies === null) {
        setAllergies("")
      } else {
        setAllergies(data.allergies);
      }
      setMedical(data.medicals)

      if (data.parentRemarks === null) {
        setParentRemarks("")
      } else {
        setParentRemarks(data.parentRemarks);
      }

      if (data.teamRemarks === null) {
        setTeamRemarks("")
      } else {
        setTeamRemarks(data.teamRemarks);
      }
      
      setWeek1(data.week1);
      setWeek2(data.week2);
      setWeek3(data.week3);
      setWeek4(data.week4);

      if (data.presence === null) {
        setPresence("afwezig")
      } else {
        setPresence(data.presence);
      }

      if (data.balance === null) {
        setBalance(0)
      } else {
        setBalance(data.balance);
      }

      if (data.social === null) {
        setSocial("geen sociaal")
      } else {
        setSocial(data.social);
      }
    }, [data]);

  const handleButton = (e) => {
    e.preventDefault()
    setEnable(!enable);
  }

  const updateData = async ( Obj ) => {
    try {
      //await fetch(`http://localhost:3000/api/children/${query.id}`, {
      await fetch(`https://nextspleelplein.vercel.app/api/children/${query.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Obj)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const createStat = async (newStat) => {
    // console.log("newStat: ", newStat)
    try {
      //await fetch('http://localhost:3000/api/stats', {
      await fetch('https://nextspleelplein.vercel.app/api/stats', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStat)
      })
    } catch (error) {
      console.log(error)
    }
  }

    const handleSubmit = async (e) => {
        e.preventDefault();

      if(enable === true){
        const Obj = {
          surname: username,
          name: name,
          dateOfBirth: dateOfBirth,
          school: school,
          level: level,
          street: street,
          postalCode: postalCode,
          city: city,
          contact1: contact1,
          tel1: tel1,
          contact2: contact2,
          tel2: tel2,
          parentSSN: parentSSN,
          parentDOB: parentDOB,
          childSSN: childSSN,
          email: email,
          allergies: allergies,
          medicals: medicals,
          parentRemarks: parentRemarks,
          teamRemarks: teamRemarks,
          week1: week1,
          week2: week2,
          week3: week3,
          week4: week4,
          presence: presence,
          balance: balance,
          social: social,
          totalAmount: parseInt(addBalance) + parseInt(totalAmount),
        };

        await updateData(Obj)

        if(enable === false){
          if (presence === 'aanwezig') {
            let statBalance;
            if (social === 'geen sociaal') {
              statBalance = 4;
            } else {
              statBalance = 2;
            }
            const newStat = {
              name: username + ' ' + name,
              balance: statBalance,
              social: social,
              date: date,
              //totalAmount: totalAmount,
            };
  
            await createStat(newStat)
          }
        }

        await push("/")
      }else{
        var newBalance = 0;
        if (addBalance !== 0) {
          if (presence === 'aanwezig' && social === 'geen sociaal') {
            newBalance = parseInt(addBalance) + parseInt(balance) - 4;
            //setBalance(newBalance);
          } else if (presence === 'aanwezig' && social === 'sociaal tarief') {
            newBalance = parseInt(addBalance) + parseInt(balance) - 2;
            //setBalance(newBalance);
          } else if (presence === 'afwezig') {
            newBalance = parseInt(addBalance) + parseInt(balance);
            //setBalance(newBalance);
          }
        } else if (addBalance === 0) {
          if (presence === 'aanwezig' && social === 'geen sociaal') {
            newBalance = parseInt(balance) - 4;
            //setBalance(newBalance);
          } else if (presence === 'aanwezig' && social === 'sociaal tarief') {
            newBalance = parseInt(balance) - 2;
            //setBalance(newBalance);
          } else if (presence === 'afwezig') {
            newBalance = parseInt(balance)
          }
        }

        const Obj = {
          surname: username,
          name: name,
          dateOfBirth: dateOfBirth,
          school: school,
          level: level,
          street: street,
          postalCode: postalCode,
          city: city,
          contact1: contact1,
          tel1: tel1,
          contact2: contact2,
          tel2: tel2,
          parentSSN: parentSSN,
          parentDOB: parentDOB,
          childSSN: childSSN,
          email: email,
          allergies: allergies,
          medicals: medicals,
          parentRemarks: parentRemarks,
          teamRemarks: teamRemarks,
          week1: week1,
          week2: week2,
          week3: week3,
          week4: week4,
          presence: presence,
          balance: newBalance,
          social: social,
          totalAmount: parseInt(addBalance) + parseInt(totalAmount),
        };

        await updateData(Obj)

        if(enable === false){
          if (presence === 'aanwezig') {
            let statBalance;
            if (social === 'geen sociaal') {
              statBalance = 4;
            } else {
              statBalance = 2;
            }
            const newStat = {
              name: username + ' ' + name,
              balance: statBalance,
              social: social,
              date: date,
              //totalAmount: totalAmount,
            };
  
            await createStat(newStat)
          }
        }

        await push("/")
      }
        
    }
    //   if(enable === false){
    //     if (presence === 'aanwezig') {
    //       let statBalance;
    //       if (social === 'geen sociaal') {
    //         statBalance = 4;
    //       } else {
    //         statBalance = 2;
    //       }
    //       const newStat = {
    //         name: username + ' ' + name,
    //         balance: statBalance,
    //         social: social,
    //         date: date,
    //         //totalAmount: totalAmount,
    //       };

    //       await createStat(newStat)
    //     }
    //   }
    // };

    const handleOnClick = () => {
        router.push("/")
    }

  useEffect(() => {
    if (balance !== null && balance >= 0) {
      setTimeout(() => {
        setTotalAmount(parseInt(balance) + parseInt(totalAmount));
      }, 1000);
    }
  }, [balance, totalAmount]);
  if (error) return <Error statusCode={error.statusCode} title={error.statusText} />

  return (
    <div className='container border rounded mt-32 pb-5'>
      <h3 className='text-center py-6 text-3xl'>Gegevens Bijwerken</h3>
      <div className='max-w-full p-5'>
        <form onSubmit={handleSubmit} className='max-w-full shadow-md rounded py-2 px-2'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='surname'>Achtenaam</label>
                <input
                  id='surname'
                  type='text'
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='name'>Voornaam</label>
                <input
                  id='name'
                  type='text'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='dateOfBirth'>Geboortedatum</label>
                <input
                  id='dateOfBirth'
                  type='text'
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  className={dateOfBirth === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='street'>Straatnaam en Huisnummer</label>
                <input
                  id='street'
                  type='text'
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                  className={street === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='postalCode'>Post Code</label>
                <input
                  id='postalCode'
                  type='text'
                  value={postalCode}
                  onChange={(event) => setPostalCode(event.target.value)}
                  className={postalCode === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='city'>Gemeente</label>
                <input
                  id='city'
                  type='text'
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className={city === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6 border py-2'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='week1'>Week 1</label>
                <select
                  id='week1'
                  type='text'
                  value={week1}
                  onChange={(event) => setWeek1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='week2'>Week 2</label>
                <select
                  id='week2'
                  type='text'
                  value={week2}
                  onChange={(event) => setWeek2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='week3'>Week 3</label>
                <select
                  id='week3'
                  type='text'
                  value={week3}
                  onChange={(event) => setWeek3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='week4'>Week 4</label>
                <select
                  id='week4'
                  type='text'
                  value={week4}
                  onChange={(event) => setWeek4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='school'>School</label>
                <input
                  id='school'
                  type='text'
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                  className={school === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='level'>Groep</label>
                <select
                  id='level'
                  type='text'
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                  className={level === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='kleuters'>Kleuters</option>
                  <option value='lagere'>Lagere</option>
                </select>
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='text'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={email === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='contact1'>Contact: 1</label>
                <input
                  id='contact1'
                  type='text'
                  value={contact1}
                  onChange={(event) => setContact1(event.target.value)}
                  className={contact1 === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='tel1'>Tel: 1</label>
                <input
                  id='tel1'
                  type='text'
                  value={tel1}
                  onChange={(event) => setTel1(event.target.value)}
                  className={tel1 === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='contact2'>Contact: 2</label>
                <input
                  id='contact2'
                  type='text'
                  value={contact2}
                  onChange={(event) => setContact2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='tel2'>Tel: 2</label>
                <input
                  id='tel2'
                  type='text'
                  value={tel2}
                  onChange={(event) => setTel2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='pssn'>Ouder RN</label>
                <input
                  id='pssn'
                  type='text'
                  value={parentSSN}
                  onChange={(event) => setParentSSN(event.target.value)}
                  className={parentSSN === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='pdob'>Ouder Geboortedatum</label>
                <input
                  id='pdob'
                  type='text'
                  value={parentDOB}
                  onChange={(event) => setParentDOB(event.target.value)}
                  className={parentDOB === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning': 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='cssn'>Kind RN</label>
                <input
                  id='cssn'
                  type='text'
                  value={childSSN}
                  onChange={(event) => setChildSSN(event.target.value)}
                  className={childSSN === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/2 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='parentRemarks'>Opmerkingen Ouders</label>
                <input
                  id='parentRemarks'
                  type='text'
                  value={parentRemarks}
                  onChange={(event) => setParentRemarks(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
              <div className='w-full laptop:w-1/2 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='teamRemarks'>Opmerkingen Pleinleiding</label>
                <input
                  id='teamRemarks'
                  type='text'
                  value={teamRemarks}
                  onChange={(event) => setTeamRemarks(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='allergies'>Allergieën</label>
                <input
                  id='allergies'
                  type='text'
                  value={allergies}
                  onChange={(event) => setAllergies(event.target.value)}
                  className={allergies === "" ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-warning' : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}
                />
              </div>
              <div className='form-check d-flex align-items-center mt-7 ml-7'>
                <input class="form-check-input checkbox" type="checkbox" value={isChecked} checked={medicals === "checked" ? "checked" : ""} id="medical" name="medical" onChange={handleChecked} />
                <label className='check__label' htmlFor='medical'>Medische Fiche</label>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/6 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='presence'>Aanweizigheid</label>
                <select
                  id='presence'
                  type='text'
                  value={presence}
                  onChange={(event) => setPresence(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  disabled={enable}
                >
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
                <button style={{ width: "100px", border: "none", background: "green", color: "white", borderRadius: "10px", marginTop: "10px" }} onClick={handleButton}>Enable</button>
              </div>
            
              <div className='w-full laptop:w-1/6 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='social'>Sociaal</label>
                <select
                  id='social'
                  type='text'
                  value={social}
                  onChange={(event) => setSocial(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  disabled={enable}
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='geen sociaal'>Geen Sociaal Tarief</option>
                  <option value='sociaal tarief'>Sociaal Tarief</option>
                  <option selected value=''></option>
                </select>
              </div>
              <div className='w-full laptop:w-1/6 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='balance'>Saldo</label>
                <input
                  id='balance'
                  type='number'
                  value={balance}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  style={{ background: `${balance < 0 ? 'red' : 'green'}` }}
                  disabled={enable}
                />
              </div>
              <div className='w-full laptop:w-1/6 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='addBalance'>Saldo Toevoegen</label>
                <input
                  id='addBalance'
                  type='number'
                  value={addBalance}
                  onChange={(event) => setAddBalance(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  disabled={enable}
                />
              </div>
            </div>
            <div className='flex flex-wrap mx-0 mb-6'>
              <input
                type='submit'
                value='Gegevens Bijwerken'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer'
              />
              <input
                onClick={handleOnClick}
                value='Home'
                className='bg-gray-700 hover:bg-gray-600 text-white text-center font-bold py-2 px-4 mx-4 rounded mb-6 laptop:mb-0 cursor-pointer'
              />
            </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query: {id} }) {

  //const response = await fetch(`http://localhost:3000/api/children/${id}`)
  const response = await fetch(`https://nextspleelplein.vercel.app/api/children/${id}`)

  if(response.status === 200) {
    const data = await response.json()
    // console.log(data)

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