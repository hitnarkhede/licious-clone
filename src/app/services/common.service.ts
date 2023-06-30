import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  categories = [
    {
      title: 'WOW Weekends',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Chicken',
      src: 'Chicken_(1)_(1).png',
    },
    {
      title: 'Fish & Seafood',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Mutton',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Ready to Cook',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Prawns',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Eggs',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Cold Cuts',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Kebab and Biryani',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Spreads',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Plant Based Meat',
      src: 'Wow_Weekend-180x180px.png',
    },
    {
      title: 'Meat Masala',
      src: 'Wow_Weekend-180x180px.png',
    },
  ];

  getCategories() {
    return this.categories;
  }

  bestsellers = [
    {
      title: 'Chicken Curry Cut - Small Pieces',
      src: 'chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).webp',
      quantity: '500gms',
      discountedPrice: '166',
      actualPrice: '179',
      discount: '7% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Chicken Breast - Boneless',
      src: 'chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getBestsellers() {
    return this.bestsellers;
  }
}
