import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-data/selectors';

type LocationsProps = {
  changeLocationHandler(activeLocation: string): void;
}

function Locations({changeLocationHandler}: LocationsProps): JSX.Element {
  const activeLocation = useAppSelector(getCity);
  const classLocation = 'locations__item-link tabs__item';
  const classActiveLocation = `${classLocation} tabs__item--active`;

  const handleLocationClick = (evt: React.MouseEvent<HTMLElement>):void => {
    changeLocationHandler(evt.currentTarget.innerText);
  };

  return (
    <ul className="locations__list tabs__list" data-testid="city-container">
      {cities.map((item) => (
        <li key={item} className="locations__item">
          <Link className=
            {
              item === activeLocation ? classActiveLocation : classLocation
            } to="/" onClick={handleLocationClick}
          >
            <span data-testid={item}>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}


export default Locations;
