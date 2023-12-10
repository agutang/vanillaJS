/* image source
https://www.pexels.com/ko-kr/photo/5865763/
https://www.pexels.com/ko-kr/photo/4869355/
https://www.pexels.com/ko-kr/photo/1578445/
https://www.pexels.com/ko-kr/photo/14885388/
*/
const images = [
  "https://images.pexels.com/photos/5865763/pexels-photo-5865763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4869355/pexels-photo-4869355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1578445/pexels-photo-1578445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14885388/pexels-photo-14885388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const imageChosen = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

document.body.style.backgroundImage = `url(${imageChosen})`;
