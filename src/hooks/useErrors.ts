import React, { useState } from 'react'

interface IErrorsProps {
  field?: string,
  message?: string,
}

export default function useErrors() {
  const [errors, setErrors] = useState<Object[]>([])

  function setError({ field, message }: IErrorsProps) {
    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldname: string) {
    setErrors((prevState) => prevState.filter(
      (error: IErrorsProps) => error.field !== fieldname
    ));
  }

  function getErrorMessage(fieldname: string) {
    const item: any = errors.find((error: IErrorsProps) => error.field === fieldname);
    return item?.message
  }

  return { errors, setError, removeError, getErrorMessage }
}
