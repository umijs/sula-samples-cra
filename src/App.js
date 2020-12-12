import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { ConfigProvider } from "sula";
import Home from "./pages/Home";
import ModalFormDemo from "./pages/ModalFormDemo";
import QueryTableDemo from "./pages/QueryTableDemo";
import CreateFormDemo from "./pages/CreateFormDemo";

function App() {
  const history = useHistory();
  return (
    <ConfigProvider history={history}>
      <div>
        <ul>
          <li>
            {" "}
            <Link to="/">首页</Link>
          </li>
          <li>组件</li>
          <ol>
            <li>
              <Link to="/modalform">弹窗表单示例</Link>
            </li>
          </ol>
          <li>模板</li>
          <ol>
            <li>
              <Link to="/querytable">查询表格</Link>
            </li>
            <li>
              <Link to="/createform">创建表单</Link>
            </li>
          </ol>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/modalform">
            <ModalFormDemo />
          </Route>
          <Route exact path="/querytable">
            <QueryTableDemo />
          </Route>
          <Route exact path="/createform">
            <CreateFormDemo />
          </Route>
        </Switch>
      </div>
    </ConfigProvider>
  );
}

export default App;
