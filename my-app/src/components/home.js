import React from "react";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  
  return (
    <div className="container-fluid p-0 background-image">
      <div className="row w-100">
        
        <div className="col-md-6">
          <div className="px-4">
              <div className="card mt-5">
                <h2>
                  Friendly Neighborhood Arms Dealer
                </h2>
                <p className="px-3">
                  At FNAD Enterprises, we envision a world where acquiring high-tech, government grade machinery is a simple process. 
                  Your private militia is just a few clicks away...
                </p>
              </div>

              <div className="card mt-3">
                <h2>
                  Our Promise
                </h2>
                <p className="px-3">
                  We promise to <strong>discretely</strong> deliver right to your door,
                  no permits required, no questions asked. If you want to own a militarized aircraft, a tank, missile launcher or mortar,
                  but do not have any of the proper permits, look no further. 
                </p>
              </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mt-5">
            <h2>
              Responsibility Statement
            </h2>
            <p className="px-3">
              FNAD is not responsible for any actions held against our clients by police, or government entities.
              Most equipment sold on here violates the Defense Federal Acquisition Regulation Supplement.
              FNAD is not regulated under the Arms Export Control Act.
              <br /><br />
              <strong>Purchase at your own risk.</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;