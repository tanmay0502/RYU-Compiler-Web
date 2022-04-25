import React from "react"
import Page1 from "../components/page-1/page1"
import Page2 from "../components/page-2/page2"
import Page3 from "../components/page-3/page3"
import Page4 from "../components/page-4/page4"
import Page5 from "../components/page-5/page5"
import Footer from "../components/footer/footer"


export default function Home() {
  return (
    <div className="block">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&display=swap" rel="stylesheet"/>
    </head>

        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Footer />
    </div>
  )
}
