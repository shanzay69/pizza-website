import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        {
            id: 1,
            name: 'Spicy Legend Ranch',
            price: 550,
            image: 'https://7streetpizza.com.pk/wp-content/uploads/2024/09/Untitled-design-35-430x430.jpg',
            description: 'Cheddar cheese base, mozzarella cheese, grilled chicken, jalapenos, and oregano ranch sauce.',
        },
        {
            id: 2,
            name: 'Legend Ranch',
            price: 550,
            image: 'https://cache.dominos.com/wam/prod/market/CH/_en/images/promo/1953a476-aa30-429a-bdd0-9d10564a2fa1.jpg',
            description: 'Cheddar cheese base, mozzarella cheese, grilled chicken, jalapenos, and oregano ranch sauce.',
        },
        {
            id: 3,
            name: 'Cheese Pizza',
            price: 550,
            image: 'https://img.freepik.com/premium-photo/pizza-black-background-with-lot-smoke-flames_856795-7657.jpg',
            description: 'Pizza sauce base with cheese and cheese some more and add chicken and onions.',
        },
        {
            id: 4,
            name: 'BBQ Chicken Pizza',
            price: 550,
            image: 'https://img.freepik.com/premium-photo/pizza-with-black-background-black-background_894754-885.jpg',
            description: 'BBQ sauce base, mozzarella cheese, spicy chicken chunks, onions, and black olives.',
        },
        {
            id: 5,
            name: 'Super Cheese Pizza',
            price: 650,
            image: 'https://t3.ftcdn.net/jpg/08/17/18/96/360_F_817189640_W8Xl8sw8uoXGLyJ159uOVFjJieGPvXiA.jpg',
            description: 'Pizza sauce base with cheese and more cheese with topping of black olives tomato.',
        },
        {
            id: 6,
            name: 'Veggie Pizza',
            price: 650,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/023/007/593/small_2x/pizza-veggie-italian-pizza-with-mozzarella-olives-sausage-and-vegetables-on-black-background-ai-generated-photo.jpg',
            description: 'Pizza sauce base, mozzarella cheese, onions, green peppers, and black olives.',
        },
        {
            id: 7,
            name: 'Pepperoni Passion Pizza',
            price: 650,
            image: 'https://cdn.create.vista.com/api/media/small/687598820/stock-photo-pizza-mushrooms-tomatoes',
            description: 'Pizza sauce base, mozzarella cheese, black olives, and topping with onions and mushrooms.',
        },
        {
            id: 8,
            name: 'Hawaiian Chicken',
            price: 650,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/027/807/857/small/appetizing-hawaiian-pizza-composed-with-ham-grilled-chicken-bacon-pineapple-green-peppers-onions-yellow-sauce-mozzarella-cheese-ricotta-grated-parmesan-as-toppings-photo.jpg',
            description: 'Pizza sauce base, mozzarella cheese, chicken chunks, and pineapples.',
        },
    ];

    return NextResponse.json(products);
}
