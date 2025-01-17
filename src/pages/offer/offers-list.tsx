import Card from '../card/card';
import { Offer, Offers } from '../../types/offers';

type OffersListProps = {
  cityOffers: Offers;
  activeLocation: string;
  selectOfferHandler(offerId: string | null): void;
}

function OffersList({cityOffers, activeLocation, selectOfferHandler}: OffersListProps): JSX.Element {
  function handleMouseOver(evt: React.MouseEvent<HTMLElement>): void {
    const nodeName: React.MouseEvent<HTMLElement> | string = evt.currentTarget.nodeName;
    if (nodeName === 'ARTICLE') {
      selectOfferHandler(evt.currentTarget.getAttribute('id'));
    }
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cityOffers.length} places to stay in {activeLocation}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((item: Offer) => (
          <article key={item.id} id={item.id}
            className="cities__card place-card"
            onMouseOver={handleMouseOver}
          >
            <Card offer={item} divClassName='cities__image-wrapper place-card__image-wrapper'/>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OffersList;
