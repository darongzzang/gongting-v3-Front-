import "./LandingPage.css";
import "./Login.js"
import {Routes, Route, BrowserRouter, Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="Background">
      <div className="Logo">
      <svg width="360" height="242" viewBox="0 0 360 242" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M343.166 61.793C333.72 61.793 325.311 67.1587 319.843 75.533C314.374 67.1673 305.957 61.793 296.52 61.793C280.037 61.793 266.674 78.1301 266.674 98.2815C266.674 125.71 319.851 157.15 319.851 157.15C319.851 157.15 373.029 125.71 373.029 98.2815C373.011 78.1301 359.649 61.793 343.166 61.793Z" stroke="#CBC7FF" stroke-miterlimit="10"/>
<path d="M61.6972 61.793C52.2515 61.793 43.843 67.1587 38.3744 75.533C32.9058 67.1673 24.4887 61.793 15.0515 61.793C-1.43133 61.793 -14.7942 78.1301 -14.7942 98.2815C-14.7942 125.71 38.383 157.15 38.383 157.15C38.383 157.15 91.5601 125.71 91.5601 98.2815C91.543 78.1301 78.1801 61.793 61.6972 61.793Z" stroke="#CBC7FF" stroke-miterlimit="10"/>
<path d="M-65.8286 241.339C-54.7715 195.456 -24.9172 152.47 16.4914 129.044C37.1828 117.344 61.7057 110.264 85.5342 114.164C91.4485 115.133 97.3199 116.761 102.831 119.144C107.906 121.347 115.054 126.259 111.437 132.679C109.568 135.987 105.746 136.827 103.226 133.673C101.023 130.904 100.26 126.979 100.234 123.516C100.191 117.044 102.771 110.804 106.2 105.43C118.071 86.8128 140.417 78.5328 160.62 72.55C180.617 66.6271 201.917 61.8357 218.623 48.5928C226.603 42.2671 234.506 33.0957 236.203 22.7328C236.957 18.13 236.22 13.1414 232.877 9.66996C230.211 6.90139 226.089 5.08424 222.223 5.92424C218.349 6.77281 215.88 10.2014 215.434 14.0242C214.928 18.4128 216.754 22.63 219.891 25.6385C223.877 29.4614 229.311 31.3471 234.497 32.9071C241.106 34.8957 247.869 36.3014 254.691 37.3471C268.166 39.3957 281.794 40.03 295.371 40.9642C306.694 41.7442 317.983 42.8842 329.194 44.6671C348.883 47.7957 370.337 52.4757 386.58 64.6985C390.274 67.4757 393.6 70.7157 396.326 74.4528C396.566 74.7871 397.123 74.4614 396.883 74.1271C385.363 58.3557 364.594 51.5671 346.38 47.3328C323.606 42.0357 300.386 40.8185 277.148 39.0957C263.126 38.0585 249.034 36.5071 235.5 32.5385C229.526 30.79 222.943 28.6385 218.888 23.6071C215.194 19.0214 214.414 10.4414 220.406 7.26996C225.506 4.56996 232.02 8.16996 234.428 12.9014C237.608 19.1585 235.106 26.8128 231.866 32.4957C226.294 42.2585 217.5 49.6042 207.771 55.0042C188.151 65.9071 165.694 69.2242 144.9 77.0757C135.3 80.7014 125.889 85.2271 117.849 91.69C109.62 98.2985 102.283 107.521 100.148 118.081C99.1371 123.104 99.3085 129.121 102.291 133.51C104.451 136.681 108.257 137.393 110.949 134.444C113.854 131.264 113.46 126.901 110.803 123.739C107.571 119.881 102.266 118.047 97.6542 116.496C75.5657 109.081 51.4028 112.604 30.3085 121.519C-13.0715 139.844 -46.2343 180.284 -61.4915 224.196C-63.4286 229.767 -65.0743 235.433 -66.4543 241.167C-66.5486 241.57 -65.9315 241.741 -65.8286 241.339Z" fill="#C1BBFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M119.897 60.2933L93.5913 64.5533V76.9047L177.617 68.3847V51.0276L161.537 53.5818C162.386 50.4618 163.046 47.0161 163.508 43.2533C163.971 39.4904 164.408 34.0561 164.837 26.959L158.023 27.919L109.783 32.9247V45.2761L148.123 42.7218C148.123 47.7618 147.977 52.1247 147.694 55.819L134.066 58.0561V50.4961L119.897 51.6704V60.2933ZM139.706 76.9047C130.328 77.2647 122.768 78.9104 117.017 81.859C111.266 84.8076 108.394 89.1961 108.386 95.0076C108.386 100.622 111.034 104.753 116.323 107.419C121.611 110.085 128.588 111.413 137.254 111.413C147.266 111.413 155.434 109.939 161.751 106.99C168.068 104.042 171.231 99.5247 171.231 93.4133C171.231 87.5247 168.334 83.2476 162.548 80.5818C156.763 77.9161 149.151 76.6904 139.706 76.9047ZM151.26 88.0904C152.931 88.8018 153.763 89.9418 153.763 91.5018C153.763 92.2133 153.617 92.8818 153.343 93.5247C152.494 96.019 150.626 97.8961 147.754 99.1733C144.874 100.45 141.377 101.23 137.263 101.513C133.851 101.65 131.1 101.333 129.008 100.553C126.908 99.7733 125.863 98.4961 125.863 96.7218C125.863 96.439 126.008 95.7961 126.291 94.8018C127.286 92.179 129.454 90.2247 132.788 88.9475C136.123 87.6704 139.988 87.0276 144.394 87.0276C147.3 87.0276 149.588 87.379 151.26 88.0904ZM201.069 105.765L223.431 102.885H223.44V94.5794L201.077 97.348V90.0023L223.44 87.5508V76.4765L186.163 81.4823V114.714C186.163 117.697 187.089 120.251 188.931 122.385C190.774 124.519 193.123 125.582 195.96 125.582L201.069 125.154L231.42 121.957V108.859L201.069 112.477V105.765ZM225.883 126.422C216.506 126.782 208.946 128.428 203.194 131.377C197.443 134.317 194.571 138.705 194.571 144.525C194.571 150.139 197.22 154.271 202.509 156.937C207.789 159.602 214.766 160.931 223.431 160.931C233.443 160.931 241.611 159.457 247.929 156.508C254.246 153.559 257.409 149.042 257.409 142.931C257.409 137.042 254.511 132.765 248.726 130.099C242.94 127.434 235.32 126.208 225.883 126.422ZM237.437 137.599C239.1 138.311 239.94 139.451 239.94 141.011C239.94 141.722 239.794 142.399 239.52 143.034C238.671 145.528 236.803 147.405 233.931 148.682C231.06 149.959 227.563 150.739 223.44 151.022C220.029 151.159 217.277 150.842 215.186 150.062C213.086 149.282 212.04 148.005 212.04 146.231C212.04 145.948 212.186 145.305 212.469 144.311C213.463 141.688 215.623 139.734 218.966 138.457C222.3 137.179 226.166 136.537 230.571 136.537C233.477 136.537 235.766 136.888 237.437 137.599ZM240.043 77.6423V121.948L257.4 119.925V75.3022L240.043 77.6423Z" fill="url(#paint0_linear_2260_891)"/>
<path d="M146.88 151.777C145.303 151.777 143.957 151.228 142.843 150.131C141.729 149.034 141.171 147.697 141.171 146.119V120.731L162.866 118.022V151.777H146.88ZM154.783 144.165V125.471L149.246 126.045V144.619L154.783 144.165ZM170.357 160.262V116.359L179.76 115.091V160.262H170.357Z" fill="#D9D9FF"/>
<path d="M186.694 31.8277L205.157 29.1191V35.6934L194.366 37.022V57.2762L206.134 56.1791V64.4248H191.246C190.011 64.4248 188.949 63.8677 188.04 62.7534C187.14 61.6391 186.686 60.3105 186.686 58.7762V31.8277H186.694ZM207.926 69.1562V30.4477L215.597 29.1791V46.3734L218.306 46.082V27.5591L225.977 26.2905V71.462H218.306V51.0362L215.597 51.3277V69.1562H207.926Z" fill="#D9D9FF"/>
<path d="M90.2999 14.033C93.8228 17.2816 97.2856 20.5816 100.894 23.7444C101.511 24.2844 102.428 23.3844 101.803 22.8359C98.2028 19.6816 94.7313 16.373 91.2085 13.1244C90.5999 12.5673 89.6913 13.4759 90.2999 14.033Z" fill="#EAE9FF"/>
<path d="M104.117 0.798584C105.703 6.43858 107.366 12.0443 109.114 17.6329C109.363 18.4214 110.606 18.0872 110.357 17.29C108.609 11.7014 106.937 6.09573 105.36 0.455733C105.137 -0.34141 103.894 -0.00712982 104.117 0.798584Z" fill="#EAE9FF"/>
<path d="M256.851 167.667C259.063 172.442 261.017 177.336 263.349 182.05C263.717 182.796 264.823 182.145 264.463 181.399C262.131 176.685 260.177 171.79 257.966 167.016C257.614 166.27 256.5 166.922 256.851 167.667Z" fill="#EAE9FF"/>
<path d="M263.031 162.327C267.557 166.039 272.134 169.69 276.771 173.273C277.414 173.77 278.331 172.87 277.68 172.364C273.051 168.781 268.466 165.139 263.94 161.419C263.306 160.896 262.397 161.804 263.031 162.327Z" fill="#EAE9FF"/>
<defs>
<linearGradient id="paint0_linear_2260_891" x1="112.5" y1="35.5332" x2="277.345" y2="93.5126" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

      </div>
      <div className="textBoxes">
      <div className="menuBox">
        <div className="textBox">
          <p id='topText'>서비스 소개</p>
          <p id='mainText'>새로운 인연의 시작, 지금 공팅을 알아보세요!</p>
        </div>
        <div className="goTextBox">
          <a href="./">공팅 알아보기
            <div id='right-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 6L15.6569 11.6569L10 17.3137" stroke="#6869FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </a>
        </div>
      </div>
      <div className="menuBox">
        <div className="textBox">
          <p id='topText'>서비스 이용</p>
          <p id='mainText'>지금 공팅으로 새로운 인연을 찾아보세요!ㅤ</p>
        </div>
        <div className="goTextBox">
        <Link to ="/Login">새로운 인연 찾기
            <div id='right-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 6L15.6569 11.6569L10 17.3137" stroke="#6869FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </Link>
        </div>
      </div>
      </div>
    </div>
    );
}

export default LandingPage;