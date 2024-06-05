import { useState } from 'react'
import React from 'react'

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        
    }

  return <form onSubmit={onSubmit}>
    <div>
        <label htmlFor='firstName'>FirstName:</label>
        <input 
            type="text" 
            id="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor='lirstName'>LastName:</label>
        <input 
            type="text" 
            id="lasstName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor='email'>Email:</label>
        <input 
            type="text" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <button type="submit">Create Contact</button>
  </form>
}

export default ContactForm