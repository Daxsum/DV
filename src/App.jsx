import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import FAQ from "./faq";

function App() {
  const [Timeleft, setTimeleft] = useState([
    { value: 27, unit: "DAYS" },
    { value: 24, unit: "HOURS" },
    { value: 60, unit: "MINUTES" },
    // { value: 60, unit: "MINUTES" },
  ]);
  const fileds = [
    "First Name",
    "Last Name",
    "Email address",
    "Your Email Again",
  ];
  const Lists = [
    {
      discription:
        "50,000 people and their families will Live, Work and Study in USA.",
      src: "/people.png",
    },
    {
      discription: "OFFICIAL USA Governmental program.",
      src: "/star.png",
    },
    {
      discription: "Your chance to LIVE, WORK & STUDY in USA.",
      src: "/wallet.png",
    },
    {
      discription: "Simple registration within 5 minutes.",
      src: "/clock.png",
    },
    {
      discription: "Personal support in every step.",
      src: "/message.png",
    },
    {
      discription: "Double chance for married people to win the Green Card..",
      src: "/lovely.png",
    },
  ];

  const StarIcon = () => (
    <svg
      width="35"
      height="28"
      viewBox="0 0 35 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5556 2.90544L25.9045 7.60335C26.221 8.25306 27.0707 8.86946 27.787 9.00273L32.0351 9.70242C34.7506 10.1522 35.3836 12.1181 33.4345 14.0839L30.1193 17.3991C29.5696 17.9488 29.253 19.0317 29.4363 19.8147L30.3859 23.9129C31.1355 27.1448 29.403 28.4109 26.5542 26.7116L22.5727 24.346C21.8563 23.9129 20.6568 23.9129 19.9405 24.346L15.9589 26.7116C13.1101 28.3942 11.3775 27.1448 12.1272 23.9129L13.0768 19.8147C13.2267 19.015 12.9102 17.9322 12.3604 17.3824L9.04525 14.0672C7.09612 12.1181 7.72917 10.1522 10.4446 9.68576L14.6928 8.98607C15.4092 8.86945 16.2588 8.2364 16.5753 7.58669L18.9243 2.88878C20.207 0.35657 22.2728 0.35657 23.5556 2.90544Z"
        fill="#01264A"
      />
      <path
        d="M11.2452 3.8026H1.24969C0.566659 3.8026 0.000244141 3.23619 0.000244141 2.55316C0.000244141 1.87013 0.566659 1.30371 1.24969 1.30371H11.2452C11.9283 1.30371 12.4947 1.87013 12.4947 2.55316C12.4947 3.23619 11.9283 3.8026 11.2452 3.8026Z"
        fill="#01264A"
      />
      <path
        d="M6.24747 27.1258H1.24969C0.566659 27.1258 0.000244141 26.5594 0.000244141 25.8764C0.000244141 25.1934 0.566659 24.627 1.24969 24.627H6.24747C6.9305 24.627 7.49691 25.1934 7.49691 25.8764C7.49691 26.5594 6.9305 27.1258 6.24747 27.1258Z"
        fill="#01264A"
      />
      <path
        d="M2.91562 15.4642H1.24969C0.566659 15.4642 0.000244141 14.8978 0.000244141 14.2148C0.000244141 13.5317 0.566659 12.9653 1.24969 12.9653H2.91562C3.59865 12.9653 4.16506 13.5317 4.16506 14.2148C4.16506 14.8978 3.59865 15.4642 2.91562 15.4642Z"
        fill="#01264A"
      />
    </svg>
  );
  const ReviewIcon = () => (
    <svg
      width="626"
      height="464"
      viewBox="0 0 626 464"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M556.992 157.99C556.992 162.408 553.41 165.99 548.992 165.99H340.106C337.834 165.99 335.67 166.955 334.153 168.646L309.51 196.095C304.609 201.555 295.557 198.088 295.557 190.751V173.99C295.557 169.572 291.975 165.99 287.557 165.99H265.518C261.099 165.99 257.518 162.408 257.518 157.99V8C257.518 3.58172 261.099 0 265.518 0H548.992C553.41 0 556.992 3.58172 556.992 8V157.99Z"
        fill="#E5E5E5"
      />
      <path
        d="M503.886 48.7607H310.624C308.414 48.7607 306.624 50.5516 306.624 52.7607V53.7519C306.624 55.961 308.414 57.7519 310.624 57.7519H503.886C506.096 57.7519 507.886 55.961 507.886 53.7519V52.7607C507.886 50.5516 506.096 48.7607 503.886 48.7607Z"
        fill="white"
      />
      <path
        d="M503.886 78.499H310.624C308.414 78.499 306.624 80.2899 306.624 82.499V83.4902C306.624 85.6993 308.414 87.4902 310.624 87.4902H503.886C506.096 87.4902 507.886 85.6993 507.886 83.4902V82.499C507.886 80.2899 506.096 78.499 503.886 78.499Z"
        fill="white"
      />
      <path
        d="M503.886 108.239H310.624C308.414 108.239 306.624 110.03 306.624 112.239V113.23C306.624 115.44 308.414 117.23 310.624 117.23H503.886C506.096 117.23 507.886 115.44 507.886 113.23V112.239C507.886 110.03 506.096 108.239 503.886 108.239Z"
        fill="white"
      />
      <path
        d="M296.163 239.576C300.343 239.576 303.732 236.188 303.732 232.008C303.732 227.828 300.343 224.439 296.163 224.439C291.983 224.439 288.594 227.828 288.594 232.008C288.594 236.188 291.983 239.576 296.163 239.576Z"
        fill="#E6E6E6"
      />
      <path
        d="M528.626 454.341H520.146L516.111 421.631H528.627L528.626 454.341Z"
        fill="#9F616A"
      />
      <path
        d="M530.789 462.561L503.445 462.56V462.214C503.445 459.392 504.567 456.685 506.563 454.689C508.559 452.693 511.266 451.571 514.088 451.571L530.79 451.572L530.789 462.561Z"
        fill="#333333"
      />
      <path
        d="M445.973 453.669L437.932 450.974L444.504 418.677L456.371 422.656L445.973 453.669Z"
        fill="#9F616A"
      />
      <path
        d="M445.411 462.15L419.485 453.458L419.595 453.13C420.492 450.454 422.416 448.244 424.943 446.986C427.469 445.728 430.392 445.525 433.069 446.422L448.904 451.731L445.411 462.15Z"
        fill="#333333"
      />
      <path
        d="M456.427 285.292L438.062 440.642L456.074 442.161C456.074 442.161 484.407 289.423 493.141 307.516C501.876 325.609 512.577 438.77 512.577 438.77H530.453C530.453 438.77 535.038 262.208 516.321 253.473L456.427 285.292Z"
        fill="#333333"
      />
      <path
        d="M504.027 157.305C505.76 147.465 499.188 138.081 489.347 136.348C479.506 134.614 470.123 141.186 468.39 151.027C466.656 160.868 473.228 170.251 483.069 171.985C492.91 173.719 502.293 167.146 504.027 157.305Z"
        fill="#9F616A"
      />
      <path
        d="M475.456 178.917L498.54 180.789C498.54 180.789 516.945 181.101 524.431 186.092C531.918 191.083 517.257 221.966 517.257 221.966C517.257 221.966 513.445 234.211 516.321 239.747C525.652 257.712 524.269 271.546 524.269 271.546C524.269 271.546 505.091 275.933 472.024 284.668C472.024 284.668 451.436 292.778 452.06 288.411C452.683 284.044 458.922 234.132 458.922 234.132V182.349L475.456 178.917Z"
        fill="#00579B"
      />
      <path
        d="M515.838 152.206C514.914 147.053 512.845 139.744 508.236 134.203C508.381 134.203 508.526 134.21 508.671 134.206C510.255 134.159 512.058 133.66 512.712 132.217C512.923 131.638 512.976 131.014 512.865 130.409C512.754 129.804 512.483 129.239 512.08 128.774C511.263 127.854 510.286 127.091 509.196 126.52C510.308 127.195 511.879 127.822 512.767 126.871C512.995 126.585 513.136 126.239 513.175 125.875C513.213 125.511 513.147 125.143 512.984 124.815C512.647 124.164 512.174 123.594 511.597 123.142C509.729 121.49 507.684 120.047 505.501 118.84C503.81 117.906 501.586 117.156 500.069 118.351C498.523 119.568 498.771 121.938 499.168 123.866C498.303 123.359 497.329 123.066 496.328 123.008C495.828 122.994 495.338 123.153 494.941 123.458C494.544 123.763 494.265 124.195 494.15 124.682C494.135 125.066 494.22 125.448 494.397 125.79C494.573 126.132 494.835 126.422 495.156 126.633C489.191 125.652 481.568 126.765 471.823 131.274C471.823 131.274 462.375 134.424 461.895 146.862C461.846 148.851 462.067 150.838 462.551 152.768C463.083 155.023 464.977 166.085 462.705 170.555L474.084 174.609L474.215 167.793C465.371 155.027 469.74 150.343 473.183 142.665C473.189 142.651 473.198 142.639 473.211 142.63C473.223 142.621 473.237 142.615 473.252 142.614C473.267 142.613 473.282 142.616 473.296 142.623C473.309 142.63 473.32 142.641 473.328 142.654C473.964 143.746 476.403 147.489 484.795 147.489L481.552 144.246C481.552 144.246 495.821 150.083 501.009 150.083C501.009 150.083 504.9 152.677 501.009 156.568C497.118 160.46 488.601 166.188 493.141 173.322C497.681 180.456 497.29 182.987 497.29 182.987L507.667 177.15C507.667 177.15 514.006 164.61 515.13 160.917C516.053 158.11 516.296 155.124 515.838 152.206Z"
        fill="#2F2E41"
      />
      <path
        d="M401.146 300.808C401.146 296.389 404.728 292.808 409.146 292.808H599.585C604.003 292.808 607.585 296.389 607.585 300.808V399.231C607.585 403.649 604.003 407.231 599.585 407.231H589.363C584.945 407.231 581.363 410.812 581.363 415.231V417.81C581.363 425.147 572.311 428.614 567.41 423.155L555.498 409.886C553.981 408.196 551.817 407.231 549.545 407.231H409.146C404.728 407.231 401.146 403.649 401.146 399.231V300.808Z"
        fill="#4AC97D"
      />
      <path
        d="M570.635 326.419H438.095C436.384 326.419 434.996 327.807 434.996 329.518C434.996 331.23 436.384 332.617 438.095 332.617H570.635C572.347 332.617 573.734 331.23 573.734 329.518C573.734 327.807 572.347 326.419 570.635 326.419Z"
        fill="white"
      />
      <path
        d="M570.635 346.92H438.095C436.384 346.92 434.996 348.307 434.996 350.019C434.996 351.73 436.384 353.118 438.095 353.118H570.635C572.347 353.118 573.734 351.73 573.734 350.019C573.734 348.307 572.347 346.92 570.635 346.92Z"
        fill="white"
      />
      <path
        d="M570.635 367.421H438.095C436.384 367.421 434.996 368.808 434.996 370.52C434.996 372.231 436.384 373.619 438.095 373.619H570.635C572.347 373.619 573.734 372.231 573.734 370.52C573.734 368.808 572.347 367.421 570.635 367.421Z"
        fill="white"
      />
      <path
        d="M526.693 219.491L514.585 222.434L514.493 246.94L500.874 293.944C499.784 294.806 498.951 295.95 498.465 297.252C497.979 298.555 497.859 299.965 498.118 301.33C498.378 302.696 499.006 303.964 499.935 304.998C500.864 306.031 502.058 306.791 503.388 307.193C504.718 307.596 506.133 307.627 507.479 307.282C508.826 306.938 510.052 306.231 511.025 305.239C511.998 304.247 512.681 303.007 512.999 301.654C513.317 300.301 513.259 298.887 512.83 297.565L529.111 248.905L526.693 219.491Z"
        fill="#9F616A"
      />
      <path
        d="M446.104 218.976L460.631 223.126L460.722 247.631L474.341 294.636C475.431 295.498 476.264 296.642 476.75 297.944C477.236 299.246 477.356 300.657 477.097 302.022C476.838 303.387 476.21 304.656 475.281 305.689C474.352 306.723 473.157 307.482 471.827 307.885C470.497 308.288 469.082 308.319 467.736 307.974C466.389 307.63 465.163 306.923 464.19 305.931C463.217 304.938 462.534 303.699 462.216 302.346C461.898 300.993 461.956 299.579 462.385 298.257L446.104 249.596V218.976Z"
        fill="#9F616A"
      />
      <path
        d="M508.522 183.597L511.523 182.618C513.208 182.069 515.04 182.196 516.633 182.973C516.633 182.973 525.368 183.597 526.615 189.836C527.863 196.075 530.898 250.606 530.898 250.606L512.397 244.72L508.522 183.597Z"
        fill="#00579B"
      />
      <path
        d="M466.409 183.597L461.098 183.33L459.416 182.489C459.416 182.489 449.564 183.597 448.316 189.836C447.068 196.075 443.438 252.289 443.438 252.289L461.939 247.243L466.409 183.597Z"
        fill="#00579B"
      />
      <path
        d="M226.426 397.935L235.196 390.285C234.821 384.79 234.136 379.321 233.145 373.903L228.305 375.951L232.795 372.034C231.503 365.347 230.224 361 230.224 361C230.224 361 212.53 376.712 202.629 395.88L206.973 410.168L200.338 400.72C199.352 403.001 198.51 405.341 197.817 407.728C190.913 431.811 193.182 453.589 202.885 456.371C212.587 459.152 226.05 441.884 232.954 417.8C234.968 410.086 235.788 402.108 235.385 394.145L226.426 397.935Z"
        fill="#F1F1F1"
      />
      <path
        d="M249.648 416.662L261.11 414.646C263.629 409.748 265.87 404.712 267.822 399.562L262.621 398.813L268.489 397.781C270.84 391.389 271.992 387.007 271.992 387.007C271.992 387.007 248.723 391.311 230.339 402.602L226.672 417.078L225.877 405.561C223.853 407.003 221.923 408.571 220.096 410.256C201.737 427.304 192.422 447.12 199.29 454.517C206.159 461.913 226.609 454.089 244.968 437.041C250.68 431.478 255.506 425.073 259.277 418.048L249.648 416.662Z"
        fill="#F1F1F1"
      />
    </svg>
  );
  useEffect(() => {
    var countDownDate = new Date("Nov 8, 2023 12:34:85").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // this is just for the dismostration perpose
      setTimeleft([
        ...Timeleft,
        { value: seconds.toString(), unit: "SECONDS" },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="">
      <div className=" flex flex-col justify-between max-w-full min-w-0 max-h-full bg-cover bg-[url('/home.gif')]">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className=" grid  md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex max-w-64 max-h-64 flex-col justify-center flex-shrink-0 ml-[4.8rem] mt-[1.56rem]">
              <h1 className="text-green-500 text-6xl not-italic font-bold whitespace-nowrap">
                Win the right to live
              </h1>
              <p className="text-6xl not-italic font-bold text-white whitespace-nowrap">
                in the USA!
              </p>
            </div>
            <div className="flex sm:grid-cols-3 ">
              <div className="w-[0.375rem] max-h-[6.0625rem] bg-gray-400 ml-[5.31rem]"></div>
              <p className=" max-w-[14.75rem] max-h-[6.185rem]  ml-[1rem] text-2xl not-italic font-medium text-white">
                The official deadline is running, so hurry up and{" "}
                <span className=" text-2xl not-italic font-medium underline text-white ">
                  {" "}
                  <a href="/">apply here!</a>
                </span>
              </p>
              {Timeleft.map((time) => {
                return (
                  <div className="w-[5.625rem] h-[5.5625rem] rounded-2xl bg-gray-900 ml-[0.88rem] flex justify-center items-center content-around ">
                    <p className="w-16 h-10 flex flex-col flex-shrink-0 text-center justify-center ">
                      <span className="text-4xl not-italic font-black text-white ">
                        {time.value}
                      </span>
                      <span className=" text-blue-200 text-center text-xs not-italic font-light">
                        {time.unit}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="ml-[4.9rem] mt-[3.06rem] mb-[9.94rem] flex flex-col">
              {Lists.map((list) => {
                return (
                  <div className="flex w-64 h-12 flex-row  flex-shrink-0">
                    <img className="w-[1.9rem] h-[1.9rem]" src={list.src} />
                    <p className="ml-[1.06rem] text-base not-italic font-medium text-white whitespace-nowrap">
                      {list.discription}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" ">
            <div className="w-[41.85rem] h-[41.56rem] flex-shrink-0 bg-white rounded-3xl ml-6 mr-[5.1rem] mt-[0.56rem] p-[3.56rem] ">
              <img src="checkout.png" />
              <div className="flex  flex-col justify-center flex-shrink-0">
                <h1 className=" flex-shrink-0 my-[1rem] text-6xl not-italic font-bold whitespace-nowrap text-[#01264A] text-center">
                  Green card eligibility
                </h1>
                <div className="  grid grid-cols-2 gap-4 ">
                  {fileds.map((filed) => {
                    return (
                      <input
                        className=" w-[17.3rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                        placeholder={filed}
                      />
                    );
                  })}
                  <div className="flex flex-col mt-2 gap-4">
                    <select
                      className=" w-[34.75rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                      placeholder=""
                      name="birth"
                      id="birth"
                    >
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="Your country of birth"
                      >
                        Your country of birth
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="canada"
                      >
                        Canada
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="usa"
                      >
                        USA
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="france"
                      >
                        France
                      </option>
                    </select>
                    <select
                      className=" w-[34.75rem] h-[3.6rem] rounded-2xl bg-[#F3F3F3] placeholder:text-2xl italic font-light p-4 mr-[3.06rem] "
                      placeholder=""
                      name="birth"
                      id="birth"
                    >
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="Your country of birth"
                      >
                        Marial Status
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="canada"
                      >
                        single
                      </option>
                      <option
                        className="text-2xl italic font-light p-4 "
                        value="usa"
                      >
                        married
                      </option>
                    </select>
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Yes, I finished high school OR I have qualifying
                        training.
                      </label>
                    </div>
                    <button className="w-[34.4rem] bg-[#4AC97D] h-[3.625rem] rounded-xl text-white">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col justify-start">
        <p className="mt-[5rem] ml-[7.12rem] text-xl font-medium text-gray-900 whitespace-nowrap">
          Find the right visa for you!
        </p>
        <div>
          <FAQ content={false} title={"  Diversity Visa Cost"} />
          <FAQ content={true} title="Diversity Visa FAQs" />
        </div>
      </div>
      <section className="reviews">
        <p className="subtitle" style={{ marginBottom: 100 }}>
          <StarIcon /> Highly Recommend
          <div className="review-bgs">
            <img width={176} height={83} src={"/reviewImg"} alt="Review" />
            <ReviewIcon />
          </div>
        </p>
        <section>
          <div className="review">
            <div className="top">
              <div className="top-bottom">
                <a href="/">
                  <div>Yeonseo Choi</div>
                </a>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ marginRight: 50 }}>1 Review</div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
                        fill="#535353"
                      />
                    </svg>
                    <span>KR</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, textAlign: "right" }}>
              Mar 20, 2023
            </div>

            <svg
              width="206"
              height="37"
              viewBox="0 0 206 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36.6365" height="36.6365" fill="#00B87C" />
              <path
                d="M30.74 15.588L21.2821 15.588L18.3707 6.59521L15.442 15.588L5.98413 15.5707L13.6331 21.1352L10.7045 30.128L18.3535 24.5635L26.0025 30.128L23.091 21.1352L30.74 15.588Z"
                fill="#FDFEFE"
              />
              <path
                d="M23.7461 23.1671L23.0914 21.1343L18.3711 24.5625L23.7461 23.1671Z"
                fill="#4BBD97"
              />
              <rect
                x="42.1323"
                width="36.6365"
                height="36.6365"
                fill="#00B87C"
              />
              <path
                d="M72.8721 15.588L63.4142 15.588L60.5028 6.59521L57.5741 15.588L48.1162 15.5707L55.7652 21.1352L52.8365 30.128L60.4855 24.5635L68.1346 30.128L65.2231 21.1352L72.8721 15.588Z"
                fill="#FDFEFE"
              />
              <path
                d="M65.8779 23.1671L65.2233 21.1343L60.5029 24.5625L65.8779 23.1671Z"
                fill="#4BBD97"
              />
              <rect
                x="84.2642"
                width="36.6365"
                height="36.6365"
                fill="#00B87C"
              />
              <path
                d="M115.004 15.588L105.546 15.588L102.635 6.59521L99.7059 15.588L90.248 15.5707L97.8971 21.1352L94.9684 30.128L102.617 24.5635L110.266 30.128L107.355 21.1352L115.004 15.588Z"
                fill="#FDFEFE"
              />
              <path
                d="M108.01 23.1671L107.355 21.1343L102.635 24.5625L108.01 23.1671Z"
                fill="#4BBD97"
              />
              <rect
                x="126.396"
                width="36.6365"
                height="36.6365"
                fill="#00B87C"
              />
              <path
                d="M157.136 15.588L147.678 15.588L144.766 6.59521L141.838 15.588L132.38 15.5707L140.029 21.1352L137.1 30.128L144.749 24.5635L152.398 30.128L149.487 21.1352L157.136 15.588Z"
                fill="#FDFEFE"
              />
              <path
                d="M150.142 23.1671L149.487 21.1343L144.767 24.5625L150.142 23.1671Z"
                fill="#4BBD97"
              />
              <rect
                x="168.528"
                width="36.6365"
                height="36.6365"
                fill="#00B87C"
              />
              <path
                d="M199.268 15.588L189.81 15.588L186.899 6.59521L183.97 15.588L174.512 15.5707L182.161 21.1352L179.233 30.128L186.882 24.5635L194.531 30.128L191.619 21.1352L199.268 15.588Z"
                fill="#FDFEFE"
              />
              <path
                d="M192.274 23.1671L191.619 21.1343L186.899 24.5625L192.274 23.1671Z"
                fill="#4BBD97"
              />
            </svg>

            <div className="review-title">Highly Recommend</div>
            <div className="review-text">
              <span>
                <p>
                  Nikka was a very professional consultant, always ready to
                  assist us each step of the way. I was reminded of everthing
                  and I had to take with to the interview and also later to pick
                  my passport and my son`s. Thanks once more, I certainly
                  recommend the service.
                </p>
              </span>
            </div>
            <div className="review-exp">
              Date of experience: February 28, 2023
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 130,
            }}
            className="review-btns"
          >
            <div>
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: 50 }}
              >
                <path
                  d="M12.5228 24.2528L3.77484 15.5048C2.74172 14.4717 2.74172 12.7811 3.77484 11.748L12.5228 3"
                  stroke-width="4.98658"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="15"
                height="27"
                viewBox="0 0 15 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.52295 24.1265L10.7906 15.4825C11.7671 14.4617 11.7671 12.7913 10.7906 11.7704L2.52295 3.12646"
                  stroke-width="4.98662"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>
      </section>

      <section className="subscribe">
        <h3> Let's keep in touch for news</h3>

        <div className="subs-form">
          <form
            onSubmit={() => {
              setSubs(true);
            }}
            name="sub-1"
          >
            <input required placeholder="your email here" type="email" />
            <button type="submit">
              Subscribe to be the first do receive updates and be in advantage
              on your application proccess
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L5.59317 6.88384C6.13561 6.39773 6.13561 5.60228 5.59317 5.11617L1 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>
      <section className="footer">
        <div className="footer-top ">
          <img alt="logo" src="/logo.png" />

          <a target="_blank" href="/" rel="noreferrer">
            Terms of Service
          </a>
          <a target="_blank" href="/" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            Legal Disclaimer
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            Refund Policy
          </a>
          <a
            href="/
"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Use
          </a>
        </div>
        <div className="line"></div>
        <div className="footer-text">
          Disclaimer: GovAssist is not affiliated with any United States
          government agency or department. Costs for consulting services do NOT
          include any government application, medical examination, filing, or
          biometric fees. This website does not provide legal advice and we are
          not a law firm. None of our customer service representatives are
          lawyers and they also do not provide legal advice. We are a private,
          internet-based travel and immigration consultancy provider dedicated
          to helping individuals travel to the United States. You may apply by
          yourself directly at travel.state.gov or at uscis.gov. GovAssist is
          affiliated with the UT law firm GovAssist Legal which provides legal
          services on immigration matters. Only licensed immigration
          professionals can provide advice, explanation, opinion, or
          recommendation about possible legal rights, remedies, defenses,
          options, selection of forms or strategies.
        </div>
      </section>
      <section
        style={{
          background: "#011527",
          width: "100%",
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
        className="mobile-footer"
      >
        Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
      </section>
    </div>
  );
}

export default App;
