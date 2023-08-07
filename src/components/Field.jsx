function Field({id, fieldName}) {
  return (
    <div>
      <label htmlFor={id}>{fieldName}</label>
      <input type="text"  name={id} />
    </div>
  )
}

export default Field