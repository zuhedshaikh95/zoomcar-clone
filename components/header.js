function afterLogin() {
    return `<div class="container-fluid" id="pnm">
          <button
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"          
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            id="menu"
          >
            <span class="material-symbols-outlined">menu</span>
          </button>
  
          <a href="index.html">
            <img
            src="https://zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
            alt="error"
            />
          </a>
        </div>
        <div id="rest">
          <div id="bah">
              <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
              <p><a href="become-host.html">Become a Host</a></p>
          </div>
          <div id="bah2">
          <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
          <p><a href="become-host.html">Host</a></p>
      </div>
          <h5><a href="zms.html">ZMS</a></h5>
          <div id="user">
              <h5 id="uName"></h5>
              <img src="https://www.zoomcar.com/img/icons/icons_user.png" alt="error">
          </div>
        </div>
  
        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div id="logData">          
            <h5 id="name"></h5> 
            <p id="email"></p>
            <p id="mob"></p>         
          </div>
          <div id="sideContent">
            <div class="box1">
              <div class="child">
                <span class="material-symbols-outlined">monetization_on</span>
                <p>Credits</p>
              </div>
              <p>0</p>
            </div>
            <div class="box1">
              <div class="child">
                <span class="material-symbols-outlined"> currency_exchange </span>
                <p>Z-POINTS</p>
              </div>
              <p>0</p>
            </div>
            <div class="box1">
              <div class="child">
                <span class="material-symbols-outlined">
                  account_balance_wallet
                </span>
                <p>Paytm wallet</p>
              </div>
              <p>Link wallet</p>
            </div>
            <hr>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined">directions_car</span>              
                <p>My Trips</p>
              </div>
              <p></p>
            </div>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined">beenhere</span>
                <p>Profile Verification</p>
              </div>
              <p></p>
            </div>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined"> location_on</span>
                <p>Change City</p>
              </div>
              <p><span id="city">City</span></p>
            </div>
            <hr>
            <div class="box1">
              <div class="child">
                  <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
                <p id="logo">Become a Host</p>
              </div>
              <p></p>
            </div>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined">description</span>
                <p>Zoomcar Fleet Vehicles Policies</p>
              </div>
              <p></p>
            </div>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined">description</span>
                <p>Zoomcar Host  Vehicles Policies</p>
              </div>
              <p></p>
            </div>
            <div class="box1">
              <div class="child">
                  <span class="material-symbols-outlined">call</span>
                <p>Help & Support</p>
              </div>
              <p></p>
            </div>
            <hr>
            <div class="box1">
              <div class="child" id='logout'>
                  <span class="material-symbols-outlined">logout</span>
                <p>Logout</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>`;
  }
  
  function beforeLogin() {
    return `<div class="container-fluid" id="pnm">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          id="menu"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
  
        <a href="index.html">
          <img
          src="https://zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png"
          alt="error"
          />
        </a>
      </div>
      <div id="rest">
        <div id="bah">
            <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
            <p><a href="become-host.html">Become a Host</a></p>
        </div>
        <div id="bah2">
          <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
          <p><a href="become-host.html">Host</a></p>
      </div>
        <h5><a href="zms.html">ZMS</a></h5>
        <div>
            <h5 id='logme'><a href="login.html">Login/Signup</a></h5>            
        </div>
      </div>
  
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        id="offcanvasResponsive
        class="offcanvas-sm"
      >
        <div id="logData1"> 
          <i class="fa-solid fa-user"></i>         
          <p id='logme1'><a href="login.html">Login/Signup</a></p>  
        </div>
        <div id="sideContent">         
          <div class="box1" id="mycity">
            <div class="child">
                <span class="material-symbols-outlined"> location_on</span>
              <p>Change City</p>
            </div>
            <p><span id="city"></span></p>
          </div>          
          <div class="box1">
            <div class="child">
                <img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" alt="error">
              <p id="logo">Become a Host</p>
            </div>
            <p></p>
          </div>
          <div class="box1">
            <div class="child">
                <span class="material-symbols-outlined">description</span>
              <p>Zoomcar Fleet Vehicles Policies</p>
            </div>
            <p></p>
          </div>
          <div class="box1">
            <div class="child">
                <span class="material-symbols-outlined">description</span>
              <p>Zoomcar Host  Vehicles Policies</p>
            </div>
            <p></p>
          </div>
          <div class="box1">
            <div class="child">
                <span class="material-symbols-outlined">call</span>
              <p>Help & Support</p>
            </div>
            <p></p>
          </div>         
        </div>
      </div>`;
  }
  
  export { afterLogin, beforeLogin };