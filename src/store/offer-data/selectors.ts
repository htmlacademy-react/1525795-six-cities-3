import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Offers, OfferDetail } from '../../types/offers';
import { Comments } from '../../types/comments';

export const getIsOffersLoading = (state: State): boolean => state[NameSpace.Offer].isOffersLoading;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.Offer].isDataLoading;
export const getIsLoadingError = (state: State): boolean => state[NameSpace.Offer].isLoadingError;
export const getLoadedOffers = (state: State): Offers => state[NameSpace.Offer].loadedOffers;
export const getFavorites = (state: State): Offers => state[NameSpace.Offer].favorites;
export const getOfferDetail = (state: State): OfferDetail | undefined => state[NameSpace.Offer].offer;
export const getComments = (state: State): Comments => state[NameSpace.Offer].comments;
export const getNearOffers = (state: State): Offers => state[NameSpace.Offer].nearOffers;
export const getIsResetFeedback = (state: State): boolean => state[NameSpace.Offer].isResetFeedback;
