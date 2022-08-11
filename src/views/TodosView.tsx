import React from "react";

import Container from "../components/Container";
import TodoList from "../components/TodoList";
import Stats from "../components/Stats";
import Header from "../components/Header";
import ButtonsGroup from "../components/ButtonsGroup";
import Footer from "../components/Footer";

const TodosView = () => {
  return (
    <>
      <Container>
        <Header />
        <TodoList />
        <ButtonsGroup />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default TodosView;

//
// <TodoList /><Stats />

//container
