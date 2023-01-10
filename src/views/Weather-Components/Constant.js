import {PartlyCloudy,Sunny , Rain , Thunder} from "../../assets/Images"

export const API_KEY = "oqdvF8PEwwpJJp3snTja00jQG8yUedGK";
export const BASE_URL = "http://dataservice.accuweather.com";
export const Cities = [
  { title: "Sargodha", value: "sargodha" },
  { title: "Bahawalpur", value: "bahawalpur" },
  { title: "Sukkur", value: "sukkur" },
  { title: "Larkana", value: "larkana" },
  { title: "Sahiwal", value: "sahiwal" },
  { title: "Gujrat", value: "gujrat" },
  { title: "Okara", value: "okara" },
  { title: "Gujranwala", value: "gujranwala" },
  { title: "Hyderabad", value: "hyderabad" },
  { title: "Mirpur", value: "mirpur" },
  { title: "Wazirabad", value: "wazirabad" },
  { title: "Attock", value: "attock" },
];

export const POPULAR_CITIES = [
  { city: "Lahore", key: "260622", province: "Punjab" ,url:Rain},
  { city: "Multan", key: "260624", province: "Punjab" , url:Sunny},
  { city: "Kirachi", key: "261158", province: "Sindh" ,url:PartlyCloudy},
  { city: "Quetta", key: "257185", province: "Balochistan",url:Thunder },
];

export const DETAIL_TABLS = [
  { name: "Today" },
  { name: "Hourly" },
  { name: "Daily" },
  { name: "Monthly" },
  { name: "Health & Quality" },
];
