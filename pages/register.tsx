import AuthForm from "@/components/AuthForm";
import api from "@/api";
import { useRouter } from "next/router";
import "./globals.css";
import "./styles/float-label.css";

const Page = ({}) => {
    const router = useRouter();
    function act(data: FormData) {
        data.append("is_active", "true");
        api.post("users/", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        router.push("/login/");
    }
    return (
        <main>
            <AuthForm method="POST" action={act} auth="Register" />
        </main>
    );
};

export default Page;
