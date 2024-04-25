import React from "react";

const Belownews = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="Wallet"
          height="50"
          width="50"
        >
          <path
            d="M93 48.627h-.5V34.968c0-4.263-3.157-7.792-7.254-8.398v-3.073c0-4.687-3.813-8.5-8.5-8.5H72.98l-1.983-5.285a1.5 1.5 0 0 0-1.864-.901l-19.201 6.186H10.735c-3.989 0-7.235 3.506-7.235 7.235V82.76c0 4.687 3.813 8.5 8.5 8.5h72c4.687 0 8.5-3.813 8.5-8.5V69.101h.5c1.93 0 3.5-1.57 3.5-3.5V52.127c0-1.929-1.57-3.5-3.5-3.5zM74.106 17.998h2.64c3.032 0 5.5 2.467 5.5 5.5v2.971h-4.961l-.299-.797-2.88-7.674zm-4.33-3 2.437 6.494 1.868 4.977H50.109l44.582-14.362 1.085 2.891zm-59.041 3h29.884l-18.84 6.07-7.453 2.401h-3.591c-2.335 0-4.235-1.9-4.235-4.235s1.9-4.236 4.235-4.236zM89.5 82.76c0 3.033-2.468 5.5-5.5 5.5H12a5.506 5.506 0 0 1-5.5-5.5V28.096c.021.016.046.026.068.042.262.185.535.354.821.504.053.028.109.052.163.079.265.131.538.506.82.344.048.017.094.036.142.052.312.101.633.177.962.235.073.013.147.023.221.034.34.049.685.083 1.038.083H84c3.032 0 5.5 2.467 5.5 5.5v13.659h-9.938c-4.687 0-8.5 3.813-8.5 8.5v3.474c0 4.687 3.813 8.5 8.5 8.5H89.5V82.76zm4-17.159a.5.5 0 0 1-.5.5H79.562a5.506 5.506 0 0 1-5.5-5.5v-3.474c0-3.033 2.468-5.5 5.5-5.5H93a.5.5 0 0 1 .5.5v13.474z"
            fill="#8d769a"
            class="color000000 svgShape"
          ></path>
          <path
            d="M83.449 54.522a4.347 4.347 0 0 0-4.343 4.342c0 2.395 1.948 4.342 4.343 4.342s4.342-1.948 4.342-4.342a4.347 4.347 0 0 0-4.342-4.342zm0 5.685c-.74 0-1.343-.602-1.343-1.342a1.343 1.343 0 0 1 2.685 0c0 .739-.602 1.342-1.342 1.342z"
            fill="#8d769a"
            class="color000000 svgShape"
          ></path>

        </svg>
        <div className="flex-grow">
          Secure credit card payment
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          id="Cart"
          height="50"
          width="50"
        >
         <path
            d="M75 71.09v-10c0-14.28 11.15-25.93 25-25.93s25 11.65 25 25.93v10h17.28A3.13 3.13 0 0 1 145.4 74l5.94 87.5a3.14 3.14 0 0 1-2.91 3.33H51.78a3.12 3.12 0 0 1-3.12-3.12v-.21L54.6 74a3.13 3.13 0 0 1 3.12-2.92Zm9.38 0h31.25v-10c0-9.19-7-16.56-15.63-16.56S84.38 51.9 84.38 61.09Zm-25.91 84.38h83.06l-5.08-75H63.56Z"
            fill="#8d769a"
            class="color000000 svgShape"
          ></path>
        </svg>
        <div className="flex-grow">
          Free delivery from €70 in metropolitan France.
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          id="undo"
          height="50"
          width="50"
        >
         <path fill="none" d="M0 0h50v50H0V0z"></path>
          <path
            d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L3.71 8.71C3.08 8.08 2 8.52 2 9.41V15c0 .55.45 1 1 1h5.59c.89 0 1.34-1.08.71-1.71l-1.91-1.91c1.39-1.16 3.16-1.88 5.12-1.88 3.16 0 5.89 1.84 7.19 4.5.27.56.91.84 1.5.64.71-.23 1.07-1.04.75-1.72C20.23 10.42 16.65 8 12.5 8z"
            fill="#8d769a"
            class="color000000 svgShape"
          ></path>

        </svg>
        <div className="flex-grow">
          Free Returns in Metropolitan France
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          id="About"
          height="50"
          width="50"
        >
         <path
            fill="#8d769a"
            d="M106 50c3.3 0 6 2.7 6 6v60c0 3.3-2.7 6-6 6H91v10.9l-13-10-1-.9H23c-3.3 0-6-2.7-6-6V30c0-3.3 2.7-6 6-6h83m0-4H23c-5.5 0-10 4.5-10 10v60c0 5.5 4.5 10 10 10h52.6L95 115v-15h11c5.5 0 10-4.5 10-10V30c0-5.5-4.5-10-10-10z"
            class="color3b97d3 svgShape"
          ></path>
          <path
            fill="#432c50"
            d="M71.4 61.1c-4.3 3.2-4.5 4.4-4.5 6.1V69h-6.4s-1.9-2-1.9-5.5c0-1.6 1.1-3.1 4.3-5.6 4.4-3.5 5-4.4 5-6.7 0-2-1.1-3.5-5.1-3.5s-8.6 1-8.6 1l-.4-6.1S59 40.5 64 40.5c8.6 0 12.3 2.9 12.3 9.8 0 5.5-.8 7.6-4.9 10.8zM59.1 72.3h8.6V82h-8.6v-9.7z"
            class="color2c3e50 svgShape"
          ></path>
        </svg>
        <div className="flex-grow">
          Do you have a question? Write to us at contact@maradji.com
        </div>
      </div>
    </div>
  );
};

export default Belownews;
