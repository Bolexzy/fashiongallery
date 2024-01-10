import React from "react";

const Footer = () => {
  return (
    <div className="footer_bg flex flex-col lg:flex-row flex-wrap p-4 lg:p-10  gap-x-20">
      <div className="flex flex-col gap-2 w-full lg:w-4/12">
        <div className="w-full  h-[1px] rounded bg-gray-400 my-[1rem] md:my-[2rem]"></div>

        <p className="text-gray-200 text-2xl tracking-wide font-medium">
          Fashion Gallery
        </p>
        <p
          className="text-[#c8c5c4] text-sm tracking-wide"
          style={{ fontFamily: "Alegreya Sans" }}
        >
          At Fashion Gallery Boutique our mission is to empower women and men to
          always look and feel their best. We want to help you feel confident
          without having to break the bank. Our clothes range from casual to
          elegant, dress it down for a relaxed day out or dress it up for a date
          night.
        </p>
      </div>

      <div className="flex flex-col gap-5 w-full lg:w-[40%]">
        <div className="w-full h-[1px] rounded bg-gray-400  my-[2rem]"></div>

        <div className=" flex  flex-col lg:flex-row gap-8 lg:gap-15">
          <div className="flex flex-col gap-2">
            <p className="text-gray-200  text-xl tracking-wide">Company Info</p>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                About Us
              </p>
            </a>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Contact Us
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-200  text-xl tracking-wide">
              Delivery & Return
            </p>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Order Status
              </p>
            </a>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Shipping Info
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-200  text-xl tracking-wide">Policies</p>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Privacy Policy
              </p>
            </a>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Terms of Service
              </p>
            </a>
            <a className="link link-hover decoration-gray-500 underline-offset-3">
              <p
                className="text-sm text-[#979492]"
                style={{ fontFamily: "Alegreya Sans" }}
              >
                Refund and Returns Policy
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 gap-3">
        <div className="text-gray-200 ">
          @ 2024 Fashion Galllery by{" "}
          <span className="text-sky-700">
            <a target="_blank" href="https://twitter.com/Bolexzyy__">
              Boluwatife Emmanuel
            </a>
          </span>
          . All Rights Reserved
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div>
            <svg
              width="90"
              height="54"
              viewBox="0 0 90 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.8678 47.0008C49.5959 51.3574 55.9454 54 62.8518 54C77.6843 54 89.6892 41.9023 89.6892 27.0229C89.6892 12.0983 77.6843 0 62.8518 0C55.9454 0 49.5959 2.64201 44.8678 6.99917C39.4447 11.9586 36.0144 19.0969 36.0144 27.0229C36.0149 34.9489 39.4447 42.0878 44.8678 47.0008Z"
                fill="#E9B040"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.5357 24.1496C53.443 23.1764 53.2575 22.2495 53.0721 21.2757H36.6635C36.849 20.3025 37.1272 19.3756 37.4049 18.4482H52.2843C51.9613 17.4725 51.5901 16.5133 51.172 15.5744H38.5642C39.0279 14.5926 39.5384 13.6335 40.0938 12.7005H49.5965C48.9851 11.7106 48.3036 10.7657 47.5573 9.87303H42.1336C42.9725 8.84849 43.8867 7.88788 44.8683 6.99917C40.0944 2.68838 33.7902 0 26.8374 0C12.0513 0 0 12.0983 0 27.0229C0 41.9023 12.0513 54 26.8374 54C33.7902 54 40.0938 51.3574 44.8683 47.0008C45.835 46.1277 46.7339 45.1823 47.5573 44.1728H42.1336C41.3917 43.2459 40.743 42.3191 40.0938 41.2989H49.5965C50.194 40.3824 50.7208 39.4216 51.1725 38.4251H38.5642C38.1468 37.4982 37.7301 36.5713 37.4049 35.597H52.2843C52.6084 34.6702 52.8407 33.6975 53.0715 32.7232C53.257 31.7963 53.4425 30.8236 53.5352 29.8493C53.6292 28.9096 53.6758 27.9657 53.6749 27.0213C53.6749 26.0497 53.6285 25.0765 53.5357 24.1496Z"
                fill="#CC2131"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M62.621 20.812L62.1104 23.7786C61.0908 23.2685 60.3489 23.0372 59.5148 23.0372C57.3359 23.0372 55.8068 25.1691 55.8068 28.1821C55.8068 30.2682 56.8264 31.5191 58.5421 31.5191C59.2366 31.5191 60.0712 31.2878 60.9981 30.8246L60.4886 33.9293C59.422 34.2075 58.727 34.3471 57.9387 34.3471C54.7872 34.3471 52.8402 32.0755 52.8402 28.4145C52.8402 23.5472 55.5286 20.1169 59.3757 20.1169C59.8852 20.1169 60.3484 20.1633 60.7193 20.2561L61.8786 20.5343C62.2501 20.6734 62.3428 20.7198 62.621 20.812ZM53.2575 22.8517H52.9793C52.0066 22.8517 51.4502 23.3154 50.5692 24.659L50.8474 22.9439H48.2048L46.398 34.0684H49.3188C50.3842 27.2547 50.6624 26.096 52.053 26.096H52.2385C52.5167 24.7518 52.8871 23.778 53.3508 22.8975L53.2575 22.8517ZM36.4786 33.9293C35.6909 34.2075 35.0417 34.3002 34.393 34.3002C32.9097 34.3002 32.0751 33.4661 32.0751 31.8442C32.0751 31.566 32.1215 31.1956 32.1678 30.8705L32.3533 29.7581L32.4924 28.8782L33.7439 21.2757H36.6177L36.2931 22.9444H37.7764L37.4055 25.6792H35.9222L35.1344 30.3146C35.0881 30.5 35.0881 30.6397 35.0881 30.7783C35.0881 31.3347 35.3663 31.5666 36.0613 31.5666C36.3859 31.5666 36.6636 31.5666 36.849 31.4738L36.4786 33.9293ZM25.3078 26.4669C25.3078 27.858 25.9564 28.8307 27.4861 29.5726C28.6912 30.1291 28.8766 30.314 28.8766 30.7777C28.8766 31.4733 28.3666 31.7973 27.2078 31.7973C26.3274 31.7973 25.5391 31.6588 24.6122 31.3805L24.1949 33.9293L24.334 33.9762L24.8441 34.0689C25.029 34.1147 25.2614 34.1617 25.6318 34.1617C26.2804 34.2544 26.8369 34.2544 27.2078 34.2544C30.2666 34.2544 31.7041 33.0951 31.7041 30.5464C31.7041 29.0162 31.1019 28.1352 29.6649 27.4407C28.4135 26.8843 28.2744 26.7457 28.2744 26.2356C28.2744 25.6334 28.7844 25.3551 29.7113 25.3551C30.2677 25.3551 31.0555 25.4015 31.7974 25.4942L32.2142 22.945C31.4728 22.8059 30.3141 22.7131 29.6649 22.7131C26.4201 22.7126 25.2614 24.4277 25.3078 26.4669ZM84.8236 34.0689H82.0883L82.228 33.0024C81.4397 33.8365 80.605 34.2075 79.5385 34.2075C77.4066 34.2075 76.016 32.4007 76.016 29.6196C76.016 25.911 78.1949 22.759 80.7436 22.759C81.9029 22.759 82.737 23.269 83.5258 24.2886L84.1745 20.3952H87.0483L84.8236 34.0689ZM80.5587 31.4733C81.9034 31.4733 82.8303 29.8972 82.8303 27.7184C82.8303 26.2815 82.3196 25.5395 81.3 25.5395C80.0022 25.5395 79.0295 27.0692 79.0295 29.2481C79.0295 30.7319 79.5391 31.4733 80.5587 31.4733ZM45.3779 33.8365C44.3577 34.1617 43.4309 34.3002 42.3649 34.3002C39.1201 34.3002 37.4513 32.5856 37.4513 29.2944C37.4513 25.4937 39.5838 22.6662 42.504 22.6662C44.9142 22.6662 46.4433 24.2423 46.4433 26.6988C46.4433 27.5334 46.3506 28.3217 46.0723 29.4799H40.3257C40.2793 29.6196 40.2793 29.7123 40.2793 29.805C40.2793 31.1029 41.1604 31.7515 42.8286 31.7515C43.8946 31.7515 44.8214 31.566 45.8416 31.0559L45.3779 33.8365ZM43.7555 27.2083V26.6524C43.7555 25.7256 43.2454 25.2155 42.3649 25.2155C41.438 25.2155 40.7889 25.911 40.5106 27.2083H43.7555ZM14.2297 34.0689H11.3558L13.0246 23.5467L9.27022 34.0689H7.27685L7.045 23.6394L5.28402 34.0689H2.59564L4.86669 20.3952H9.03837L9.17748 28.8776L11.9581 20.3952H16.5007L14.2297 34.0689ZM21.4143 29.1089C21.1361 29.1089 20.997 29.0631 20.7651 29.0631C19.1427 29.0631 18.3086 29.6654 18.3086 30.7777C18.3086 31.4733 18.6796 31.8901 19.3282 31.8901C20.5333 31.8901 21.3679 30.7777 21.4143 29.1089ZM23.5462 34.0689H21.1355L21.1819 32.9097C20.44 33.8365 19.4668 34.2544 18.1226 34.2544C16.5465 34.2544 15.4806 33.0493 15.4806 31.2414C15.4806 28.5072 17.3343 26.9312 20.5791 26.9312C20.9037 26.9312 21.321 26.9775 21.7842 27.0234C21.8769 26.653 21.8769 26.5138 21.8769 26.3284C21.8769 25.587 21.3668 25.3088 20.0227 25.3088C19.1885 25.3088 18.2611 25.4015 17.6125 25.587L17.1952 25.7261L16.9169 25.7725L17.3343 23.2696C18.7712 22.8522 19.7444 22.7131 20.8109 22.7131C23.3138 22.7131 24.658 23.8255 24.658 25.9574C24.658 26.5138 24.6117 26.9312 24.4262 28.1826L23.777 32.123L23.6843 32.8175L23.6379 33.3739L23.5915 33.7918L23.5462 34.0689ZM67.3028 29.1089C66.9777 29.1089 66.8391 29.0631 66.6542 29.0631C64.9854 29.0631 64.1502 29.6654 64.1502 30.7777C64.1502 31.4733 64.568 31.8901 65.2167 31.8901C66.3759 31.8901 67.2559 30.7777 67.3028 29.1089ZM69.4347 34.0689H67.0246L67.0704 32.9097C66.329 33.8365 65.3558 34.2544 64.0116 34.2544C62.4356 34.2544 61.369 33.0493 61.369 31.2414C61.369 28.5072 63.2228 26.9312 66.4676 26.9312C66.7927 26.9312 67.2101 26.9775 67.6268 27.0234C67.7196 26.653 67.7665 26.5138 67.7665 26.3284C67.7665 25.587 67.2559 25.3088 65.9128 25.3088C65.0776 25.3088 64.1049 25.4015 63.4557 25.587L63.0847 25.7261L62.8065 25.7725L63.2233 23.2696C64.6608 22.8522 65.6335 22.7131 66.7 22.7131C69.2029 22.7131 70.5007 23.8255 70.5007 25.9574C70.5007 26.5138 70.5007 26.9312 70.2694 28.1826L69.6666 32.123L69.5738 32.8175L69.4811 33.3739L69.4353 33.7918L69.4347 34.0689ZM77.2217 22.8517H76.9434C75.9707 22.8517 75.4143 23.3154 74.5333 24.659L74.8115 22.9439H72.1689L70.4074 34.0684H73.2813C74.3478 27.2547 74.626 26.096 76.0166 26.096H76.202C76.4803 24.7518 76.8507 23.778 77.3144 22.8975L77.2217 22.8517Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              width="118"
              height="38"
              viewBox="0 0 118 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.7776 37.3666H41.2199L47.1934 0.655967H56.752L50.7776 37.3666ZM33.1794 0.655967L24.0675 25.9058L22.9893 20.4686L22.9903 20.4705L19.7743 3.96134C19.7743 3.96134 19.3854 0.655967 15.2405 0.655967H0.176758L0 1.27757C0 1.27757 4.60651 2.23598 9.99762 5.4736L18.3013 37.3676H28.2597L43.4657 0.655967H33.1794ZM108.356 37.3666H117.132L109.48 0.654986H101.797C98.2489 0.654986 97.3847 3.3908 97.3847 3.3908L83.1302 37.3666H93.0935L95.0859 31.9136H107.236L108.356 37.3666ZM97.8384 24.3808L102.86 10.6428L105.685 24.3808H97.8384ZM83.8775 9.48404L85.2415 1.60064C85.2415 1.60064 81.0327 0 76.6452 0C71.9022 0 60.6387 2.07298 60.6387 12.1531C60.6387 21.6371 73.8583 21.755 73.8583 26.7366C73.8583 31.7182 62.0008 30.8256 58.0875 27.6842L56.6666 35.927C56.6666 35.927 60.9343 38 67.4547 38C73.9771 38 83.8166 34.6229 83.8166 25.4315C83.8166 15.8866 70.4783 14.9979 70.4783 10.848C70.4793 6.69716 79.7875 7.23038 83.8775 9.48404Z"
                fill="#2566AF"
              />
              <path
                d="M25.9903 20.4693L22.7743 3.96015C22.7743 3.96015 22.3854 0.654785 18.2405 0.654785H3.17676L3 1.27638C3 1.27638 10.2402 2.77686 17.1848 8.39874C23.825 13.7722 25.9903 20.4693 25.9903 20.4693Z"
                fill="#E6A540"
              />
            </svg>
          </div>
          <div>
            <svg
              width="83"
              height="53"
              viewBox="0 0 83 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_76_55)">
                <path
                  d="M78.5733 0H4.42667C1.98189 0 0 1.98189 0 4.42667V47.6973C0 50.1421 1.98189 52.124 4.42667 52.124H78.5733C81.0181 52.124 83 50.1421 83 47.6973V4.42667C83 1.98189 81.0181 0 78.5733 0Z"
                  fill="#00425F"
                />
                <path
                  d="M17.2932 36.6044C24.338 36.6044 30.049 30.8934 30.049 23.8486C30.049 16.8038 24.338 11.0928 17.2932 11.0928C10.2483 11.0928 4.53733 16.8038 4.53733 23.8486C4.53733 30.8934 10.2483 36.6044 17.2932 36.6044Z"
                  fill="#EE312A"
                />
                <path
                  d="M17.2932 29.3126C14.4402 22.8452 12.348 16.8037 12.348 16.8037H7.97396C7.97396 16.8037 10.6363 24.5583 15.5814 34.2559H19.0049C23.9501 24.5583 26.6124 16.8037 26.6124 16.8037H22.2383C22.2383 16.8037 20.1461 22.8452 17.2932 29.3126Z"
                  fill="white"
                />
                <path
                  d="M78.357 28.5083H69.7993C69.7993 28.5083 69.9894 31.3614 73.7929 31.3614C75.6945 31.3614 77.5964 30.7904 77.5964 30.7904L77.9768 33.8331C77.9768 33.8331 76.0749 34.5938 73.4125 34.5938C69.6092 34.5938 66.1861 32.692 66.1861 27.3673C66.1861 23.1835 68.8484 20.5211 72.6518 20.5211C78.357 20.5211 78.7374 26.2263 78.357 28.5083ZM72.4617 23.1835C69.9894 23.1835 69.7993 25.8459 69.7993 25.8459H75.124C75.124 25.8459 74.9339 23.1835 72.4617 23.1835Z"
                  fill="white"
                />
                <path
                  d="M48.9516 23.9868L49.5221 20.944C49.5221 20.944 45.1162 19.607 41.5349 22.0851V34.2558H45.3385L45.3382 24.3671C46.8595 23.2261 48.9516 23.9868 48.9516 23.9868Z"
                  fill="white"
                />
                <path
                  d="M38.5581 28.5083H30.0003C30.0003 28.5083 30.1905 31.3614 33.9939 31.3614C35.8956 31.3614 37.7973 30.7904 37.7973 30.7904L38.1777 33.8331C38.1777 33.8331 36.276 34.5938 33.6135 34.5938C29.8101 34.5938 26.387 32.692 26.387 27.3673C26.387 23.1835 29.0494 20.5211 32.8529 20.5211C38.5581 20.5211 38.9383 26.2263 38.5581 28.5083ZM32.6626 23.1835C30.1905 23.1835 30.0003 25.8459 30.0003 25.8459H35.3251C35.3251 25.8459 35.135 23.1835 32.6626 23.1835Z"
                  fill="white"
                />
                <path
                  d="M58.1889 29.6944C57.0067 26.8191 56.0529 23.855 55.3364 20.8298L51.5332 20.8303C51.5332 20.8303 53.4348 28.1725 56.668 34.2564H59.7099C62.943 28.1725 64.8447 20.8317 64.8447 20.8317H61.0415C60.3248 23.8562 59.371 26.8197 58.1889 29.6944Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_55">
                  <rect width="83" height="52.124" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-auto  text-gray-500 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
          />
        </svg>
        boluwatifemanuel@gmail.com
      </div>
    </div>
  );
};

export default Footer;
