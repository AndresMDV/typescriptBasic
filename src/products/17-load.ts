import _ from 'lodash';

const data =[

  {
    username: 'andres',
    role: 'admin'
  },

  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },

  {
    username: 'andres',
    role: 'customer'
  }

];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta)
