// Hero Two

class HeroTwo extends React.Component {
  render () {
    const { why, how, what, result } = this.props.campaign
    return (
      <div className="hero right" id="hero-two">
        <div className="hero-box narrow right">
          <div className="hero-wrap white-bg">
            <div className="hero-row">
              <p className="font-l compact text-left orange-500-cl">{why}</p>
              <hr className="separator-xs" />
              <p className="font-l compact text-left orange-500-cl">{how}</p>
              <hr className="separator-xs" />
              <p className="font-l compact text-left orange-500-cl">{what}</p>
              <hr className="separator-xs" />
              <p className="font-l compact bold text-left orange-500-cl">And while we do what we do, you could be <a href="#hero-three" className="underline" rel="referrer">here…</a></p>
              <hr className="separator-s" />
              <a href="#hero-three" className="link-xxl center-h" rel="referrer">
                <span className="icon"><img src={require("../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroTwo
