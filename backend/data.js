const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
  { id: 2, period: '2020 - 2023', institution: 'SMK Negeri Godean', major: 'Multimedia' },
  { id: 3, period: '2017 - 2019', institution: 'SMP Negeri 4 Gamping', major: 'F' },
  { id: 4, period: '2011 - 2016', institution: 'SD Negeri Semarangan 5', major: '-' }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' },
  { name: 'JavaScript', level: 'Mahir', image: 'https://skillforge.com/wp-content/uploads/2020/10/javascript.png' },
  { name: 'Tailwind CSS', level: 'Mahir', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Node.js', level: 'Menengah', image: 'https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png' },
  { name: 'Express.js', level: 'Menengah', image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
  { name: 'PostgreSQL', level: 'Menengah', image: 'https://www.arbin.com/wp-content/uploads/2024/09/ARBIN-Introduction-Postgre-SQL-i2.png' },
  { name: 'Git & GitHub', level: 'Mahir', image: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/a7/d5716d4f-2120-4702-ae9a-6516c2d9a86b' },
  { name: 'HTML5 & CSS3', level: 'Mahir', image: 'https://ddy8ftb0naev0.cloudfront.net/assets/42/original/html5_and_css3.webp' }
];

const projects = [
  {
    title: 'Website Toko Komputer Online',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-computer-store-with-many-computers-and-displays-image_2640586.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Website Lagu Ultraman',
    image: 'https://www.greenscene.co.id/wp-content/uploads/2024/10/ultraman-big-696x497.jpg',
    description: 'Web berisi lagu lagu ultraman dari showa sampai reiwa.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

module.exports = { educationHistory, skills, projects };