import { useEffect } from "react";

import { useLoginStatus } from "@hooks";

import Router from 'next/router'

import { Authenticator } from "@security";

const Dashboard: React.FC = () => {
    const loggedIn = useLoginStatus();

    useEffect(() => {
        if (loggedIn) {
            Router.push("/dashboard/list");
        }
    });
    return <Authenticator />;
};

export default Dashboard;
