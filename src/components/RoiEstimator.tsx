import { useState } from "react";
import { NavLink } from "react-router-dom";
import { defaultPrimaryCta } from "./CtaBanner";

const HOURLY_RATE_AED = 40;

export function RoiEstimator() {
  const [leadsPerWeek, setLeadsPerWeek] = useState(8);
  const [dealValue, setDealValue] = useState(3000);
  const [lostPct, setLostPct] = useState(20);
  const [adminHoursPerWeek, setAdminHoursPerWeek] = useState(5);

  const monthlyLeads = leadsPerWeek * 4;
  const leadsRecoverable = Math.round(monthlyLeads * (lostPct / 100));
  const revenueRecoverable = leadsRecoverable * dealValue;
  const hoursPerMonth = adminHoursPerWeek * 4;
  const adminSavings = hoursPerMonth * HOURLY_RATE_AED;
  const totalValue = revenueRecoverable + adminSavings;

  return (
    <section className="roi-estimator">
      <div className="roi-intro">
        <p className="eyebrow">Potential Savings Estimator</p>
        <h2>What could Dravyx AI save your business every month?</h2>
        <p className="page-copy">
          Tell us your numbers — we will estimate what faster response and less manual work is
          worth to your business.
        </p>
      </div>

      <div className="roi-body">
        <div className="roi-inputs">
          <div className="roi-input-group">
            <div className="roi-input-label">
              <span>Inbound leads per week</span>
              <strong>{leadsPerWeek} / week</strong>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              step="1"
              value={leadsPerWeek}
              onChange={(e) => setLeadsPerWeek(+e.target.value)}
              className="roi-slider"
            />
            <p className="roi-slider-hint">≈ {monthlyLeads} leads per month</p>
          </div>

          <div className="roi-input-group">
            <div className="roi-input-label">
              <span>Average deal value</span>
              <strong>AED {dealValue.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="500"
              max="30000"
              step="500"
              value={dealValue}
              onChange={(e) => setDealValue(+e.target.value)}
              className="roi-slider"
            />
          </div>

          <div className="roi-input-group">
            <div className="roi-input-label">
              <span>Leads missed due to slow response</span>
              <strong>{lostPct}%</strong>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={lostPct}
              onChange={(e) => setLostPct(+e.target.value)}
              className="roi-slider"
            />
            <p className="roi-slider-hint">≈ {leadsRecoverable} leads/month Dravyx could capture</p>
          </div>

          <div className="roi-input-group">
            <div className="roi-input-label">
              <span>Hours/week on manual follow-up</span>
              <strong>{adminHoursPerWeek}h / week</strong>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={adminHoursPerWeek}
              onChange={(e) => setAdminHoursPerWeek(+e.target.value)}
              className="roi-slider"
            />
            <p className="roi-slider-hint">≈ {hoursPerMonth}h / month we could automate away</p>
          </div>
        </div>

        <div className="roi-output">
          <div className="roi-result-grid">
            <div className="roi-result-card">
              <strong>AED {revenueRecoverable.toLocaleString()}</strong>
              <p>revenue we could recover monthly</p>
            </div>
            <div className="roi-result-card">
              <strong>{leadsRecoverable} leads</strong>
              <p>captured automatically per month</p>
            </div>
            <div className="roi-result-card">
              <strong>{hoursPerMonth}h</strong>
              <p>of admin time freed each month</p>
            </div>
            <div className="roi-result-card roi-result-highlight">
              <strong>AED {totalValue.toLocaleString()}</strong>
              <p>total value Dravyx AI unlocks monthly</p>
            </div>
          </div>

          <p className="roi-disclaimer">
            Illustrative estimates based on industry averages. Your actual results will vary.
          </p>

          <NavLink className="button button-primary" to={defaultPrimaryCta.to}>
            {defaultPrimaryCta.label}
          </NavLink>
        </div>
      </div>
    </section>
  );
}
