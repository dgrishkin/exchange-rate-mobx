import ReactDOM from "react-dom";
import { RootPage } from "$pages";
import { configure } from "mobx";

configure({ enforceActions: 'observed', })

ReactDOM.render(
    <div>
        <RootPage />
    </div>,
    document.getElementById("root")
)