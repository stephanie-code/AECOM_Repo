import React from "react";
import Widget from "components/Widget/index";

const NewInstallOrdersCard = ({ prize, title, styleName, desc, icon }) => {

  return (
    <>
      <Widget styleName="gx-card-full wrapper">
        <div className="gx-actchart gx-px-3 gx-pt-3 card front-face">
          <div className="ant-row-flex">
            <h2 className="gx-mb-0 gx-fs-xxl gx-font-weight-medium">
              {/* {Cardfourloader ? (
                <Spinner />
              ) : ( */}
              <>
                {prize}
                {title > 0 ? (
                  <span className="gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-up">
                    {title}% <i className="icon icon-menu-up gx-fs-sm" />
                  </span>
                ) : (
                  <span className="gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-down">
                    {/* {title}% <i className="icon icon-menu-up gx-fs-sm" /> */}
                  </span>
                )}
              </>
              {/* )} */}
            </h2>
          </div>
        </div>
      </Widget>
    </>
  );
};

export default NewInstallOrdersCard;
