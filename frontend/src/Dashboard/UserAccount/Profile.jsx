import avatar from '../../assets/images/d.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {

  const [selectedFile, setSelectedFile] =useState(null);

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:'null',
    gender:'',
    bloodType: '',
  })
  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFileInputChange = async (event) =>{
    const file = event.target.files[0]

    console.log(file)
  }

const submitHandler = async event=>{
  event.preventDefault()
}


  return (
    <div>
         <form  onSubmit={submitHandler}>
      <div className="mb-5">
      <input 
      type="name" 
      placeholder='Full Name' 
      name='name' 
      value={formData.name}
      onChange={handleInputChange}
      className='w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] 
      focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor
      placeholder:text-textColor rounded-md cursor-pointer' required />
    </div>
    <div className="mb-5">
      <input 
      type="email" 
      placeholder='Enter Your Email' 
      name='email' 
      value={formData.email}
      onChange={handleInputChange}
      className='w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] 
      focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor
      placeholder:text-textColor rounded-md cursor-pointer' required/>
    </div>
    <div className="mb-5">
      <input 
      type="password" 
      placeholder='Enter Your password' 
      name='password' 
      value={formData.password}
      onChange={handleInputChange}
      className='w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] 
      focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor
      placeholder:text-textColor rounded-md cursor-pointer' required/>
    </div>
    <div className="mb-5">
      <input 
      type="text" 
      placeholder='Blood Type' 
      name='bloodType' 
      value={formData.bloodType}
      onChange={handleInputChange}
      className='w-full pr-3 px-4 py-3 border-b border-solid border-[#0066ff61] 
      focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-leadingColor
      placeholder:text-textColor rounded-md cursor-pointer' required/>
    </div>
    <div className="mb-5 flex items-center justify-between">
     
      <label 
      className='text-textColor font-bold text-[16px] leading-7'
      >
        Gender:
        <select name="gender"
         id=""
         value={formData.gender}
      onChange={handleInputChange}
          className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

      </label>
    </div>

<div className="mb-5 flex items-center gap-3">


  <div className='relative w-[160px] h-[50px]'>
    <input type="file"
    name='photo'
    id='customerFile'
    onChange={handleFileInputChange}
    accept='.jpg, .png' 
    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>

    <label htmlFor="customerFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.45rem] py-[0.375rem] text-[20px] 
    leading-8 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
  </div>
</div>

<div className="mt-7">
  <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3">
    Update
  </button>
</div>

      </form>
    </div>
  )
}

export default Profile