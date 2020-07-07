// Primary Layout

// Components
import React from "react"
import Head from "next/head"
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.state = {
      value: cookie
    }
  }

  componentDidMount() {
    if ((this.state.value === "withMilk") && (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Primary Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    const config = children.props.config
    return (
      <div className="root orange-500-bg">
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        <Notifications />
        <Header />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  { children }
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer config={config}/>
        <Advisory />
      </div>
    )
  }
}

export default Design
