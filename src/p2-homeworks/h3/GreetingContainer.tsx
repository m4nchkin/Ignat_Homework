import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


// более простой и понятный для новичков
function GreetingContainer(props: GreetingContainerPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setError(null)
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== '') {
            props.addUserCallback(name)
            alert('Hello ' + name.trim() + ' !') // need to fix
            setName('')
        } else {
            setError('Name is required!')
        }
    }

    const totalUsers = props.users.length
    // console.log(totalUsers.length)
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
