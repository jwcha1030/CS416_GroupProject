import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import Chart from "./WebUsageAnalysis/MonthlyVisitGraph";

let sampleChartData=
  [
    {
      date: "Jan 2020",
      count: 12
    },
    {
      date: "Feb 2020",
      count: 15
    },
    {
      date: "Mar 2020",
      count: 20
    },
    {
      date: "Apr 2020",
      count: 11
    },
    {
      date: "May 2020",
      count: 50
    },
    {
      date: "Jun 2020",
      count: 61
    },
  ];
export default function Admin() {
  const [subscriptionData, setSubscriptionData] =useState({});
  const [analysisData, setAnalysisData] =useState({});
  const [chartData, setChartData] = useState(sampleChartData); //change to [] when fetching data

  let axios = require('axios');
  const fetchAllData = async() =>{
    await axios.get("https://sunyk-msc-backend.herokuapp.com/admin/get_front_page_data/")
      .then(response => {
        // console.log(response.data);
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            setSubscriptionData(response.data.subscription_info);
            setAnalysisData(response.data.analysis_summary);
            setChartData(response.data.analysis_chart_data);
            console.log("fetch frontpage data complete");
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Fetch Frontpage Data: Unhandled res_code");
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch Frontpage Data: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Fetch Frontpage Data: Call error");
        console.log(error);
      });
  };
  useEffect(()=>{
    if (sessionStorage.getItem("isLoggedIn")) {
      // Admin is logged in
      console.log("logged in");
    } else {
      // Admin is not logged in
      alert("You must log in!");
      window.location.href = "/adminlogin";
      // return to prevent loading the page
      return;
    }
    fetchAllData();
  }, []);
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
                  <Link className="update-pages-link" to="/admin/carousel_edit">
                    Home - Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    className="update-pages-link"
                    to="/admin/collections_edit"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className="update-pages-link" to="/admin/team_edit">
                    Our Team
                  </Link>
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
                  <p>{subscriptionData.total_subscriptions}</p>
                </li>
                <li>
                  <h3>Daily Subscribed Count</h3>
                  <p>{subscriptionData.daily_subscribe}</p>
                </li>
                <li>
                  <h3>Daily Unsubscribed Count</h3>
                  <p>{subscriptionData.daily_unsubscribe}</p>
                </li>
              </ul>
              <div className="admin__buttonLink admin__manage-subscription">
                <Link to="/admin/subscription_edit">
                  <Button
                    buttonStyle="btn--outline"
                    buttonColor="msc_orange_invert"
                    buttonSize="btn--wide"
                  >
                    See Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="admin__col">
            <div className="admin__colInfo admin__analysis-wrapper">
              <h2>Web Usage Analysis</h2>
              <div className="admin__analysis-chart-container">
                <Chart dataInput={chartData} width="300" />
              </div>
              <ul className="admin__list admin__analysis-list">
                <li>
                  <h3>Today's Number of Visits:</h3>
                  <p>{analysisData?.daily_num_of_visits}</p> {/* "A?.B" operator means if A is not null proceed the dot operator*/}
                </li>
                <li>
                  <h3>Most Viewed Item:</h3>
                  {/*<p>{analysisData?.most_viewed_item?.name}</p>*/}
                  <p>{analysisData?.most_viewed_item != null? analysisData.most_viewed_item.name:"NA"}</p>
                </li>
                <li>
                  <h3>Most Purchase Requested Item:</h3>
                  <p>{analysisData?.most_inquired != null? analysisData.most_inquired.name:"NA"}</p>
                </li>
              </ul>
              <div className="admin__buttonLink admin__web-usage-analysis">
                <Link to="/admin/web_usage">
                  <Button
                    buttonStyle="btn--outline"
                    buttonColor="msc_orange_invert"
                    buttonSize="btn--wide"
                  >
                    See Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
