import "index.css"
import { Application } from "@hotwired/stimulus"
import * as Turbo from "@hotwired/turbo"

// Uncomment the line below to add transition animations when Turbo navigates.
// We recommend adding <meta name="turbo-cache-control" content="no-preview" />
// to your HTML head if you turn on transitions. Use data-turbo-transition="false"
// on your <main> element for pages where you don't want any transition animation.
//
// import "./turbo_transitions.js"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

import "@ptkdev/webcomponent-instagram-widget";


fetch("https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/268509169_240867708188308_7145597178746214335_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=0AsUd-faHfkAX-ktABL&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8xwMd-dYedYQZLWUESY3MySN7OaauDTlcwhkTuM-yyZw&oe=61EBEC24&_nc_sid=7bff83")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

fetch("https://plume-app.co/logo_plume.png").then(res => {
  console.log(res);
})
window.Stimulus = Application.start()

import controllers from "./controllers/**/*.{js,js.rb}"
Object.entries(controllers).forEach(([filename, controller]) => {
  if (filename.includes("_controller.")) {
    const identifier = filename.replace("./controllers/", "")
      .replace(/_controller..*$/, "")
      .replace("/", "--")

    Stimulus.register(identifier, controller.default)
  }
})
