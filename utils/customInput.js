import React from 'react'

const CustomInput = ({classes, htmlFor, label, inputId, inputType, onchange, placeholder}) => {
    return (
        <div className={`${classes}`}>
            <label className='relative flex font-black block tracking-wide' htmlFor={htmlFor}>{label}</label>
            <input
                id={inputId}
                type={inputType}
                onChange={(event) => onchange(event.target.value)}
                className='appearance-none block w-7xl bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                autoComplete='off'
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput
