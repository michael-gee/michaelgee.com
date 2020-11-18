import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function useContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', text: '', _gotcha: '' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      const form = new FormData()
      form.append('name', fields.name)
      form.append('email', fields.email)
      form.append('text', fields.text)
      form.append('_gotcha', fields._gotcha)

      const xhr = new XMLHttpRequest()
      xhr.open('POST', 'https://formspree.io/myynlapp')
      xhr.setRequestHeader('Accept', 'application/json')

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          router.push('/success')
        } else {
          setErrorMessage('Form was unsuccessfully submitted. Please try again later.')
          setIsSubmitting(false)
        }
      }

      xhr.send(form)
    }
  }, [isSubmitting])

  function _onInputChange(ev, data) {
    setFields({ ...fields, [ev.target.name]: data.value })
  }

  function _onSubmit(ev) {
    ev.preventDefault()

    const { name, email, text } = fields
    const emailRegex = /^\S+@\S+\.\S+$/g

    if (name.trim() === '' || email.trim() === '' || text.trim() === '') {
      setErrorMessage('Please fill all fields before submitting the form.')
      return
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address before submitting the form.')
      return
    }

    setIsSubmitting(true)
  }

  return {
    fields,
    errorMessage,
    isSubmitting,
    onInputChange: _onInputChange,
    onSubmit: _onSubmit
  }
}
