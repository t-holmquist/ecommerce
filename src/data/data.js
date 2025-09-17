import { faHeart, faHouse } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

export const tabItems = [
    {id: 0, icon: faHouse, title: 'Home'},
    {id: 1, icon: faHeart, title: 'Wishlist'},
    {id: 2, icon: faShoppingCart, title: 'Cart'},
    {id: 3, icon: faUser, title: 'Profile'},
];

// Product class
export class apparelProduct {
    constructor(id, title, brand, size, color, price, liked=false, imgUrl) {
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.price = price;
        this.liked = liked;
        this.imgUrl = imgUrl;
    }
}


// Product data
export const products = [
    new apparelProduct(0, 'Loose fit tee', 'bareen', 'L', '#FB2CE6', 15, false, '/img/productimage1.webp'),
    new apparelProduct(1, 'Mellow Top', 'Planet Nusa', 'M', '#5C98CA', 25, false, '/img/productimage2.webp'),
    new apparelProduct(2, 'Golden Shirt', 'Carhartt', 'XL', '#902CFB', 30, false, '/img/productimage3.webp'),
    new apparelProduct(3, 'Breezy Top', 'Asics', 'M', '#FCD63D', 24, false, '/img/productimage4.webp'),
];


// Cart content. Contains products that are added to the cart
export const cartContent = [
    new apparelProduct(0, 'Loose fit tee', 'bareen', 'L', '#FB2CE6', 15, false, '/img/productimage1.webp'),
    new apparelProduct(1, 'Mellow Top', 'Planet Nusa', 'M', '#5C98CA', 25, false, '/img/productimage2.webp'),
    new apparelProduct(2, 'Golden Shirt', 'Carhartt', 'XL', '#902CFB', 30, false, '/img/productimage3.webp'),
    new apparelProduct(3, 'Breezy Top', 'Asics', 'M', '#FCD63D', 24, false, '/img/productimage4.webp'),
];