window.Data = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const data = [
    {
      id: 1,
      title: '2016 | Oliver Hart y Bengt Holmström',
      description: 'La Academia Sueca galardonó con el Nobel de Economía de forma conjunta a Hart y Holmström "por su contribución en la teoría de contratos".',
      url: 'https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2016/',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/daniel.jpg',
      product_image_url: 'images/nobels/2016Hart&Holstrom.png',
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/kristy.png',
      product_image_url: 'images/products/image-rose.png',
    },
    {
      id: 3,
      title: 'Tinfoild: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/veronika.jpg',
      product_image_url: 'images/products/image-steel.png',
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      url: '#',
      votes: generateVoteCount(),
      submitter_avatar_url: 'images/avatars/molly.png',
      product_image_url: 'images/products/image-yellow.png',
    },
  ];

  return data;
})();
