import AuthForm from "@/components/AuthForm";
import api from "@/api";
import { useRouter } from "next/router";

const Page = ({}) => {
    const router = useRouter();
    async function act(data: FormData) {
        data.append("is_active", "true");
        await api.post("users/", data, {
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
