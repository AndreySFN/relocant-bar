import styled from "styled-components";
import {HeaderBanner} from "@components/molecules";
import {Features} from "@components/organizms/Features.tsx";
import {Contacts} from "@components/organizms/Contacts.tsx";
import {LegalInformation} from "@components/organizms";
import {FeaturesList} from "@components/organizms/FeaturesList.tsx";
import {useJson} from "@src/useJson.ts";
import {useEffect} from "react";
import {Outlet} from "react-router";

const MainContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px'
})

const Content = styled.div({
    padding: '0 5%',
    width: '100%'
})

const App = () => {
    const response = useJson()
    return (
        <MainContainer>
            <HeaderBanner/>
            <Content>
                <FeaturesList/>
                <Features response={response}/>
                <Contacts/>
                <LegalInformation/>
                <Outlet/>
            </Content>
        </MainContainer>
    )
}

export default App
