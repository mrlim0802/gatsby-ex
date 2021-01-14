import React from "react";
import PropTypes from "prop-types";

export const Arrow = ({ color, direction, styles }) => {
  if (direction === `<`) {
    //
  }

  return (
    <svg css={styles} viewBox="0 0 19 18" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5858 10.0001H0V8.00008H14.5858L8.29289 1.70718L9.70711 0.292969L18.4142 9.00008L9.70711 17.7072L8.29289 16.293L14.5858 10.0001Z"
        fill={color}
      />
    </svg>
  );
};

Arrow.defaultProps = {
  color: `black`,
  direction: `>`,
  styles: []
};
Arrow.propTypes = {
  color: PropTypes.string,
  direction: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

//

export const Cart = ({ color, styles }) => (
  <svg
    css={styles}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.07125 4.00254C5.89365 4.00216 5.72244 4.02226 5.55976 4.06048C5.33674 3.56893 5.04216 3.12794 4.70711 2.79289C4.13843 2.22422 3.24155 2 2 2V4C2.75845 4 3.1949 4.10911 3.29289 4.20711C3.67086 4.58508 4 5.35306 4 6L4.01005 6.14142L4.98992 13.0005C3.35036 13.0856 2.0802 14.3588 2.00123 15.9504L2 17C2.09682 18.6439 3.36275 19.9085 4.94324 19.9984L5.17026 19.9987C5.58174 21.1646 6.69331 22 8 22C9.30622 22 10.4175 21.1652 10.8293 20H13.1707C13.5825 21.1652 14.6938 22 16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.6938 16 13.5825 16.8348 13.1707 18H10.8293C10.4175 16.8348 9.30622 16 8 16C6.69378 16 5.58254 16.8348 5.17071 18H5C4.49001 17.9694 4.03254 17.5124 3.99821 16.9401L4 16C4.02697 15.4813 4.48131 15.027 5.04955 14.9988L7.02369 14.9993L7.038 15H17.1169L17.2645 14.9532C18.0227 14.7126 18.6296 14.1416 18.917 13.4025L19.0224 13.194L19.3647 12.5159C19.7188 11.8139 20.0729 11.1108 20.418 10.4238C21.2632 8.74107 21.7948 7.67166 21.9125 7.40906C22.5171 6.06045 21.2924 5.02246 20.0407 5.00036L6.07125 4.00254ZM16.7694 13H7.11287C7.04866 12.9822 6.99973 12.9278 6.99015 12.86L6.01026 6.00073L19.8934 6.99493C19.6505 7.49032 19.2089 8.37516 18.6308 9.52609L18.6163 9.55493C18.2863 10.2119 17.9326 10.9141 17.579 11.6151L17.2371 12.2923L17.1076 12.5488L17.0588 12.6622C17.0065 12.8078 16.9028 12.9274 16.7694 13ZM16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20ZM9 19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19C7 18.4477 7.44772 18 8 18C8.55228 18 9 18.4477 9 19Z"
      fill={color}
    />
  </svg>
);

Cart.defaultProps = {
  color: `black`,
  styles: []
};
Cart.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

//

export const Cross = ({ className, color }) => (
  <svg className={className} viewBox="0 0 39 39" fill="none">
    <rect
      x="10.6074"
      y="8.48535"
      width="27"
      height="3"
      transform="rotate(45 10.6074 8.48535)"
      fill={color}
    />
    <rect
      x="29.6992"
      y="10.6064"
      width="27"
      height="3"
      transform="rotate(135 29.6992 10.6064)"
      fill={color}
    />
  </svg>
);

Cross.defaultProps = {
  className: ``,
  color: `black`
};
Cross.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

//

export const Facebook = ({ className, color }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2ZM9.13306 10.0044H11V16H13V10.0044H14.9824V8.00439H13V7C13 6.44772 13.4477 6 14 6H15V4H14C12.3431 4 11 5.34315 11 7V8.00439H9.13306V10.0044Z"
      fill={color}
    />
  </svg>
);

Facebook.defaultProps = {
  className: ``,
  color: `white`
};
Facebook.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

//

export const Instagram = ({ className, color }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0H6C2.68629 0 0 2.68629 0 6V14C0 17.3137 2.68629 20 6 20H14C17.3137 20 20 17.3137 20 14V6C20 2.68629 17.3137 0 14 0ZM2 6C2 3.79086 3.79086 2 6 2H14C16.2091 2 18 3.79086 18 6V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6ZM10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13ZM16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5Z"
      fill={color}
    />
  </svg>
);

Instagram.defaultProps = {
  className: ``,
  color: `white`
};
Instagram.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

//

export const LinkedIn = ({ className, color }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0H18C19.1046 0 20 0.89543 20 2V18C20 19.1046 19.1046 20 18 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0ZM2 2V18H18V2H2ZM11 7C10.4823 7 9.93525 7.15826 9.45215 7.45215L9 7H8V14H10V10C10 9.42425 10.594 9 11 9H12C12.406 9 13 9.42425 13 10V14H15V10C15 8.14718 13.394 7 12 7H11ZM6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6ZM5 7V14H7V7H5Z"
      fill={color}
    />
  </svg>
);

LinkedIn.defaultProps = {
  className: ``,
  color: `white`
};
LinkedIn.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

//

export const Silica = ({ color, styles }) => (
  <svg css={styles} viewBox="0 0 30 30" fill="none">
    <path
      d="M15.0307 0.167256C19.8001 0.167256 24.5781 0.175933 29.3474 0.158579C29.755 0.158579 29.8504 0.280051 29.8504 0.661822C29.8417 10.2148 29.8417 19.759 29.8504 29.312C29.8504 29.7198 29.755 29.8499 29.3301 29.8499C19.7741 29.8412 10.2094 29.8412 0.653338 29.8499C0.237105 29.8499 0.150391 29.7111 0.150391 29.3293C0.159062 19.7677 0.159062 10.1974 0.150391 0.635792C0.150391 0.262699 0.237106 0.149902 0.627325 0.149902C5.43135 0.175932 10.2354 0.167256 15.0307 0.167256ZM3.23745 5.72896C3.14207 7.21265 4.45147 8.22782 5.70017 8.21914C6.95754 8.21914 8.16289 7.1953 8.18023 5.76366C8.20624 4.30599 6.92286 3.23877 5.71752 3.2301C4.52084 3.22142 3.12472 4.27996 3.23745 5.72896ZM12.8629 10.4143C12.9669 9.10415 11.6055 7.87208 10.3741 7.89811C9.12542 7.92414 7.89407 8.92194 7.91141 10.4317C7.92008 11.8373 8.97801 12.8958 10.3741 12.8958C11.7616 12.9045 12.9409 11.6985 12.8629 10.4143ZM8.16288 24.3836C8.29296 23.0214 7.0616 21.8848 5.72619 21.8761C4.35608 21.8588 3.23746 22.9954 3.21144 24.3316C3.17675 25.7112 4.57287 26.8652 5.6915 26.8652C6.83614 26.8738 8.3103 25.6851 8.16288 24.3836ZM12.8629 19.6809C12.9669 18.5269 11.8309 17.1647 10.3741 17.1994C8.90864 17.2341 7.9461 18.258 7.91141 19.6375C7.87673 21.0432 9.04739 22.1277 10.3568 22.1624C11.6749 22.2058 12.9843 20.8523 12.8629 19.6809ZM19.6527 22.1624C21.0921 22.2926 22.1587 20.913 22.1587 19.7417C22.1587 18.5356 21.2135 17.2341 19.6613 17.2428C18.0051 17.2515 17.2073 18.5183 17.1726 19.6896C17.1293 20.7742 18.0658 22.2752 19.6527 22.1624ZM19.67 7.87208C18.3346 7.87208 17.1639 9.02606 17.1639 10.3709C17.1553 11.7505 18.2652 12.8524 19.6613 12.8524C21.1528 12.8438 22.098 11.7158 22.1587 10.4143C22.2108 9.0868 20.9881 7.87208 19.67 7.87208ZM14.9961 12.5748C13.626 12.5314 12.5073 13.7288 12.5507 15.091C12.594 16.4446 13.4612 17.4944 15.0221 17.5291C16.5222 17.5638 17.5195 16.2276 17.5281 15.0476C17.5368 13.8676 16.3748 12.4794 14.9961 12.5748ZM26.772 5.73763C26.7547 4.37541 25.6447 3.24745 24.3093 3.24745C22.8958 3.23877 21.7598 4.38408 21.7945 5.77234C21.8292 7.16927 22.8004 8.21046 24.2746 8.21914C25.7227 8.22782 26.7113 7.14324 26.772 5.73763ZM24.2833 26.8478C25.61 26.8478 26.7807 25.6938 26.7633 24.3663C26.746 23.0474 25.7921 21.8761 24.2746 21.8848C22.7397 21.8935 21.8379 23.0388 21.7859 24.3316C21.7252 25.6678 22.9479 26.8478 24.2833 26.8478Z"
      fill={color}
    />
  </svg>
);

Silica.defaultProps = {
  color: `white`,
  styles: []
};
Silica.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

//

export const Star = ({ color, styles }) => (
  <svg css={styles} viewBox="0 0 14 13" fill="none">
    <path
      d="M9.57394 8.57392L10.3638 11.9597L7.38747 10.1633C7.14913 10.0194 6.85071 10.0194 6.61237 10.1633L3.63605 11.9597L4.4259 8.57392C4.48915 8.3028 4.39701 8.01895 4.18659 7.83666L3.8592 8.21457L4.18659 7.83666L1.55634 5.55807L5.01864 5.26433C5.29582 5.24081 5.53722 5.06581 5.64577 4.80969L6.99992 1.61467L8.35406 4.80968C8.46262 5.06581 8.70402 5.24081 8.9812 5.26433L12.4435 5.55807L9.81325 7.83666C9.60283 8.01895 9.51069 8.3028 9.57394 8.57392Z"
      fill={color}
      stroke={color}
    />
  </svg>
);

Star.defaultProps = {
  color: `white`,
  styles: []
};
Star.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

//

export const Triangle = ({ color, styles }) => (
  <svg css={styles} viewBox="0 0 30 30" fill="none">
    <g clipPath="url(#clip0)">
      <path
        d="M29.9375 27.6341C29.7058 27.1297 29.3786 26.6798 29.1128 26.1959C28.5948 25.2621 28.0427 24.3419 27.511 23.4081C26.9385 22.3994 26.3455 21.3974 25.7525 20.3955C25.6639 20.2523 25.5685 20.116 25.4799 19.9661C25.0777 19.2708 24.6824 18.5756 24.2871 17.8804C23.9463 17.2806 23.6123 16.6808 23.251 16.0946C22.883 15.488 22.5899 14.8404 22.2082 14.2406C21.7924 13.5931 21.4516 12.9047 21.0495 12.2504C20.7768 11.8073 20.511 11.3643 20.2588 10.9144C19.8703 10.226 19.4886 9.53761 19.0933 8.85601C18.732 8.24257 18.3981 7.6155 18.0232 7.00888C17.6483 6.40907 17.3348 5.76837 16.9803 5.15493C16.5918 4.48015 16.1692 3.82581 15.7943 3.1374C15.5558 2.72844 15.3309 2.31948 15.031 1.91052C14.5061 2.55804 14.179 3.28054 13.7904 3.96213C13.1634 5.05951 12.5227 6.15007 11.9024 7.24744C11.5344 7.90177 11.1458 8.55611 10.7573 9.20363C9.97349 10.5055 9.23055 11.8414 8.47397 13.1569C7.99685 13.9885 7.51973 14.82 7.0358 15.6516C6.70863 16.2173 6.37465 16.783 6.04748 17.3487C5.63852 18.0644 5.22956 18.7801 4.81379 19.489C4.4798 20.0547 4.14582 20.6204 3.83228 21.1929C3.4983 21.82 3.13024 22.4266 2.77581 23.0401C2.39411 23.7012 2.02605 24.3828 1.61027 25.0303C1.10589 25.8278 0.662849 26.6662 0.192546 27.4909C0.124386 27.6136 -0.0528297 27.7363 0.0153302 27.8726C0.0971221 28.0294 0.301602 27.9408 0.451553 27.9408C10.1575 27.9476 19.8635 27.9476 29.5763 27.9476C29.6308 27.9476 29.6921 27.9408 29.7467 27.9476C30.0534 27.9749 30.0329 27.8522 29.9375 27.6341ZM24.7846 26.1823C24.5938 26.2095 24.4029 26.2231 24.2121 26.2231C21.1449 26.2231 18.0709 26.2231 15.0037 26.2231C11.9569 26.2231 8.9102 26.2231 5.86345 26.2231C5.6726 26.2231 5.48175 26.1959 5.29091 26.1959C4.36393 26.1754 3.68233 24.7236 4.28214 23.8512C4.67065 23.2855 4.98419 22.6448 5.32499 22.0381C5.6726 21.4179 6.02703 20.7976 6.38828 20.1842C6.78361 19.5162 7.15167 18.8278 7.54018 18.1598C7.81964 17.6827 8.09228 17.1988 8.37855 16.7353C8.77388 16.1014 9.12149 15.4403 9.50319 14.7996C9.85762 14.1929 10.212 13.5727 10.5597 12.9524C10.8936 12.3526 11.2344 11.7528 11.5957 11.1666C12.0047 10.4918 12.3727 9.7898 12.7612 9.1082C12.918 8.83556 13.0884 8.56292 13.252 8.2971C13.5314 7.85406 13.7087 7.34968 14.1858 7.03614C14.622 6.74306 15.3172 6.68171 15.7534 6.98162C16.0874 7.21336 16.3464 7.49282 16.5441 7.87451C16.8372 8.44024 17.1712 8.99915 17.4983 9.55124C17.9277 10.2806 18.3299 11.0235 18.7593 11.7528C19.1001 12.3253 19.4273 12.9047 19.7681 13.4773C20.177 14.1657 20.5587 14.8677 20.9609 15.5629C21.4107 16.3331 21.8674 17.0965 22.3104 17.8667C22.6103 18.3848 22.8966 18.9096 23.2033 19.4208C23.66 20.1842 24.1098 20.9544 24.5461 21.7314C24.8528 22.2835 25.2209 22.8015 25.4799 23.3809C25.5548 23.5581 25.6639 23.7217 25.7661 23.8784C26.3728 24.7577 25.8343 26.0187 24.7846 26.1823Z"
        fill={color}
      />
      <path
        d="M25.1799 23.9466C24.7437 23.3264 24.4029 22.6448 24.0348 21.9836C23.7144 21.4179 23.3805 20.8522 23.0601 20.2864C22.6716 19.6048 22.2763 18.9164 21.8673 18.2416C21.1312 17.0284 20.4428 15.7879 19.7339 14.5542C19.2772 13.7635 18.8478 12.9524 18.3707 12.1754C17.989 11.562 17.6414 10.9281 17.2802 10.3078C16.769 9.42856 16.2918 8.53567 15.7397 7.67685C15.4603 7.24063 14.5265 7.26789 14.2607 7.71093C13.7904 8.49477 13.3337 9.28543 12.8702 10.0761C12.175 11.2757 11.4729 12.4685 10.805 13.6817C10.1847 14.8064 9.51675 15.9106 8.88968 17.0352C8.37166 17.9622 7.84002 18.8755 7.28792 19.7821C6.86533 20.4773 6.47 21.1862 6.06104 21.8814C5.6589 22.5562 5.28402 23.2514 4.87506 23.9262C4.64332 24.3215 4.4661 24.7032 4.70466 25.1326C4.92959 25.5416 5.3181 25.6574 5.76796 25.6574C8.84878 25.6506 11.9296 25.6574 15.0104 25.6574C18.1253 25.6574 21.2402 25.6643 24.3552 25.6506C25.1049 25.6506 25.5343 25.2008 25.4184 24.4646C25.3912 24.2602 25.2889 24.1034 25.1799 23.9466ZM21.1721 23.8785C19.2704 23.8853 17.362 23.8785 15.4603 23.8785C15.3103 23.8785 15.1672 23.8785 15.0173 23.8785C13.0202 23.8785 11.0299 23.8785 9.03281 23.8785C8.01723 23.8785 7.51966 23.0197 8.01723 22.1268C8.55569 21.1725 9.12142 20.2387 9.65988 19.2845C10.2529 18.2348 10.8731 17.1988 11.4593 16.1423C12.1614 14.8677 12.9043 13.6136 13.6336 12.3594C13.8176 12.0391 14.0357 11.7256 14.2266 11.412C14.3561 11.2007 14.5742 11.1735 14.7855 11.1462C15.3444 11.0644 15.7125 11.1735 15.9851 11.6642C16.6735 12.8775 17.3551 14.1043 18.0844 15.2903C18.4934 15.9583 18.8751 16.6331 19.2636 17.3079C19.6044 17.9008 19.952 18.4938 20.286 19.0936C20.6336 19.7139 20.9812 20.3342 21.3561 20.9408C21.656 21.4179 21.9423 21.9086 22.1809 22.4198C22.4739 23.0401 21.8809 23.8785 21.1721 23.8785Z"
        fill={color}
      />
      <path
        d="M20.7699 21.043C20.3541 20.3818 19.9929 19.6866 19.5839 19.0255C18.9569 18.0099 18.4252 16.9398 17.8118 15.9105C17.2188 14.9222 16.6599 13.9203 16.0805 12.9183C15.9646 12.7207 15.8011 12.5639 15.7329 12.339C15.6307 12.0118 15.4603 11.7187 15.0786 11.6778C14.6832 11.6369 14.5128 11.9504 14.3493 12.2367C14.3356 12.264 14.3152 12.2981 14.3015 12.3253C14.063 12.9388 13.6677 13.4704 13.3405 14.0361C12.952 14.7109 12.5703 15.3925 12.1613 16.0537C11.4047 17.2942 10.7027 18.5688 9.98021 19.8297C9.47583 20.709 8.99189 21.6087 8.44661 22.4607C8.24895 22.7742 8.3989 23.1355 8.76015 23.2309C8.88965 23.265 9.03279 23.2582 9.16229 23.2582C11.1117 23.2582 13.061 23.2582 15.0104 23.2582C16.9734 23.2582 18.9296 23.2582 20.8926 23.2582C21.0289 23.2582 21.1652 23.265 21.2947 23.2309C21.6424 23.1423 21.8128 22.7947 21.6219 22.4948C21.322 22.0245 21.0698 21.5201 20.7699 21.043ZM17.7232 21.561C16.8166 21.5678 15.9101 21.561 15.0104 21.561C14.1175 21.561 13.2246 21.561 12.3317 21.561C11.6774 21.561 11.357 21.0089 11.691 20.4432C12.2227 19.5435 12.7407 18.6301 13.2655 17.7236C13.6199 17.1102 14.0153 16.5172 14.3084 15.8696C14.4447 15.5697 14.6901 15.3039 15.0649 15.3312C15.4262 15.3516 15.6102 15.6175 15.7738 15.931C16.1214 16.599 16.5236 17.2397 16.9052 17.9008C17.2801 18.5551 17.6482 19.2095 18.0231 19.8638C18.1321 20.0615 18.2684 20.2455 18.3775 20.4364C18.7047 21.0157 18.4048 21.5542 17.7232 21.561Z"
        fill={color}
      />
      <path
        d="M15.9716 17.4373C15.7058 16.9807 15.4809 16.4967 15.1673 16.0673C15.0855 15.9583 15.031 15.8356 14.9083 16.0333C14.697 16.3809 14.4516 16.7149 14.2812 17.0761C14.0291 17.6214 13.6814 18.1121 13.3883 18.6301C13.0135 19.2981 12.6522 19.9729 12.2296 20.6136C12.0729 20.8453 12.1138 20.9476 12.4137 20.9476C13.2861 20.9408 14.1586 20.9408 15.031 20.9408C15.8898 20.9408 16.7486 20.9408 17.6143 20.9408C17.9823 20.9408 17.996 20.9135 17.8051 20.5863C17.1985 19.5367 16.585 18.487 15.9716 17.4373ZM15.6649 19.6185C15.5218 19.8775 15.2355 19.748 15.0855 19.7752C14.8879 19.7752 14.7584 19.7889 14.6425 19.7752C14.3699 19.7343 14.2608 19.523 14.3767 19.2845C14.4653 19.1005 14.5675 18.9232 14.6834 18.7597C14.8879 18.4597 15.1469 18.4597 15.365 18.7392C15.4127 18.8005 15.4536 18.8687 15.4877 18.9437C15.6035 19.1482 15.8148 19.3595 15.6649 19.6185Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Triangle.defaultProps = {
  color: `white`,
  styles: []
};
Triangle.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

//

export const Twitter = ({ className, color }) => (
  <svg className={className} viewBox="0 0 21 19" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1195 2.50827L20.5343 2.67349L19.8983 3.948C19.5882 4.56953 19.2778 5.19105 18.967 5.81258C18.9302 5.94422 18.8654 6.05962 18.7697 6.20987C18.7296 6.27265 18.5929 6.47236 18.5865 6.48194C18.5504 6.53608 18.5237 6.57878 18.5045 6.61299V9.00152C18.5045 15.1135 12.5895 18.9974 7.00354 18.9974C5.86051 18.9974 4.99207 18.9427 3.99765 18.7257C2.36115 18.3685 1.14327 17.6587 0.585973 16.418L0.0122107 15.1407L1.40659 15.0124C2.66801 14.8964 3.76169 14.6561 4.60159 14.3343C2.29577 13.9635 1.0036 12.9508 1.0036 11.0489V10.0489H2.0036C2.22331 10.0489 2.42143 10.0311 2.59854 9.99834C0.868001 8.96365 0.00122175 7.30379 0.00122175 5.00152C0.00103266 4.9034 0.00103266 4.90339 0.000442551 4.79847C-0.00605857 3.63803 0.0562722 3.01797 0.373948 2.22659C0.577543 1.71941 0.871831 1.24988 1.2679 0.819668L2.02251 0L2.75617 0.838468C5.17394 3.60161 7.56395 5.27795 10.0042 5.48072C10.0146 2.93105 11.9415 1.00152 14.5043 1.00152C15.6991 1.00152 16.7828 1.45501 17.6345 2.27273C18.1006 2.36851 18.5957 2.44709 19.1195 2.50827ZM16.9086 4.16202L16.6021 4.0926L16.3904 3.86028C15.8785 3.29855 15.2359 3.00152 14.5043 3.00152C13.0414 3.00152 12.0041 4.04391 12.0041 5.50152C12.0041 5.73974 11.998 5.88942 11.9683 6.08615C11.8499 6.87116 11.4096 7.50152 10.5041 7.50152C7.50607 7.50152 4.80136 5.89542 2.16389 3.15228C2.02792 3.56561 1.99595 3.99047 2.00041 4.78727C2.00101 4.89384 2.00101 4.89384 2.00122 5.00152C2.00122 7.04953 2.83093 8.16977 4.79547 8.79419L5.49255 9.01575V9.7472C5.49255 10.6342 4.65222 11.4691 3.42268 11.8431C3.98631 12.2708 5.139 12.5015 7.00389 12.5015H8.00389V13.5015C8.00389 14.9343 6.35762 16.0561 3.87075 16.6419C4.68178 16.8903 5.76166 16.9974 7.00354 16.9974C11.618 16.9974 16.5045 13.7888 16.5045 9.00152V6.50152C16.5045 6.20774 16.5897 5.95273 16.7311 5.68759C16.7865 5.58393 16.8474 5.48509 16.9225 5.37237C16.9367 5.35115 16.9892 5.27426 17.0309 5.21279L17.1101 5.05429C17.2386 4.79745 17.3669 4.54061 17.4952 4.28377C17.2958 4.24599 17.1003 4.20541 16.9086 4.16202Z"
      fill={color}
    />
  </svg>
);

Twitter.defaultProps = {
  className: ``,
  color: `white`
};
Twitter.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

//

export const YouTube = ({ className, color }) => (
  <svg
    className={className}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0247 14.1282C21.7081 12.9571 22 11.0689 22 7.9972C22 4.93778 21.7108 3.06048 21.0202 1.85803C20.3281 0.609363 19.5073 0.213032 17.8783 0.117901C16.7662 0.0425222 14.0023 0 11.0027 0C7.99661 0 5.23145 0.0425064 4.111 0.118492C2.49112 0.213258 1.67011 0.610465 0.971932 1.8626C0.291384 3.0609 0 4.94737 0 8.0084C0 11.052 0.292795 12.948 0.977912 14.1424C1.66701 15.3784 2.47493 15.7708 4.1086 15.8855C5.28276 15.9543 8.20442 16 11.0027 16C13.7946 16 16.7149 15.9542 17.8783 15.8863C19.527 15.7708 20.3348 15.3778 21.0247 14.1282ZM17.7524 2.11391C18.7714 2.17346 18.9603 2.26505 19.2833 2.84964C19.7535 3.664 20 5.25771 20 8.0084C20 10.7383 19.7522 12.3408 19.2855 13.141C18.9614 13.7274 18.7738 13.8187 17.7501 13.8904C16.6489 13.9547 13.757 14 11.0027 14C8.24213 14 5.34874 13.9547 4.23703 13.8897C3.22601 13.8186 3.03565 13.7262 2.71873 13.1578C2.24886 12.3385 2 10.727 2 7.9972C2 5.26899 2.24754 3.66639 2.7149 2.84342C3.03675 2.26627 3.22844 2.17353 4.23709 2.11449C5.30508 2.04211 8.04424 2 11.0027 2C13.9547 2 16.6926 2.04212 17.7524 2.11391ZM9 5L14 8L9 11V5Z"
      fill={color}
    />
  </svg>
);

YouTube.defaultProps = {
  className: ``,
  color: `white`
};

YouTube.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};