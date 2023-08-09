import './ListOfPeopleCards.css'
import photo from '../assets/photo.png'

export function PersonCard ({ name, photoPerfil, job, desc }) {
  return (
    <article className='person-card'>
      <img className='person-card--photo' src={photo} alt={`Perfil photo of ${job} named ${name}`} />
      <div className='person-card--content'>
        <h2>{name}</h2>
        <h5>{job}</h5>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export function ListOfPeopleCards ({ titleCards, people }) {
  return (
    <section className='employees-container'>
      {people.map(person => <PersonCard key={person.name} name={person.name} photoPerfil={person.photo} job={person.job} desc={person.desc} />)}
    </section>
  )
}
