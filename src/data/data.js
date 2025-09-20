import { faHeart, faHouse } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

// Navigation tabs
export const tabItems = [
    {id: 0, icon: faHouse, title: 'Home'},
    {id: 1, icon: faHeart, title: 'Wishlist'},
    {id: 2, icon: faShoppingCart, title: 'Cart'},
    {id: 3, icon: faUser, title: 'Profile'},
];

// Product class
export class apparelProduct {
    constructor(id, title, brand, size, color, price, imgUrl) {
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}


// Product data
export const initialProducts = [
    new apparelProduct(0, 'Loose fit tee', 'bareen', 'L', '#FFF', 15, '/img/productimage1.webp'),
    new apparelProduct(1, 'Mellow Top', 'Planet Nusa', 'M', '#5E7C7F', 25, '/img/productimage2.webp'),
    new apparelProduct(2, 'Baggy Shirt', 'Carhartt', 'XL', '#C9BBD5', 30, '/img/productimage3.webp'),
    new apparelProduct(3, 'Breezy Pac-man', 'Asics', 'M', '#FCD63D', 24, '/img/productimage4.webp'),
];


// Cart content. Contains products that are added to the cart
export const initialcartContent = [];