import styled from "styled-components";
import {HeaderBanner} from "@components/molecules";
import {Features} from "@components/organizms/Features.tsx";
import {Contacts} from "@components/organizms/Contacts.tsx";
import {LegalInformation} from "@components/organizms";
import {FeaturesList} from "@components/organizms/FeaturesList.tsx";

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
    return (
        <MainContainer>
            <HeaderBanner/>
            <Content>
                <FeaturesList/>
                <Features/>
                <Contacts/>
                <LegalInformation/>
            </Content>
        </MainContainer>
    )
}

export default App
