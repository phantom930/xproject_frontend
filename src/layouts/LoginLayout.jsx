import { Row, Col } from 'antd';

const LoginLayout = (props) => {
  return (
    <Row>
      <Col span={12}>
        { props.login }
      </Col>
      <Col span={12}>
        { props.statics }
      </Col>
    </Row>
  )
}

export default LoginLayout;