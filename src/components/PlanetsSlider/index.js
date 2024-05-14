import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetsList={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
