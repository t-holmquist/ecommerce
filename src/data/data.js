import { faHeart, faHouse } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

export const tabItems = [
    {id: 0, icon: faHouse, title: 'Home'},
    {id: 1, icon: faHeart, title: 'Wishlist'},
    {id: 2, icon: faShoppingCart, title: 'Cart'},
    {id: 3, icon: faUser, title: 'Profile'},
];

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

export const products = [
    new apparelProduct(0, 'Loose fit tee', 'bareen', 'L', '#1a63ee', 15, false, '/img/banner1.webp'),
    new apparelProduct(1, 'Mellow Top', 'Planet Nusa', 'M', '#d882f6', 25, false, '/img/banner1.webp'),
    new apparelProduct(2, 'Golden Shirt', 'Carhartt', 'XL', '#1a63ee', 30, false, '/img/banner1.webp'),
    new apparelProduct(3, 'Breezy Top', 'Asics', 'M', '#1a63ee', 24, false, '/img/banner1.webp'),
];