const BudgetReport = () => {
    return (
        <div className="card-body pb-0">
              <h5 className="card-title">Budget Report <span>| This Month</span></h5>
              <div id="budgetChart" style={{minHeight: 400}} className="echart" />
            </div>
    );
}

export default BudgetReport;