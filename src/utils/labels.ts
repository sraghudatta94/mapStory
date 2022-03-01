import { TripSort, TripSortLabels, TripType, TripTypeLabels } from "../types";

export const getTripTypeLabel = (type: TripType): string => {
  return TripTypeLabels[type];
};

export const getTripSortLabel = (type: TripSort): string => {
  return TripSortLabels[type];
};
