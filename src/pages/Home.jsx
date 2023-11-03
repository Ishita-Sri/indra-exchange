import React from "react";

import Header from "../components/Header";

import logo from "../assets/log0.svg";
import logo1 from "../assets/logo-1.png";

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import five from "../assets/4.png";
import four from "../assets/5.png";
import eig from "../assets/6.png";
import sev from "../assets/7.png";
import six from "../assets/8.png";

import spon1 from "../assets/spon1.png";

import spon2 from "../assets/spon2.png";
import spon3 from "../assets/spon3.png";
import spon4 from "../assets/spon4.png";
import spon5 from "../assets/spon5.png";
import spon6 from "../assets/spon6.png";
import rob from "../assets/rob.png";

import star from "../assets/star.svg";

import on from "../assets/12.png";
import tw from "../assets/13.png";
import th from "../assets/14.png";
import fo from "../assets/15.png";
import wh from "../assets/wheel2.png";

import "./home.css";

const Home = () => {
  const sport = [
    { image: one, followers: 420 },
    { image: two, followers: 320 },
    { image: three, followers: 110 },
    { image: four, followers: 2240 },
    { image: five, followers: 420 },
    { image: six, followers: 320 },
    { image: sev, followers: 110 },
    { image: eig, followers: 2240 },
  ];

  return (
    <div className="landing-page">
      <div className="left-gradient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="633"
          viewBox="0 0 156 633"
          fill="linear-gradient(171deg, #DD00B8 -27.63%, #4B4CED 191.62%)"
        >
          <path
            d="M-119.084 527.434L-202.589 613.453C-228.396 640.037 -271.561 638.358 -295.224 609.85C-308.132 594.301 -312.695 573.456 -307.464 553.936L-194.502 132.356C-168.505 35.3333 -67.3734 -20.9245 28.7714 8.15287C157.221 47.0004 198.015 208.681 103.372 303.818L-119.084 527.434Z"
            fill="url(#paint0_linear_118_201)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_201"
              x1="-87.118"
              y1="979.384"
              x2="-24.7548"
              y2="-774.48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DD00B8" />
              <stop offset="1" stop-color="#4B4CED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <img src={star} className="star-1" alt = ""></img>

      <div className="right-gradient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="249"
          height="600"
          viewBox="0 0 209 586"
          fill="none"
        >
          <path
            d="M181.398 45.2915L239.794 -59.4098C257.841 -91.767 299.97 -101.317 330.206 -79.9053C346.698 -68.2262 356.5 -49.2731 356.5 -29.0645V407.387C356.5 507.833 273.375 588.348 172.981 585.146C38.853 580.867 -42.3971 435.254 24.3984 318.863L181.398 45.2915Z"
            fill="url(#paint0_linear_118_199)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_118_199"
              x1="33.5477"
              y1="-382.986"
              x2="427.243"
              y2="1327.26"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#DD00B8" />
              <stop offset="1" stop-color="#4B4CED" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <img src={star} className="star-2" alt = ""></img>
      <img src={star} className="star-3" alt = ""></img>
      <Header />

      <div className="card">
        <div className="inner-card">       <div className="left">
            <div>Join, Promote And</div>
            <div className="earn"> EARN </div>
            <div className="ear-2"> Earn up to 10% Commission </div>
          </div>

          <div className="right">
            <img src={logo1} alt = ""></img>
          </div>
        </div>

        <div>
           <a href = "https://wa.me/+917600400463">
        <div className="lower-reg">
          <div className="img-in" alt = "">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M30.6222 25.1667C30.101 24.9063 27.5308 23.646 27.0518 23.4738C26.5728 23.2994 26.2247 23.2133 25.8765 23.7342C25.5283 24.253 24.526 25.4272 24.2201 25.7738C23.9162 26.1203 23.6102 26.1623 23.089 25.9019C21.5487 25.2915 20.1271 24.4187 18.8878 23.3225C17.7447 22.2708 16.7648 21.0562 15.98 19.7181C15.6761 19.1972 15.9484 18.9158 16.21 18.6574C16.4442 18.4243 16.7333 18.0504 16.9929 17.7458C17.2078 17.4829 17.384 17.1908 17.5162 16.8783C17.5857 16.7347 17.6181 16.5761 17.6103 16.4169C17.6026 16.2577 17.555 16.1029 17.4719 15.9667C17.341 15.7063 16.2965 13.1458 15.8618 12.104C15.4377 11.0915 15.0072 11.2281 14.6844 11.2113C14.3805 11.1966 14.0324 11.1924 13.6842 11.1924C13.4193 11.1997 13.1589 11.2616 12.9192 11.374C12.6795 11.4864 12.4658 11.647 12.2915 11.8456C11.7007 12.4025 11.2329 13.0758 10.9179 13.8226C10.603 14.5694 10.4477 15.3733 10.462 16.1831C10.6315 18.1454 11.3729 20.0157 12.5954 21.5644C14.8361 24.9085 17.9121 27.6149 21.5212 29.4181C22.4947 29.8344 23.4892 30.2003 24.5007 30.5145C25.567 30.8368 26.6943 30.9065 27.7925 30.7182C28.5199 30.5716 29.2088 30.2763 29.8157 29.8511C30.4226 29.426 30.9343 28.8801 31.3185 28.2481C31.6613 27.4708 31.767 26.6104 31.6224 25.7738C31.4937 25.5553 31.1455 25.4272 30.6222 25.1667ZM35.8806 6.09666C32.2933 2.52661 27.5249 0.375863 22.4632 0.0448207C17.4014 -0.286222 12.3913 1.225 8.36557 4.29714C4.33983 7.36928 1.5728 11.793 0.579639 16.7447C-0.413523 21.6963 0.43486 26.8386 2.96684 31.214L0 41.9998L11.0866 39.1075C14.153 40.7695 17.5887 41.6404 21.0802 41.6406H21.0886C25.2247 41.6385 29.2673 40.4162 32.7058 38.128C36.1442 35.8399 38.8242 32.5886 40.4071 28.7849C41.9901 24.9813 42.4049 20.796 41.5992 16.7577C40.7936 12.7195 38.8036 9.00954 35.8806 6.09663V6.09666ZM30.3247 35.48C27.5565 37.2071 24.3557 38.1236 21.0886 38.1244H21.0802C17.9675 38.1243 14.9123 37.2907 12.2345 35.711L11.5994 35.3371L5.02 37.0553L6.77562 30.6699L6.36415 30.0146C4.53793 27.1156 3.6163 23.7427 3.7158 20.3223C3.81531 16.902 4.93148 13.5878 6.92317 10.7989C8.91486 8.00998 11.6926 5.87158 14.9052 4.65409C18.1178 3.43661 21.6209 3.19472 24.9716 3.95901C28.3223 4.7233 31.3701 6.45945 33.7295 8.94792C36.089 11.4364 37.6541 14.5654 38.2271 17.9393C38.8001 21.3133 38.3551 24.7805 36.9485 27.9027C35.5419 31.0249 33.2368 33.6618 30.3247 35.48Z"
                fill="white"
              />
            </svg>
          </div>
        

          <div className="img-in"> Connect over whatsapp for new ID</div>
        </div>
        </a>
        <br/>

        
        <a href = "https://wa.me/+917600400457">
        <div className="lower-reg">
          <div className="img-in" alt = "">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M30.6222 25.1667C30.101 24.9063 27.5308 23.646 27.0518 23.4738C26.5728 23.2994 26.2247 23.2133 25.8765 23.7342C25.5283 24.253 24.526 25.4272 24.2201 25.7738C23.9162 26.1203 23.6102 26.1623 23.089 25.9019C21.5487 25.2915 20.1271 24.4187 18.8878 23.3225C17.7447 22.2708 16.7648 21.0562 15.98 19.7181C15.6761 19.1972 15.9484 18.9158 16.21 18.6574C16.4442 18.4243 16.7333 18.0504 16.9929 17.7458C17.2078 17.4829 17.384 17.1908 17.5162 16.8783C17.5857 16.7347 17.6181 16.5761 17.6103 16.4169C17.6026 16.2577 17.555 16.1029 17.4719 15.9667C17.341 15.7063 16.2965 13.1458 15.8618 12.104C15.4377 11.0915 15.0072 11.2281 14.6844 11.2113C14.3805 11.1966 14.0324 11.1924 13.6842 11.1924C13.4193 11.1997 13.1589 11.2616 12.9192 11.374C12.6795 11.4864 12.4658 11.647 12.2915 11.8456C11.7007 12.4025 11.2329 13.0758 10.9179 13.8226C10.603 14.5694 10.4477 15.3733 10.462 16.1831C10.6315 18.1454 11.3729 20.0157 12.5954 21.5644C14.8361 24.9085 17.9121 27.6149 21.5212 29.4181C22.4947 29.8344 23.4892 30.2003 24.5007 30.5145C25.567 30.8368 26.6943 30.9065 27.7925 30.7182C28.5199 30.5716 29.2088 30.2763 29.8157 29.8511C30.4226 29.426 30.9343 28.8801 31.3185 28.2481C31.6613 27.4708 31.767 26.6104 31.6224 25.7738C31.4937 25.5553 31.1455 25.4272 30.6222 25.1667ZM35.8806 6.09666C32.2933 2.52661 27.5249 0.375863 22.4632 0.0448207C17.4014 -0.286222 12.3913 1.225 8.36557 4.29714C4.33983 7.36928 1.5728 11.793 0.579639 16.7447C-0.413523 21.6963 0.43486 26.8386 2.96684 31.214L0 41.9998L11.0866 39.1075C14.153 40.7695 17.5887 41.6404 21.0802 41.6406H21.0886C25.2247 41.6385 29.2673 40.4162 32.7058 38.128C36.1442 35.8399 38.8242 32.5886 40.4071 28.7849C41.9901 24.9813 42.4049 20.796 41.5992 16.7577C40.7936 12.7195 38.8036 9.00954 35.8806 6.09663V6.09666ZM30.3247 35.48C27.5565 37.2071 24.3557 38.1236 21.0886 38.1244H21.0802C17.9675 38.1243 14.9123 37.2907 12.2345 35.711L11.5994 35.3371L5.02 37.0553L6.77562 30.6699L6.36415 30.0146C4.53793 27.1156 3.6163 23.7427 3.7158 20.3223C3.81531 16.902 4.93148 13.5878 6.92317 10.7989C8.91486 8.00998 11.6926 5.87158 14.9052 4.65409C18.1178 3.43661 21.6209 3.19472 24.9716 3.95901C28.3223 4.7233 31.3701 6.45945 33.7295 8.94792C36.089 11.4364 37.6541 14.5654 38.2271 17.9393C38.8001 21.3133 38.3551 24.7805 36.9485 27.9027C35.5419 31.0249 33.2368 33.6618 30.3247 35.48Z"
                fill="white"
              />
            </svg>
          </div>


          <div className="img-in"> Connect over whatsapp for new ID</div>
        </div>
        </a>

        </div>

      </div>

      {/* <div className="login-buttons">
        <div className="log-one">
          <div> Login</div>
        </div>
        <div className="log-one">
          <div className="log-two">
            <div className="log-tex"> sign up</div>
          </div>
        </div>
      </div> */}

      <div className="heading-1">Popular Games</div>
      <div className="heading-2">Play exciting games win more prize's</div>

      <div className="sports-all" style={{ gap: "10%" }}>
        {sport.map((data, index) => (
          <div key={index} className="sport-card">
            <div className="image-container">
              <div className="image-effects">
                <img src={data.image} alt={`sport-card-${index}`} />
              </div>
            
              <div className="follower">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <g clip-path="url(#clip0_118_228)">
                    <path
                      d="M21.8216 14.6372C21.5352 10.9087 19.7993 8.57221 18.2678 6.5104C16.8498 4.60161 15.625 2.95327 15.625 0.521725C15.625 0.326413 15.5156 0.147897 15.3422 0.0583953C15.1682 -0.0316437 14.9592 -0.0168976 14.801 0.0980438C12.501 1.74384 10.582 4.51772 9.91162 7.1644C9.44624 9.00703 9.38467 11.0785 9.37603 12.4466C7.252 11.993 6.77085 8.81582 6.76577 8.7812C6.74185 8.6164 6.64116 8.47299 6.49468 8.39468C6.34668 8.31738 6.17271 8.31176 6.02266 8.38603C5.91128 8.43994 3.28877 9.77246 3.13618 15.0928C3.12549 15.2698 3.125 15.4474 3.125 15.6249C3.125 20.7936 7.33081 24.9992 12.5 24.9992C12.5071 24.9997 12.5147 25.0007 12.5208 24.9992C12.5229 24.9992 12.5249 24.9992 12.5274 24.9992C17.6839 24.9844 21.875 20.7845 21.875 15.6249C21.875 15.3649 21.8216 14.6372 21.8216 14.6372ZM12.5 23.9576C10.7768 23.9576 9.375 22.4644 9.375 20.6289C9.375 20.5664 9.37451 20.5033 9.37905 20.426C9.3999 19.6519 9.54692 19.1235 9.70815 18.772C10.0103 19.421 10.5504 20.0176 11.4278 20.0176C11.7157 20.0176 11.9487 19.7846 11.9487 19.4968C11.9487 18.7553 11.964 17.8998 12.1486 17.1277C12.3129 16.4432 12.7055 15.7148 13.203 15.131C13.4242 15.8888 13.8556 16.5021 14.2767 17.1008C14.8794 17.9572 15.5025 18.8427 15.6119 20.3527C15.6185 20.4422 15.6251 20.5323 15.6251 20.6289C15.625 22.4644 14.2232 23.9576 12.5 23.9576Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_118_228">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {data.followers} followers
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="welcome-text">Welcome to the top games</div>

      <div className="login-buttons">
        <div className="log-one">
          <div>cricket</div>
        </div>
        <div className="log-one">
          <div className="log-two">
            <div className="log-tex"> football</div>
          </div>
        </div>
        <div className="log-one">
          <div className="log-two">
            <div className="log-tex">tennis</div>
          </div>
        </div>
      </div>


      <div className="welcome-text" style={{ margin: "6%" }}>
        {" "}
        Steps to Follow
      </div>

      <div className="section-card">
        <img alt = "" src={tw}></img>
        <img alt = "" src={on}></img>
        <img alt = ""src={th}></img>
        <img alt = "" src={fo}></img>
      </div>

      <div className="welcome-text" style={{ margin: "6%" }}>
        {" "}
        Why Join Indra Exchange?
      </div>

      <div className="why-join">
        <div className="join-left">
          <img alt = "" src={wh}></img>
        </div>

        <div className="join-right">
          <div className="right-up">The raja of online games</div>
          <div className="right-down">
            India’s most trending and secured online platform where you can
            invest your money and skills to earn big casino games. NO KYC , NO
            documentation needs. 24/7 dedicated team to back up your queries, be
            it creating an ID or withdrawal request.
          </div>
        </div>
      </div>

      <div className="sponsor-sec">
        <div className="spon-head-1">
          <div className="sub-head-1">Proud Sponsors</div>
          <div className="sub-head-2">
            {" "}
            We are thankful to our awesome gaming partner’s
          </div>
        </div>
        {/* <div className="spon-head-2">
          <div className="button-2">See All</div>
        </div> */}
      </div>

      {/* <div class="flex-item">
            <img src="path_to_icon2.png" alt="Icon 2"></img>
            <span>Company</span>
        </div>
        <div class="flex-item">
            <img src="path_to_icon3.png" alt="Icon 3"> </img>
            <span>Company</span>
        </div>
        <div class="flex-item">
            <img src="path_to_icon4.png" alt="Icon 4"></img>
            <span>Company</span>
        </div>
        <div class="flex-item">
            <img src="path_to_icon5.png" alt="Icon 5"></img>
            <span>Company</span>
        </div> */}

      <div className="sports-all">
        <div className="sports-x">
          <div className="sports-all-3">
            <img alt = "" className= "tig"src={spon1}></img>
          </div>
          <div className="log-one">
            <div className="log-two">
              <div className="log-tex">get demo</div>
            </div>
          </div>
        </div>

        <div className="sports-x">
          <div className="sports-all-3">
            <img alt = "" style={{ width: "173px", height: "100px" }} src={spon2}></img>
          </div>
          <div className="log-one">
            <div className="log-two">
              <div className="log-tex">get demo</div>
            </div>
          </div>
        </div>

        <div className="sports-x">
          <div className="sports-all-3">
            <img alt = "" style={{ width: "160px", height: "90px" }} src={spon3}></img>
          </div>
          <div className="log-one">
            <div className="log-two">
              <div className="log-tex">get demo</div>
            </div>
          </div>
        </div>

        
          <div className="sports-x">
            <div className="sports-all-3">
              <img alt = "" style={{ width: "160px", height: "60px" }} src={spon4}></img>
            </div>

            <div className="log-one">
              <div className="log-two">
                <div className="log-tex">get demo</div>
              </div>
            </div>
          </div>

        <div className="sports-x">
          <div className="sports-all-3">
            <img alt = "" style={{ width: "160px", height: "60px" }} src={spon5}></img>
          </div>


          <div className="log-one">
            <div className="log-two">
              <div className="log-tex">get demo</div>
            </div>
          </div>
        </div>

        <div className="sports-x">
          <div className="sports-all-3">
            <img alt = "" style={{ width: "160px", height: "60px" }} src={spon6}></img>
          </div>
          <div className="log-one">
            <div className="log-two">
              <div className="log-tex">get demo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-banners">
        <div className="ban-1">
          Indra Exchange - The best online betting site in India
        </div>

        <div className="ban-2">
          Learn how to get the most out of your cricket account and cricket ID
          on the web. Sports fans should keep an eye out for our sports-book
          because we often offer them excellent bonuses, rewards, and cash
          prizes. We offer the best odds on betting involving a wide variety of
          sports, cricket included. Get your online betting ID now!
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="lower-banners">
        <div className="ban-1">
          We can satisfy your preferences, no matter what they may be!
        </div>

        <div className="ban-2">
          We aim to fulfill all of your gaming needs by providing a
          comprehensive selection of high-quality online games and casino
          options by providing you the secure online cricket ID portal. You can
          recreate the excitement of a trip to the casino in the comfort of your
          own home with one of our 1500 casino games or one of our 200 Indian
          casino games.
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="lower-banners">
        <div className="ban-1">100% Reliable and Trusted Service</div>

        <div className="ban-2">
          We strongly encourage you to gamble responsibly and can assure you
          that our website is completely above board in every way. When it comes
          to gaming in India, you can rely on our website and our online betting
          ID portal. At TigerExch, your privacy and protection are our highest
          concerns, so you can rest easy knowing that you are in capable hands.
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="footer">
        <div className="pink-blur"> </div>

        <div className="footer-content">
          <div className="footer-content-2" style={{ width: "80%" }}>
            <img alt = "" src={logo}></img>

          
          </div>


          <div className="footer-content-2" style={{ width: "10%" }}>
            <div className="footer-2">Powered by</div>
            <img alt = "" src={rob}></img>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="33"
              viewBox="0 0 99 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M99 10.6178V26.7167L90.0865 32.8826H84.6068V30.142L80.4959 32.8826H75.7003V30.142L72.6173 32.8826H63.7115L60.9716 30.142L60.2862 32.8826L52.4251 32.8615L49.3253 30.142L48.9829 32.8826L40.0771 32.8615L39.7347 30.142L37.3372 32.8615L23.6358 32.8826L20.8952 31.5123V32.8826H13.359L5.13804 27.7446L0 22.6065V0H10.6185L15.7565 5.13804H39.0492V0H58.2318V5.13804H63.0274V7.8786L65.768 5.13804H71.5915L76.7296 0H87.6904V5.13804H93.514L99 10.6178ZM13.359 7.5348H8.56339V2.39677H2.39747V21.5793L6.16522 25.6895H13.359V19.1812H8.56339V13.7014H13.359V7.5348ZM39.0492 7.5348H32.8833V19.1819H30.4858V7.5348H24.6623V19.1819H22.2648V7.5348H15.7565V25.6895H34.9391L39.0492 21.5793V7.5348ZM47.2702 7.5348H41.4467V25.6895H47.2702V7.5348ZM47.2702 2.39677H41.4467V5.13733H47.2702V2.39677ZM60.6293 7.5348H55.8336V2.39677H49.6684V21.5793L53.4361 25.6895H60.6278V19.1812H55.8322V13.7014H60.6278L60.6293 7.5348ZM76.3858 7.5348H66.7952L63.0274 11.3026V21.5793L67.1376 25.6895H76.3851V19.1812H69.5343V13.7014H76.3851L76.3858 7.5348ZM96.5955 11.3026L92.4854 7.5348H85.2923V2.39677H78.7839V25.6895H85.2923V13.7H90.0879V25.6888H96.5962L96.5955 11.3026Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
