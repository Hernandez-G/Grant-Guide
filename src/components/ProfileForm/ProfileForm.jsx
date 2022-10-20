import { useState } from "react";
import React from "react";
import "./ProfileForm.css"
import * as usersApi from "../../utilities/users-api"


function ProfileForm({ user }) {
    const [userUpdate, setUserUpdate] = useState({
        firstName: user && user.firstName ? user.firstName : '',
        lastName: user && user.lastName ? user.lastName : '',
        email: user && user.email ? user.email : '',
        // password: user && user.password ? user.password : '',
        role: user && user.role ? user.role : '',
        organization: user && user.organization ? user.organization : '',
        location: user && user.location ? user.location : '',
        about: user && user.about ? user.about : '',
        experience: user && user.experience ? user.experience : '',
        jobDescription: user && user.jobDescription ? user.jobDescription : '',
    });

    const[submitting, setSubmitting] = useState(false);

    async function handleSubmit(evt) {
         evt.preventDefault();
         // alert('form');
         setSubmitting(true);
         const profile = await usersApi.updateProfile(userUpdate)
         console.log(profile)
        // when submitted data is loading
        setTimeout(() => {
        }, [])
        throw new Error ("Something went wrong")
    }

    console.log(userUpdate);
    
    function handlechange(evt) {
        setUserUpdate({...userUpdate, [evt.target.name]: evt.target.value, 
        });

    }

    const inputs = [
        { name: 'firstName', id: "floating_first_name", value: userUpdate.firstName, text: 'First name' },
        { name: 'lastName', id: "floating_last_name", value: userUpdate.lastName, text: 'Last name' },
        { name: 'email', id: "floating_email", value: userUpdate.email, text: 'Email' },
        { name: 'role', id: "floating_role", value: userUpdate.role, text: 'Role' },
        { name: 'organization', id: "floating_organization", value: userUpdate.organization, text: 'Organization' },
        { name: 'location', id: "floating_location", value: userUpdate.location, text: 'Location' },
        { name: 'about', id: "floating_about", value: userUpdate.about, text: 'About Me' },
        { name: 'experience', id: "floating_experience", value: userUpdate.experience, text: 'experience' },
        { name: 'jobDescription', id: "floating_jobDescription", value: userUpdate.jobDescription, text: 'Job Description' },
        // { name: 'img', id: "floating_img", value: userUpdate.img, text: 'Photo URL' },
    ]

    const inputMap = inputs.map(input => {
        const { name, id, value, text } = input
        return (
            <div className="relative z-0 mb-6 w-full group">
                <input type="text" name={ name } id={ id } className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={ value }  onChange={ handlechange } placeholder=" "  />
                <label htmlFor={ id } className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-50 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{ text }</label>
            </div>
        )
    })

    return(
        <>
            <label className='welcome'>Edit Profile</label>
            <form onSubmit={ handleSubmit }>
                <div className="grid md:grid-cols-2 md:gap-6 m-9">
                    { inputMap }
                    {/* <div class="relative z-0 mb-6 w-full group">
                <input type="url" name='img' id="floating_img" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  value={ userUpdate.img }  onChange={ handlechange } placeholder=" "  />
                <label for="floating_img" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-50 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">'Photo URL'</label>
            </div> */}
                    <button 
                        href="/profile"
                        id="save-btn"
                        type="submit" 
                        onSubmit={handlechange} 
                        // onChange={(e)=>{setUserUpdate(e.target.value)}}
                        className="bg-transparent hover:bg-emerald-700 text-emerald-900 font-semibold hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded">
                        Save 
                    </button>
                </div>
            </form>
        </>
    )
}
        export default ProfileForm;
        // <div className="wrapper">
        //     <h1 className='welcome'>Edit Profile</h1>
        //     <form onSubmit={handleSubmit} onChange={handlechange}>
        //         <fieldset class="grid md:grid-cols-2 md:gap-6">
        //         <div class="grid md:grid-cols-2 md:gap-6">
        //         <div class="relative z-0 mb-6 w-full group">
        //                 <label
        //                 for="floating_first_name"
        //                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-50 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        
        //                 ><span>First Name</span></label>
        //                 <input 
        //                 placeholder="Enter First Name"
        //                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        //                 type="text"
        //                 name="firstName"
        //                 id="floating_first_name"
        //                 value= {userUpdate.firstName}
        //                 onChange={handlechange}
        //                  />
        //         </div>
        //         </div>
        //                 <label><span>Last Name</span></label>
        //                 <input
        //                 class="relative z-0 mb-6 w-full group"
        //                 placeholder="Enter First Name"
        //                 type="text"
        //                 name="lastName"
        //                 value= {userUpdate.lastName}
        //                  />
        //                 <label><span>Email</span></label>
        //                 <input 
        //                 placeholder="Update Email"
        //                 type="text"
        //                 name="email"
        //                 value= {userUpdate.email}
        //                  />
        //                 <label><span>Role</span></label>
        //                 <input 
        //                 placeholder="Update Role"
        //                 type="text"
        //                 name="role"
        //                 value= {userUpdate.role}
        //                 />

        //                 <label><span>Organization</span></label>
        //                 <input 
        //                 placeholder="Update Organization"
        //                 type="text"
        //                 name="organization"
        //                 value= {userUpdate.organization}
        //                 />
        //                 <label><span>Location</span></label>
        //                 <input 
        //                 placeholder="Update Location"
        //                 type="text"
        //                 name="location"
        //                 value= {userUpdate.location}
        //                  />
        //                 <label><span>About</span></label>
        //                 <textarea 
        //                 placeholder="Update About"
        //                 type="text"
        //                 name="about"
        //                 value= {userUpdate.about}
        //                  />
                        
        //                 <label><span>Description</span></label>
        //                 <textarea 
        //                 placeholder="Update Job Description "
        //                 type="text"
        //                 name="jobDescription"
        //                 value= {userUpdate.jobDescription}
        //                  />
                        
        //                 <br />

        //         </fieldset>
        //     </form>


        // </div>