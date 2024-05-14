import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {name, imageUrl, description} = planetsList

  return (
    <div className="card-contianer">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
