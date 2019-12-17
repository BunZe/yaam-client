import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "shards-react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import MapContainer from "./MapContainer";
import SettingsButton from "./SettingsButton";
import LoadingModal from "./ui_components/LoadingModal";
import BottomInfo from "./ui_components/BottomInfo";

class MainContainer extends Component {
  render() {
    return (
      <>
        <LoadingModal />
        <Container fluid style={{ padding: 0, height: "100vh" }}>
          <Row noGutters>
            <Col md="12">
              <TopBar
                theme={this.props.themeColors}
                isDarkMode={this.props.isDarkMode}
                height="5vh"
              ></TopBar>
            </Col>
          </Row>
          <Sidebar />
          <Row
            noGutters
            theme={this.props.themeColors}
            style={{ height: "94vh" }}
          >
            <Col>
              <SettingsButton theme={this.props.themeColors} />
              <MapContainer />
              <BottomInfo />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  themeColors: state.settings.themeColors,
  isDarkMode: state.settings.isDarkMode
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
