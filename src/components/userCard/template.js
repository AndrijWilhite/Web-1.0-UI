const template = document.createElement('template')
template.innerHTML = `
<style>
  .user-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        margin-bottom: 15px;
        border-bottom: darkorchid 5px solid;
    }

    .user-card img {
        width: 100%;
    }
  </style>
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email"/></p>
        <p><slot name="phone" /></p>
      </div>
      <wo-btn id="toggle-info">Hide Info</wo-btn>
    </div>
  </div>
`
export default template
