const WebsiteTraffice = () => {
    return (
        <div className="card-body pb-0">
              <h5 className="card-title">Website Traffic <span>| Today</span></h5>
              <div id="trafficChart" style={{minHeight: 400}} className="echart" />
            </div>
    );
}

export default WebsiteTraffice;