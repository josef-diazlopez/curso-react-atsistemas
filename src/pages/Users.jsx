import React from "react";
import PropTypes from "prop-types";
import { Card } from "./../components/Card/Card";
import { Body } from "./../components/Card/Body/Body";
import { useGetUsers } from "../hooks/users/useGetUsers";
import { Route, Link } from "react-router-dom";
import { UserRoute } from "./User";
import {
  CardColumns,
  Container,
  Row,
  Col,
  Button,
  Navbar,
} from "react-bootstrap";

export const Users = () => {
  const data = useGetUsers();

  return (
    <Container>
      <Navbar>
        <Link to="/user/alta">
          <Button variant="secondary">Crear usuario</Button>
        </Link>
      </Navbar>

      <Row>
        <Col xs={10} md={4}>
          <Col>
            {data.map((user) => (
              <Card
                name={`${user.first_name} ${user.last_name}`}
                id={user.id}
                key={user.id}
                img={user.avatar}
              >
                <Body texts={[user.email]}></Body>
              </Card>
            ))}
          </Col>
        </Col>

        <Col xs={10} md={8}>
          <Route path="/user2/:id">
            <UserRoute></UserRoute>
          </Route>
        </Col>
      </Row>
    </Container>
  );
};

Users.propTypes = {};

Users.defaultProps = {};
