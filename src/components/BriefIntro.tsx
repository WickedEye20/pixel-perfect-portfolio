import { Linkedin } from "lucide-react";
import abhi_img from "../assets/abhi_m_image.png";
const BriefIntro = () => {
  return (
    <section id="about" className="gray-section scroll-mt-32">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 p-16 lg:p-28 primary_gradient w-full md:w-auto">
          <img
            src={abhi_img}
            alt="Abhishek Misra"
            className="m-auto w-48 h-48 lg:w-[250px] lg:h-[250px] object-cover rounded-full"
          />
        </div>

        <div className="flex-1 px-[4vw] py-6 md:py-0 md:px-16 lg:px-24">
          <h2 className="section-title text-foreground mb-5">Brief Intro</h2>
          <p className="text-secondary text-base max-w-[680px] font-medium">
            Enterprise Solution Delivery (ESD) & Technical Program Management (TPM): Diligently led & managed cross-functional teams for over 5+ years to deliver tailored cloud (AWS, GCP, Azure) based solutions on time and under budget, ensuring alignment with client needs, business goals and the larger Enterprise Architecture (EA). Architected and developed end-to-end ML pipelines leveraging
          </p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/abhishekmishra11/" target="_blank" className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                <g clip-path="url(#clip0_181_198)">
                  <path d="M28.2874 19.9989H27.9906V19.4111H28.3663C28.5618 19.4111 28.7827 19.4423 28.7827 19.6911C28.7827 19.9759 28.5598 19.9989 28.2874 19.9989ZM28.5826 20.1739C28.8825 20.1381 29.04 19.9759 29.04 19.7045C29.04 19.3737 28.8342 19.2129 28.4127 19.2129H27.7363V20.9539H27.9906V20.1957H28.3053L28.3114 20.205L28.8009 20.9539H29.0726L28.5485 20.1787L28.5826 20.1739Z" fill="#231F20" />
                  <mask id="mask0_181_198" maskUnits="userSpaceOnUse" x="26" y="18" width="4" height="4">
                    <path d="M26.6182 18.4277H30.0001V21.7447H26.6182V18.4277Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_181_198)">
                    <path d="M28.3163 21.5172C27.511 21.5172 26.8788 20.8945 26.8788 20.0862C26.8788 19.2785 27.511 18.6552 28.3163 18.6552C29.1224 18.6552 29.7531 19.2785 29.7531 20.0862C29.7531 20.8945 29.1224 21.5172 28.3163 21.5172ZM28.3163 18.4395C27.3717 18.4395 26.6316 19.1626 26.6316 20.0862C26.6316 21.0104 27.3717 21.7327 28.3163 21.7327C29.2597 21.7327 30.0001 21.0104 30.0001 20.0862C30.0001 19.1626 29.2597 18.4395 28.3163 18.4395Z" fill="#231F20" />
                  </g>
                  <path d="M23.6602 0H1.88458C0.844813 0 0 0.806924 0 1.80268V23.1961C0 24.1916 0.844813 25 1.88458 25H23.6602C24.7019 25 25.5501 24.1916 25.5501 23.1961V1.80268C25.5501 0.806924 24.7019 0 23.6602 0Z" fill="#007BB6" />
                  <path d="M5.68334 3.44141C6.89575 3.44141 7.87985 4.40477 7.87985 5.59152C7.87985 6.77875 6.89575 7.74212 5.68334 7.74212C4.46627 7.74212 3.48486 6.77875 3.48486 5.59152C3.48486 4.40477 4.46627 3.44141 5.68334 3.44141ZM3.78576 9.37204H7.5792V21.3024H3.78576V9.37204Z" fill="white" />
                  <path d="M9.95654 9.37226H13.5891V11.0031H13.6411C14.1465 10.0652 15.383 9.07617 17.2266 9.07617C21.0637 9.07617 21.7727 11.5464 21.7727 14.7594V21.3026H17.9836V15.5008C17.9836 14.1173 17.9591 12.3375 16.0144 12.3375C14.0425 12.3375 13.7417 13.8455 13.7417 15.4018V21.3026H9.95654V9.37226Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_181_198">
                    <rect width="30" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefIntro;
