let phrases = [
    { text: 'пойти в ресторан', image: 'https://s00.yaplakal.com/pics/pics_original/1/2/7/13169721.jpg' },
    { text: 'снять отель на ночь', image: 'https://avatars.mds.yandex.net/get-altay/4971637/2a0000017d9e05ee7888ffd0923cc6ae25a7/XXL_height' },
    { text: 'сходить в джаз бар', image: 'https://i.pinimg.com/564x/06/f6/7a/06f67a2615e4ee84ce392842e37a843b.jpg' },
    { text: 'приготовить друг другу фирменное блюдо', image: 'https://i.pinimg.com/736x/ec/41/ce/ec41ce8743a5d420e42533cf2bb3c10c.jpg' },
    { text: 'посмотреть романтическое кино с вином', image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655359b507d90c029887d08d_655361a3cfbc251d2b173207/scale_1200' },
    { text: 'пойти кататься на сноубордах', image: 'https://ufa-welcome.ru/800/600/http/static.wixstatic.com/media/40bc9e_744bf3bc8f9645229994a7e602597b2a~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg' },
    { text: 'пойти в клуб', image: 'https://bogatyr.club/uploads/posts/2023-03/thumbs/1678348757_bogatyr-club-p-nochnoi-klub-s-basseinom-foni-instagram-48.jpg' },
    { text: 'сходить на выставку', image: 'https://avrorra.com/wp-content/uploads/2019/05/post_5cd52ad9b07ab.jpeg' },
    { text: 'сыграть в боулинг', image: 'https://i.pinimg.com/564x/26/55/e0/2655e04d1c5aab9589fc99e7e4454d8f.jpg' },
    { text: 'научиться играть в бильярд', image: 'https://sun9-26.userapi.com/impg/wyE6N0ayHCrdSPmuCAdAHAtOqUjhjbRs5qqAhw/4Y7G9u8TeMs.jpg?size=604x604&quality=95&sign=105ee58f41065d3402924ea11c28e71b&type=album' },
    { text: 'снять домик за городом', image: 'https://www.neizvestniy-geniy.ru/images/works/photo/2023/11/2499853_1.jpg' },
    { text: 'устроить шоппинг', image: 'https://datacapsystems.com/wp-content/uploads/2018/12/WEB_roberts_Holidaymovies_art.jpg' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
    for (let i = 0; i <= 6; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image); 
  };