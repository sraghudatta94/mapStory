export enum TripSort {
  BY_DATE_ASC = "BY_DATE_ASC",
  BY_DATE_DESC = "BY_DATE_DESC",
  BY_NAME_ASC = "BY_NAME_ASC",
  BY_NAME_DESC = "BY_NAME_DESC",
}

export enum TripType {
  BUSINESS = "BUSINESS",
  HOLIDAY = "HOLIDAY",
  SCHOOL_TRIP = "SCHOOL_TRIP",
  NO_DATA = "NO_DATA",
}

export const TripTypeLabels = {
  [TripType.BUSINESS]: "Business",
  [TripType.SCHOOL_TRIP]: "School",
  [TripType.HOLIDAY]: "Holiday",
  [TripType.NO_DATA]: "No data",
};

export const TripSortLabels = {
  [TripSort.BY_DATE_ASC]: "Date Asc",
  [TripSort.BY_DATE_DESC]: "Date Desc",
  [TripSort.BY_NAME_ASC]: "Name Asc",
  [TripSort.BY_NAME_DESC]: "Name Desc",
};

export interface AppConfig {
  MAPBOX_TOKEN: string;
}

export interface User {
  username: string;
  email: string;
  avatar: string;
}

export interface SelectedLocation {
  locationIndex: number;
  location: Location | undefined;
  nextLocation: Location | undefined;
  previousLocation: Location | undefined;
}

export interface HomePageOutletProps {
  trip: Trip | undefined;
  selectedLocation: SelectedLocation | undefined;
}

export interface Trip {
  id: string;
  title: string;
  description: string;
  image: string;
  visitStartDate: any;
  visitEndDate: any;
  type: TripType;
  locations: Location[];
}

export interface LocationCoordinate {
  latitude: number;
  longitude: number;
}

export interface Location {
  id: string;
  title: string;
  description: string;
  image: string;
  visitStartDate: any;
  visitEndDate: any;
  coordinates: LocationCoordinate;
}
