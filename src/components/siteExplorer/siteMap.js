const siteMap = {
  'Top': [
    {
      'name': 'index',
      'src': 'index.html'
    },
    {
      'name': 'Page 2',
      'src': 'page2.html'
    }
  ],
  'testPages': [
    {
      'name': 'Page 3',
      'src': 'testPages/page3.html'
    },
    {
      'name': 'Page 4',
      'src': 'testPages/page4.html'
    },
    {
      'name': 'Cool',
      'sub': [
        {
          'name': 'Page 7',
          'src': 'testPages/Cool/page7.html'
        },
        {
          'name': 'Page 8',
          'src': 'testPages/Cool/page8.html'
        }
      ]
    },
    {
      'name': 'Other',
      'sub': [
        {
          'name': 'Page 5',
          'src': 'testPages/Other/page5.html'
        },
        {
          'name': 'Page 6',
          'src': 'testPages/Other/page6.html'
        },
        {
          'name': 'HELLO',
          'sub': [
            {
              'name': 'Page 5',
              'src': 'testPages/Other/HELLO/page5.html'
            },
            {
              'name': 'Page 6',
              'src': 'testPages/Other/HELLO/page6.html'
            }
          ]
        }
      ]
    }

  ]
}

// const siteMap = [
//   'index.html',
//   'page2.html',
//   'testPages/page3.html',
//   'testPages/page4.html',
//   'testPages/Cool/page7.html',
//   'testPages/Cool/page8.html',
//   'testPages/Other/page5.html',
//   'testPages/Other/page6.html',
//   'testPages/Other/HELLO/page9.html',
//   'testPages/Other/HELLO/page10.html'
// ]

export default siteMap
