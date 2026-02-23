import Header from "../Components/header";
import ServiceCard from "../Components/servicecard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';

function AboutPage(){
 const [size, setSize] = useState('large');


    return(
        <>
        <Container className="mt-5">
          <Row>
            <Col>
             <Button type="primary" icon={<DownloadOutlined />} size={size} /></Col>
          </Row>
            <Row>
                <Col md={{order:'1' , span:'6'}} sm={{order:'2' , span:'6'}} xs={{order:'3' , span:'12'}}> <p>Hii  Name is shresha 1st</p></Col>
                <Col md={{order:'2' , span:'6'}} sm={{order:'3' , span:'6'}} xs={{order:'1' , span:'6'}}><p>Hii  Name is shresha Aatreya 2nd</p></Col>
                                <Col md={{order:'3' , span:'6'}} sm={{order:'1' , span:'6'}} xs={{order:'2' , span:'6'}}><p>Hii  Name is shresha 3rd </p></Col>
                                </Row>
               <Row>
                  <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
               </Row>
        </Container>
        </>
    )
}

export default AboutPage;