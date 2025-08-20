import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javaIcon from "@iconify/icons-logos/java";
import vueIcon from "@iconify/icons-logos/vue";
import myProfile from "../images/myProfile.jpeg";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={myProfile}
                    alt="Avatar placeholder"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m.642 4.134c.955 0 1.73.775 1.73 1.733v9.066h1.6a2.934 2.934 0 0 0 0-5.866h-.666V7.333h.665A4.663 4.663 0 0 1 20.63 12a4.66 4.66 0 0 1-4.658 4.667h-3.329zM7.984 7.333h3.329v12.533c-.956 0-1.73-.776-1.73-1.733V9.066h-1.6a2.934 2.934 0 0 0 0 5.867h.666v1.733h-.665A4.66 4.66 0 0 1 3.326 12a4.66 4.66 0 0 1 4.658-4.667"
                    />
                  </svg>
                  &nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <defs>
                      <linearGradient
                        id="SVGxUjO6TbQ"
                        x1="4.494"
                        x2="13.832"
                        y1="-2092.086"
                        y2="-2075.914"
                        gradientTransform="translate(0 2100)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#18884f" />
                        <stop offset=".5" stop-color="#117e43" />
                        <stop offset="1" stop-color="#0b6631" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="#185c37"
                      d="M19.581 15.35L8.512 13.4v14.409A1.19 1.19 0 0 0 9.705 29h19.1A1.19 1.19 0 0 0 30 27.809V22.5Z"
                    />
                    <path
                      fill="#21a366"
                      d="M19.581 3H9.705a1.19 1.19 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
                    />
                    <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z" />
                    <path
                      d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2"
                      opacity="0.1"
                    />
                    <path
                      d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                      opacity="0.2"
                    />
                    <path
                      d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                      opacity="0.2"
                    />
                    <path
                      d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
                      opacity="0.2"
                    />
                    <path
                      fill="url(#SVGxUjO6TbQ)"
                      d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.19 1.19 0 0 1 2 21.959V10.041A1.19 1.19 0 0 1 3.194 8.85"
                    />
                    <path
                      fill="#fff"
                      d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017q.123-.281.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.4 2.4 0 0 1 9.2 16.8h-.024a1.7 1.7 0 0 1-.168.351l-1.493 2.722Z"
                    />
                    <path
                      fill="#33c481"
                      d="M28.806 3h-9.225v6.5H30V4.191A1.19 1.19 0 0 0 28.806 3"
                    />
                    <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z" />
                  </svg>
                  &nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M7 18v-2m5 2v-3m5 3v-5M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
		<path d="M5.992 11.486c2.155.072 7.042-.253 9.822-4.665m-1.822-.533l1.876-.302c.228-.029.564.152.647.367l.495 1.638" />
	</g>
</svg>
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} 😃 </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
