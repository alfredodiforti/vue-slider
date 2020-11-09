const app = new Vue({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './img/hamilton.jpg',
            './img/leclerc.jpg',
            './img/norris.jpg',
            './img/verstappen.webp',
        ]
    },
    methods: {
        nextPhoto() {
            this.indexPhoto ++;
            if (this.indexPhoto > (this.photos.length - 1)){
                this.indexPhoto = 0; 
            }
        },
        backPhoto() {
            this.indexPhoto --;
            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1 ;
            }

        }

    }

});