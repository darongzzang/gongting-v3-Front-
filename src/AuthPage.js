function AuthPage() {
    return (
        <div className="AuthPageBody">
            <div className="topbar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 18L9 12L15 6" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="topbarText">인증하기</p>
            </div>
            <div className="AuthPageBox">
                <div className="AuthPageBoxIconBG">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" viewBox="0 0 36 38" fill="none">
  <g filter="url(#filter0_d_2466_406)">
    <path d="M3.46873 8.79879C3.54605 7.90832 4.25236 7.22689 5.13686 7.0982C6.6639 6.87604 9.05405 6.47802 10.8204 5.94926C12.8519 5.3411 15.7088 4.06588 17.1284 3.40955C17.6815 3.15384 18.3185 3.15384 18.8716 3.40955C20.2912 4.06588 23.1481 5.3411 25.1796 5.94926C26.946 6.47802 29.3361 6.87604 30.8631 7.0982C31.7477 7.22689 32.454 7.90832 32.5313 8.79879C32.9711 13.8643 33.2082 30.2722 18.5536 34.8353C18.1993 34.9456 17.8007 34.9456 17.4464 34.8353C2.79181 30.2722 3.02887 13.8643 3.46873 8.79879Z" fill="#6869FF"/>
  </g>
  <g filter="url(#filter1_f_2466_406)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1329 14.01C24.6796 14.5568 24.6796 15.4432 24.1329 15.9899L17.2757 22.8471C16.729 23.3938 15.8426 23.3938 15.2958 22.8471L11.8673 19.4185C11.3205 18.8718 11.3205 17.9853 11.8673 17.4386C12.414 16.8919 13.3004 16.8919 13.8472 17.4386L16.2858 19.8772L22.153 14.01C22.6997 13.4633 23.5861 13.4633 24.1329 14.01Z" fill="#6566F7"/>
  </g>
  <path d="M12.8572 18.4286L16.2857 21.8571L23.1429 15" stroke="#FEFEFE" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <filter id="filter0_d_2466_406" x="0.333336" y="0.217773" width="35.3333" height="37.7003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="1.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.411765 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2466_406"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2466_406" result="shape"/>
    </filter>
    <filter id="filter1_f_2466_406" x="3.45721" y="5.59998" width="29.0857" height="25.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_2466_406"/>
    </filter>
  </defs>
                    </svg>
                </div>
                <p className="checkAllText">학생증 인증</p>
                <div className="">미인증</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 18L15 12L9 6" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}
export default AuthPage;