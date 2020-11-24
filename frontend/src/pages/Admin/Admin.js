import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Admin.css'
import {subscriptionData} from './ManageSubscriptions/SubscriptionData'
import {analysisData} from './WebUsageAnalysis/AnalysisData'
import {Link} from "react-router-dom";
import {Button} from "../../components/button/Button";
import Chart from "./WebUsageAnalysis/LineGraph";

export default function Admin() {
  const handleAlert=()=>{
    alert("UNDER CONSTRUCTION - come back later!");
  };
  return (
    <div className="admin__section">
      <div className="admin__wrapper">
        <h1 className="admin__heading">Admin Page</h1>
        <div className="admin__container">
          <div className="admin__col">
            <div className="admin__colInfo admin__update-wrapper">
              <h2>Edit Contents</h2>
              <ul className="admin__list admin__update-pages-list">
                <li>
                  <Link className="update-pages-link" to="/admin/carousel_edit">Home - Carousel</Link>
                </li>
                <li>
                  <Link className="update-pages-link" to="/admin/collections_edit">Collections</Link>
                </li>
                <li>
                  <Link className="update-pages-link" to="/admin/team_edit">Our Team</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="admin__col">
            <div className="admin__colInfo admin__subscription-wrapper">
              <h2>Manage Subscriptions</h2>
              <ul className="admin__list admin__subscription-list">
                <li id="totalSubCount">
                  <h3>Total Subscription Count</h3>
                  <p>{subscriptionData.mailList.length}</p>
                </li>
                <li>
                  <h3>Daily Subscribed Count</h3>
                  <p>{subscriptionData.dailySubCount}</p>
                </li>
                <li>
                  <h3>Daily Unsubscribed Count</h3>
                  <p>{subscriptionData.dailyUnsubCount}</p>
                </li>
              </ul>
              <div className="admin__buttonLink admin__manage-subscription">
                <Link to="/admin/subscription_edit">
                <Button buttonStyle="btn--outline" buttonColor="msc_orange_invert" buttonSize="btn--wide">See
                  Details</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="admin__col">
            <div className="admin__colInfo admin__analysis-wrapper">
              <h2>Web Usage Analysis</h2>
              {/*<img src={analysis_chart2} alt={"dummy_chart"} className='admin__dummy-bar-img'/>*/}
              {/*<img src={analysis_chart} alt={"dummy_chart"} className='admin__dummy-pie-img'/>*/}
              <div className="admin__analysis-chart-container">
                <Chart width="100%"/>
              </div>
              <ul className="admin__list admin__analysis-list">
                <li>
                  <h3>Today's Number of Visits:</h3>
                  <p>{analysisData.dailyVisits}</p>
                </li>
                <li>
                  <h3>Most Viewed Item:</h3>
                  <p>{analysisData.mostViewed}</p>
                </li>
                <li>
                  <h3>Most Purchased Item:</h3>
                  <p>{analysisData.mostPurchased}</p>
                </li>
              </ul>
              <div className="admin__buttonLink admin__web-usage-analysis">
                <Link to="/admin/web_usage">
                  <Button buttonStyle="btn--outline" buttonColor="msc_orange_invert" buttonSize="btn--wide">See
                    Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
