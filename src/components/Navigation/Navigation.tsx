import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeView from "../../views/HomeView";
import TodosView from "../../views/TodosView";
//import NotFoundView from "../../views/NotFoundView";

interface INavProps {
  isLoggedIn?: boolean;
}

const Navigation: React.FC<INavProps> = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/todos">
          {!isLoggedIn ? <Redirect to="/" /> : <TodosView />}
        </Route>
        ;
      </Switch>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.user.username.isLoggedIn,
});

export default connect(mapStateToProps, null)(Navigation);

/* <Route component={NotFoundView} /> */
