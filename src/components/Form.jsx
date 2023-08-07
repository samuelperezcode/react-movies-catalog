import Field from "./Field"

function Form() {
  return (
    <section>
      <h2>Contact Us</h2>
      <form action="">
        <Field id="name" fieldName="Name" />
        <Field id="name" fieldName="Name" />
        <Field id="name" fieldName="Name" />
        <button>Send Email</button>
      </form>
    </section>
  )
}

export default Form