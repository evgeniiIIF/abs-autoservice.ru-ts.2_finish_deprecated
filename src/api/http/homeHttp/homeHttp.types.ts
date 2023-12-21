export interface HomeSeo {
  meta_title: string;
  meta_description: string;
  meta_author: string;
  meta_robots: any;
  meta_canonical_url: any;
}
export interface HomeBtn {
  link: string;
  title: string;
  is_modal: boolean;
  is_active: boolean;
}

export interface HomeWelcome {
  btn: HomeBtn[];
  title: string;
  description: string;
  advantage_tags: string[];
}

export interface HomeOffers {
  title: string;
}

export interface HomeOffersItem {
  id: number;
  title: string;
  descriptions: number;
  image: string;
}

export interface HomePopularServices {
  title: string;
}

export interface HomePopularServicesItem {
  id: number;
  title: string;
  image_icon: string;
}

export interface HomeAbout {
  title: string;
  content: string;
  subtitle: string;
}

export interface HomeReviews {
  title: string;
}

export interface HomeReviewService {
  id: number;
  name: string;
  rating: string;
  link: string;
  icon: string;
}

export interface HomeReviewItem {
  id: number;
  name: string;
  rating: string;
  content: string;
  link: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  review_service: HomeReviewService[];
}

export interface HomeData {
  seo: HomeSeo;
  welcome: HomeWelcome[];
  welcome_img: string;
  offers: HomeOffers;
  offers_items: HomeOffersItem[];
  popular_services: HomePopularServices;
  popular_services_items: HomePopularServicesItem[];
  about: HomeAbout;
  about_img: string;
  reviews: HomeReviews;
  review_items: HomeReviewItem[];
}

export interface HomeResponse {
  data: HomeData;
}