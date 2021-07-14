import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../components/input";
import Label from "../components/label";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default function BrandsFormScreen() {
  return (
    <div>
      <form>
        <div>
          <Label>Brand's name</Label>
          <Input
            type="text"
            id="exampleImputEmail1"
            aria-describedby="emailHelp"
          />
          <Input type="submit"></Input>
        </div>
      </form>
    </div>
  );
}
