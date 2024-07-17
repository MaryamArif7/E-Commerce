
import chair from "../assets/sale/chair.svg";
import keyboard from "../assets/sale/keyboard.svg";
import tv from "../assets/sale/tv.svg";
import remote from "../assets/sale/remote.svg";
import Camera from "../assets/category/Camera.svg";
import computers from "../assets/category/computers.svg";
import Headphones from "../assets/category/HaedPhones.svg"
import smart from "../assets/category/smart.svg"
import Gaming from "../assets/category/Gaming.svg"
import Cameraa from "../assets/Explore/Cameraa.svg";
import laptop from "../assets/Explore/laptop.svg";
import Dog from "../assets/Explore/Dog.svg";
import shirts from "../assets/Explore/shirts.svg";
import shoes from "../assets/Explore/shoes.svg";
import skin from "../assets/Explore/skin.svg";
import toys from "../assets/Explore/toys.svg"
import remotee from "../assets/Explore/remotee.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

export const products = [
    {
        imgURL: chair,
        name: "S-Series Comfort Chair ",
        price: "$200.20",
        off:"35%",
        discount:"$170",
        rating:"(99)",
    },
    {
        imgURL: keyboard,
        name: "AK-900 Wired Keyboard",
        price: "$210.20",
        off:"35%",
        discount:"$170",
        rating:"(99)",
    },
    {
        imgURL: remote,
        name: "HAVIT HV-G92 Gamepad",
        price: "$500.20",
        off:"35%",
        discount:"$470",
        rating:"(99)",
    },
    {
        imgURL: tv,
        name: "IPS LCD Gaming Monitor",
        price: "$630.20",
        off:"35%",
        discount:"$600",
        rating:"(99)",
    },
    
];


export const category= [
    {
        imgURL: smart,
        name: "Smart Watches",
      
    },
    {
        imgURL:Camera,
        name: "Cameras",
       
    },
    {
        imgURL: computers,
        name: "Computers",
    
    },
    {
        imgURL: Headphones,
        name: "Headphones",
      
    },
    {
        imgURL:Gaming,
        name:"Gaming",
    },
    
];
export const Explores= [
    {
        imgURL: Cameraa,
        name: "CANON EOS DSLR Camera",
        price: "$630.20",
      
    },
    {
        imgURL:Dog,
        name: "Breed Dry Dog Food",
        price: "$630.20",
    },
    {
        imgURL:laptop ,
        name: "ASUS FHD Gaming Laptop",
        price: "$630.20",
    },
    {
        imgURL: remotee,
        name: "GP11 Shooter USB Gamepad",
        price: "$630.20",
    },
    {
        imgURL:shirts,
        name:"Jr. Zoom Soccer Cleats",
        price: "$630.20",
    },
    {
        imgURL: shoes,
        name: "Quilted Satin Jacket",
        price: "$630.20",
      
    },
    {
        imgURL:skin,
        name:"Curology Product Set ",
        price: "$630.20",
    },
    {
        imgURL:toys,
        name:"Kids Electric Car",
        price: "$630.20",
    },
    
    
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];