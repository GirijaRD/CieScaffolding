import React, { ReactElement, useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
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
import SubHeaderMenuOptions from "../SubHeaderMenuOptions/index";
import Facebook from "../../../assets/images/Facebook.png";
import Audience from "../../../assets/images/Audience.png";
import Youtube from "../../../assets/images/Youtube.png";
interface Props {}
export default function SubHeader({}: Props): ReactElement {
  const [hover, setHover] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const updateHover = () => {
    setHover(!hover);
  };

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
