import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private categories = [
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
      src: 'Fish_(1)_(1)_(1).png',
    },
    {
      title: 'Mutton',
      src: 'Mutton_(1)_(1).png',
    },
    {
      title: 'Ready to Cook',
      src: 'All-Cat-Icon-Images_(1).png',
    },
    {
      title: 'Prawns',
      src: 'Prawns.png',
    },
    {
      title: 'Eggs',
      src: 'Eggs.png',
    },
    {
      title: 'Cold Cuts',
      src: 'Coldcuts.png',
    },
    {
      title: 'Kebab and Biryani',
      src: 'Kebabs_(1).png',
    },
    {
      title: 'Spreads',
      src: 'spreads-transparent_(5).png',
    },
    {
      title: 'Plant Based Meat',
      src: 'Uncrave.png',
    },
    {
      title: 'Meat Masala',
      src: 'Masala_1.png',
    },
  ];

  getCategories() {
    return this.categories;
  }

  private bestsellers = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
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
  private combos = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getCombos() {
    return this.combos;
  }

  private lowers = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getLowers() {
    return this.lowers;
  }

  private breakfast = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getBreakfast() {
    return this.breakfast;
  }
  private boneless = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getBoneless() {
    return this.boneless;
  }

  private topRated = [
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
      src: 'chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).webp',
      quantity: '450gms',
      discountedPrice: null,
      actualPrice: '285 ',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Classic (Farm Fresh) Eggs - Pack of 12',
      src: 'PDP_2.webp',
      quantity: '12 Pieces',
      discountedPrice: '146',
      actualPrice: '170',
      discount: '14% off',
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No',
      src: 'p2_tile_images_6th_folder-09_(1).webp',
      quantity: '500gms',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
    {
      title: 'Afghani Murgh Seekh Kebab',
      src: 'UCOOKED_(1).webp',
      quantity: '4 Pieces',
      discountedPrice: null,
      actualPrice: '269',
      discount: null,
      availibility: 'Tomorrow <b>6 AM - 8 AM</b>',
    },
  ];

  getTopRated() {
    return this.topRated;
  }
}
