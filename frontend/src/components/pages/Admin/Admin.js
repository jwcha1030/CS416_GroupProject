import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Admin.css'
import analysis_chart from '../../../images/admin/web_usage_piechart.png';
import analysis_chart2 from '../../../images/admin/web_usage_analysis_chart.png';
import {subscriptionData} from './ManageSubscriptions/SubscriptionData'
import {analysisData} from './WebUsageAnalysis/AnalysisData'
import {Link} from "react-router-dom";
import {Button} from "../../Button";

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
                <li>
                  <Link className="update-pages-link" to="/admin/about_edit">About Us</Link>
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
                  <p>{subscriptionData.subCount}</p>
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

              <Button onClick={handleAlert} buttonStyle="btn--outline" buttonColor="msc_orange_invert" buttonSize="btn--wide">See
                Details</Button>
            </div>
          </div>
          <div className="admin__col">
            <div className="admin__colInfo admin__analysis-wrapper">
              <h2>Web Usage Analysis</h2>
              <img src={analysis_chart2} alt={"dummy_chart"} className='admin__dummy-bar-img'/>
              <img src={analysis_chart} alt={"dummy_chart"} className='admin__dummy-pie-img'/>

              <ul className="admin__list admin__analysis-list">
                <li>
                  <h3>Today's Number of Visits:</h3>
                  <p>{analysisData.dailyVisits}</p>
                </li>
                <li>
                  <h3>Most Viewed Item:</h3>
                  <p>{analysisData.mostViewed}</p>
                </li>
              </ul>
              <Button onClick={handleAlert} buttonStyle="btn--outline" buttonColor="msc_orange_invert" buttonSize="btn--wide">See
                Details</Button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
