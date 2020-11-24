import React from 'react'

const ErrorInput = ({mensaje}) => {
    return (
        <div className="alert alert-danger text-danger" role="alert">
            { mensaje }
        </div>
    )
}

export default ErrorInput