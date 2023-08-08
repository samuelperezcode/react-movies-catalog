import './Field.css'

function Field ({ id, fieldName }) {
  return (
    <div className='field-container'>
      <label htmlFor={id}>{fieldName}:</label>
      <input type='text' name={id} />
    </div>
  )
}

export default Field
