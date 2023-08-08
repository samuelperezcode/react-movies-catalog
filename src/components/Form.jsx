import Field from './Field'
import './Form.css'

function Form () {
  return (
    <section className='contact-section'>
      <h2 className='contact-title'>Contact Us</h2>
      <form className='contact-form' action=''>
        <Field id='name' fieldName='Name' />
        <Field id='email' fieldName='Email' />
        <button className='contact-btn'>Send Email</button>
      </form>
    </section>
  )
}

export default Form
