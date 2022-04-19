class Facebook{
    constructor(user, post, biography, hobbies, city, friends){
        this.user = user;
        this.post = post;
        this.biography = biography;
        this.hobbies = hobbies;
        this.city = city;
        this.friends = friends;
    }

    getInfoUser(){
        return `El usuario ${this.user} cuenta con ${this.post} post y ${this.friends} amigos`;
    }


}

const userFacebook = new Facebook("Raul Chavez", 155, "Vivo en el estado de Colima y me gusta mucho ir a la playa.", "Videojuegos, Playa, Musica", "Colima", 1052)
console.log(`Facebook: ${userFacebook.getInfoUser()}`);


//Tiwitter
class Twitter{
    constructor(user, trending_topic, hashtag, followers){
        this.user = user
        this.trending_topic = trending_topic,
        this.hashtag = hashtag,
        this.followers = followers
    }

    getInfoBasica(){
        return `El usuario ${this.user} cuenta con ${this.followers} followers y ${this.trending_topic} trending topics`;
    }
}

const twitterUser = new Twitter("RikuS4ma", 45, "#Innovacion", 33);
console.log(twitterUser.getInfoBasica());


class Uber{
    constructor(travels){
        this.profile = ""
        this.travels = travels
        this.lastTravel =""
    }

    set setProfile(name){
        this.profile = name;
    }

    set setlastTravel(lastTravel){
        this.lastTravel = lastTravel;
    }

    get getTravels(){
        return this.travels;
    }

    get getlastTravel(){
        return this.lastTravel; 
    }

    getNameUser(){
        return this.profile;
    }
}


const UberInfo = new Uber(85);

// actualizamos los atributos por medio de los setters
UberInfo.profileName = "Raul Antonio Chavez Aguirre";
UberInfo.travels = 45;
UberInfo.lastTravels = "Colima";

console.log(`El cliente ${UberInfo.getNameUser()} realizo ${UberInfo.travels} viajes en el 2020 y su ultimo viaje fue a ${UberInfo.lastTravel} el dia de ayer.`);
