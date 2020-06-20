import Profile from '../models/Profile';

export const PROFILES = [
  //the profiles that you got from the api
  new Profile(
    'u1',
    [],
    'Amanda Cerny',
    28,
    'F',
    'Pennsylvania, United States',
    ['https://m.media-amazon.com/images/M/MV5BMjA2NTA4OTI2NV5BMl5BanBnXkFtZTgwOTQxNjI4ODE@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
    'https://i.pinimg.com/originals/f3/76/ef/f376ef02b5a2e545e859c08688039aec.jpg',
  'https://mystarupdate.com/wp-content/uploads/2019/07/Amanda-Cerny.png',
'https://fitnessabout.com/wp-content/uploads/2019/12/Amanda-Cerny-diet.jpg'],
    'Random Description',
    160,
    "American"
  ),
  new Profile(
    'u2',
    ['u1'],
    'Sonam Bajwa',
    27,
    'F',
    'Mumbai, India',
    ['https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/89850870_1255647991492255_9095369860971495424_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=uflx_GUh61sAX8Jt2FY&_nc_ht=scontent-del1-1.xx&oh=924169ff7d42e35f3b486188c3214054&oe=5EC6A540',
    'https://i.pinimg.com/474x/c8/aa/07/c8aa0721a9e5bbbfb21e1d4ee04774d0.jpg',
    'https://www.cinetalkers.com/wp-content/uploads/2017/01/Sonam-Bajwa-1.jpg',
  'https://live.staticflickr.com/7850/45825848514_f859b1a2cc_b.jpg',
    'https://www.buzzyoo.com/wp-content/uploads/2019/05/Sonam-Bajwa-sexy-Sports-Outfit.jpg'],
    'Loves you',
    164,
    'Indian'
  ),
  new Profile(
    'u3',
    [],
    'Shruti Hassan',
    34,
    'F',
    'Chennai, India',
    ['https://filmfare.wwmindia.com/content/2019/oct/shrutihaasan31570975585.jpg',
    'https://i.pinimg.com/originals/3e/ff/47/3eff4781b4865a166924fdf6b0e760ba.jpg',
  'https://i.pinimg.com/originals/67/2a/e3/672ae3e61326cadda7281717ffe2890a.jpg',
    'https://i.pinimg.com/originals/8f/cb/a0/8fcba0b0f8788c8633c63b051e727aa1.jpg'
],
    'Random',
    155,
    'Indian'
  ),
  new Profile(
    'u4',
    [],
    'Kareena Kapoor',
    39,
    'F',
    'Mumbai',
    ['https://www.easterneye.biz/wp-content/uploads/2019/06/Kareena-Kapoor-Khan-1.jpg',
  'https://img.theweek.in/content/dam/week/news/entertainment/images/2018/4/11/kareena-kapoor.jpg',
'https://img.theweek.in/content/dam/week/news/entertainment/images/2018/4/11/kareena-kapoor.jpg'],
    'Random Description',
    170,
    'Indian'
  ),
  new Profile(
    'u5',
    ['u1'],
    'Zayn Malik',
    27,
    'M',
    'Braford, United Kingdom',
    ['https://i.pinimg.com/originals/d9/46/b2/d946b23618ac8f39777c358dd1677b4d.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Zayn_Wiki.jpg/220px-Zayn_Wiki.jpg',
  'https://i.dailymail.co.uk/1s/2019/05/22/08/13799730-7057221-image-a-18_1558511004099.jpg'],
    'ahahagssgysgygs',
    160,
    'American'
  ),
  new Profile(
    'u6',
    [],
    'Hritik Roshan',
    46,
    'M',
    'Mumbai, India',
    ['https://www.lehren.com/uploads/media/images/optimized/hrithik-roshans-hottest-style-1-1575872430.jpg',
  'https://starsunfolded.com/wp-content/uploads/2013/08/Hrithik-Roshan-Image.jpg',
'https://filmfare.wwmindia.com/content/2020/feb/hrithik-roshan1581429109.jpg'],
    'hsihsihsihs',
    170,
    'Indian'
  ),
];

export const LIKES = [
  //the likes of the current logged in user
];
