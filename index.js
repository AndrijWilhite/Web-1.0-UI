const testData = '[{ "data": "Rank" }, { "data": "Bank" }, { "data": "Stank"}]'

document.addEventListener('DOMContentLoaded', function () {
  // wo-img
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Slow Image</h3>
  <wo-img chunks="20" speed="5" color="white" src="./src/components/slowImage/test.png" alt='old computer'></wo-img>
  <wo-code>
      &lt;wo-img chunks="20" speed="1" color="white" src="./src/components/slowImage/test.png" alt='old computer'>&lt;/wo-img>
  </wo-code>
</div>
  `
  // wo-button
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Buttons</h3>
  <wo-btn onClick="testFunc()"></wo-btn><br />
  <wo-btn size="s" onClick="testFunc()" >Small</wo-btn> <br />
  <wo-btn size="m" onClick="testFunc()" >Medium</wo-btn><br />
  <wo-btn size="lrg" onClick="testFunc()" >Large</wo-btn><br />
  <wo-btn size="xl" onClick="testFunc()" >Extra Large</wo-btn><br />
  <wo-code title='button example:'>
      <wo-btn onClick="testFunc()"></wo-btn><br />
      <wo-btn size="s" onClick="testFunc()" >Small</wo-btn>
      <wo-btn size="m" onClick="testFunc()" >Medium</wo-btn>
      <wo-btn size="lrg" onClick="testFunc()" >Large</wo-btn>
      <wo-btn size="xl" onClick="testFunc()" >Extra Large</wo-btn>
  </wo-code>
  </div>
  `

  // wo-list
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Lists</h3>
  <h4>No Title</h4>
  <wo-list items='${testData}' ></wo-list>
  <wo-list title="Basic" items='${testData}' ></wo-list>
  <wo-list title="Text Color and Bullet Type" type='ul' bullet='square' color='red' items='${testData}' ></wo-list>
  <wo-list title="Changing the List to an OL" type='ol' items='${testData}' ></wo-list>
  <h4>Example:</h4>
  <wo-code title='List example:'>
      <wo-list items='${testData}' ></wo-list>
      <wo-list title="Basic" items='${testData}' ></wo-list>
      <wo-list title="Text Color and Bullet Type" type='ul' bullet='square' color='red' items='${testData}' ></wo-list>
      <wo-list title="Changing the List to an OL" type='ol' items='${testData}' ></wo-list>
  </wo-code>
</div>
  `

  // wo-progress
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Progress Bars</h3>
  <wo-progress id="file" title="A Simple Bar" value="69" max="100"> '32%' </wo-progress>
  <wo-progress id="file" title="With Percentage Underneath" showPercent value="32" max="100"></wo-progress>
  <wo-code title='progress bar example:'>
      <wo-progress id="file" title="A Simple Bar" value="69" max="100"> '32%' </wo-progress>
      <wo-progress id="file" title="With Percentage Underneath" showPercent value="32" max="100"></wo-progress>
  </wo-code>
</div>
    `
  // wo-code
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Code</h3>
  <wo-code>
      <h1>This is some HTML being displayed</h1>
      <p>Look at this</p>
  </wo-code>
  <wo-code title='code example:'>
      <wo-code title='And a Title:'>
          <h1>This is some HTML being displayed</h1>
          <p>Look at this</p>
      </wo-code>
  </wo-code>
</div>
    `
  // wo-big
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Big</h3>
  <p>this is some test text <wo-big>this text should be bigger</wo-big></p>
  <p id='biggerTest'>this is some test text <wo-big>this text should be bigger</wo-big></p>
  <wo-code title='wo-big example:'>
      <p>this is some test text <wo-big>this text should be bigger</wo-big></p>
  </wo-code>
</div>
    `
  // wo-tt
  document.querySelector('body').innerHTML += `
  <div>
  <h3>tt</h3>
  <p>this is normal and <wo-tt>this is monospaced</wo-tt></p>
  <wo-code title='wo-tt example'>
      <p>this is normal and <wo-tt>this is monospaced</wo-tt></p>
  </wo-code>
</div>`

  // wo-marquee
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Marquee</h3>
  <wo-marquee>SAMPLE TEXT</wo-marquee>
  <wo-marquee height='100' width='200' speed='5'>SAMPLE TEXT</wo-marquee>
  <wo-marquee bColor="blue" tColor="red">THIS HURTS TO READ</wo-marquee>
  <wo-code title='wo-marquee example:'>
      <wo-marquee>SAMPLE TEXT</wo-marquee>
      <wo-marquee height='100' width='200' speed='5'>SAMPLE TEXT</wo-marquee>
      <wo-marquee bColor="blue" tColor="red">THIS HURTS TO READ</wo-marquee>
  </wo-code>
</div>`

  // wo-flash
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Flash Banner</h3>
  <wo-flash>BUY NOW!!!</wo-flash>
  <wo-flash c1="#1100FF" c2="yellow" tColor="red" speed="1000" height="100" width="100">BUY NOW!!!</wo-flash>
  <wo-code title="wo-flash example:">
      <wo-flash>BUY NOW!!!</wo-flash>
      <wo-flash c1="#1100FF" c2="yellow" tColor="red" speed="1000" height="100" width="100">BUY NOW!!!</wo-flash>
  </wo-code>
</div>
  `

  // wo-scrollbar
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Box with Scroll</h3>
  <wo-scrollbar height='300' width='400' bottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis malesuada enim id mattis. Etiam in arcu id nisl interdum lacinia. Morbi vitae elementum neque. Ut convallis mollis nisi in pulvinar. Aliquam laoreet sapien eu justo luctus, eu tincidunt purus mollis. Integer pulvinar pretium egestas. Donec varius pharetra gravida. Aenean maximus ultricies fermentum. Aenean turpis elit, placerat in est eu, porttitor pellentesque nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non quam non risus posuere dictum. Integer massa ipsum, mattis eget dui in, semper varius ante. Quisque accumsan lorem velit, ac feugiat massa suscipit et. Fusce sit amet neque tristique, molestie arcu eget, volutpat dolor. Aenean commodo mi in laoreet vehicula.
      Nullam ut pretium mi. Aenean condimentum ex enim, eu accumsan neque elementum nec. Praesent ullamcorper vitae lacus ut consequat. Praesent ultrices gravida venenatis. Sed sollicitudin malesuada nibh, vitae pulvinar diam vehicula vel. In euismod sit amet orci non porta. Morbi vel leo eu libero hendrerit posuere. Vestibulum orci quam, vulputate id feugiat sit amet, dapibus quis libero. Curabitur iaculis justo tortor, ut lacinia urna aliquet at. Cras non sagittis felis. Praesent a sodales tortor. Cras magna ante, pulvinar vitae dapibus eu, vestibulum ut metus. Pellentesque interdum aliquet blandit. Vivamus tincidunt sapien nec sagittis egestas. Duis maximus, nulla vel ultricies convallis, justo nibh condimentum nibh, quis semper mi sapien id ante. Mauris et enim sit amet nulla posuere maximus.
      Aenean interdum dui eu ipsum congue venenatis. Suspendisse cursus ante vitae neque aliquam lacinia. Praesent a justo eu dolor sollicitudin sagittis eget in urna. Phasellus ut dolor dolor. Nullam pretium tellus eu velit auctor fringilla. Mauris ultricies dolor arcu, sit amet volutpat risus accumsan vel. Donec commodo nisl non libero vestibulum, in laoreet leo sagittis. Proin euismod pharetra justo, at elementum neque tincidunt ac. Nam sollicitudin laoreet arcu a dignissim. Mauris eu tincidunt ex, ut faucibus augue. Etiam vitae nisl in nisl tempor mollis.
  </wo-scrollbar>
  <wo-code title="wo-scrollbar example:">
      <!-- <wo-scrollbar height='500' width='300'></wo-scrollbar> -->
  </wo-code>
</div>`

  // wo-page
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Show Page HTML</h3>
  <wo-page></wo-page>
  <wo-code title='wo-page example'>
      <wo-page></wo-page>
  </wo-code>
</div>
  `

  // wo-linkus
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Link To Us(you)</h3>
  <wo-linkus></wo-linkus>
  <wo-code title='wo-linkus example'>
      <wo-linkus width='500' height='300' lc='green' rc='blue' main='true'></wo-linkus>
      <wo-linkus callout='Want some Cheese?' msg='Cheese!!!'></wo-linkus>
  </wo-code>
</div>`

  // wo-backBtn
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Back Button</h3>
  <button onclick="toTestPage(2);">To Test Page</button>
  <wo-backbtn></wo-backbtn>
  <wo-backbtn icon='https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Undo-512.png'></wo-backbtn>
  <wo-code title='wo-backbtn example'>
      <wo-backbtn></wo-backbtn>
      <wo-backbtn icon='https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Undo-512.png'></wo-backbtn>
  </wo-code>
</div>
  `

  // wo-blink
  document.querySelector('body').innerHTML += `
  <h3>Blink</h3>
  <wo-blink>NEW!</wo-blink>
  <wo-code title='wo-blink example'>
      <wo-blink>NEW!</wo-blink>
  </wo-code>`

  // wo-explorer
  document.querySelector('body').innerHTML += `
  <div>
  <h3>Site Explorer</h3>
  <wo-explorer></wo-explorer>
  <wo-code title='wo-explorer example'>
      <wo-explorer></wo-explorer>
  </wo-code>
</div>`
})
