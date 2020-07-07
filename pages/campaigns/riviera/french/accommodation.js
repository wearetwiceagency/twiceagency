// Riviera French Real Estate

// Components
import Head from "next/head"
import PostcardOne from "../../../../lib/components/campaigns/riviera/french/accommodation/postcard_one"
import PostcardTwo from "../../../../lib/components/campaigns/riviera/french/accommodation/postcard_two"
import PostcardThree from "../../../../lib/components/campaigns/riviera/french/accommodation/postcard_three"
import GridOne from "../../../../lib/components/campaigns/riviera/french/accommodation/grid_one"
import Content from "../../../../lib/components/content_french"
import Covid from "../../../../lib/components/covid_fr"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-763469410');
  }

  render () {
    return (
      <div>
        <Head>
          <title>Twice Agency - Concierge Services</title>
          <meta name="description" content="From luxury travel, guided tours and private dining, to ticketing and exclusive access to VIP events, we have it all covered." />
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/london/uk/lifestyle" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/london/uk/lifestyle" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-763469410"></script>
        </Head>
        <Covid />
        <hr className="separator-m" id="top" />
        <PostcardOne />
        <hr className="separator-m" id="two" />
        <PostcardTwo />
        <hr className="separator-m" id="form" />
        <PostcardThree />
        <hr className="separator-m" id="partners"/>
        <GridOne />
        <hr className="separator-l" id="bottom" />
        <Content />
        <hr className="separator-m" id="bottom" />
      </div>
    )
  }
}

export default CampaignOne
