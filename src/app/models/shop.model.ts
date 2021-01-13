

class Shop{

    shopItems: Object;

    constructor(){
        this.shopItems = [
            {
                title:'Curso Wordpress',
                desc:'Aprende Wordpress desde 0',
                picture:'wordpress.jpg',
                price:164
            },
            {
                title:'Curso Frontend',
                desc: 'Aprende desarrollo front end desde 0',
                picture:'frontend.jpg',
                price:220
            },
            {
                title:'Curso Fullstack',
                desc:'Aprende desarrollo frontend y backend desde 0 ',
                picture:'fullstack.jpg',
                price:420
            }
        ]
    }

}


export default Shop;
