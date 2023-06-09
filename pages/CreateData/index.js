import React,{useEffect, useReducer, useState} from 'react'
import axios from "axios"
import { AiFillStar } from "react-icons/ai"
import Link from 'next/link';
import { addChild, getChildren } from '@/lib/helper';
import { useRouter } from 'next/router';

//https://speelpleinapi.herokuapp.com/

export default function CreateData() {
  //const [newTask, setNewTask] = useState([
// name: "",
// surname: ""
  //])
  //const handleOnChange = (e) => setNewTask({...newChild, [e.target.name]: e.target.value})
  const router = useRouter()
  //const [newTask, setNewTask] = useState({})

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [school, setSchool] = useState('');
  const [level, setLevel] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [contact1, setContact1] = useState('');
  const [tel1, setTel1] = useState('');
  const [contact2, setContact2] = useState('');
  const [tel2, setTel2] = useState('');
  const [parentSSN, setParentSSN] = useState('');
  const [parentDOB, setParentDOB] = useState('');
  const [childSSN, setChildSSN] = useState('');
  const [email, setEmail] = useState('');
  const [allergies, setAllergies] = useState('');
  const [isChecked, setIsChecked] = useState("not-checked");
  const [medicals, setMedical] = useState(isChecked);
  const [parentRemarks, setParentRemarks] = useState('');
  const [teamRemarks, setTeamRemarks] = useState('');
  const [week1, setWeek1] = useState('');
  const [week2, setWeek2] = useState('');
  const [week3, setWeek3] = useState('');
  const [week4, setWeek4] = useState('');
  const [presence, setPresence] = useState('');
  const [balance, setBalance] = useState(0);
  const [social, setSocial] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  //const [errors, setErros] = useState({title: "", surname: ""});

    const myDate = new Date();
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1;
    const day = myDate.getDate();

    const date = day + ' / ' + month + ' / ' + year;
    
    const handleChecked = (e) => {
      // console.log("e.target.checked: ", e.target.checked)
      if(e.target.checked){
        setIsChecked("checked")
        setMedical('checked')
      }else{
        setIsChecked("not-checked")
        setMedical("not-checked")
      }
    }

    const createData = async (newChild) => {
      try {
        //await fetch('http://localhost:3000/api/children', {
        await fetch('https://nextspleelplein.vercel.app/api/children', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newChild)
        })
      } catch (error) {
        console.log(error)
      }
    }

    const createStat = async (newStat) => {
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

    // apres condition dans le model mongoose
    /*
    const validate = () => {
      const errors = {}

      if(!newTask.name) errors.name = "Name is required"
      if(!newTask.surname) errors.surname = "Surname is required"
    }
  */
    const handleSubmit = async (e) => {
      e.preventDefault();
      // let errors = validate()
      // if(Object.keys(errors).length) return setErrors(errors)

      if(username === "" || name === "" || presence === "" || balance === ""  || social === ""){
        alert("Gelieve alle velden in te vullen");
      }
      else if(balance < 0){
        alert("vul alstublieft een positief getal in");
      }else if(balance > 20){
        alert("Je mag niet meer dan 20€ invoeren")
      }else{
        //setTotalAmount(balance);
        var newBalance;
        if (balance === null || parseInt(balance) < 0) {
          alert("vul alstublieft een positief getal in");
        }else if (parseInt(balance) === 0) {
          if (presence === 'aanwezig' && social === 'sociaal tarief') {
            newBalance = -2;
            setBalance(newBalance);
          } else if (presence === 'aanwezig' && social === 'geen sociaal') {
            newBalance = -4;
            setBalance(newBalance);
          } else if (presence === 'afwezig') {
            newBalance = 0;
            setBalance(newBalance);
          }
        } else if (parseInt(balance) > 0) {
          if (presence === 'aanwezig' && social === 'sociaal tarief') {
            newBalance = parseInt(balance) - 2;
            setBalance(newBalance);
          } else if (presence === 'aanwezig' && social === 'geen sociaal') {
            newBalance = parseInt(balance) - 4;
            setBalance(newBalance);
          } else if (presence === 'afwezig') {
            newBalance = parseInt(balance);
            setBalance(newBalance);
          }
        }

        const newChild = {
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
          totalAmount: totalAmount,
        };

        await createData(newChild)

        //await addStats();
        if (presence === 'aanwezig') {
          let statBalance;
          if (social === 'geen sociaal') {
            statBalance = 4;
          } else {
            statBalance = 2;
          }
          const newStat = {
            name: name,
            surname: username,
            balance: statBalance,
            social: social,
            date: date,
            totalAmount: totalAmount,
          };
    
          await createStat(newStat)
        }
      }
      
    }

    const handleOnClick = () => {
        router.push("/")
    }

  useEffect(() => {
    if (balance !== null && balance > 0) {
      setTimeout(() => {
        setTotalAmount(parseInt(balance) + parseInt(totalAmount));
      }, 1000);
    }
  }, [balance, totalAmount]);

  return (
    <div className='container border border-gray-500 rounded mx-auto mt-32'>
      <p className='text-slate-400 font-light pt-2'>Velden met sterren zijn<strong className='underline font-bold pl-2'> Verplicht</strong></p>
      <h3 className='text-center py-6 text-3xl'>Een nieuw kind toevoegen</h3>
      <div className='max-w-full p-5'>
        <form onSubmit={handleSubmit} className='max-w-full shadow-md rounded py-2 px-2'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='surname'>Achtenaam <AiFillStar className='text-yellow-500 absolute ml-24' /></label>
                <input
                  id='surname'
                  type='text'
                  onChange={(event) => setUsername(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                  placeholder='Achetenaam'
                  // error={errors.surname ? {content: errors.surname, pointing: "below"} : null}
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='name'>Voornaam <AiFillStar className='text-yellow-500 absolute ml-24' /></label>
                <input
                  id='name'
                  type='text'
                  onChange={(event) => setName(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                  placeholder='Voornaam'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='dateOfBirth'>Kind Geboortedatum</label>
                <input
                  id='dateOfBirth'
                  type='text'
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/5 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='balance'>Saldo <AiFillStar className='text-yellow-500 absolute ml-12' /></label>
                <input
                  id='balance'
                  type='number'
                  onChange={(event) => setBalance(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='presence'>Aanwezigheid <AiFillStar className='text-yellow-500 absolute ml-32' /></label>
                <select
                  id='presence'
                  type='text'
                  onChange={(event) => setPresence(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow-outline hover:border-gray-500'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-2/5 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='social'>Sociaal <AiFillStar className='text-yellow-500 absolute ml-16' /></label>
                <select
                  id='social'
                  type='text'
                  onChange={(event) => setSocial(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='geen sociaal'>Geen Sociaal Tarief</option>
                  <option value='sociaal tarief'>Sociaal Tarief</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='week1'>Week 1</label>
                <select
                  id='week1'
                  type='text'
                  onChange={(event) => setWeek1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value='abscent'>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option selected value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='week2'>Week 2</label>
                <select
                  id='week2'
                  type='text'
                  onChange={(event) => setWeek2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value='abscent'>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option selected value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='week3'>Week 3</label>
                <select
                  id='week3'
                  type='text'
                  onChange={(event) => setWeek3(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value='abscent'>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option selected value='afwezig'>Afwezig</option>
                </select>
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='week4'>Week 4</label>
                <select
                  id='week4'
                  type='text'
                  onChange={(event) => setWeek4(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value='abscent'>
                    kies een optie
                  </option>
                  <option value='aanwezig'>Aanwezig</option>
                  <option selected value='afwezig'>Afwezig</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-3/6 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='school'>School</label>
                <input
                  id='school'
                  type='text'
                  onChange={(event) => setSchool(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/6 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='level'>Groep</label>
                <select
                  id='level'
                  type='text'
                  onChange={(event) => setLevel(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                >
                  <option selected value=''>
                    kies een optie
                  </option>
                  <option value='Kleuters'>Kleuters</option>
                  <option value='lagere'>Lagere</option>
                </select>
              </div>
              <div className='w-full laptop:w-2/6 px-3 mb-6 laptop:mb-0'>
                <label className='relative flex font-black block tracking-wide' htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='text'
                  onChange={(event) => setEmail(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/4 px-3 mb-6 laptop:mb-0'>
                <label className='' htmlFor='street'>Straatnaam en huisnummer</label>
                <input
                  id='street'
                  type='text'
                  onChange={(event) => setStreet(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='' htmlFor='postalCode'>Post Code</label>
                <input
                  id='postalCode'
                  type='text'
                  onChange={(event) => setPostalCode(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label className='' htmlFor='city'>Gemeente</label>
                <input
                  id='city'
                  type='text'
                  onChange={(event) => setCity(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='contact1'>Contact: 1</label>
                <input
                  id='contact1'
                  type='text'
                  onChange={(event) => setContact1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='tel1'>Tel: 1</label>
                <input
                  id='tel1'
                  type='text'
                  onChange={(event) => setTel1(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='contact2'>Contact: 2</label>
                <input
                  id='contact2'
                  type='text'
                  onChange={(event) => setContact2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/4 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='tel2'>Tel: 2</label>
                <input
                  id='tel2'
                  type='text'
                  onChange={(event) => setTel2(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='pssn'>Ouder RN</label>
                <input
                  id='pssn'
                  type='text'
                  onChange={(event) => setParentSSN(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='pdob'>Ouder Geboortedatum</label>
                <input
                  id='pdob'
                  type='text'
                  onChange={(event) => setParentDOB(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='cssn'>Kind RN</label>
                <input
                  id='cssn'
                  type='text'
                  onChange={(event) => setChildSSN(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>

            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-2/3 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='allergies'>Allergieës</label>
                <input
                  id='allergies'
                  type='text'
                  onChange={(event) => setAllergies(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='form-check d-flex align-items-center mt-7 ml-7'>
                <input className="form-check-input checkbox" type="checkbox" value="" id="medicals" name="medical" onChange={handleChecked} />
                <label className='ml-2' htmlFor='medical'>Medische Fiche</label>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full laptop:w-1/2 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='parentRemarks'>Opmerkingen ouders</label>
                <input
                  id='parentRemarks'
                  type='text'
                  onChange={(event) => setParentRemarks(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
              <div className='w-full laptop:w-1/2 px-3 mb-6 laptop:mb-0'>
                <label htmlFor='teamRemarks'>Opmerkingen pleinleiding</label>
                <input
                  id='teamRemarks'
                  type='text'
                  onChange={(event) => setTeamRemarks(event.target.value)}
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  autoComplete='off'
                />
              </div>
            </div>
            
            <div className='flex flex-wrap mx-0 mb-6'>
              <input
                type='submit'
                value='Nieuwe inschrijving'
                onClick={handleOnClick}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 laptop:mb-0 cursor-pointer'
              />
              <Link href="/">
              <input
                value='Home'
                className='bg-gray-700 hover:bg-gray-600 text-white text-center font-bold py-2 px-4 mx-4 rounded mb-6 laptop:mb-0 cursor-pointer'
              />
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
