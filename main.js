const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2255, color: 'green'},
                {id: 8635, color: 'blue'},
                {id: 8125, color: 'blue'},
            ],
            sizes: ['SS', 'S', 'M', 'L', 'XL', 'XXL']
        }
    }
})
