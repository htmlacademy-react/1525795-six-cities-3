import { Offers } from './types/offers';
import { SortType } from './const';

export function getCityOffers(loadedOffers: Offers, city: string | undefined): Offers {
  return [...loadedOffers.filter((item) => item.city.name === city)];
}


export function getSortedCityOffers(cityOffers: Offers | [], sortType: SortType): Offers {
  switch (sortType) {
    case SortType.LowToHigh:
      return cityOffers.sort((offer1, offer2) => offer1.price - offer2.price);

    case SortType.HighToLow:
      return cityOffers.sort((offer1, offer2) => offer2.price - offer1.price);

    case SortType.TopRated:
      return cityOffers.sort((offer1, offer2) => offer2.rating - offer1.rating);
  }

  return cityOffers;
}


export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);


export const getRandomInteger = (min: number, max: number): number => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


export const getStarsWidth = (rating : number) => `${String((Math.round(rating) * 100 / 5))}%`;

