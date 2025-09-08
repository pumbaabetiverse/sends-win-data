import { extend } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

extend(customParseFormat);
extend(advancedFormat);
extend(weekday);
extend(localeData);
extend(weekOfYear);
extend(weekYear);

const container = document.getElementById("root");
// eslint-disable-next-line
const root = createRoot(container!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
