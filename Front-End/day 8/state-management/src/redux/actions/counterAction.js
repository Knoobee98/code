export const SetIncrement = () => {
    return {
        type: 'INCREMENT',
    }
}

export const SetDecrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const SetData = (username, password) => {
    console.log(username)
    return {
        type: 'Signin',
        payload: { username: username, password: password }
    }
}