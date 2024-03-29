import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const { data } = useCurrentUser();

  return (
    <div className="flex h-full justify-center items-center">
        <div className="flex flex-col">
            <h1 className="text-3xl text-white md:text-5xl text-center">Who's watching?</h1>
            <div className="flex items-center justify-center gap-8 mt-10">
                <div onClick={() => router.push('/')}>

                    <div className="group flex-row w-44 mx-auto">
                        <div className="w-44 h-44 flex justify-center items-center border-2 border-transparent rounded-md group-hover:cursor-pointer group-hover:border-white overflow-hidden transition">
                            <img src="/images/default-slate.png" alt="Profile image" />
                        </div>
                        <div className="mt-4 text-gray-400 text-center group-hover:text-white">
                            {data?.name}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles;