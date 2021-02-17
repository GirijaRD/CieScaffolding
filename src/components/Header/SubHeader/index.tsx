import React, { ReactElement, useState } from "react";
import {
  Row,
  Col,
} from "react-bootstrap";
import {
  CieSubHeader,
  InformativeMapTitle,
  SearchBoxInSubHeader,
  EstimateCount,
  EstimatedAudienceReach,
  EstimatedAudienceReachSubTitle,
  EstimatedAudienceDiv,
  InformationCircleDiv,
  InformationIcon,
  InformationReachDropdownContent,
  InformationReachDropdownContentDiv,
} from "./style";
import { Popover } from "react-tiny-popover";
export default function SubHeader(): ReactElement {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Row>
      <CieSubHeader>
        <InformativeMapTitle>Informative Map</InformativeMapTitle>
        <div>
          <SearchBoxInSubHeader type="text" placeholder="Search" />
        </div>
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom", "left"]} // if you'd like, you can limit the positions
          padding={10} // adjust padding here!
          reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
          onClickOutside={(): any => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
          content={
            <InformationReachDropdownContent>
              <InformationReachDropdownContentDiv>
                <div>
                  {/* <Facebook /> */}
                  Facebook
                </div>
                <div>10000</div>
              </InformationReachDropdownContentDiv>
              <InformationReachDropdownContentDiv>
                <div>Youtube</div>
                <div>10000</div>
              </InformationReachDropdownContentDiv>
              <InformationReachDropdownContentDiv>
                <div>Display</div>
                <div>10000</div>
              </InformationReachDropdownContentDiv>
            </InformationReachDropdownContent>
          }
        >
          <EstimateCount>
            <Row>
              <Col md={6}>
                <EstimatedAudienceDiv>
                  <EstimatedAudienceReach>Estimated</EstimatedAudienceReach>
                  <EstimatedAudienceReachSubTitle>
                    Audience Reach
                  </EstimatedAudienceReachSubTitle>
                </EstimatedAudienceDiv>
              </Col>
              <Col md={6}>
                <InformationCircleDiv>
                  <InformationIcon
                    onMouseOver={(): any => setIsPopoverOpen(!isPopoverOpen)}
                  ></InformationIcon>
                </InformationCircleDiv>
              </Col>
            </Row>
          </EstimateCount>
        </Popover>
      </CieSubHeader>
    </Row>
  );
}
