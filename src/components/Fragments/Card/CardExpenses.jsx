import React from "react";

const CardExpenses = () => {
  return (
    <>
      <div className="card__expenses rounded-4 border border-1 bg-transparent p-3">
        <h5 className="fw-semibold">Expenses and income</h5>

        <div className="d-flex flex-row mt-4 justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <p className="fw-semibold">Expense</p>
            <h6>75%</h6>
            <p>5.653</p>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="fw-semibold">|</span>
            <p className="fw-semibold">VS</p>
            <span className="mb-3 fw-semibold">|</span>
          </div>
          <div className="d-flex flex-column">
            <p className="fw-semibold">Income</p>
            <h6>40%</h6>
            <p>2.656</p>
          </div>
        </div>

        <div class="progress-stacked">
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          >
            <div class="progress-bar"></div>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment two"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "40%" }}
          >
            <div class="progress-bar bg-warning"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExpenses;
