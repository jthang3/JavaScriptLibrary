var randomImage = document.querySelector('.random-image');
console.log("randomImage: ",randomImage);

const api = "https://source.unsplash.com/random";


function fetchMe(){
    fetch(api)
        .then((value)=>{
            if(!value.ok){
                return new error(value);
                
            }
            else{
                return value.blob();
            }
        })
        .then((value)=>{
            let url = URL.createObjectURL(value);
            randomImage.src = url;
        })
        .catch((value)=>{
            console.log(value);
        })
}
fetchMe();















// fetch(api)
//     .then((value)=>{
//         if(!value.ok){
//             return new Error(value);
//         }
//         return value.blob();
//     })
//     .then(value=>{
//         let url = URL.createObjectURL(value);
//         randomImage.src = url;
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



