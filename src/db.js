const users = [
  {
    id: '1',
    name: 'Shiva',
    email: 'shiva@shiva.com',
    age: 29,
  },
  {
    id: '2',
    name: 'Shambho',
    email: 'shambho@shambho.com',
    age: 30
  },
  {
    id: '3',
    name: 'rudra',
    email: 'rudra@rudra.com',
    age: 31
  }
];

const posts = [
  {
    id: '11',
    title: 'adi yogi',
    body: 'coimbatore',
    published: true,
    author: '1',
  },
  {
    id: '22',
    title: 'angamardhana',
    body: 'physical fitness',
    published: false,
    author: '1',
  },
  {
    id: '33',
    title: 'suryakriya',
    body: 'mental fitness',
    published: true,
    author: '3',
  }
];

const comments = [
  {
    id: '10',
    text: 'aum namah shivaya',
    author: '1',
    post: '22'
  },
  {
    id: '20',
    text: 'aum namo bhagavate rudraya',
    author: '2',
    post: '33'
  },
  {
    id: '30',
    text: 'hara hara mahadeva',
    author: '3',
    post: '11',
  },
  {
    id: '40',
    text: 'shambho shankara',
    author: '2',
    post: '11',
  }
]

const db = {
  users,
  posts,
  comments
}

export { db as default }