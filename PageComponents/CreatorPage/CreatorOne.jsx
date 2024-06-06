import React from "react";

const CreatorOne = ({ creators }) => {
  return (
    <div class="rn-creator-title-area rn-section-gapTop">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h2 class="title mb--0">Our Best Creators</h2>
          </div>
        </div>
        <div class="row g-5 mt--30 creator-list-wrapper">
          {creators.map((el, i) => (
            <div
              class="creator-single col-lg-3 col-md-4 col-sm-6"
              data-sal=""
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <div class="top-seller-inner-one explore">
                <div class="top-seller-wrapper">
                  <div class="thumbnail varified">
                    <a href="author.html">
                      <img
                        src={`/client/client-${i + 1}.png`}
                        alt="Nft_Profile"
                      />
                    </a>
                  </div>
                  <div class="top-seller-content">
                    <a href="author.html">
                      <h6 class="name">{el.owner.slice(0, 10)}...</h6>
                    </a>
                    <span class="count-number">{el.total}</span>
                  </div>
                </div>
                <a class="over-link" href="author.html"></a>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>
    
  );
};

export default CreatorOne;
