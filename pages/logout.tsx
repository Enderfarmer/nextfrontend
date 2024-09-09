import { redirect } from "next/navigation";
import LoggedInOnly from "@/LoggedInOnly";

const Logout = ({}) => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    redirect("/");
};
export default (
    <LoggedInOnly>
        <Logout />
    </LoggedInOnly>
);
